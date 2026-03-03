"use strict";

const productContainer = document.querySelector(".product_list_container");

fetch("https://kea-alt-del.dk/t7/api/products?limit=50")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  //   console.log;
  //   ("productsArr", productsArr);
  productsArr.forEach((product) => {
    console.log("product", product.id);

    const hasDiscount = product.discount > 0;
    const isSoldOut = product.soldout === 1;

    productContainer.innerHTML += `<article class="smallProduct ${isSoldOut ? "sold_out" : ""}">
          <div>
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Ferrari" />
          </div>
         ${isSoldOut ? `<p class="soldouttext color_me_grey">SOLD OUT</p>` : ""}
          <h3>${product.productdisplayname}</h3>
          <p class="subtle">${product.articletype} | ${product.brandname}</p>
          <p class="price">${product.price},-</p>
           <div class="discounted_element">
            ${
              hasDiscount
                ? `
          <span class="discount_badge">-${product.discount}%</span>
          <p class="discounted_price">Now DKK ${Math.round(product.price * (1 - product.discount / 100))},-</p>
        `
                : ""
            }
          </div>
          <a href="produkt.html?id=${product.id}">Read More</a>
        </article>`;
  });
}
