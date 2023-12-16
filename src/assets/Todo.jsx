import style from "./todo.module.css";

export const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveItem(id);
  };

  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button
          className={style.btn}
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-2x"></i>
        </button>
      </div>
    </article>
  );
};
