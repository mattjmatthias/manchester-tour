const Divider = () => {
  return (
    <hr
      className="my-8 w-[300px]"
      style={{
        border: "none",
        height: "2px",
        backgroundImage: "radial-gradient(circle, black 1px, transparent 4px)",
        backgroundRepeat: "repeat-x",
        backgroundSize: "9px 9px",
      }}
    />
  );
};

export default Divider;
