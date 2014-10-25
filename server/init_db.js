/**
 * Created by netanel on 24/10/14.
 */
Meteor.methods({
  'initDB' : function() {
    components.insert({
      user : 'netanel',
      name : 'check',
      funcText : 'console.log("me here");'
    });

    return true;
  }
})