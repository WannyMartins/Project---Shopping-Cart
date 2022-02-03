const fetchItem = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
