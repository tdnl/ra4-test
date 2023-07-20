import { render, screen } from "@testing-library/react";
import {
  AdminContext,
  Form as RAForm,
  RaRecord,
  RecordContextProvider,
} from "react-admin";
import { ToolbarWithSave } from "./ra-toolbar-with-save";
import { Form as TestForm } from "../../tests/utils/form";

describe("RA component", () => {
  const record: RaRecord = { id: 1 };

  it("should render with RA Form", () => {
    render(
      <AdminContext>
        <RecordContextProvider value={record}>
          <RAForm onSubmit={vi.fn()}>
            <ToolbarWithSave />
          </RAForm>
        </RecordContextProvider>
      </AdminContext>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render with test form", () => {
    render(
      <AdminContext>
        <RecordContextProvider value={record}>
          <TestForm onSubmit={vi.fn()}>
            <ToolbarWithSave />
          </TestForm>
        </RecordContextProvider>
      </AdminContext>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
