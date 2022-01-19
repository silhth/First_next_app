import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../components/Layaout"
import style from '../styles/Gallery.module.scss'
import Loading from "../components/Loading";
import styled from "styled-components";

const P =styled.p `
color: rgb(136,136,136);`

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
              <P>{product.category}</P>
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