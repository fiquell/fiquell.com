const RootPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="max-w-prose text-center">
        <h1 className="id-h1">I am updating a website</h1>
        <p className="id-paragraph">
          Thanks for dropping by! I am currently refreshing the site I created,
          so the previous version is being re-energized.
        </p>
      </div>
      <form className="w-full">
        <div className="flex items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter you email address"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Notify Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default RootPage;
