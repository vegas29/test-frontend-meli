import { useState } from "react";

interface FormValues {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


export const useForm = (initialState: FormValues = {}): [
  FormValues,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [values, setValues] = useState<FormValues>(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return [values, handleInputChange, reset];
};