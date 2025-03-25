export default function Bottom() {
  return (
    <div className="bottom">
      <figcaption>
        <figure>
          <img src="src/img/logo-transparent.png" alt="emall" />
          <img src="src/img/emall-logo.png" alt="Logo" />
        </figure>

        <nav>
          <a href="#about">О нас</a>
          <a href="#products">Ассортимент</a>
          <a href="#contact">Контакты</a>
          <a className="button-active--color" href="#request">
            Заказать
          </a>
        </nav>
      </figcaption>

      <hgroup>
        <p>Магазин свечей</p>
        <p>Декоративные свечи</p>
        <p>Ароматические свечи</p>
        <p>Праздничный декор</p>
        <p>Красивые свечи</p>
        <p>Свечи для дома</p>
      </hgroup>
    </div>
  );
}
