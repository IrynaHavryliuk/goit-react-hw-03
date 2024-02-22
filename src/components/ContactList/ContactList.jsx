import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact, search }) => {
  const filteredContacts = contacts.filter(contact => 
    contact.name && contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
