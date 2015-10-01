this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["contact/create"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<label for=\"email\">E-Mail</label>\n<input type=\"text\" name=\"email\" value=\"\">\n\n<label for=\"name\">Name</label>\n<input type=\"text\" name=\"name\" value=\"\">\n\n<label for=\"phone\">Phone</label>\n<input type=\"text\" name=\"phone\" value=\"\">\n\n<label for=\"twitter\">Twitter</label>\n<input type=\"text\" name=\"twitter\" value=\"\">\n\n<label for=\"linkedin\">LinkedIn</label>\n<input type=\"text\" name=\"linkedin\" value=\"\">\n\n<input class=\"formSubmit\" type=\"submit\" value=\"Create Contact\">\n";
},"useData":true});
this["JST"]["contact/display"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Contacts</h1>\n<ul class=\"contactsOrderedList\"></ul>\n";
},"useData":true});
this["JST"]["contact/displayContact"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li>\n  <h3>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n  <p>"
    + alias3(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.linkedin || (depth0 != null ? depth0.linkedin : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"linkedin","hash":{},"data":data}) : helper)))
    + "</p>\n  <p>"
    + alias3(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"twitter","hash":{},"data":data}) : helper)))
    + "</p>\n</li>\n";
},"useData":true});