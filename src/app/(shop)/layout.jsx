import TopMenu from "../../components/navbar/TopMenu";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";

export default function layout({ children }) {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="py-16 px-8 mb-72">{children}</div>
      <Footer />
    </div>
  );
}
