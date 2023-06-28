import React from "react";
import style from "./App.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";
import PageHeader from "./PageHeader/PageHeader";
import ShortenForm from "./ShortenForm/ShortenForm";
import ProductCard from "./ProductCard/ProductCard";
import BoostLinkPanel from "./BoostLinkPanel/BoostLinkPanel";
import PageFooter from "./PageFooter/PageFooter";

function App() {
  return (
    <main className={style.container}>
      <section>
        <NavigationBar />
        <PageHeader />
        <ShortenForm />
      </section>
      <section className={style.container__test}>
        <ProductCard />
        <BoostLinkPanel />
        <PageFooter />
      </section>
    </main>
  );
}

export default App;
