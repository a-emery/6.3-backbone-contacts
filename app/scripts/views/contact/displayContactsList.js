var DisplayContactsListView = Backbone.View.extend({

  className: 'contactsList',

  template: JST['contact/display'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

});

export default DisplayContactsListView;
