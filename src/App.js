import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import Link from "./components/Link";
const options = [
  { title: "red", value: "red" },
  { title: "green", value: "green" },
  { title: "blue", value: "blue" },
];
const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "Why not?",
  },
  {
    title: "Who is React for?",
    content: "Only for the brave",
  },
];

export default () => {
  const [selected, setSelected] = useState(options.at(0));
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          outputMessage={true}
          label="Select a colour"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
