import React from "react";
import { useSelector } from "react-redux";
import DisplayAbout from "../../component/DisplayAbout";
import Loading from "../../component/Loading";
import { selectAbout } from "../../store/about/selector";
import "./AboutPage.css";

export default function AboutPage() {
  const about = useSelector(selectAbout);
  if (about.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <main>
        <DisplayAbout about={about} />
      </main>
    </div>
  );
}
