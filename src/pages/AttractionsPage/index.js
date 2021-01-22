import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCategory from "../../component/DisplayCategories";
import Loading from "../../component/Loading";
import { fetchAttractions } from "../../store/attractions/action";
import { selectAttractions } from "../../store/attractions/selector";
import { selectCategories } from "../../store/categories/selector";

export default function AttractionsPage() {
  const dispatch = useDispatch;
  const categories = useSelector(selectCategories);
  const attractions = useSelector(selectAttractions);
  useEffect(() => {
    dispatch(fetchAttractions());
  }, [dispatch]);
  if (categories.length === 0) {
    return <Loading />;
  }
  const { name, description, imageUrl } = categories.find(
    (c) => c.name === "Attractions"
  );

  return (
    <div className="attraction-page">
      <header>
        <img src={imageUrl} alt={name} />
      </header>
      <main className="page-margin">
        <DisplayCategory categories={categories} />
      </main>
    </div>
  );
}
