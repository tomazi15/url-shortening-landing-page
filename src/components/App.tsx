import React from "react";
import style from "./App.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";
import PageHeader from "./PageHeader/PageHeader";
import ShortenForm from "./ShortenForm/ShortenForm";

function App() {
  return (
    <main className={style.container}>
      <NavigationBar />
      <PageHeader />
      <ShortenForm />
    </main>
  );
}

export default App;
