import Contact from '../Contact/Contact';

const ContactList = ({ contacts, searchTerm, onDeleteContact }) => {
  // Filter contacts based on the search term
  const filteredContacts = contacts.filter(contact =>
    contact.name && typeof contact.name === 'string' && contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
