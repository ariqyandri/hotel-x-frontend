export const displayContacts = (contacts) => {
  return {
    type: "DISPLAY_CONTACTS",
    payload: contacts,
  };
};
