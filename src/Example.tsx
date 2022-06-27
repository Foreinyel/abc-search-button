import React from "react";
import Component from "./Component";

export const Example = () => {
  return (
    <div>
      <Component
        onClick={() => {
          alert("search button clicked");
        }}
      >
        Search Button
      </Component>
    </div>
  );
};

export default Example;
