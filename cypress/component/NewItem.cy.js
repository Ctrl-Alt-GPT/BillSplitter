import React from 'react';
import NewItem from '../../src/components/NewItem/NewItem';

describe('NewItem.cy.js', () => {
  it('render', () => {
    // cy.mount()
    cy.viewport(1024, 768);
    cy.mount(<NewItem />);
  });
});
