// KEY = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  { title: "Afrikaans", value: "af" },
  { title: "Arabic", value: "ar" },
  { title: "Hindi", value: "hi" },
];
const Translate = () => {
  const [lang, setLang] = useState(options.at(0));
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        options={options}
        selected={lang}
        onSelectedChange={setLang}
        outputMessage={false}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} lang={lang} />
    </div>
  );
};

export default Translate;
