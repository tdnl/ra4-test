import { type ComponentPropsWithoutRef } from "react";
import { useFormState } from "react-hook-form";

export function ButtonWithState(props: ComponentPropsWithoutRef<"button">) {
  const { isDirty, isValid } = useFormState();

  return (
    <button
      disabled={!isDirty || !isValid}
      {...props}
      aria-label="test-button"
    />
  );
}
