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
  // it("Admin App 3 - The favicon has been changed to reflect the Rocket Elevator App", () => {
  //   cy.visit("http://localhost:5173/home");
  //   cy.get('link[rel="icon"]').should(
  //     "have.attr",
  //     "href",
  //     "/src/images/RocketElevatorsIcon.ico"
  //   );
  // });
  // it("Admin App 4 - The Mongo logo has been changed to reflect the Rocket Elevator App", () => {
  //   cy.visit("http://localhost:5173");
  //   cy.get('img[alt="Rocket Logo"]');
  //   // .invoke("attr", "src")
  //   // .should("include", "RocketElevatorsLogo.png");
  // });

  // it("Admin App 5 - Agent table has been modified to includes:Name,Region,Rating,Fee, Action", () => {
  //   cy.visit("http://localhost:5173/home");
  //   cy.contains("th", "Name").should("exist");
  //   cy.contains("th", "Region").should("exist");
  //   cy.contains("th", "Rating").should("exist");
  //   cy.contains("th", "Fee").should("exist");
  //   cy.contains("th", "Action").should("exist");
  // });
  // it("Admin App 6 - A login route has been created", () => {
  //   // Assert that the /login route is defined in your routes/server/routes/agent.js file //
  //   cy.readFile("../server/routes/agent.js").then((content) => {
  //     expect(content).to.include("/login");
  //   });
  // });
  // it("Admin App 7 - The login route is working", () => {
  //   cy.request("http://localhost:5173").then((response) => {
  //     expect(response.status).to.eq(200); // Assuming 200 OK response for successful existence
  //   });
  // });
  // it("Admin App 8 - After logging in successfully, the user is taken to the home page", () => {
  //   cy.request("/login").then((response) => {
  //     expect(response.status).to.eq(200); // Assuming 200 OK response for successful existence
  //     cy.get("#email").type("cypress@gmail.com");
  //     cy.get("#password").type("test456");
  //     cy.get(".rounded-lg > .inline-flex").click();
  //     cy.url().should("include", "/home"); // Assuming it was rename /home
  //   });
  // });
  // it("Admin App 9 - When login is unsuccessful, the user is taken to an error / unauthorized page", () => {
  //   cy.visit("http://localhost:5173");
  //   cy.get("#email").type("cypress@gmail.com");
  //   cy.get("#password").type("nopassword");
  //   cy.get(".rounded-lg > .inline-flex").click();
  //   cy.url().should("include", "/error"); // Assuming error page is name /error
  // });
  // it("Admin App 10 - Agents MongoDB schema has been created", () => {
  //   cy.readFile("../server/db/schemas/agent.Schema.js").should("exist"); // Assuming the structure and naming are establiched
  // });
});
//
