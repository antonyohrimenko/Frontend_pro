import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./LoginForm.css";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Отключаем перезагрузку страницы
    console.log("Поздравляю, данные ушли на сервер!"); //  100% ушли консоль не врет :))))
    alert("Ха-ха, данные ушли на сервер!");
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <MyInput
        name="login"
        type="text"
        placeholder="Введите ваш логин"
        label="Логин:"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Введите ваш email"
        label="Email:"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Введите ваш пароль"
        label="Пароль:"
      />
      <MyButton type="submit" text="Sign-in" />
    </form>
  );
}
