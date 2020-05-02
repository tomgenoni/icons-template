import React from "react";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";

// Global SCSS
import "./assets/reset.scss";

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Tabs />
            <Search />
            <List />
        </div>
    );
}

export default App;
