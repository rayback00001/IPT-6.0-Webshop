// Elemente select

const productselement = document.querySelector(".products");

function renderProducts(){
    products.forEach((product) => {
        productselement.innerHTML += `    
            
            <div class="card">
                <div class="card-img">
                    <img src="${product.imgsrc}">
                </div>
                <div class="description">
                  <h1>${product.name}</h1>
                  <p><b>Preis:</b><span>${product.price}</span></p>
                </div>
                <div class="button-show">
                  <a href="" class="i-d-w">In den Warenkorb</a>
                </div>
            </div>


        `
    });
}
renderProducts();


