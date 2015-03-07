/**
 * Created by netanel on 24/10/14.
 */
Meteor.methods({
  'initDB' : function() {
    functions.remove({});

    return true;
  }
});