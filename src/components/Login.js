function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    console.log(regexEmail.test(email));

    if (email === "" || password === "") {
      console.log("Los campos no pueden estar vacios");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("El correo es valido");
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Credenciales invalidas");
      return;
    }
  };
  return (
    <>
      <h2>Formulario de Login</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Correo electronico:</span> <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña:</span> <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
      </form>
    </>
  );
}

export default Login;
