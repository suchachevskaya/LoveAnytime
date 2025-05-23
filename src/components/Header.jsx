import Button from "../components/Button";
import { useAuth } from "../hooks/AuthContext.jsx";
export default function Header({ active, onChange }) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="header">
      <picture>
        <source srcSet="src/img/logo.jpg" media="(orientation: portrait)" />
        <img src="src/img/emall-logo.png" alt="Logo" />
      </picture>
      <nav>
        <a href="#about">О нас</a>
        <a href="#products">Ассортимент</a>
        <a href="#contact">Контакты</a>
        <Button
          style={{
            backgroundColor: "transparent",
            color: "#363335",
            fontSize: "16px",
            padding: "0px",
            margin: "0px",
          }}
          isActive={active === "main"}
          onClick={() => onChange("main")}
        >
          <a>Главная</a>
        </Button>

        {!isAuthenticated && (
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#363335",
              fontSize: "16px",
              padding: "0px",
              margin: "0px",
            }}
            isActive={active === "login"}
            onClick={() => onChange("login")}
          >
            <a>Правообладателям</a>
          </Button>
        )}
        {isAuthenticated && (
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#363335",
              fontSize: "16px",
              padding: "0px",
              margin: "0px",
            }}
            isActive={active === "login"}
            onClick={() => onChange("auth")}
          >
        <a>Правообладателям</a>
          </Button>
        )}
        <a className="button-active--color" href="#request">
          Заказать
        </a>
      </nav>
    </div>
  );
}
