import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

type useInputsHook<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void, () => void];

const useInputs = <T>(initialForm: T): useInputsHook<T> => {
  const [form, setForm] = useState<T>(initialForm);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
};

export default useInputs;
