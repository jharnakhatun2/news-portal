import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or may have been moved.
        </p>
        <Link to="/" className="btn btn-neutral">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
