function Contact({ id, name, number, onDeleteContact }) {
    const handleDelete = () => {
      onDeleteContact(id);
    };
  
    return (
      <li>
        {name}: {number}
        <button onClick={handleDelete}>Delete</button>
      </li>
    );
  }
  
  export default Contact;