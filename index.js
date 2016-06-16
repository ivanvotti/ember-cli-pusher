var path = require('path');

module.exports = {
  name: 'Ember CLI Pusher',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/pusher/dist/web/pusher.js');
    this.app.import(app.bowerDirectory + '/ember-pusher-component/ember-pusher.amd.js', {
      exports: {
        'ember-pusher/controller':    ['Controller'],
        'ember-pusher/bindings':      ['Bindings'],
        'ember-pusher/client_events': ['ClientEvents']
      }
    });
  }
}
