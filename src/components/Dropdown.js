import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({
  options,
  selected,
  onSelectedChange,
  label,
  outputMessage,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        onClick={() => onSelectedChange(option)}
        key={option.value}
        className="item"
      >
        {option.title}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>{" "}
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          {/* i doesn't stand for icon it stand for italic but semantic ui uses it  */}
          <i className="dropdown icon"></i>
          <div className="text">{selected.title}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
        <div className="text" style={{ color: `${selected.value}` }}>
          {outputMessage ? `The color you chose is ${selected.value}` : ""}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
