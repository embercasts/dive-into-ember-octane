import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveAuthor(updates) {
      this.get('model').setProperties(updates);

      this.get('model').save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
