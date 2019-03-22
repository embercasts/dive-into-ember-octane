import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'form',

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      first: get(this.author, 'first'),
      last: get(this.author, 'last')
    });
  },

  submit(ev) {
    ev.preventDefault();

    this.send('submitChanges');
  },

  actions: {
    submitChanges() {
      this.onsubmit({
        first: this.get('first'),
        last: this.get('last')
      });
    }
  }
});
