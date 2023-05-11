import { getData } from './productData.mjs';

export default function productList(selector, category) {
    const container = document.querySelector(selector);
    getData(category).then((products) => {
        renderList(products, container)
    }).
        catch((error) => console.log.error(error));

};

// productList.mjs
function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=">
    <img
      src=""
      alt="Image of "
    />
    <h3 class="card__brand"></h3>
    <h2 class="card__name"></h2>
    <p class="product-card__price">$</p></a>
  </li>`
};

function renderList(list, el) {
    const htmlStrings = list.map(productCardTemplate);
    el.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
}