import React from "react";
import { useSelector } from "react-redux";
import { selectAbout } from "../../store/about/selector";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectContacts } from "../../store/contacts/selector";
import "./Footer.css";

export default function Footer() {
  const loading = useSelector(selectAppLoading);
  const about = useSelector(selectAbout);
  const contacts = useSelector(selectContacts);
  if (loading) {
    return <div></div>;
  }
  return (
    <div className="footer">
      <div className="page-margin footer-content">
        <section>
          <h1>Hotel X Amsterdam</h1>
        </section>
        <section>
          <p></p>
        </section>
      </div>
    </div>
  );
}
