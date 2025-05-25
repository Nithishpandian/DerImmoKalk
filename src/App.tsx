import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className=" min-h-screen p-2 sm:p-5 bg-stone-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculate" element={<Calculator />} />
        </Routes>
      <Footer />
      </div>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
