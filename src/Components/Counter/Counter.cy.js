import React from 'react';
import { Counter } from './Counter';

describe('Test Counter Component', () => {
  it('renders initial value provided in props', () => {
    const initialValue = 0;
    cy.mount(<Counter initialValue={initialValue} />);
    cy.get('.counterLabel').should('contain', initialValue);
  });

  it('increments the displayed value when "increment" button is clicked', () => {
    const initialValue = 0;
    cy.mount(<Counter initialValue={initialValue} />);
    cy.get('#incrementButton').click();
    cy.get('.counterLabel').should('contain', initialValue + 1);
  });

  it('decrements the displayed value when "decrement" button is clicked', () => {
    const initialValue = 2;
    cy.mount(<Counter initialValue={initialValue} />);
    cy.get('#decrementButton').click();
    cy.get('.counterLabel').should('contain', initialValue - 1);
  });
});