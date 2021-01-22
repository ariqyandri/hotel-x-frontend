import React from "react";
import { useSelector } from "react-redux";
import CategoryHeader from "../../component/CategoryHeader";
import Loading from "../../component/Loading";
import { selectCategories } from "../../store/categories/selector";

export default function FacilitiesPage() {
  const categories = useSelector(selectCategories);
  if (categories.length === 0) {
    return <Loading />;
  }
  const info = categories.find((c) => c.name === "Reservation");

  return (
    <div className="page-margin">
      <header>
        <CategoryHeader info={info} />
      </header>
      <h1 style={{ lineHeight: "11.5em" }}>Feature Coming Soon</h1>
    </div>
  );
}
