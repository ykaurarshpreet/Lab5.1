//selecting all my products
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

//declared variable
let totalPrice = 0;

//function to update the total price
// func.  name of func.   parameter
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

//function to remove an item
function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
}

cart.addEventListener('click', removeItem)

addProductButton.addEventListener('click', function(){
    const inputText= productNameInput.value; 
     console.log(inputText);
     let li = document.createElement('li');
     li.textContent = inputText
     li.dataset.price =  productPriceInput.value
     const removeButton = document.createElement('button')
     removeButton.textContent = "remove"
     li.appendChild(removeButton);
     cart.appendChild(li);
    updateTotalPrice(Number(productPriceInput.value))
})
