//Dnepr
const center = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5290.845420214124!2d35.04672!3d48.467605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e87ca8ba8d%3A0xd8c6be35783a8812!2z0LLRg9C70LjRhtGPINCS0L7Qu9C-0LTQuNC80LjRgNCwINCc0L7QvdC-0LzQsNGF0LAsIDYsINC-0YQuIDMyNCwgMyDRjdGC0LDQtiwg0JTQvdGW0L_RgNC-LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNDkwMDA!5e0!3m2!1sru!2sua!4v1717001165753!5m2!1sru!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
const western = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5291.552444408202!2d34.939651!3d48.460823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe3ef87e851ab%3A0x23613edcbb922f19!2z0LYv0Lwg0JfQsNGF0ZbQtNC90LjQuQ!5e0!3m2!1suk!2sua!4v1717000684637!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
const klochko = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5284.8733139714195!2d35.045511!3d48.524863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d958c07cde6ced%3A0x553393411435fc56!2z0LYv0Lwg0JrQu9C-0YfQutC-LTY!5e0!3m2!1suk!2sua!4v1717000881142!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

//Kamenskoe
const arsenivecha = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5285.157342712175!2d34.612888!3d48.522141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbdbaee372e4eb%3A0x711fd0b18637990a!2z0LLRg9C70LjRhtGPINCb0Y7QsdCw0LLQuNGH0YHRjNC60L7Qs9C-INCg0LXQsdC1LCAzLCDQmtCw0LzigJnRj9C90YHRjNC60LUsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1MTkwOQ!5e0!3m2!1suk!2sua!4v1717000924575!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
const heroes = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5276.1548727396685!2d34.569848!3d48.608361!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbd71b2c2de05b%3A0x7c5546a4d2a0efdb!2z0LHRg9C70YzQstCw0YAg0JPQtdGA0L7Rl9CyLCA0Miwg0JrQsNC84oCZ0Y_QvdGB0YzQutC1LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNTE5MDk!5e0!3m2!1suk!2sua!4v1717000962254!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
const ato = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5277.54778980554!2d34.563351!3d48.595028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbd73c66f566dd%3A0xaf412da86009a3d2!2z0L_RgNC-0YHQv9C10LrRgiDQk9C10YDQvtGX0LIg0JDQotCeLCAyLCDQmtCw0LzigJnRj9C90YHRjNC60LUsINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA1MTkzNw!5e0!3m2!1suk!2sua!4v1717000997280!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
const peremoga =  `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5277.487097881806!2d34.56045!3d48.595609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbd73cbd201439%3A0x43a8ed2b8386e8f8!2z0L_RgNC-0YHQv9C10LrRgiDQn9C10YDQtdC80L7Qs9C4LCAxMCwg0JrQsNC84oCZ0Y_QvdGB0YzQutC1LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNTE5MDk!5e0!3m2!1suk!2sua!4v1717142131736!5m2!1suk!2sua" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

var mapContainer = document.getElementById('map-container');
mapContainer.innerHTML = center

function mainSelector(select) {
    var subSelect = document.getElementById('sub-select');
    var mapContainer = document.getElementById('map-container');
    subSelect.innerHTML = '';

    if (select.value === 'dnepr') {
        var option1 = new Option('Дніпро Центр', '0');
        option1.setAttribute('data-key', 'dc');
        var option2 = new Option('ж/м Західний', '1');
        option2.setAttribute('data-key', 'raw');
        var option3 = new Option('ж/м Клочко', '2');
        option3.setAttribute('data-key', 'rak');
        subSelect.add(option1);
        subSelect.add(option2);
        subSelect.add(option3);
        mapContainer.innerHTML = center
    } else if (select.value === 'kamianske') {
        var option1 = new Option('вул. Любавичского Ребе (Арсенічева) 3 каб.5', '3');
        option1.setAttribute('data-key', 'lub');
        var option2 = new Option('3 мікрорайон Героїв 42-82 (ТЦ Доля)', '4');
        option2.setAttribute('data-key', 'dolya');
        var option3 = new Option('11 мікрорайон проспект Героїв АТО, 2', '5');
        option3.setAttribute('data-key', 'ato');
        var option4 = new Option('10 мікрорайон (новий клас) проспект Перемоги, 57', '6');
        option4.setAttribute('data-key', 'per');
        subSelect.add(option1);
        subSelect.add(option2);
        subSelect.add(option3);
        subSelect.add(option4);
        mapContainer.innerHTML = arsenivecha
    }
}

function subSelector(select) {
    var mapContainer = document.getElementById('map-container');
    switch (select.value) {
        case '0':
            mapContainer.innerHTML = center
            break;
        case '1':
            mapContainer.innerHTML = western
            break;
        case '2':
            mapContainer.innerHTML = klochko
            break;
        case '3':
            mapContainer.innerHTML = arsenivecha
            break;
        case '4':
            mapContainer.innerHTML = heroes
            break;
        case '5':
            mapContainer.innerHTML = ato
            break;
        case '6':
            mapContainer.innerHTML = peremoga
            break;
    }
}


