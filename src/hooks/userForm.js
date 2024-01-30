import { useState } from "react";

export const userForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    ...form,
    form,
    handleInputChange,
  };
};
