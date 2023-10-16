import React from 'react'
import TaxTipsAddComponent from './TaxTipsAdd'

describe('<TaxTipsAddComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TaxTipsAddComponent />)
  })
})