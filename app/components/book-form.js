import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  store: service('store'),
  tagName: 'form',

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      title: this.get('book.title'),
      isbn: this.get('book.isbn'),
      publishDate: this.get('book.publishDate'),
      author: this.get('book.author'),
    });
  },

  submit(ev) {
    ev.preventDefault();

    this.send('submitChanges');
  },

  actions: {
    changeAuthor(id) {
      let author = this.get('authors').find(a => a.id == id);

      this.set('author', author);
    },

    searchAuthor(query) {
      return this.get('store').query('author', { filter: { query }});
    },

    submitChanges() {
      this.onsubmit({
        title: this.get('title'),
        isbn: this.get('isbn'),
        publishDate: this.get('publishDate'),
        author: this.get('author'),
      });
    }
  }
});
