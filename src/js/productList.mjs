import { getData } from './productData.mjs';
import { renderListWithTemplate } from './utils.mjs';

export default function productList(selector, category) {
    const container = document.querySelector(selector);
    getData(category)
        .then((products) => {
            console.log(products);
            const filter = products.filter(filterProducts)
            renderListWithTemplate(productCardTemplate, container, filter);
        })
        .catch((error) => console.error(error));
}

function productCardTemplate(product) {
    return `
    <li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Image}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.Name}</h2>
      <p class="product-card__price">${product.FinalPrice}</p></a
    >
    </li>
    `;
}

function filterProducts(product) {
    return product.FinalPrice != 179.99
}