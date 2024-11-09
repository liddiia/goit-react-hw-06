import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import css from "./ContactList.module.css";
const ContactList = () => {

  const contacts = useSelector((state)=>state.contactsData.contacts.items);
  const filters = useSelector((state) => state.filter.name)
  const filteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filters.toLowerCase().trim())

  })
  return (
    <div>
    {contacts.length === 0 ? (
      <p>Phonebook is empty. Add contacts.</p>
    ) : (
     <div>
      <h2>Contacts</h2>
      <ul className={css.listBox}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <ContactItem 
             id={contact.id}
             name={contact.name}
             number={contact.number}
             />
          </li>
        ))}
      </ul>
    </div> )}
    </div>
  );
};

export default ContactList;

