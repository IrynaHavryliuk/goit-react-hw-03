import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

function ContactForm({ onAddContact }) {
  // Схема валідації для форми
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Ім\'я повинно містити щонайменше 3 символи')
      .max(50, 'Ім\'я не повинно перевищувати 50 символів')
      .required('Це поле обов\'язкове для заповнення'),
    number: Yup.string()
      .min(3, 'Номер повинен містити щонайменше 3 символи')
      .max(50, 'Номер не повинен перевищувати 50 символів')
      .required('Це поле обов\'язкове для заповнення'),
  });

  // Функція додавання контакту
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    // Додавання контакту до списку
    onAddContact(newContact);
    // Очищення форми після додавання контакту
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
