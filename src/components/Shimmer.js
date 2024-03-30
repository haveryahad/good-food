const Shimmer = ({ page }) => {
  const cardArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  const menuArray = new Array(0, 1, 2, 3, 4, 5, 6);

  const ShimmerCardHome = () => {
    return (
      <div className="shimmer-card w-72 m-2 px-4">
        <div className="shimmer-res-image my-3 w-72 h-48 rounded-lg bg-shimmer"></div>
        <div className="shimmer-res-name w-48 h-6 rounded-lg bg-shimmer"></div>
        <div className="shimmer-res-row my-3 w-36 h-6 rounded-lg bg-shimmer"></div>
      </div>
    );
  };

  const ShimmerCardMenu = () => {
    return (
      <div className="shimmer-card w-full">
        <div className="my-3 w-full h-20 rounded-lg bg-shimmer"></div>
      </div>
    );
  };
  return page === "home" ? (
    <div className="shimmer-container flex flex-wrap justify-between w-11/12 m-auto py-14">
      {cardArray.map((item) => (
        <ShimmerCardHome key={item} />
      ))}
    </div>
  ) : (
    <div className="shimmer-container flex flex-wrap justify-between items-center w-6/12 m-auto">
      <div>
        <div className="shimmer-res-image my-3 w-72 h-8 rounded-lg bg-shimmer"></div>
        <div className="shimmer-res-name w-48 h-6 rounded-lg bg-shimmer"></div>
        <div className="shimmer-res-row my-3 w-36 h-6 rounded-lg bg-shimmer"></div>
      </div>
      <div>
        <div className="shimmer-res-row w-16 h-16 rounded-lg bg-shimmer"></div>
      </div>
      {menuArray.map((item) => (
        <ShimmerCardMenu key={item} />
      ))}
    </div>
  );
};

export default Shimmer;
