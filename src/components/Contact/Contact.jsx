import { FaUser, FaPhone, FaTrash } from 'react-icons/fa';

const Contact = ({ id, name, number, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li>
      <div>
        <FaUser />
        <span>{name}</span>
      </div>
      <div>
        <FaPhone />
        <span>{number}</span>
      </div>
      <button onClick={handleDelete}>
        <FaTrash /> Delete
      </button>
    </li>
  );
};

export default Contact;
