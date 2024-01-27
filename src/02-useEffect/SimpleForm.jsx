import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const { username, email } = form;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [form]);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={handleInputChange}
        value={username}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
      />
      {/* value={email} */}
      {username === "cotamo" && <Message />}
    </>
  );
};
