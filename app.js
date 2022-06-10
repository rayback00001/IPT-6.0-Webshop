
//Elemente auswählen
const productselement = document.querySelector(".products");
const cartelement = document.querySelector(".shopping-cart-info");

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
          <a href="#" class="i-d-w">In den Warenkorb</a>
        </div>
        </div>

     </div>
            

        `;
    });
}
renderProducts();


const shoppingcart = [];


// In Warenkorb einfügen
function addToCart(id){

    //Überprüfen ob ein Produkt schon existiert
    if(shoppingcart.some((article) => article.id === id)){
        alert("Produkt ist schon im Warenkorb!")
    }
    else{
        const article = products.find((product) => product.id === id);
    
        shoppingcart.push(article);
        console.log(article);
    }
}


function renderCart(){

    cartelement.innerHTML = "";
    shoppingcart.forEach((article) => {
        cartelement.innerHTML += `

                        <img src="${article.imgsrc}">
                        <div>
                            <p>${article.name}</p>
                            <h6>Preis: ${article.price}</h6>
                            <div class="remove-btn"><a href="">Löschen</a></div>
                        </div>
        `;
    });
}




