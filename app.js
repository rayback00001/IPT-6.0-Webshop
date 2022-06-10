
//Elemente auswählen
const productselement = document.querySelector(".products");

function renderProducts(){
    products.forEach((product) => {
        productselement.innerHTML += `    
        
        
        <div class = "card-container">
         <div class="card">
         <div class="card-img">
            <img src="${product.imgsrc}">
         </div>
         <div class="description">
          <h1>${product.name}</h1>
          <p><b>Preis:</b><span>${product.price}</span></p>
         </div>
          <div class="button-show" onclick="addToCart(${product.id})">
          <a href="" class="i-d-w">In den Warenkorb</a>
        </div>
        </div>

     </div>
            

        `
    });
}
renderProducts();


const shoppingcart = [];

// In Warenkorb einfügen
function addToCart(id){

    const article = products.find((product) => product.id === id);
    console.log(article);
}


