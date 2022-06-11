
//Elemente auswählen
const productselement = document.querySelector(".products");
const cartelement = document.querySelector(".cart-item");

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
          <div class = "i-d-w">In den Warenkorb</a>
        </div>
        </div>

        `;
    });
}
renderProducts();


let shoppingcart = [];


// In Warenkorb einfügen
function addToCart(id){

    //Überprüfen ob ein Produkt schon existiert
    if(shoppingcart.some((article) => article.id === id)){
        alert("Produkt ist schon im Warenkorb!")
    }
    else{
        const article = products.find((product) => product.id === id);
    
        shoppingcart.push({
            ...article,
            numberOfUnits:1,
        });
        console.log(shoppingcart);
    }

    updateCart();
}

function updateCart(){
    renderCart();
}

// Produkte rendern
function renderCart(){
    cartelement.innerHTML = "";
    shoppingcart.forEach((article) => {
        cartelement.innerHTML += `
        
            <tr>
            <td><img src = "${article.imgsrc}"></td>
            <td>${article.name}</td>
            <td>${article.price}</td>
            <td><div class ="units">
            <div class = "btn-minus" onclick="changeNumberOfUnits('minus', ${article.id})">-</div>
            <div class = "number">${article.numberOfUnits}</div>
            <div class = "btn-plus" onclick="changeNumberOfUnits('plus', ${article.id})">+</div>
            </div></td>
            <td></td>
            <td><i class="fa-solid fa-xmark" onclick="removeItem(${article.id})"></i></td>
            </tr>    
        `;
    });
}



// Anzahl Menge ändern
function changeNumberOfUnits(operation, id){
    shoppingcart = shoppingcart.map((article) => {

        let oldNumberOfUnits = article.numberOfUnits; 

        if(article.id === id){
            if(operation === "minus" && oldNumberOfUnits > 1){
                oldNumberOfUnits--;
            }else if(operation === "plus"){
                oldNumberOfUnits++;
            }

        }
        return{
            ...article,
            numberOfUnits: oldNumberOfUnits,
        }
    });

    updateCart();
}

//Ware löschen
function removeItem(id){
    shoppingcart = shoppingcart.filter((article) => article.id !== id);
    updateCart();
}

