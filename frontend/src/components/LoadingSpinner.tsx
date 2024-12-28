import { ImSpinner } from "react-icons/im";

const LoadingSpinner= () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="loader flex items-center justify-center">
        <ImSpinner   className="spinner text-[#FF7F50] text-xl animate-spin"/>
      </div>
    </div>
  );
};

export default LoadingSpinner