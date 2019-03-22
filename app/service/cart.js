import Service from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { A } from '@ember/array';

export default Service.extend({
  taxPercent: 7,
  items: null,

  init() {
    this._super(...arguments);

    this.set('items', A([]));
  },

  addItem(book) {
    let existingCartItem = this.get('items').find(a => a.book === book);

    if (existingCartItem) {
      return this.changeItemQuantity(existingCartItem, 1);
    }

    this.items.addObject(EmberObject.create({
      book,
      price: book.price,
      quantity: 1
    }));
  },

  changeItemQuantity(item, amount) {
    let itemToChange = this.get('items').find(a => a === item);

    itemToChange.set('quantity', itemToChange.get('quantity') + amount);
  },

  subTotal: computed('items.@each.{quantity,price}', function() {
    return this.get('items').reduce((sum, item) => sum + item.get('price') * item.get('quantity'), 0);
  }),

  numberOfItems: computed('items.[]', function() {
    return this.get('items').length;
  }),

  salesTax: computed('taxPercent', 'subTotal', function() {
    return this.get('subTotal') * (this.get('taxPercent') / 100);
  }),

  total: computed('salesTax', 'subTotal', function() {
    return this.get('subTotal') + this.get('salesTax');
  })
});
