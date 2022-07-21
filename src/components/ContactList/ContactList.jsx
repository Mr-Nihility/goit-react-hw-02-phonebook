import { ContactItem } from './ContactItem/ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            phone={number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export { ContactList };
