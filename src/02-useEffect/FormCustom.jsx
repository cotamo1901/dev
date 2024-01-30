import { Message } from "./Message";
import { userForm } from "../hooks/userForm";

export const FormCustom = () => {
  const { form, handleInputChange } = userForm({
    username: "",
    email: "",
    password: "",
  });
  
  const { username, email, password } = form;
  return (
    <>
      <h1>Formulario Custom</h1>
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
        onChange={handleInputChange}
        value={email}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
        value={password}
      />
      {/* value={email} */}
      {username === "cotamo" && <Message />}
    </>
  );
};
