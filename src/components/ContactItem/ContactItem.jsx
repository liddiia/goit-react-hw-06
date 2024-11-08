import css from "./ComtactItem.module.css";

const ContactItem = ({ name, number, id, DelContact }) => {
  return (
    <div className={css.contactItem}>
      <div className={css.contactItemData}>
        <p className={css.contactN}>
          <span className={css.contactItemTitel}>
            &#128100; <b>Name:</b>{" "}
          </span>{" "}
          {name}
        </p>
        <p className={css.contactN}>
          <span className={css.contactItemTitel}>
            &#128222;<b> Number:</b>{" "}
          </span>
          {number}
        </p>
      </div>
      <button
        onClick={() => DelContact(id)}
        type="button"
        className={css.contactDelButton}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
