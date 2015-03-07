functions = new Meteor.Collection('functions');

functions.attachSchema(new SimpleSchema({
  name : {
    type: String,
    label: "Name"
  },
  arguments : {
    type: [String],
    label : "Arguments",
    defaultValue : []
  },
  dependencies: {
    type: [String],
    defaultValue: []
  },
  body : {
    type: String
  }
}));


Meteor.methods({
  saveFunction : function(func) {
    return functions.upsert({
      name : func.name
    }, {
      $set : func
    });
  }
});