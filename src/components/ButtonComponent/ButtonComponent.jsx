function ButtonComponent(props) {
  const { children, width, height } = props;
  const styleButton = {
    width: width,
    height: height,
  };
  return (
    <>
      <button style={styleButton} className="addCart" onClick={props.onClick}>
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
