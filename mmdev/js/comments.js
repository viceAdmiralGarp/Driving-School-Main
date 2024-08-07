const apiUrl = 'https://grand-school-d7e43eab69dc.herokuapp.com/comments';
let currentPage = 1;
let commentsPerPage = 5;

$(document).ready(function () {
    updateCommentsPerPage();

    fetchFeedback();

    $('#feedbackForm').on('submit', function (event) {
        event.preventDefault();
        const name = $('#name').val();
        const message = $('#message').val();

        $.ajax({
            url: apiUrl,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ author: name, comment: message, date: new Date()}),
            success: function () {
                $('#name').val('');
                $('#message').val('');
                fetchFeedback();
            },
            error: function (xhr, status, error) {
                if (xhr.status === 400) {
                    $('.toast').toast('show');
                } else {
                    console.error('Error:', error);
                }
            }
        });
    });

    $('.prev-button').on('click', function () {
        if (currentPage > 1) {
            currentPage--;
            fetchFeedbackWithAnimation();
        }
    });

    $('.next-button').on('click', function () {
        currentPage++;
        fetchFeedbackWithAnimation();
    });

    $(window).resize(function() {
        updateCommentsPerPage();
        fetchFeedback();
    });
});

function updateCommentsPerPage() {
    const width = $(window).width();
    if (width >= 1200) {
        commentsPerPage = 5;
    } else if (width >= 768) {
        commentsPerPage = 3;
    } else if(width >= 576) {
        commentsPerPage = 1;
    }
}

function fetchFeedback() {
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            const feedbackList = $('#feedbackList');
            feedbackList.empty();

            const start = (currentPage - 1) * commentsPerPage;
            const end = start + commentsPerPage;
            const paginatedData = data.slice(start, end);

            paginatedData.forEach(function (feedback) {
                const date = new Date(feedback.date);
                const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

                const feedbackItem = `      
                    <div class="comment fade-in">
                        <div class="d-flex">
                             <img src="./img/jpg/user2.jpg" alt="">
                            <div class="user-data">
                                <p class="user-name">${feedback.author}</p>
                                <p class="publish-date">${formattedDate}</p>
                            </div>
                        </div>
                        <div class="message">
                            <p>${feedback.comment}</p>
                        </div>
                    </div>`;
                feedbackList.append(feedbackItem);
            });

            setTimeout(() => {
                $('.comment').addClass('fade-in');
            }, 10);

            $('.prev-button').prop('disabled', currentPage === 1);
            $('.next-button').prop('disabled', end >= data.length);
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}

function fetchFeedbackWithAnimation() {
    const feedbackList = $('#feedbackList');
    $('.comment').addClass('fade-out');
    setTimeout(() => {
        fetchFeedback();
    }, 500);
}