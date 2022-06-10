
//Elemente auswählen
const productselement = document.querySelector(".products");
const cartelement = document.querySelector(".cartobject");

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

        <td><img src = "${article.imgsrc}"></td>
        <td>${article.name}</td>
        <td>${article.price}</td>
        <td><input type="number" value="1"></td>
        `;
    });
}




