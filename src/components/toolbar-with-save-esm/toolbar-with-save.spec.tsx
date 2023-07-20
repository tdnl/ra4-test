import { render, screen } from "@testing-library/react";
import { AdminContext, RaRecord } from "react-admin";
import { ToolbarWithSave } from "./toolbar-with-save";
import { Form } from "../../tests/utils/form";

describe("RA component (esm)", () => {
  const record: RaRecord = { id: 1 };

  it("should render", () => {
    render(
      <AdminContext>
        <Form defaultValues={record}>
          <ToolbarWithSave />
        </Form>
      </AdminContext>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
