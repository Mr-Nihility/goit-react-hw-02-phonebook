import s from './Filter.module.css';
const Filter = ({ filter, handlerFilter }) => {
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        onChange={handlerFilter}
        value={filter}
        className="input"
      />
    </label>
  );
};

export { Filter };
