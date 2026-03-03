const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${product.id}`).then((response) => response.json(),).then

const productContainer = document.querySelector(".produkt_container");

productContainer.innerHTML = `<article class="product_image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1529.webp" alt="" />
      </article>
      <article class="productinformation">
        <h2>Product information</h2>
        <h3>Model name</h3>
        <p>Red t-shirt Ferrari</p>
        <h3>Color</h3>
        <p>Red</p>
        <h1>Ferrari</h1>
        <p>Ferrari, we are the competetion</p>
      </article>
      <article class="size_and_purchase">
        <h2>Ferrarai cotton t-shirt red</h2>
        <p>Ferrari / t-shirts</p>
        <div class="size-row">
          <label for="size">Choose a size</label>

          <select id="size">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <button class="basket-btn">Add to basket</button>
      </article>`;
