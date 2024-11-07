import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center gap-8">
      <div>
        <h1 className="id-h1 font-serif">Page Not Found</h1>
        <p className="id-paragraph">
          The resource you are looking for could not be located.
        </p>
      </div>
      <div>
        <Link href="/" className="btn btn-primary">
          <ArrowLeft className="size-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
