var CreateContactView = Backbone.View.extend({

  tagName: 'form',
  className: 'contactForm',

  events: {
    'submit': 'createContact',
  },

  template: JST['contact/create'],

  reset: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  createContact: function(e){
    e.preventDefault();
    App.contacts.create(this.serializeForm());
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input){
      result[input.name] = input.value;
    });
    this.reset();
    return result;
  },

});

export default CreateContactView;
