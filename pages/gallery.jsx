import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layaout"
import style from '../styles/Gallery.module.scss'
import Loading from "../components/Loading";

export default function Gallery () {
    const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductList(res.data));
  }, []);

    return (
    <Layout>
         <h1 className={style.title}>Prodotti</h1>
      <div className={style.Gallery}>
        {productList.length ? (
          productList.map((product) => (
            <div key={product.title}>
              <p>{product.category}</p>
              <Image
                src={product.image}
                alt={product.title}
                width="100"
                height="160"
              />
            </div>
          ))
        ) : (
          <div>
            <Loading/>
          </div>
        )}
      </div>
    </Layout>
    )
    
}