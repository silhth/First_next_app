import Navbar from '../Navbar'
import Footer from '../Footer'
import style from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={style.Layout}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}