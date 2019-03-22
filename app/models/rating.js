import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  value: attr(),
  username: attr(),
  book: belongsTo(),
});
