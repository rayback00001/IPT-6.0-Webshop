// Elemente select

const productselement = document.querySelector(".products");

function renderProducts(){
    products.forEach((product) => {
        productselement.innerHTML += `    
            <img src = " ${product.imgsrc}">
            <h2>${product.name}</h2>
            <h2><small></small>${product.price}</h2>
            <p>
                ${product.description}
            </p>


        `
    });
}
renderProducts();