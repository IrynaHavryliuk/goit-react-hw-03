import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
