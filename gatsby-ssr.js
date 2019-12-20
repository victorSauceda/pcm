import React from "react";
export function onRenderBody({ setHeadComponents }) {
  console.log("hey");
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  ]);
}
