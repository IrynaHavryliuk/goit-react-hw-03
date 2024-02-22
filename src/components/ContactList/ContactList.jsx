import Contact from './Contact';

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