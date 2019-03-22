export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/authors', ({authors}, {queryParams}) => {
    let query = queryParams['filter[query]'];

    if (query) {
      return authors.where(a => {
        return a.first.toLowerCase().includes(query.toLowerCase()) || a.last.toLowerCase().includes(query.toLowerCase());
      });
    }

    return authors.all();
  });
  this.post('/authors');
  this.get('/authors/:id');
  this.patch('/authors/:id'); // or this.patch
  this.put('/authors/:id'); // or this.patch
  this.del('/authors/:id');

  this.get('/books', ({books}, { queryParams }) => {
    let query = queryParams['filter[query]'];

    if (query) {
      return books.all().filter(a => {
        return a.title.toLowerCase().includes(query.toLowerCase()) || a.isbn.toLowerCase().includes(query.toLowerCase());
      });
    }

    return books.all();
  });
  this.post('/books');
  this.get('/books/:id');
  this.patch('/books/:id'); // or this.patch
  this.put('/books/:id'); // or this.patch
  this.del('/books/:id');

  this.get('/ratings');
  this.post('/ratings');
  this.get('/ratings/:id');
  this.patch('/ratings/:id'); // or this.patch
  this.put('/ratings/:id'); // or this.patch
  this.del('/ratings/:id');
}
