require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('1 - Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it ('2 - Executar uma função fetchProducts com o argumento "computador" e testar se fetch foi chamada', () => {
    const response =  fetchProducts("computador");
    expect.assertions(1)
    expect(fetch).toHaveBeenCalled();
  })

  it ('3 - Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";', async () => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    const response =  fetchProducts("computador");
    expect.assertions(1)
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it ('4 - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const response = await fetchProducts("computador");
    expect.assertions(1);
    expect(response).toEqual(computadorSearch.results);
  })

  it ('5 - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const response = await fetchProducts();
    expect.assertions(1);
    expect(response).toEqual(new Error('You must provide an url'));
  })

});
