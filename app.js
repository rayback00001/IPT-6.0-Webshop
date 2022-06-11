
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
          <a href="#" class = "i-d-w">In den Warenkorb</a>
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


function renderCart(){
    cartelement.innerHTML = "";
    shoppingcart.forEach((article) => {
        cartelement.innerHTML += `
        
            <tr>
            <td><img src = "${article.imgsrc}"></td>
            <td>${article.name}</td>
            <td>${article.price}</td>
            <td><div class ="units">
            <div class = "btn-minus">-</div>
            <div class = "number"></div>
            <div class = "btn-plus">+</div>
            </div></td>
            <td></td>
            <td><a href="#"><i class="fa-solid fa-xmark"></i></a></td>
            </tr>    
        `;
    });
}




