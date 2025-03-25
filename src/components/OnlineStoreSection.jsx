import Button from "./Button";
export default function OnlineStoreSection() {
  return (
    <div className="onlineStoreSection">
      <h3 id="request">Ваше новое вдохновение ждет в нашем магазине</h3>
    <div className="onlineStoreDescription">
    <h6>
        Теперь наши товары ещё ближе! Исследуйте нашу коллекцию на eMall и
        подарите себе лёгкость выбора и покупки.
      </h6>
      <a className="button-active--color" href="#products">
        Заказать в интернет-магазине
      </a>
    </div>
    </div>
  );
}
