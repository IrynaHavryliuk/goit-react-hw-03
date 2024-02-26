import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import contactsData from './components/Contact/Contact.json';

function App() {
  // Load contacts from local storage on component mount
  const [contacts, setContacts] = useState(contactsData);
  const [searchTerm, setSearchTerm] = useState('');

  // Save contacts to local storage whenever they are updated
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      localStorage.setItem('contacts', JSON.stringify(updatedContacts)); // Зберегти оновлений список контактів у локальне сховище
      return updatedContacts;
    });
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactList contacts={contacts} searchTerm={searchTerm} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
