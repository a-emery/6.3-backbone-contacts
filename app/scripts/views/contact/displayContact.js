var DisplayContactView = Backbone.View.extend({

  className: 'contactListItem',

  template: JST['contact/displayContact'],

  render: function(){
    this.$el.html(this.template());
    return this;
  },
});

export default DisplayContactView;
