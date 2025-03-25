import { useState } from "react";
import Button from "./Button";
import "../css/Form.css";

export default function ContactForm() {
  const [hasError, setHasError] = useState("");
  const [communication, setCommunication] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleChange(setState) {
    return (event) => {
      setState(event.target.value);
      setHasError(event.target.value.trim().length === 0);
    };
  }
  return (
    <div className="contactForm">
      <section>
        <h3 id="contact">Свяжитесь с нами</h3>
        <address>
          <h6>
            <a className="telContact" href="tel:+66666666">+666 666 66</a>
          </h6>
          <h6>
            <a className="mailContact" href="blabla@gmail.com">blabla@gmail.com</a>
          </h6>
          <h6>
            <a className="instContact" href="https://www.tiktok.com/@lublu_vsegda?_t=ZM-8uySnytNnvj&_r=1">Instagram</a>
          </h6>
          <h6>
            <a className="ttContact" href="https://www.tiktok.com/@lublu_vsegda?_t=ZM-8uySnytNnvj&_r=1">TikTok</a>
          </h6>
          <h6>ул.я без понятия какой адрес</h6>
        </address>
      </section>
      <form className="containerContactForm">
        <div className="inplabWrapper">
          <label htmlFor="communication">Как мы можем с вами связаться?</label>
          <input
            value={communication}
            style={{ border: hasError ? "1px solid red" : null }}
            onChange={handleChange(setCommunication)}
            type="text"
            id="communication"
            placeholder="Укажите ваш email или номер телефона для связи"
          />
        </div>
        <div className="inplabWrapper">
          <label htmlFor="name">Ваше имя</label>
          <input
            value={name}
            style={{ border: hasError ? "1px solid red" : null }}
            onChange={handleChange(setName)}
            type="text"
            id="name"
            placeholder="Как к вам можно обращаться?"
          />
        </div>
        <div className="inplabWrapper">
          <label htmlFor="description">Ваш запрос</label>
          <textarea
            value={description}
            style={{ border: hasError ? "1px solid red" : null }}
            onChange={handleChange(setDescription)}
            id="description"
            placeholder="Напишите, с чем вы хотите обратиться к нам."
          ></textarea>
        </div>
        <a className="button-active--color" href="#request">
          Отправить
        </a>
      </form>
    </div>
  );
}
