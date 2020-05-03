import React from "react";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";
import Wrap from "./components/Wrap/";

// Global SCSS
import "./scss/root.scss";

function App() {
    return (
        <div>
            <Wrap size="wide">
                <Header />
            </Wrap>
            <Wrap size="wide">
                <Hero className="mb5 mt6" />
                <Tabs />
                <Search />
                <List />
            </Wrap>
        </div>
    );
}

export default App;
