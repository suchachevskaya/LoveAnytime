import { useEffect, useState } from "react";
import { items, BUCKET_ID, PROJECT_ID } from "../Appwrite";
export default function SectionProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await items();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="products">
      <hgroup>
        <h6 >Тепло, Аромат и Свет в Каждой Детали</h6>
        <h2>Свечи Вашей Мечты</h2>
      </hgroup>
      <section >
        {products.map((product) => (
          <Products
            {...product}
            key={product.$id}
            img={`https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${product.fileId}/view?project=${PROJECT_ID}&mode=admin`}
          />
        ))}
      </section>
    </div>
  );
}
function Products(props) {
  return (
    <figure>
      <div className="products-img">
            {props.img ? (
              <img src={props.img} alt={props.title} />
            ) : (
              <p>Изображение отсуствует</p>
            )}
          </div>
      <figcaption>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
        <p>Цена: {props.price} BYN</p>
        <a className="button-active--color" href={props.link}>
          Купить сейчас
        </a>
      </figcaption>
    </figure>
  );
}
