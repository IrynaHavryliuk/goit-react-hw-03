import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
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
