import Footer from "../../components/footer/Footer";
import AuthMenu from '../../components/authMenu/AuthMenu'


export default function layout({children}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AuthMenu />
      <div className="pt-16 pb-48">
      {children}
      </div>
      <Footer />
    </div>
  )
}
