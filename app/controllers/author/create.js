import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveAuthor(values) {
      let author = this.get('store').createRecord('author', values);

      author.save()
        .then(() => {
          this.transitionToRoute('author');
        });
    }
  }
});
