import { type PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface TestFormProps<TData = any> {
  defaultValues?: TData;
  onSubmit?: (data: TData) => void;
}

export function Form({
  children,
  onSubmit = vi.fn(),
  defaultValues,
}: PropsWithChildren<TestFormProps>) {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
