import "./style.css";
const Button = (props) => {
  const { type, onClick, id, children } = props;
  // console.log(props);
  return (
    <div className="button">
      <button type={type} id={id} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
