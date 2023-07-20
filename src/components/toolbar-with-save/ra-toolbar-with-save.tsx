import { Toolbar, SaveButton } from "react-admin";
import { useFormState } from "react-hook-form";

export function ToolbarWithSave() {
  const { isValid, isValidating } = useFormState();

  return (
    <Toolbar>
      <SaveButton disabled={isValid && !isValidating} />
    </Toolbar>
  );
}
