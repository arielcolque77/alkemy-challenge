import axios from "axios";
import swAlert from "@sweetalert/with-react";

function Login() {
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    console.log(regexEmail.test(email));

    if (email === "" || password === "") {
      swAlert(
        <div>
          <h2>Alerta</h2>
          <p>Los campos no pueden estar vacios</p>
        </div>
      );
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swAlert(
        <div>
          <h2>Alerta</h2>
          <p>El correo es valido</p>
        </div>
      );
      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(
        <div>
          <h2>Alerta</h2>
          <p>Credenciales invalidas</p>
        </div>
      );
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org/", {
        email,
        password,
      })
      .then((res) => {
        swAlert(
          <div>
            <h2>Alerta</h2>
            <p>Perfecto, ingresaste correctamente</p>
          </div>
        )
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        localStorage.setItem("email", email);
        console.log(res.data);
      });
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
