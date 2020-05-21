import { CartItem } from './cart-item';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem("111111",1)).toBeTruthy();
  });

  it('should be equal bookIsbn', () => {
    expect(new CartItem("111111",1).bookIsbn).toEqual("111111");
  });

  it('should be equal count', () => {
    expect(new CartItem("111111",1).count).toEqual(1);
  })
});
