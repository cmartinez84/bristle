import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  text: DS.attr(),
  preview: DS.attr(),
  date: DS.attr()
});
