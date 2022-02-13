import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./lang/i18n";
import "./App.scss";
import Header from "./container/Header/Header";
import Main from "./container/pages/Main/Main";
import Single from "./container/pages/Single/Single";
import { useTranslation } from "react-i18next";
import Footer from "./container/Footer/Footer";
import Category from "./container/pages/Category/Category";
import Login from "./container/pages/Login/Login";

function App() {
  const { t, i18n } = useTranslation();
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [itemCard, setItemCard] = useState([]);

  const changeLanguage = (lng) => {
    return () => {
      i18n.changeLanguage(lng);
    };
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header
        fetchData={fetchData}
        setSearch={setSearch}
        changeLanguage={changeLanguage}
      />
      <Routes>
        <Route path="/" element={<Main search={search} setItemCard={setItemCard} />} />
        <Route path={`/single/${itemCard.id}`} element={<Single itemCard={itemCard} />} />
        <Route path='/category' element={<Category fetchData={fetchData} setItemCard={setItemCard} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
