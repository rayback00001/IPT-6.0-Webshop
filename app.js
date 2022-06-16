//Elemente auswählen
const productelement = document.querySelector(".products");
const cartelement = document.querySelector(".cart-item");
const subtotalelement = document.querySelector(".subtotal");

//Produkte rendern
function renderProducts(){
    products.forEach((product) => {
        productelement.innerHTML += `    
        
        <div class = "card-container">
         <div class="card">
         <div class="card-img">
            <img src="${product.imgsrc}">
         </div>
         <div class="description">
          <h1>${product.name}</h1>
          <p><b>Preis: CHF</b><span>${product.price}</span></p>
         </div>
          <div class="button-show" onclick="addToCart(${product.id})">
          <div class="i-d-w">In den Warenkorb</a>
        </div>
        </div>

        `;
    });
}
renderProducts();


let shoppingcart = JSON.parse(localStorage.getItem("Shoppingcart")) || [];
updateCart();


// In den Warenkorb einfügen
function addToCart(id){

    //Überprüfen ob ein Produkt schon existiert
    if(shoppingcart.some((article) => article.id === id)){
        changeNumberOfUnits("plus", id)
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
    renderSubTotal();
    //Warenkorb in local storage speichern
    localStorage.setItem("Shoppingcart",JSON.stringify(shoppingcart));
    
}

//Zwischensumme berechnen
function renderSubTotal(){
    let subtotal = 0;

    shoppingcart.forEach((article) => {
        subtotal += article.price * article.numberOfUnits;
    })

    subtotalelement.innerHTML = `<td>${totalprice}</td>`;
}

// Warenkorb rendern
function renderCart(){
    cartelement.innerHTML = "";
    shoppingcart.forEach((article) => {
        cartelement.innerHTML += `
        
            <tr>
            <td><img src = "${article.imgsrc}"></td>
            <td>${article.name}</td>
            <td><div class ="units">
            <div class = "btn-minus" onclick="changeNumberOfUnits('minus', ${article.id})">-</div>
            <div class = "number">${article.numberOfUnits}</div>
            <div class = "btn-plus" onclick="changeNumberOfUnits('plus', ${article.id})">+</div>
            </div></td>
            <td>CHF ${article.price}</td>
            <td>CHF ${article.numberOfUnits * article.price}</td>
            <td><i class="fa-solid fa-xmark" onclick="removeItem(${article.id})"></i></td>
            </tr>    
        `;
    });
}


// Menge ändern
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




