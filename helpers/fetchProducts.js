// const { results } = require("../mocks/search");

const fetchProducts = async (id) => {
  const $QUERY = id;
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
    const response = await fetch(url);
    const data = await response.json();
    return await data.results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
