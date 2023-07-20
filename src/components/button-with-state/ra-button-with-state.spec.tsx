import { render, screen } from "@testing-library/react";
import { AdminContext, SimpleForm, Form as RAForm } from "react-admin";

import { ButtonWithState } from "./button-with-state";

describe("RA Components", () => {
  it("should render with RA Form", () => {
    render(
      <AdminContext>
        <RAForm defaultValues={{ id: 1 }} onSubmit={vi.fn()}>
          <ButtonWithState />
        </RAForm>
      </AdminContext>
    );

    expect(
      screen.getByRole("button", { name: "test-button" })
    ).toBeInTheDocument();
  });

  it("should render with RA SimpleForm", () => {
    render(
      <AdminContext>
        <SimpleForm>
          <ButtonWithState />
        </SimpleForm>
      </AdminContext>
    );

    expect(
      screen.getByRole("button", { name: "test-button" })
    ).toBeInTheDocument();
  });
});
