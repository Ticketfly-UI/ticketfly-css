import { module, test } from 'qunit';
import createElement from 'dummy/tests/helpers/create-element';

let message;

module('Unit | Modules | Utilities | ticketfly-css-spacing-utilities', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('margin utilities', function (assert) {
  const testElem = createElement('div');

  // reset style rules
  testElem.style.marginTop = '0px';
  testElem.style.marginBottom = '0px';

  assert.equal('0px', getComputedStyle(testElem).marginTop);
  assert.equal('0px', getComputedStyle(testElem).marginBottom);

  testElem.classList.add('u-mv-md');

  message = '`u-mv-md` sets rules for bottom and top margin';

  assert.notEqual('0px', getComputedStyle(testElem).marginTop, message);
  assert.notEqual('0px', getComputedStyle(testElem).marginBottom, message);
});
