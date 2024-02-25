const Contact = ({ id, name, number }) => {
  return (
    <li>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
    </li>
  );
};

export default Contact;