const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it ('1 - Teste se, ao executar getSavedCartItems, o método localStorage.getItemé chamado;', () => {
    getSavedCartItems();
    expect.assertions(1);
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it ('2 - Teste se, ao executar getSavedCartItems, o método localStorage.getItemé chamado com o cartItems como parâmetro.', () => {
    getSavedCartItems();
    expect.assertions(1);
   expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })

});
