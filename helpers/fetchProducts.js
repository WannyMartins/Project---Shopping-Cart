const fetchProducts = async (id) => {
  const $QUERY = id;
  try {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`);
    const response = await data.json();
    return await response.results;
  } catch (error) {
    return error;
  }
};
// console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
