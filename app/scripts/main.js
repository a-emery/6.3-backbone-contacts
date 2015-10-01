import CreateContactView from 'views/contact/create';
import ContactsCollection from 'models/ContactsCollection';
import DisplayContactsListView from 'views/contact/displayContactsList';
import DisplayContactView from 'views/contact/displayContact';

window.App = {};

$(document).ready(function(){
  App.contacts = new ContactsCollection();

  window.displayContactsListView = new DisplayContactsListView();
  window.createContactView = new CreateContactView();
  window.displayContactView = new DisplayContactView();
  $('#container').append(createContactView.render().el);
  $('#container').append(displayContactsListView.render().el);



  App.contacts.fetch();
  App.contacts.on('add', renderContacts);

  function renderContacts(contacts){
    $('.contactsOrderedList').append(JST['contact/displayContact'](contacts.toJSON()));
  }


});
