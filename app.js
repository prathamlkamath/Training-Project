
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');

let products = [
    {
        id: 1,
        name: 'Nike T Shirt',
        image: 'shirt1.png',
        price: 2000
    },
    {
        id: 2,
        name: 'Nike Pro',
        image: '2.PNG',
        price: 2987
    },
    {
        id: 3,
        name: 'Nike Dri-FIT Icon',
        image: '3.PNG',
        price: 2885
    },
    {
        id: 4,
        name: 'Nike SB',
        image: '4.PNG',
        price: 3500
    },
    {
        id: 5,
        name: 'NikeCourt Dri-FIT',
        image: '5.PNG',
        price: 3255
    },
    {
        id: 6,
        name: 'Paris Saint-Germain',
        image: '6.PNG',
        price: 4500
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
