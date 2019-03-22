import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      book: this.modelFor('book.detail'),
      rating: {
        value: 0,
        username: ''
      }
    });
  }
});
