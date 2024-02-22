import Contact from '../Contact/Contact';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
}

export default ContactList;