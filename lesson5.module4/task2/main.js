import { shoppingModule } from './shop.js';
let totalBalance = document.getElementById('balance');
let countOfBeer = document.getElementById('beer');
let countOfWine = document.getElementById('wine');
let countOfPepsi = document.getElementById('pepsi');
let addButton = document.getElementById('add');
let counts = document.getElementById('count-product');
let list = document.getElementById('ist-product1');
let buyS = document.getElementById('buy-item');
let result = document.getElementById('main-result1');

totalBalance.innerHTML = shoppingModule.balance() + ' ' + 'грн';
countOfBeer.innerHTML = shoppingModule.beer();
countOfWine.innerHTML = shoppingModule.wine();
countOfPepsi.innerHTML = shoppingModule.pepsi();


function buyProduct() {
    result.innerHTML = '';
    shoppingModule.selection.forEach(beverage => {
        if(shoppingModule.getCart()[beverage]){
        const boughtItem = document.createElement('li');
        boughtItem.textContent = beverage +':'+ shoppingModule.getCart()[beverage]+' '+'шт';
        result.appendChild(boughtItem);
        shoppingModule.removeBeer(shoppingModule.getCart()[beverage]);
        shoppingModule.removeWine(shoppingModule.getCart()[beverage]);
        shoppingModule.removePepsi(shoppingModule.getCart()[beverage]);
        }
    })
        let sum = shoppingModule.calculateSum();
        let sumItem = document.createElement('li');
        sumItem.textContent = 'Всього: ' + sum + ' гривень'
        result.appendChild(sumItem);
    shoppingModule.addToBalance(sum)
    totalBalance.innerHTML = shoppingModule.balance() + ' ' + 'грн';
    countOfBeer.innerHTML = shoppingModule.beer();
    countOfWine.innerHTML = shoppingModule.wine();
    countOfPepsi.innerHTML = shoppingModule.pepsi();
    list.innerHTML='';
    shoppingModule.nullArray();
}

function addProduct() {
    const selectedCheckbox = document.querySelector('input[name="options"]:checked');
    const beverageName = selectedCheckbox.value;
    if (shoppingModule.getCart()[beverageName]) {
        const existingListing = document.getElementById("li-" + beverageName);
        existingListing.textContent = shoppingModule.count(counts.value, beverageName)
    }
    else {
        const newItem = document.createElement('li');
        newItem.id = "li-" + beverageName;
        newItem.textContent = shoppingModule.count(counts.value, beverageName);
        list.appendChild(newItem);
    }
    counts.value = '';

}
addButton.addEventListener('click', addProduct);


buyS.addEventListener('click', buyProduct);














