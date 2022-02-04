const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {

  it ('1 - Teste se, ao executar saveCartItemscom o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {

    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled()
  })

  it ('2 - Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro cartItems e o segundo sendo o valor passado como argumento para saveCartItems.', ( ) => {

    expect.assertions(1);
    param2 = ('<ol><li>Item</li></ol>');
    saveCartItems(param2)
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', param2);

  })
});
