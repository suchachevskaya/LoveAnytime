export default function Header() {
  return (
    <div className="header">
      <picture>
        <source srcSet="src/img/logo.jpg" media="(orientation: portrait)" />
        <img src="src/img/emall-logo.png" alt="Logo" />
      </picture>
      <nav>
        <a href="#about">О нас</a>
        <a href="#products">Ассортимент</a>
        <a href="#products">Контакты</a>
        <a className="button-active--color" href="#contact">
          Оставить заявку
        </a>
      </nav>
    </div>
  );
}
