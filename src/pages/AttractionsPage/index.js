import React from "react";
import { useSelector } from "react-redux";
import CategoryHeader from "../../component/CategoryHeader";
import DisplayAttractions from "../../component/DisplayAttractions";
import Loading from "../../component/Loading";
import { selectAttractions } from "../../store/attractions/selector";
import { selectCategories } from "../../store/categories/selector";
import "./AttractionsPage.css";

export default function AttractionsPage() {
  const categories = useSelector(selectCategories);
  const attractions = useSelector(selectAttractions);
  if (categories.length === 0) {
    return <Loading />;
  }
  const info = categories.find((c) => c.name === "Attractions");

  return (
    <div className="page-margin">
      <header>
        <CategoryHeader info={info} />
      </header>
      <main className="page-margin">
        <DisplayAttractions attractions={attractions} />
      </main>
    </div>
  );
}
