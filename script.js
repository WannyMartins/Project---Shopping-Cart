const items = document.querySelector('.items');
const itensCart = document.querySelector('.cart__items');
const botaoApagar = document.querySelector('.empty-cart');

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
  event.target.remove();
  saveCartItems(itensCart.innerHTML);
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
  itensCart.appendChild(resultado);
  saveCartItems(itensCart.innerHTML);
};

const encontrarItem = async (product) => {
  const produtos = await fetchProducts(product);
  produtos.results.forEach((element) => {
    const objeto = { sku: element.id, name: element.title, image: element.thumbnail };
    const resultado = createProductItemElement(objeto);
    items.appendChild(resultado);
  });
  const botaoAdd = document.querySelectorAll('.item__add');
  botaoAdd.forEach((element) => element.addEventListener('click', itemParaCarrinho));
};

const apagarCarrinho = () => {
  const produtos = document.querySelectorAll('.cart__item');
  for (let index = 0; index < produtos.length; index += 1) {
    itensCart.removeChild(produtos[index]);
  }
  localStorage.clear();
};

const recuperarLocalStorage = () => {
  itensCart.innerHTML = getSavedCartItems();
  const itemCart = document.querySelectorAll('.cart__item');
  itemCart.forEach((item) => item.addEventListener('click', cartItemClickListener));
};

botaoApagar.addEventListener('click', apagarCarrinho);

window.onload = async () => {
  await encontrarItem('computador');
  recuperarLocalStorage();
};
