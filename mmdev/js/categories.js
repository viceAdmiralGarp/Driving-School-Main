function getCategories() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://grand-school-d7e43eab69dc.herokuapp.com/category", requestOptions)
        .then(response => response.json())
        .then(result => {
            result.forEach(category => {
                if(category.name.includes('/'))
                    category.name = category.name.replace('/', '_');
                document.querySelectorAll(`#${category.name}_price`).forEach(c => c.textContent = category.price + '₴')
            });
        })
        .catch(error => console.log('error', error));
}

getCategories();