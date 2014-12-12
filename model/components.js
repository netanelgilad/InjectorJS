components = new Meteor.Collection('components');

components.attachSchema(new SimpleSchema({
  user : {
    type : String,
    label : "User"
  },
  name : {
    type: String,
    label: "Name"
  },
  dependencies: {
    type: [Object]
  },
  'dependencies.$.user' : {
    type : String
  },
  'dependencies.$.name' : {
    type : String
  }
}));