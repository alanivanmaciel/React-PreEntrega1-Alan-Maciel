function ButtonComponent(props) {
  const { children } = props;
  return (
    <>
      <button className="addCart" onClick={props.onClick}>
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;
