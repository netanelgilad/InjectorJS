/**
 * Created by netanel on 24/10/14.
 */

var literalsToUndefine = 'undefined, window';

function compileDependencies(component, compiledComponents) {
  var dependencyList = '';
  if (_.isArray(component.dependencies)) {
    _.forEach(component.dependencies, function(dependency) {
      var depComponent = components.findOne({ name: dependency.name, user: dependency.user });
      compileComponent(depComponent, compiledComponents);
      dependencyList += dependency.name +  ',';
    });
  }

  return dependencyList.substring(0, dependencyList.length - 1);
}

function compileComponent(component, compiledComponents) {
  if (!_.isArray(compiledComponents)) {
    compiledComponents = [];

    var dependencyList = compileDependencies(component, compiledComponents);

    var result = '';
    _.forEach(compiledComponents, function(component) {
      result += 'var ' + component.name + '=' + component.text + ';';
    });

    result += '(function(' + dependencyList + ((dependencyList === '') ? '' : ',') + literalsToUndefine + '){' + component.funcText + '})(' + dependencyList + ');';

    return result;
  }
  else {
    if (_.findWhere(compiledComponents, {name : component.user + '/' + component.name })) {
      return;
    }

    var dependencyList = compileDependencies(component, compiledComponents);

    compiledComponents.push({
      name : component.name,
      text : '(function(' + dependencyList + ((dependencyList === '') ? '' : ',') + literalsToUndefine + '){' + component.funcText + '})(' + dependencyList + ')'
    });

    return;
  }
}

Router.route('/components/:user/:comp', function() {
  var component = components.findOne({ name: this.params.comp, user: this.params.user });
  if (!component) {
    this.response.end('console.log("component was not found");');
  }
  else {
    this.response.end(compileComponent(component));
  }
}, {where:'server'});