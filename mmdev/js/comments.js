const apiUrl = 'http://localhost:8080/api/feedback'; // URL вашего Spring Boot API

$(document).ready(function () {
    // Load comments when the page loads
    fetchFeedback();

    // Handle form submission
    $('#feedbackForm').on('submit', function (event) {
        event.preventDefault();
        const name = $('#name').val();
        const message = $('#message').val();

        $.ajax({
            url: apiUrl,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({name: name, message: message}),
            success: function () {
                $('#name').val('');
                $('#message').val('');
                fetchFeedback();
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
});

function fetchFeedback() {
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (data) {
            const feedbackList = $('#feedbackList');
            feedbackList.empty();
            data.forEach(function (feedback) {
                const feedbackItem = `
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">${feedback.name}</h5>
                                <p class="card-text">${feedback.message}</p>
                            </div>
                        </div>
                    `;
                feedbackList.append(feedbackItem);
            });
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}