/**
 * Created by netanel on 24/10/14.
 */
Meteor.methods({
  'initDB' : function() {
    components.remove({});

    return true;
  }
});