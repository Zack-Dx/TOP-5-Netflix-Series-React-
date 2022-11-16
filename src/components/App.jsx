import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val, id) {
  return (
    <Card key={id} imgsrc={val.src} href={val.href} title={val.seriesname} />
  );
}
export default function App() {
  return (
    <>
      <Heading heading="Top 5 NETFLIX Series" />
      {Sdata.map(ncard)};
    </>
  );
}
