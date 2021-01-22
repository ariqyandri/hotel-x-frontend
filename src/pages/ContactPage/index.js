import React from "react";
import { useSelector } from "react-redux";
import DisplayContact from "../../component/DisplayContact";
import Loading from "../../component/Loading";
import { selectCategories } from "../../store/categories/selector";
import { selectContacts } from "../../store/contacts/selector";

export default function ContactPage() {
  const contacts = useSelector(selectContacts);
  const categories = useSelector(selectCategories);
  if (categories.length === 0) {
    return <Loading />;
  }
  const contactInfo = categories.find((c) => c.name === "Contact");
  return (
    <div>
      <main className="page-margin">
        <DisplayContact contacts={contacts} contactInfo={contactInfo} />
      </main>
    </div>
  );
}
