const Shimmer = () => {
  // return Array(10)
  //   .fill("")
  //   .map((ele) => <div style={{ border: "1px" }}></div>);
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((ele) => (
          <div className="shimmer-card" key={ele}></div>
        ))}
    </div>
  );
};

export default Shimmer;
