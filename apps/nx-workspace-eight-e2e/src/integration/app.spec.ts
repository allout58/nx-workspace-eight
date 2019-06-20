import { getGreeting } from '../support/app.po';

describe('nx-workspace-eight', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to nx-workspace-eight!');
  });
});
