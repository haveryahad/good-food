import { useEffect, useState } from "react";

const Shimmer = ({ page }) => {
  const [loader, setLoader] = useState(false);
  const cardArray = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
  const menuArray = new Array(0, 1, 2, 3, 4, 5, 6);

  useEffect(() => {
    {
      setTimeout(() => {
        setLoader(true);
      }, 4000);
    }
  }, []);

  const ShimmerCardHome = () => {
    return (
      <div className="shimmer-card sm:w-72 w-56 m-2 px-4 animate-pulse">
        <div className="shimmer-res-image my-3 sm:w-72 w-56 sm:h-48 h-40 rounded-lg bg-shimmer"></div>
        <div className="shimmer-res-name sm:w-48 w-32 sm:h-6 h-5 rounded-lg bg-shimmer"></div>
        <div className="shimmer-res-row my-3 sm:w-36 w-24 sm:h-6 h-5 rounded-lg bg-shimmer"></div>
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
    <div className="shimmer-container flex flex-wrap sm:flex-row flex-col justify-between w-9/12 m-auto pt-32">
      <div className="w-full text-center h-12 py-2 text-xs sm:text-base">
        {loader ? (
          <>
            <p>We are using Proxy to bypass CORS issue</p>
            <p>
              Free Proxy is slow, kindly wait for the data to load from the
              Swiggy Live API
            </p>
          </>
        ) : (
          ""
        )}
      </div>
      {cardArray.map((item) => (
        <ShimmerCardHome key={item} />
      ))}
    </div>
  ) : (
    <div className="shimmer-container flex flex-wrap sm:flex-row flex-col justify-between items-center w-6/12 m-auto pt-32">
      <div className="w-full text-center h-12 py-2">
        {loader ? (
          <>
            <p>We are using Proxy to bypass CORS issue</p>
            <p>
              Free Proxy is slow, kindly wait for the data to load from the
              Swiggy Live API
            </p>
          </>
        ) : (
          ""
        )}
      </div>
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
