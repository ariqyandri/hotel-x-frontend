import React from "react";
import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectCategories } from "../../store/categories/selector";

export default function HomePage() {
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectAppLoading);
  if (loading) {
    return <Loading />;
  }
  return <div>hello</div>;
}
