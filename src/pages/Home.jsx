import React from "react";
import Row from "../components/row";
import Hero from "../components/Hero";
import requests from "../movieservies";

export default function Home() {
  return (
    <>
      <Hero />

      <Row rowID='1' title="Upcoming" fetchurl={requests.upcoming} />
      <Row rowID='2' title="Trending" fetchurl={requests.Trending} />
      <Row rowID='3' title="Top Rated" fetchurl={requests.top_rated} />
      <Row rowID='4' title="Tv Series" fetchurl={requests.Latest} />
    </>
  );
}
