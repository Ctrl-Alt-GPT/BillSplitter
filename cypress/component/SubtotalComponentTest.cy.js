import Item from '../../src/components/DisplayTotal/Subtotal';

describe('SubtotalComponentTest.cy.js', () => {
  it('mount', () => {
    cy.mount(<Subtotal />);
  });

  it('props', () => {
    cy.mount(<Subtotal itemAmounts={1} />);
  });
});