import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return Promise.all([
      this.get('store').findRecord('book', id, {
        include: 'ratings,author'
      }),
      this.get('store').findAll('author')
    ])
      .then(([book, authors]) => {
        return { book, authors };
      });
  }
});
