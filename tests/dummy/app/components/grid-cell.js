import Component from 'ember-component';
import layout from '../templates/components/grid-cell';

export default Component.extend({
  layout,
  classNames: [
    'c-grid-cell',
    'o-grid-cell',
    'o-grid',
    'o-grid--align-center',
    'o-grid--align-middle'
  ],

  title: null
});
