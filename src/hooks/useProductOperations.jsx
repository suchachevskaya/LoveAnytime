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

export function useProductOperations() {
  async function imgAdd(file) {
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
  async function productsAdd({
    title,
    description,
    price,
    link,
    file,
    setProducts,
  }) {
    try {
      const fileId = await imgAdd(file);
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
      if (setProducts) {
        setProducts((prevProducts) => [response, ...prevProducts]);
      }
    } catch (error) {
      toast.error("Ошибка создания карточки");
      console.error(error);
    }
  }
  return { imgAdd, productsAdd };
}
export default useProductOperations;
