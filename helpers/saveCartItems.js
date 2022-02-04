const saveCartItems = (itensCart) => {
   localStorage.setItem('cartItems', itensCart);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
