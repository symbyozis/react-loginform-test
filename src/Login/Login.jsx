import React from "react";

import "./login.scss";
import logo from "../assets/images/logo.svg";
import eye from "../assets/images/eye.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "password"
    };

    this.showHide = this.showHide.bind(this);
    this.emptyInp = this.emptyInp.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "text" ? "password" : "text"
    });
  }

  emptyInp(e) {
    if (e.target.value) {
      e.target.parentNode.querySelector(".g").style.display = "block";
      e.target.style.borderColor = "#00010429";
    } else {
      e.target.style.borderColor = "#DF524E";
      e.target.parentNode.querySelector(".g").style.display = "none";
    }
  }

  render() {
    return (
      <form action="">
        <img src={logo} className="logo" alt="logo" />
        <label className="inp">
          <input
            name="login"
            type="text"
            placeholder="Логин"
            onChange={this.emptyInp}
          />
          <span className="g"></span>
        </label>
        <label className="inp password">
          <input
            name="password"
            type={this.state.type}
            placeholder="Пароль"
            onChange={this.emptyInp}
          />
          <span className="password__show" onClick={this.showHide}>
            <img src={eye} alt="" />
          </span>
          <span className="g"></span>
        </label>

        <main>
          <label>
            <input type="checkbox" />
            <span></span>
            Запомнить меня
          </label>
          <a href="#">Забыли пароль?</a>
        </main>
        <button className="btn">Войти</button>
        <footer>
          Нет аккаунта? <a href="#">Регистрация</a>
        </footer>
      </form>
    );
  }
}

export default Login;
