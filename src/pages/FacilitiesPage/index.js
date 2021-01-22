import React from "react";
import { useSelector } from "react-redux";
import CategoryHeader from "../../component/CategoryHeader";
import DisplayFacilities from "../../component/DisplayFacilities";
import Loading from "../../component/Loading";
import { selectCategories } from "../../store/categories/selector";
import { selectFacilities } from "../../store/facilities/selector";

export default function FacilitiesPage() {
  const categories = useSelector(selectCategories);
  const facilities = useSelector(selectFacilities);
  if (categories.length === 0) {
    return <Loading />;
  }
  const publicFacilities = facilities.filter((f) => f.isPublic === true);
  const info = categories.find((c) => c.name === "Facilities");

  return (
    <div className="page-margin">
      <header>
        <CategoryHeader info={info} />
      </header>
      <main>
        <DisplayFacilities facilities={publicFacilities} />
      </main>
    </div>
  );
}
