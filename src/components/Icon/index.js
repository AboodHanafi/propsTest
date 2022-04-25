import "./style.css";

const Icon = (props) => {
  const { iconComponent } = props;
  return (
    <div className="icons">
      <h3>attatch file</h3>
      <i>{iconComponent}</i>
    </div>
  );
};

export default Icon;
