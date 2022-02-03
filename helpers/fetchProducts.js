const fetchProducts = async (query) => {
  const $QUERY = query;
  try {
    const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`);
    const response = await data.json();
    return await response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
