import { Client, Databases, ID } from "appwrite";
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const USERS_ID = import.meta.env.VITE_COLLECTION_USERS_ID;
export const PRODUCTS_ID = import.meta.env.VITE_COLLECTION_PRODUCTS_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);
export const database = new Databases(client);
export const id=new ID(client);

export const items = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, PRODUCTS_ID);
    return result.documents;
  } catch (error) {
    console.error("Ошибка получения данных", error);
    return [];
  }
};
export const users = async () => {
  try {
    const response = await database.listDocuments(DATABASE_ID, USERS_ID);
    return response.documents;
  } catch (error) {
    console.error("Ошибка получения данных", error);
    return [];
  }
};


