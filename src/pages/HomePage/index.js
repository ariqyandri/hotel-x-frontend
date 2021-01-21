import React from "react";
import { useSelector } from "react-redux";
import HomeCarousel from "../../component/HomeCarousel";
import Loading from "../../component/Loading";
import { selectCategories } from "../../store/categories/selector";

export default function HomePage() {
  const categories = useSelector(selectCategories);
  if (categories.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <HomeCarousel categories={categories} />
    </div>
  );
}
