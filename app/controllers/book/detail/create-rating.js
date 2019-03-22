import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveRating(formValues) {
      let rating = this.get('store').createRecord('rating', {
        book: this.model.book,
        value: formValues.value,
        username: formValues.username
      });

      rating.save().then(() => {
        this.transitionToRoute('book.detail', this.model.book.id);
      });
    }
  }
})
