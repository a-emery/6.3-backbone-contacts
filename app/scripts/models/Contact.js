var Contact = Backbone.Model.extend({
  idAttribute: '_id',
  default: {
    email: "",
    name: {first: "", last: ""},
    phone: "",
    twitter: "",
    linkedin: ""
  }


});

export default Contact;
