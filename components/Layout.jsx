import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
