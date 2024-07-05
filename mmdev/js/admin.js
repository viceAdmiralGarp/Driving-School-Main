const host = "https://grand-school-d7e43eab69dc.herokuapp.com";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Basic " + btoa(localStorage.getItem('username') + ":" + localStorage.getItem('password')));

var requestOptions = {
    method: 'GET',
    headers: myHeaders
};

function addImg() {
    // Create an input element
    var inputElement = document.createElement("input");
    inputElement.type = "file";

    // Set up the onclick listener
    var buttonElement = document.querySelector(".add-img");
    buttonElement.onclick = function () {
        inputElement.click(); // Trigger the file upload dialog
    };

    // Handle the selected file
    inputElement.onchange = function (event) {
        postFile(event.target.files[0]);
    };
}

function cleanGalleryAndStartLoader() {
    containerGallery.innerHTML = "";
    const loader = document.createElement("div");
    loader.classList.add("loader");
    containerGallery.appendChild(loader);
}

function getComments() {
    const tableBody = document.querySelector("#comment-body");
    tableBody.innerHTML = "";
    fetch(host + "/comments", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(comment => {
                const row = document.createElement("tr");
                const name = document.createElement("td");
                const commentText = document.createElement("td");
                const date = document.createElement("td");

                const actions = document.createElement("td");
                const deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Удалить";
                deleteButton.onclick = () => deleteComment(comment.id);
                const editButton = document.createElement("div");
                editButton.classList.add("btn", "btn-primary");
                editButton.setAttribute("data-bs-toggle", "modal");
                editButton.setAttribute("data-bs-target", "#commentModal");
                editButton.innerHTML = "Редактировать";
                editButton.onclick = () => editComment(comment);

                name.innerHTML = comment.author;
                commentText.innerHTML = comment.comment;
                date.innerHTML = comment.date;

                actions.appendChild(deleteButton);
                actions.appendChild(editButton);

                row.appendChild(name);
                row.appendChild(commentText);
                row.appendChild(date);
                row.appendChild(actions);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.log('error', error));
}

function editComment(comment) {
    const header = document.querySelector('.modal-header');
    header.id = comment.id;
    document.querySelector('#fullname').value = comment.author;
    document.querySelector('#comment').value = comment.comment;
}

function deleteComment(id) {
    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders
    };

    fetch(host + "/comments/" + id + "/admin", requestOptions)
        .then(response => response.text())
        .then(_ => getComments())
        .catch(error => console.log('error', error));
}

const form = document.querySelector('#commentForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fullname = document.querySelector('#fullname').value;
    const comment = document.querySelector('#comment').value;

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({
            author: fullname,
            comment: comment
        }),
    };

    const id = document.querySelector('.modal-header').id;
    fetch(host + "/comments/" + id + "/admin", requestOptions)
        .then(response => response.text())
        .then(_ => getComments())
        .catch(error => console.log('error', error));
});

const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}

function getCategories() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(host + "/category", requestOptions)
        .then(response => response.json())
        .then(result => {
            const tableBody = document.querySelector("#category-body")
            tableBody.innerHTML = "";
            result.forEach(category => {
                const tr = document.createElement("tr");
                const name = document.createElement("td");
                const price = document.createElement("td");
                const input = document.createElement("input");
                input.placeholder = "Введите новую цену";
                price.appendChild(input);

                name.innerHTML = category.name;
                input.value = category.price;
                input.name = category.name;
                input.id = 'price-value';

                tr.appendChild(name);
                tr.appendChild(price);
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.log('error', error));
}


const savePriceBtn = document.querySelector('#save-price-loader');
document.querySelector("#save-price").addEventListener("click", () => {
    const loader = document.createElement("div");
    loader.classList.add("loader");
    savePriceBtn.appendChild(loader);
    const resArr = [];
    categoryInputs = document.querySelectorAll("#price-value").forEach(input => {
        resArr.push({
            name: input.name,
            price: input.value
        });
    });
    
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(resArr),
    };

    fetch(host + "/category/admin", requestOptions)
        .then(response => response.text())
        .then(_ => {
            getCategories();
            savePriceBtn.removeChild(loader);
        })
        .catch(error => console.log('error', error));
});

if (localStorage.getItem('username') !== null || localStorage.getItem('password') !== null) {
getCategories();
getComments();
}