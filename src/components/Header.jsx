import Button from "../components/Button";
export default function Header({ active, onChange }) {
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
        <Button style={{ backgroundColor: 'transparent',color: '#363335', fontSize: '16px', padding:'0px', margin:'0px'}}  isActive={active === "main"} onClick={() => onChange("main")}>
        <a >Главная</a>
        </Button>
        <Button style={{ backgroundColor: 'transparent',color: '#363335', fontSize: '16px', padding:'0px',margin:'0px'}} isActive={active === "auth"} onClick={() => onChange("auth")}>
          <a >Правообладателям</a>
          
        </Button>
        <a className="button-active--color" href="#request">
          Заказать
        </a>
      </nav>
    </div>
  );
}
