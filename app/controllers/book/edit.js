import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveBook(values) {
      let book = this.get('model').book;
      book.setProperties(values);

      book.save()
        .then(() => {
          this.transitionToRoute('book.detail', book.id);
        });
    }
  }
});
