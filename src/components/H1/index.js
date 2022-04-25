import "./style.css";

const H1 = (props) => {
  const { h1Title, h1Text } = props;
  return (
    <div className="h1">
      <h1 title={h1Title}>{h1Text}</h1>
    </div>
  );
};

export default H1;
