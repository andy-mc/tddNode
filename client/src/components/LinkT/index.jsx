import React from "react";

export default function LinkT({address}) {
  const add = (a, b) => a + b;
  return (
    <>
     <h2>HOla</h2>
     <a href={address}>{add(1, 3)}</a>
    </>
  )
}
