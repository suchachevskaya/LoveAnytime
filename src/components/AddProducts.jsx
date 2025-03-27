import { useState } from "react";
import { ID } from "appwrite";
import "../css/Form.css";

import {
  DATABASE_ID,
  PRODUCTS_ID,
  BUCKET_ID,
  database,
  storage,
} from "../Appwrite";
import { toast } from "react-toastify";
import Button from "./Button";
export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [products, setProducts] = useState([]);

  function handleChange(setState) {
    return (event) => {
      setState(event.target.value);
      setHasError(event.target.value.trim().length === 0);
    };
  }
  function handleFileChange(event) {
    setFile(event.target.files);
    setHasError(event.target.files.length === 0);
  }

  async function imgAdd() {
    try {
      const response = await storage.createFile(
        BUCKET_ID,
        ID.unique(),
        file[0]
      );

      console.log("Файл успешно загружен:", response);
      toast("Файл успешно загружен");
      return response.$id;
    } catch (error) {
      console.error("Ошибка загрузки файла:", error);
      toast.error("Ошибка загрузки файла");
      throw error;
    }
  }
  async function productsAdd() {
    try {
      const fileId = await imgAdd();
      const productsCard = {
        title,
        description,
        price: parseInt(price, 10),
        link,
        fileId,
      };
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
    <div className="addProduct">
      <h3>Расширьте ассортимент</h3>
      <h6>
        Увеличьте количество предлагаемых товаров и улучшите пользовательский
        опыт
      </h6>

      <form className="container">
        <div className="row">
          <div className="col-25">
            <label htmlFor="title">Название свечи</label>
          </div>
          <div className="col-75">
            <input
              value={title}
              style={{ border: hasError ? "1px solid red" : null }}
              onChange={handleChange(setTitle)}
              type="text"
              id="title"
              placeholder="Название для этой свечи.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="link">Ссылка</label>
          </div>
          <div className="col-75">
            <input
              value={link}
              style={{ border: hasError ? "1px solid red" : null }}
              onChange={handleChange(setLink)}
              type="text"
              id="link"
              placeholder="Ссылка на покупку в онлайн-магазине.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="price">Цена</label>
          </div>
          <div className="col-75">
            <input
              value={price}
              style={{ border: hasError ? "1px solid red" : null }}
              onChange={handleChange(setPrice)}
              type="text"
              id="price"
              placeholder="Укажите цену.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="description">Описание</label>
          </div>
          <div className="col-75">
            <textarea
              value={description}
              style={{ border: hasError ? "1px solid red" : null }}
              onChange={handleChange(setDescription)}
              id="description"
              placeholder="Напишите что-нибудь.."
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="file">Изображение</label>
          </div>
          <div className="col-75">
            <input
              style={{ border: hasError ? "1px solid red" : null }}
              onChange={handleFileChange}
              type="file"
              id="file"
              multiple
            ></input>
          </div>
        </div>
        <div className="row">
          <Button onClick={() => productsAdd()} type="submite">
            Сохранить
          </Button>
        </div>
      </form>
    </div>
  );
}
