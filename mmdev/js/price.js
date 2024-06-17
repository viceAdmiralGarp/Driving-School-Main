function updatePrice(){
    let newPrice = localStorage.getItem('A1retValue');
    if(newPrice==null){
        document.querySelector('.A1ret').textContent = newPrice;
    }
}

window.onload = updatePrice;