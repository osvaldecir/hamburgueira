const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const castItemContainer = document.getElementById("cart-items")
const cartToral = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartConter = document.getElementById("cart-count")
const addressImput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

let cart = []

cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
});

cartModal.addEventListener("click",function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
});

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn");
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        
        addToCart(name,price)
    }
})

function addToCart(name, price){
    const existinItem = cart.find(item => item === name)
    if (existinItem){
        existinItem.quantity += 1;
 
    
}else{}
cart.push({
    name,
    price,
    quantity: 1,
})
upadateCartModal()
}

function upadateCartModal(){
    castItemContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item =>{
       const cartItemElemente = document.createElement("div");

       cartItemElemente.innerHTML`
       <div>

       <div>
       <p>${item.mame}</P>
       <p>${item.quantity}</P>
       <p>R$ ${item.price}
       <div>

       <div>
       <button>
            Remover
       </button>
       </div>

       <div>
       
       `
        castItemContainer.appendChild(cartItemElemente)
    })
}
