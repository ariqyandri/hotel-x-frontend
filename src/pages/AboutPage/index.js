import React from "react";
import { useSelector } from "react-redux";
import DisplayCategory from "../../component/DisplayCategory";
import HomeCarousel from "../../component/HomeCarousel";
import HomeWelcome from "../../component/HomeWelcome";
import Loading from "../../component/Loading";
import { selectAbout } from "../../store/about/selector";
import { selectCategories } from "../../store/categories/selector";

export default function AboutPage() {
  const categories = useSelector(selectCategories);
  const about = useSelector(selectAbout);
  if (categories.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <header>
        <HomeCarousel categories={categories} />
      </header>
      <main className="page-margin">
        <HomeWelcome categories={categories} about={about} />
        <DisplayCategory categories={categories} />
      </main>
    </div>
  );
}
