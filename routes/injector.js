/**
 * Created by netanel on 24/10/14.
 */
Router.route('/injector/:user/:comp', function () {
  var req = this.request;
  var res = this.response;
  res.end('<script src="/components/' + this.params.user + '/' + this.params.comp + '"></script>');
}, {where: 'server'});