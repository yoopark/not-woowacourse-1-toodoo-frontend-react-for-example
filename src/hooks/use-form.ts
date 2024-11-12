import { useState } from 'react';

const useForm = <T extends Record<string, unknown>>(params: {
  initialValues: T;
}) => {
  const { initialValues } = params;

  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  const isDirty = Object.entries(values).some(
    ([key, value]) => value !== initialValues[key],
  );

  return { values, handleChange, isDirty, reset };
};

export { useForm };
