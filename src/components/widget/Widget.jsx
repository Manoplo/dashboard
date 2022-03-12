import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="count">21324</span>
        <span className="title">See All</span>
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Widget;
