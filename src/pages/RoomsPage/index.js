import React from "react";
import { useSelector } from "react-redux";
import CategoryHeader from "../../component/CategoryHeader";
import DisplayRooms from "../../component/DisplayRooms";
import Loading from "../../component/Loading";
import { selectCategories } from "../../store/categories/selector";
import { selectRooms } from "../../store/rooms/selector";

export default function RoomsPage() {
  const categories = useSelector(selectCategories);
  const rooms = useSelector(selectRooms);
  if (categories.length === 0) {
    return <Loading />;
  }
  const info = categories.find((c) => c.name === "Rooms");

  return (
    <div className="page-margin">
      <header>
        <CategoryHeader info={info} />
      </header>
      <main className="page-margin">
        <DisplayRooms rooms={rooms} />
      </main>
    </div>
  );
}
