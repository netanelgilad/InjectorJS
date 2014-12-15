functions = new Meteor.Collection('functions');

functions.attachSchema(new SimpleSchema({
  name : {
    type: String,
    label: "Name"
  },
  dependencies: {
    type: [String]
  },
  body : {
    type: String
  }
}));