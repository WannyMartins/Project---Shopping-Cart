function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function cartItemClickListener(event) {
  event.target.parentElement.removeChild(event.target);
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// tive ajuda dos colegas de turma Sheila Allelo, e Wendryo para desenvolver a logica de por o item no carrinho.
const itemParaCarrinho = async (event) => {
  const skuId = getSkuFromProductItem(event.target.parentElement);
  const response = await fetchItem(skuId);
    const objeto = { sku: skuId, name: response.title, salePrice: response.price };
  const resultado = createCartItemElement(objeto);
  const cartItems = document.querySelector('.cart__items');
  cartItems.appendChild(resultado);
};

const encontrarItem = async (product) => {
  const produtos = await fetchProducts(product);
  produtos.results.forEach((element) => {
    const objeto = { sku: element.id, name: element.title, image: element.thumbnail };
    const resultado = createProductItemElement(objeto);
    const items = document.querySelector('.items');
    items.appendChild(resultado);
  });
  const botaoAdd = document.querySelectorAll('.item__add');
  botaoAdd.forEach((element) => element.addEventListener('click', itemParaCarrinho));
};

window.onload = () => {
  encontrarItem('computador');
};
