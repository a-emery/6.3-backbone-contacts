require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsContactCreate = require('views/contact/create');

var _viewsContactCreate2 = _interopRequireDefault(_viewsContactCreate);

var _modelsContactsCollection = require('models/ContactsCollection');

var _modelsContactsCollection2 = _interopRequireDefault(_modelsContactsCollection);

var _viewsContactDisplayContactsList = require('views/contact/displayContactsList');

var _viewsContactDisplayContactsList2 = _interopRequireDefault(_viewsContactDisplayContactsList);

var _viewsContactDisplayContact = require('views/contact/displayContact');

var _viewsContactDisplayContact2 = _interopRequireDefault(_viewsContactDisplayContact);

window.App = {};

$(document).ready(function () {
  App.contacts = new _modelsContactsCollection2['default']();

  window.displayContactsListView = new _viewsContactDisplayContactsList2['default']();
  window.createContactView = new _viewsContactCreate2['default']();
  window.displayContactView = new _viewsContactDisplayContact2['default']();
  $('#container').append(createContactView.render().el);
  $('#container').append(displayContactsListView.render().el);

  App.contacts.fetch();
  App.contacts.on('add', renderContacts);

  function renderContacts(contacts) {
    $('.contactsOrderedList').append(JST['contact/displayContact'](contacts.toJSON()));
  }
});
  
});

require.register("models/Contact", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Contact = Backbone.Model.extend({
  idAttribute: '_id',
  "default": {
    email: "",
    name: { first: "", last: "" },
    phone: "",
    twitter: "",
    linkedin: ""
  }

});

exports["default"] = Contact;
module.exports = exports["default"];
  
});

require.register("models/ContactsCollection", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modelsContact = require('models/Contact');

var _modelsContact2 = _interopRequireDefault(_modelsContact);

var ContactsCollection = Backbone.Collection.extend({
  model: _modelsContact2['default'],
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronsnewserver'
});

exports['default'] = ContactsCollection;
module.exports = exports['default'];
  
});

require.register("views/contact/create", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var CreateContactView = Backbone.View.extend({

  tagName: 'form',
  className: 'contactForm',

  events: {
    'submit': 'createContact'
  },

  template: JST['contact/create'],

  reset: function reset() {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template());
    return this;
  },

  createContact: function createContact(e) {
    e.preventDefault();
    App.contacts.create(this.serializeForm());
  },

  serializeForm: function serializeForm() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function (input) {
      result[input.name] = input.value;
    });
    this.reset();
    return result;
  }

});

exports['default'] = CreateContactView;
module.exports = exports['default'];
  
});

require.register("views/contact/displayContact", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var DisplayContactView = Backbone.View.extend({

  className: 'contactListItem',

  template: JST['contact/displayContact'],

  render: function render() {
    this.$el.html(this.template());
    return this;
  }
});

exports['default'] = DisplayContactView;
module.exports = exports['default'];
  
});

require.register("views/contact/displayContactsList", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var DisplayContactsListView = Backbone.View.extend({

  className: 'contactsList',

  template: JST['contact/display'],

  render: function render() {
    this.$el.html(this.template());
    return this;
  }

});

exports['default'] = DisplayContactsListView;
module.exports = exports['default'];
  
});
