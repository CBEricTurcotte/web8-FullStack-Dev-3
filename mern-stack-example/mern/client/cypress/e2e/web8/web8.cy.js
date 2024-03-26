/// <reference types="cypress" />

describe("Web 8 auto-grading", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Log to home page", () => {
    cy.visit("/");
  });
  it("Boostrap - A red notification is trigger at failed login", () => {
    cy.get("#email").type("cypress@gmail.com");
    cy.get("#password").type("1212");
    cy.get(".rounded-lg > .inline-flex").click();

    // login button #id
    cy.get(".fade").should("be.visible");

    // Wait for 5 seconds
    cy.wait(5000);

    // Assert that the .fade element is no longer visible after 5 seconds
    cy.get(".fade").should("not.be.exist");
    cy.request({
      method: "POST",
      url: "http://localhost:5050/agent/login",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.satisfy((status) => {
        return status === 400 || status === 401;
      });
    });
  });
  it.skip("Boostrap 2 - A green notification is triggered on(create,update,delete)success", () => {
    cy.visit("/");
  });
  it.skip("Boostrap 3 - A red notification is triggered on(create,update,delete)failure", () => {
    cy.visit("/");
  });
  it.skip("Boostrap 4 - Confirmation is required prior to processing update or delete", () => {
    cy.visit("/");
  });
  it.skip("Home Page - The admin home page is a grid of cards", () => {
    cy.visit("/");
  });
  it.skip("Home Page 2 - An'Agent Management'card exists and works properly", () => {
    cy.visit("/");
  });
  it.skip("Home Page 3 - An'Transaction'card exists and works properly", () => {
    cy.visit("/");
  });
  it.skip("Home Page 4 - The'Create Agent' link from navbar has been moved to the Agent Management component", () => {
    cy.visit("/");
  });
  it.skip("Session - Mongo contains a Session collection with required fields", () => {
    cy.visit("/");
  });
  it.skip("Session 2 - A check for session_token is made when the user navigates to any page", () => {
    cy.visit("/");
  });
  it.skip("Session 3 - The user is redirected to the login page if no token isfound or if the token is invalid", () => {
    cy.visit("/");
  });
  it.skip("Session 4 - The user is redirected to the admin home page if the session/token is valid", () => {
    cy.visit("/");
  });
  it.skip("Session 5 - GET/validate_token properly validates the token passed as a query parameter", () => {
    cy.visit("/");
  });
  it.skip("Session 6 - GET/validate_token returns proper data in proper format", () => {
    cy.visit("/");
  });
  it.skip("Session 7 - When validating a session,a check is made on DB to see if session exists and if token is valid", () => {
    cy.visit("/");
  });
  it.skip("Session 8 - On successful login,a session is saved through POST/session", () => {
    cy.visit("/");
  });
  it.skip("Session 9 - Session contains a successfully generated token", () => {
    cy.visit("/");
  });
  it.skip("Session 10 - Session contains a 24 hours expiration date", () => {
    cy.visit("/");
  });
  it.skip("Transactions- The transaction page shows a list of the last ten transactions", () => {
    cy.visit("/");
  });
  it.skip("Transactions 2 - The transactions listed includes date,amount and agent fullname", () => {
    cy.visit("/");
  });
  // it.skip("Transactions 3 - The'Create Agent' link from navbar has been moved to the Agent Management component", () => {
  //   cy.visit("/");
  // });
  it.skip("Transactions 4 - GET/transaction-data returns the last 10 transactions from DB in proper format", () => {
    cy.visit("/");
  });
  it.skip("Transactions 5 - GET/transaction-data returns agents data from Mongo in proper format ", () => {
    cy.visit("/");
  });
  it.skip("Transaction Form - An input field takes theamountof transactionsandonlypositive' ", () => {
    cy.visit("/");
  });
  it.skip("Transaction Form 2 - A drop down menu exists and contains all the agents by name and id ", () => {
    cy.visit("/");
  });
  it.skip("Transaction Form 3 - Form data is saved to DB through a POST on /transaction ", () => {
    cy.visit("/");
  });
  it.skip("Transaction Form 4 - Data is saved to a Transaction object {date, amount, agent_id}", () => {
    cy.visit("/");
  });
  it.skip("Transaction Form 5 - POST /transaction takes amount and agent_id as body params", () => {
    cy.visit("/");
  });
});
