import Footer from "./Footer";
import Navbar from "./Navbar";

function Wrapper({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 pt-24"></div>
      {children}
      <Footer />
    </>
  );
}

export default Wrapper;
