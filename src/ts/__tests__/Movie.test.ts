import Movie from '../domain/Movie';

test('testing if the right object is received', () => {
  const movie = new Movie(1234, 'Мстители The Avengers', 1234, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения, ...', 137);

  expect(movie).toEqual({
    'id': 1234,
    'name': 'Мстители The Avengers',
    'price': 1234,
    'year': 2012,
    'country': 'США',
    'slogan': 'Avengers Assemble!',
    'genre': 'фантастика, боевик, фэнтези, приключения, ...',
    'time': 137
  })
});
