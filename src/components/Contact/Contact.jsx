function Contact({ id, name, number, onDeleteContact }) {
    const handleDelete = () => {
      onDeleteContact(id);
    };
  
    return (
      <li>
        {name}: {number}
        <button onClick={handleDelete}>Видалити</button>
      </li>
    );
  }
  
  export default Contact;