import { Toolbar } from "react-admin";
import { useFormState } from "react-hook-form";
import { SaveButton } from "./save-button";

export function ToolbarWithSave() {
  const { isValid, isValidating } = useFormState();

  return (
    <Toolbar>
      <SaveButton disabled={isValid && !isValidating} />
    </Toolbar>
  );
}
