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
  const { address, phone, email } = about;
  if (loading) {
    return <div></div>;
  }
  return (
    <div className="footer">
      <div className="page-margin footer-content">
        <section>
          <h1>Hotel X Amsterdam</h1>
          {[{ address }, { phone }, { email }].map((info, i) => {
            return (
              <div className="footer-info" key={i}>
                <p className="info">{info[`${Object.keys(info)[0]}`]}</p>
              </div>
            );
          })}
        </section>
        <section>
          {contacts.map(({ platform, info, linkUrl }, i) => {
            if (platform === "Telephone" || platform === "Email") {
              return;
            }
            return (
              <p key={i}>
                <span>{platform}</span> <a href={linkUrl}>{info}</a>
              </p>
            );
          })}
        </section>
      </div>
    </div>
  );
}
