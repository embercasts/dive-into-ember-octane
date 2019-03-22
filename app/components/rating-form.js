import Component from '@ember/component';

export default Component.extend({
  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      username: this.get('rating.username'),
      value: this.get('rating.value'),
    });
  },

  actions: {
    submitChanges() {
      this.onsubmit({
        username: this.get('username'),
        value: this.get('value'),
      });
    }
  }
});
