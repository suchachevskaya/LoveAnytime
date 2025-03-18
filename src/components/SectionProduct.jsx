import { useEffect, useState } from "react";
import { items } from "../Appwrite";
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
        <p>Тепло, Аромат и Свет в Каждой Детали</p>
        <h2>Свечи Вашей Мечты</h2>
      </hgroup>
      <section>
        {products.map((product) => (
          <Products {...product} key={product.$id}/>
        ))}
        <figure>
          <div className="products-img">
            <img src="src/img/more.png" alt="" />
          </div>
        </figure>
      </section>
    </div>
  );
}
function Products(props) {
  return (
    <figure>
      <div className="products-img">
        <img src={props.image} alt="" />
      </div>
      <figcaption>
        <h6>{props.title}</h6>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <a className="button-active--color" href={props.link}>
          Купить
        </a>
      </figcaption>
    </figure>
  );
}
