const inputfield =()=>{
const firstinputfield= document.getElementById('First-input');
const secondinputfield =document.getElementById('Second-input');
const product=firstinputfield.value;
const quantity=secondinputfield.value;
firstinputfield.value='';
secondinputfield.value='';
// console.log(valueFrist,valueSecond);
displayProduct(product,quantity);
saveProductToLocalStorage (product,quantity);
}

const displayProduct =(product, quantity)=>{
const ul= document.getElementById('prduct-container');
   const li=document.createElement('li');
   li.innerText=` ${product}:${quantity}:  
   
   `;
   ul.appendChild(li);
}

// jahatu cart e amra storedcart gula save korte chie tahole function nwa  lagbe

const getStoredShoppingCart=()=>{
   let cart={};
   const StoredCart =localStorage.getItem('cart');

   if(StoredCart){
   cart=JSON.parse(StoredCart);
   
   }
   return cart;
   }

   const saveProductToLocalStorage = (product, quantity) => {
      const cart = getStoredShoppingCart();
      cart[product] = quantity;
      const cartStringified = JSON.stringify(cart);
      localStorage.setItem('cart', cartStringified)
  }

  const displayProductsFromLocalStorage = () => {
   const savedCart = getStoredShoppingCart();
   console.log(savedCart);
   for(const product in savedCart){
       const quantity = savedCart[product];
       console.log(product, quantity);
       displayProduct(product, quantity);
   }
}
displayProductsFromLocalStorage();