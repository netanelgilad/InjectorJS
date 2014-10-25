components = new Meteor.Collection('components');

var literalsToUndefine = 'undefined, window';

function compileDependencies(component, compiledComponents) {
  var dependencyList = '';
  if (_.isArray(component.dependencies)) {
    _.forEach(component.dependencies, function(dependency) {
      var depComponent = components.findOne({ name: dependency.name, user: dependency.user });
      Meteor.call('compileComponent', depComponent, compiledComponents);
      dependencyList += dependency.name +  ',';
    });
  }

  return dependencyList.substring(0, dependencyList.length - 1);
}

Meteor.methods({
  compileComponent : function(component, compiledComponents) {
    if (!_.isArray(compiledComponents)) {
      compiledComponents = [];

      var dependencyList = compileDependencies(component, compiledComponents);

      var result = '';
      _.forEach(compiledComponents, function(component) {
        result += 'var ' + component.name + '=' + component.text + ';';
      });

      result += '(function(' + dependencyList + ',' + literalsToUndefine + '){' + component.funcText + '})(' + dependencyList + ');';

      return result;
    }
    else {
      if (_.findWhere(compiledComponents, {name : component.user + '/' + component.name })) {
        return;
      }

      var dependencyList = compileDependencies(component, compiledComponents);

      compiledComponents.push({
        name : component.user + '/' + component.name,
        text : '(function(' + dependencyList + ',' + literalsToUndefine + '){' + component.funcText + '})(' + dependencyList + ');'
      });

      return;
    }
  }
});