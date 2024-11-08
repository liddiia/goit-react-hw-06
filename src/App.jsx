import { useState } from "react";
import { useEffect } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";


const ContactData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const localStorageValue = localStorage.getItem("contacts");

  const [contacts, setContacts] = useState(() => {
    const parsedValue = JSON.parse(localStorageValue);
    return parsedValue ?? ContactData;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const newContact = {
      ...formData,
      id: nanoid(2),
    };
    setContacts((prevState) => [...prevState, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const serchedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(inputValue.toLowerCase().trim());
  });

  return (
    <div
      style={{
        display: "block",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <SearchBox value={inputValue} onFilter={setInputValue} />

      {contacts.length === 0 ? (
        <p>Phonebook is empty. Add contacts.</p>
      ) : (
        <ContactList contacts={serchedContacts} deleteContact={deleteContact} />
      )}
    </div>
  );
};

export default App;
