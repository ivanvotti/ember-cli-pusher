import Ember from 'ember';
import { Controller } from 'ember-pusher/controller';

export function initialize(registry, application) {
  application.register('pusher:main', Controller);
  Ember.assert('Pusher library is required', typeof window.Pusher !== 'undefined');
}

export default {
  name: 'pusher',
  initialize: initialize
};
