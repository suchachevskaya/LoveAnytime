import "./App.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import About from "./components/About";
import Bottom from "./components/Bottom";
import SectionProduct from "./components/SectionProduct";
import AddProducts from "./components/AddProducts";
import InvitationSection from "./components/InvitationSection";
import ContactForm from "./components/ContactForm";
import OnlineStoreSection from "./components/onlineStoreSection";
import Login from "./components/Login";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header active={tab} onChange={(current) => setTab(current)} />
      <main>
        {tab === "main" && (
          <>
            <About />
            <OnlineStoreSection />
            <SectionProduct />
            <InvitationSection />
            <ContactForm />
          </>
        )}
       {tab === "login" && <Login onChange={(current) => setTab(current)} />}
        {tab === "auth" && <AddProducts />}
      </main>

      <Bottom />
    </>
  );
}

export default App;
