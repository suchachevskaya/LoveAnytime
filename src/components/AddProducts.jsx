import { useState } from "react";
import { ID } from "appwrite";
import { DATABASE_ID, PRODUCTS_ID, database,} from "../Appwrite";
import { toast } from "react-toastify";

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [hasError, setHasError] = useState(false);
  const [products, setProducts] = useState([]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }
  const productsCard = {
    title,
  };
  async function productsAdd(productsCard) {
    try {
      const response = await database.createDocument(
        DATABASE_ID,
        PRODUCTS_ID,
        ID.unique(),
        productsCard
      );
      toast("Карточка создана");
      setProducts((prevProducts) => [response, ...prevProducts]);
    } catch (error) {
      toast.error("Ошибка создания карточки");
      console.error(error);
    }
  }
  
  return (
    <div>
      <h2>Responsive Form</h2>
      <p>
        Resize the browser window to see the effect. When the screen is less
        than 600px wide, make the two columns stack on top of each other instead
        of next to each other.
      </p>

      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label htmlFor="title">Название свечи</label>
            </div>
            <div className="col-75">
              <input
                value={title}
                style={{ border: hasError ? "1px solid red" : null }}
                onChange={handleTitleChange}
                type="text"
                id="title"
                placeholder="Название для этой свечи.."
              />
            </div>
          </div>
          <div className="row">
            <button
              className="button-active--color "
              type="submit"
              onClick={() => productsAdd(productsCard)}
            >
              Сохранить
            </button>
          </div>
          {/* <div className="row">
            <div className="col-25">
              <label htmlFor="link">Ссылка</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="link"
                name="lastname"
                placeholder="Ссылка на покупку в онлайн-магазине.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="country">Цена</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="link"
                name="lastname"
                placeholder="Укажите цену.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Описание</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Напишите что-нибудь.."
               
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="files">Изображение</label>
            </div>
            <div className="col-75">
            <input type="file" id="files" name="files" multiple></input>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
}
