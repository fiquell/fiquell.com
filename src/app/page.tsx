import WaitingListForm from "~/components/waiting-list-form";

const RootPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center gap-8">
      <div className="max-w-prose">
        <h1 className="id-h1 font-serif">Join the waiting list</h1>
        <p className="id-paragraph">
          Thanks for dropping by! I am currently refreshing the site I created,
          so the previous version is being re-energized.
        </p>
      </div>
      <WaitingListForm />
    </div>
  );
};

export default RootPage;
