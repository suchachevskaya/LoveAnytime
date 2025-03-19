import { Client, Databases, Storage } from "appwrite";
export const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const USERS_ID = import.meta.env.VITE_COLLECTION_USERS_ID;
export const PRODUCTS_ID = import.meta.env.VITE_COLLECTION_PRODUCTS_ID;
export const BUCKET_ID=import.meta.env.VITE_APPWRITE_BUCKET_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);
export const database = new Databases(client);
export const storage=new Storage(client)

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
// export const imagesDB = async () => {
//   try {
//     const result = await storage.getFileDownload(BUCKET_ID, fileId);
//     return result;
//   } catch (error) {
//     console.error("Ошибка получения данных", error);
//     return [];
//   }
// };



