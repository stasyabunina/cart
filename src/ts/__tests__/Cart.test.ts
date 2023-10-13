import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should add new item', () => {
  const cart = new Cart();
  cart.add(new Movie(1234, 'Мстители The Avengers', 1234, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', 137));

  expect(cart).toEqual({
    _items: [{
      'id': 1234,
      'name': 'Мстители The Avengers',
      'price': 1234,
      'year': 2012,
      'country': 'США',
      'slogan': 'Avengers Assemble!',
      'genre': 'фантастика, боевик, фэнтези, приключения, ...',
      'time': 137
    }]
  });
});

test('testing the total price in the cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1234, 'Мстители The Avengers', 1234, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', 137));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.getTotalPrice()).toBe(3234);
});

test('testing the total price with the discount in the cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1234, 'Мстители The Avengers', 1234, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', 137));
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.getDiscountedPrice(1)).toBe(3201.66);
});

test('cart should remove an item', () => {
  const cart = new Cart();
  cart.add(new Movie(1234, 'Мстители The Avengers', 1234, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', 137));
  cart.remove(1234);

  expect(cart.items.length).toBe(0);
});
