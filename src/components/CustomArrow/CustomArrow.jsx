/* eslint-disable react/prop-types */
function CustomArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "grey",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        padding: "15px",
      }}
      onClick={onClick}
    />
  );
}

export default CustomArrow;
