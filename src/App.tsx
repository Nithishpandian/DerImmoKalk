import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";

function App() {
  return (
    <LanguageProvider>
      <div className=" min-h-screen p-5 bg-stone-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Toaster />
    </LanguageProvider>
  );
}

export default App;
