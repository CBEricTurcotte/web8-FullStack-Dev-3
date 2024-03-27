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
  it("Boostrap 2 - A green notification is triggered on create success", () => {
    cy.visit("http://localhost:5173/agentList");
    cy.get(".text-md").click();
    cy.get("#name").type("test cypress");
    cy.get("#rating").type("2000");
    cy.get("#fee").type("1000");
    cy.get("#regionNorth").click();
    cy.get(".inline-flex").click();
    cy.get(".fade").should("be.visible");
    // Get the computed color of the fading element
    cy.get(".fade")
      .invoke("css", "color")
      .then((color) => {
        // Use Chai's assertion to check if the color matches the expected color
        expect(color).to.equal("rgb(10, 54, 34)");
      });
  });
  it("Boostrap 2 - A green notification is triggered on update success", () => {
    cy.visit("http://localhost:5173/agentList");
    cy.get(":nth-child(1) > :nth-child(5) > .flex > a.inline-flex").click();
    cy.get("#fee").clear().type("500");
    cy.get(".inline-flex").click();
    cy.get(".fade").should("be.visible");
    // Get the computed color of the fading element
    cy.get(".fade")
      .invoke("css", "color")
      .then((color) => {
        // Use Chai's assertion to check if the color matches the expected color
        expect(color).to.equal("rgb(10, 54, 34)");
      });
  });
  it.skip("Boostrap 2 - A green notification is triggered on delete success", () => {
    cy.visit("http://localhost:5173/agentList");
    cy.get("button.btn.btn-warning").contains("Delete").eq(0).click();
    cy.get(".fade")
      .invoke("css", "color")
      .then((color) => {
        // Use Chai's assertion to check if the color matches the expected color
        expect(color).to.equal("rgb(10, 54, 34)");
      });
  });
  it.skip("Boostrap 3 - A red notification is triggered on(create,update,delete)failure", () => {
    cy.visit("/");
  });
  it.skip("Boostrap 4 - Confirmation is required prior to processing update", () => {
    cy.visit("/");
  });
  it("Boostrap 4 - Confirmation is required prior to processing delete", () => {
    cy.visit("http://localhost:5173/agentList");
    cy.get("button.btn.btn-warning").contains("Delete").eq(0).click();
    cy.get(".alert.alert-warning") // Select the alert element with the warning class
      .contains("Are you sure you want to delete this agent?") // Check if it contains the specified text
      .parent() // Move up to the parent element of the text
      .find(".btn.btn-danger") // Find the button with the danger class inside the parent element
      .click(); // Click on the button
    cy.get(".fade")
      .invoke("css", "color")
      .then((color) => {
        // Use Chai's assertion to check if the color matches the expected color
        expect(color).to.equal("rgb(10, 54, 34)");
      });
  });
  it("Home Page - The admin home page is a grid of cards", () => {
    cy.visit("http://localhost:5173/home");
    // Validate the URL
    cy.url().should("include", "/home");
    cy.get(".w-full") // Select the element with class .w-full
      .find(
        ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.my-4.css-bhp9pd-MuiPaper-root-MuiCard-root"
      ) // Find cards with specific classes
      .should("have.length", 2);
  });
  it("Home Page 2 - An'Agent Management'card exists and works properly", () => {
    cy.visit("http://localhost:5173/home");
    // Select the first card and check if it contains the text "Agent Management"
    cy.get(".w-full") // Select the element with class .w-full
      .find(
        ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.my-4.css-bhp9pd-MuiPaper-root-MuiCard-root"
      ) // Find cards with specific classes
      .first() // Select the first card
      .contains("Agent Management") // Check if it contains the text "Agent Management"
      .should("exist");
  });
  it("Home Page 3 - An'Transaction'card exists and works properly", () => {
    cy.visit("http://localhost:5173/home");
    // Select the second card and check if it contains the text "Transaction"
    cy.get(".w-full") // Select the element with class .w-full
      .find(
        ".MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root.my-4.css-bhp9pd-MuiPaper-root-MuiCard-root"
      ) // Find cards with specific classes
      .eq(1) // Select the second card (index 1)
      .contains("Transaction") // Check if it contains the text "Transaction"
      .should("exist"); // Ensure the text exists within the card
  });
  it("Home Page 4 - The'Create Agent' link from navbar has been moved to the Agent Management component", () => {
    cy.visit("http://localhost:5173/agentList");
    cy.get(".text-md")
      .contains("Create Agent") // Find the button containing the text "Create Agent"
      .should("exist");
    /////////////
    cy.visit("http://localhost:5173/"); // test Login page
    cy.get(".text-md")
      .contains("Create Agent") // Find the button containing the text "Create Agent"
      .should("not.exist");
    /////////////
    cy.visit("http://localhost:5173/unauthorized"); // test unauthorized page
    cy.get(".w-full")
      .contains("Create Agent") // Find the button containing the text "Create Agent"
      .should("not.exist");
    /////////////
    cy.visit("http://localhost:5173/home"); // test home page
    cy.get(".w-full")
      .contains("Create Agent") // Find the button containing the text "Create Agent"
      .should("not.exist");
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
  it("Transactions- The transaction page shows a list of the last ten transactions", () => {
    cy.visit("http://localhost:5173/transaction");
    cy.visit("http://localhost:5173/");
    cy.get("#email").type("cypress@gmail.com");
    cy.get("#password").type("test456");
    cy.get(".rounded-lg > .inline-flex").click();
    cy.get(":nth-child(3) > .card-link > .MuiCardContent-root").click();
  });
  it("Transactions 2 - The transactions listed includes date,amount and agent fullname", () => {
    cy.visit("http://localhost:5173/transaction");
    cy.visit("http://localhost:5173/");
    cy.get("#email").type("cypress@gmail.com");
    cy.get("#password").type("test456");
    cy.get(".rounded-lg > .inline-flex").click();
    cy.get(":nth-child(3) > .card-link > .MuiCardContent-root").click();
    cy.get(".mb-8")
      .should("exist") // Ensure the element exists
      .within(() => {
        // Check for the presence of titles
        cy.contains("Date").should("exist"); // Check for "Date" subtext
        cy.contains("Amount").should("exist"); // Check for "Amount" subtext
        cy.contains("Agent Full Name").should("exist");
      });
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
  it.skip("Transaction Form - An input field takes the amount of transactions and only positive' ", () => {
    cy.visit("/");
  });
  it.only("Transaction Form 2 - A drop down menu exists and contains all the agents by name and id ", () => {
    cy.visit("http://localhost:5173/transaction");
    cy.get("#agents") // Assuming the dropdown has ID 'agents'
      .should("exist") // Ensure the dropdown element exists
      .should("have.prop", "tagName", "SELECT") // Ensure it is a select element
      .should(
        "have.attr",
        "class",
        "border border-gray-300 rounded-md px-3 py-2 w-full"
      ) // Check the class of the select element
      .within(() => {
        // Check the options within the select element
        cy.get('option[value=""]').should("have.attr", "disabled"); // Check for disabled first option
        cy.get('option:not([value=""])').should("have.length.greaterThan", 0); // Check for non-disabled options (agents)
      });
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
