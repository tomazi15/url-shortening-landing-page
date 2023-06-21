import React from "react";
import style from "./App.module.scss";
import NavigationBar from "./NavigationBar/NavigationBar";
import PageHeader from "./PageHeader/PageHeader";

function App() {
  return (
    <main className={style.container}>
      <NavigationBar />
      <PageHeader />
    </main>
  );
}

export default App;
