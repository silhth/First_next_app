// import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layaout'
import style from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <div className={style.Home}>
        <h1> Il mio primo progetto in Next.js </h1>
        <Image  src="https://picsum.photos/200/300"
            alt="hero image"
            width="400"
            height="400"
            ></Image>
      </div> 
    </Layout>
    

  )
}
