import "./App.css";
import "./index.css";
import "./css/Form.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import About from "./components/About";
import Bottom from "./components/Bottom";
import SectionProduct from "./components/SectionProduct";
import AddProducts from "./components/AddProducts";
function App() {
  return (
    <>
      <Header />
      <About />
      <SectionProduct />
      <AddProducts />
      <Bottom />
    </>
  );
}

export default App;
