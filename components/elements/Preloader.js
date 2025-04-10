const index = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          background: "#fff",
          display: "grid",
          placeItems: "center",
          zIndex: 999999999,
        }}
      >
        <div style={{ display: "flex" }}>
          <span className="span1 ispan"></span>
          <span className="span2 ispan"></span>
        </div>
      </div>
    </>
  );
};

export default index;
