import React, { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', number: '123-456-7890' },
    { id: '2', name: 'Jane Smith', number: '987-654-3210' },
    // Додайте інші контакти за потреби
  ]);

  // Функція додавання контакту
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Функція видалення контакту
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // Функція пошуку контакту
  const handleSearchChange = (event) => {
    // Логіка пошуку
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={''} onChange={handleSearchChange} />
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
