import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  first: attr(),
  last: attr(),
  username: attr(),
  books: hasMany(),
})
