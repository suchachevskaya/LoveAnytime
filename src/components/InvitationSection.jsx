import Button from "./Button";
export default function InvitationSection() {
  return (
    <div className="invitationSection">
      {" "}
      <h3>Зажгите свою атмосферу</h3>
      <h6>
        Откройте коллекцию свечей, которые создают настроение. Каждая свеча
        рассказывает свою уникальную историю уюта, превращая обычные моменты в
        нечто особенное. Позвольте свету и теплу вдохновлять и добавлять
        гармонию в ваш дом.
      </h6>
     <div>
     <a className="button-active--color" href="#request">
        Заказать
      </a>
      <a className="button-active--color" href="#products">
        Ассортимент
      </a>
     </div>
    </div>
  );
}
