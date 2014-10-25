/**
 * Created by netanel on 24/10/14.
 */
Template.AddComponent.rendered = function() {
  var myTextArea = this.find('textarea');
  this.editor = CodeMirror.fromTextArea(myTextArea, {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'ambiance'
  });
};

Template.AddComponent.created = function() {
  Session.set('newComponent', {
    dependencies: []
  });
};

Template.AddComponent.helpers({
  newComponent : function() {
    return Session.get('newComponent');
  }
});

Template.AddComponent.events({
  'click button#addDependency' : function(event, template) {
    var newComponent = Session.get('newComponent');
    var newDep = template.$('#newDep');
    var user = newDep.val().split('/')[0];
    var name = newDep.val().split('/')[1];
    newComponent.dependencies.push({
      user: user,
      name: name
    });
    newDep.val('');
    Session.set('newComponent', newComponent);
  },
  'input #user' : function(e) {
    var newComponent = Session.get('newComponent');
    newComponent.user = e.target.value;
    Session.set('newComponent', newComponent);
  },
  'input #name' : function(e) {
    var newComponent = Session.get('newComponent');
    newComponent.name = e.target.value;
    Session.set('newComponent', newComponent);
  },
  'click button#saveComponent' : function(event, template) {
    // add validations
    var newComponent = Session.get('newComponent');
    newComponent.funcText = template.editor.getValue();
    components.insert(newComponent);
  }
});