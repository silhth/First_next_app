import { Carosel } from "../components/Carosel";
import { ImgCarosel } from "../components/ImgCarosel";
import Layout from '../components/Layaout'

const heroImages = [
    'https://picsum.photos/id/1001/400/600',
    'https://picsum.photos/id/1002/400/600',
    'https://picsum.photos/id/1003/400/600',
    'https://picsum.photos/id/1004/400/600',
    'https://picsum.photos/id/1005/400/600',
    'https://picsum.photos/id/1006/400/600',
    'https://picsum.photos/id/1011/400/600',
    'https://picsum.photos/id/1008/400/600',
  ]
  
  const images = [
    'https://picsum.photos/id/101/200/300',
    'https://picsum.photos/id/102/200/300',
    'https://picsum.photos/id/103/200/300',
    'https://picsum.photos/id/104/200/300',
    'https://picsum.photos/id/112/200/300',
    'https://picsum.photos/id/106/200/300',
    'https://picsum.photos/id/111/200/300',
    'https://picsum.photos/id/108/200/300',
  ]
  

export default function carosel () {

    
    
    return (
        <Layout>
             <Carosel arr={heroImages}
        left={400}
        right={400}
        width={'1200px'}
        comp={heroImages.map((img, index) => <ImgCarosel img={img} key={index}/>)} />

      

      <Carosel arr={images}
        left={200}
        right={200}
        width={'880px'}
        comp={images.map((img, index) => <ImgCarosel img={img} key={index}/>)} />
    
        </Layout>
    )
}