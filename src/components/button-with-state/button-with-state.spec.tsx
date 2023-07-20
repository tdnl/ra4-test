import { render, screen } from "@testing-library/react";

import { ButtonWithState } from "./button-with-state";
import { Form as TestForm } from "../../tests/utils/form";

describe("RA Components", () => {
  it("should render with TestForm", () => {
    render(
      <TestForm defaultValues={{ id: 1 }}>
        <ButtonWithState />
      </TestForm>
    );

    expect(
      screen.getByRole("button", { name: "test-button" })
    ).toBeInTheDocument();
  });
});
