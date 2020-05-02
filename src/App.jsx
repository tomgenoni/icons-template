import React from "react";

// Components
import Header from "./components/Header/";
import Hero from "./components/Hero/";
import Tabs from "./components/Tabs/";
import Search from "./components/Search/";
import List from "./components/List/";
import Wrap from "./components/Wrap/";
import { Title, Text } from "./components/Type/";

// Global SCSS
import "./scss/root.scss";

function App() {
    return (
        <div>
            <Wrap size="wide">
                <Header />
                <Title size="1" className="tc">
                    Notion for startups
                </Title>
                <Text>text</Text>
            </Wrap>
            <Wrap>
                <Hero />
                <Tabs />
                <Search />
                <List />
            </Wrap>
        </div>
    );
}

export default App;
