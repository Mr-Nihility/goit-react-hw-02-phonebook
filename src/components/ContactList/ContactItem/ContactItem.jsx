import s from './ContactItem.module.css';
const ContactItem = ({ name, phone, onDelete, id }) => {
  return (
    <li className={s.item}>
      <p className={s.name}>{name}</p>
      <p className={s.tel}>{phone}</p>
      <button type="button" onClick={() => onDelete(id)} className="btn">
        Delete
      </button>
    </li>
  );
};

export { ContactItem };
