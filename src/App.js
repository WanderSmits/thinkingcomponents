// App.js
import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.css";
import SectionLine from "./components/SectionLine";
import SectionFooter from "./components/SectionFooter";
export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <SectionLine />
      <SectionFooter />
    </div>
  );
}
