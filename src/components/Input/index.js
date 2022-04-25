import "./style.css";

const Input = (props) => {
  const { text, placeholderText, icon } = props;
  //console.log(props);
  return (
    <div className="input">
      <input type={text} placeholder={placeholderText}></input>
      <div className="icon">{icon}</div>
    </div>
  );
};

export default Input;
