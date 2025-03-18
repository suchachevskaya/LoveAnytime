export default function About() {
  return (
    <div className="about">
      <h1>Мир Аромата и Света</h1>
      <figure>
        <div className="bg-image">
          <img src="src/img/main.png" alt="" />
        </div>
        <figcaption>
          <img src="src/img/logo-transparent.png" alt="Logo" />
          <p>
            Создайте уют и напитайте дом ароматами. У нас вы найдёте свечи,
            которые подарят тепло, стиль и настроение.
          </p>
          <button className="button-active--color"> Подробнее</button>
        </figcaption>
      </figure>
    </div>
  );
}
