import React from "react";
import Header from "../components/header";
import Bio from "../components/Bio";
import HorizontalTimeline from "../components/timeline";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <Bio />
        <HorizontalTimeline/>
      </div>
    </main>
  );
}
