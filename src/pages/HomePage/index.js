import React from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selector";

export default function HomePage() {
  const categories = useSelector(selectCategories);
  console.log(categories);
  return <div>hello</div>;
}
