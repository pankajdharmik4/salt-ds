import { composeStories } from "@storybook/testing-react";
import * as cardStories from "@stories/card/card.stories";
import { checkAccessibility } from "../../../../../../cypress/tests/checkAccessibility";

const composedStories = composeStories(cardStories);
const { Default } = composedStories;

describe("Given a Card", () => {
  checkAccessibility(composedStories);

  it("should render children", () => {
    cy.mount(<Default />);
    cy.findByText("Sustainable investing products").should("be.visible");
    cy.findByText(
      "We have a commitment to provide a wide range of investment solutions to enable you to align your financial goals to your values."
    ).should("be.visible");
  });
});
