import Contact from 'models/Contact';

var ContactsCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronsnewserver',
});

export default ContactsCollection;
