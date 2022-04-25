const Paragraph = (props) => {
  const { paragraphContent, paragraphStyle } = props;
  return (
    <div className="paragraph">
      <p style={paragraphStyle}> {paragraphContent}</p>
    </div>
  );
};

export default Paragraph;
