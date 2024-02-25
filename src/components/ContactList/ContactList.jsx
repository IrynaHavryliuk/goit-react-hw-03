import { useState, useEffect } from 'react';
import Contact from '../Contact/Contact';
import contactsData from '../Contact/Contact.json'; // Імпортуємо дані контактів з файлу JSON

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Після завантаження компонента, завантажуємо дані контактів з файлу JSON
    setContacts(contactsData);
  }, []); // Передаємо пустий масив залежностей, щоб ефект запустився тільки раз

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
