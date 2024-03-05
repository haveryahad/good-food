const APIError = () => {
  return (
    <div className="text-center [&>h2]:text-2xl [&>h2]:py-4">
      <h1 className="font-bold text-5xl py-6">
        Oops! We encountered a problem ☹️
      </h1>
      <h2>
        We use Swiggy Live API to show restaurants and data on this website.
      </h2>
      <h2>
        If you are seeing this page then it means there has been some issue with
        the API or the existing API has been updated.
      </h2>
      <h2>
        We will try to fix the issue ASAP, Apologies for the inconvenience
      </h2>
    </div>
  );
};

export default APIError;
