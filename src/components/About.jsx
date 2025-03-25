import Button from "./Button";
export default function About() {
  return (
    <div className="about">
      <h1>Мир Аромата и Света</h1>
      <figure>
        <div className="bg-image" id="about">
          <img src="src/img/main.png" alt="" />
        </div>
        <figcaption>
          <img src="src/img/logo-transparent.png" alt="Logo" />
          <h6 >
            Создайте уют и напитайте дом ароматами. У нас вы найдёте свечи,
            которые подарят тепло, стиль и настроение.
          </h6>
          <a className="button-active--color" href="#request">
          Подробнее
        </a>
       
        </figcaption>
      </figure>
    </div>
  );
}
