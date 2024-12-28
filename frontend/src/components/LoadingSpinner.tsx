import { ImSpinner } from "react-icons/im";

const LoadingSpinner= () => {
  return (
    <div className="flex  justify-center mt-4">
      <div className="loader">
        <ImSpinner   className="spinner text-[#0D6EFD] text-xl animate-spin"/>
      </div>
    </div>
  );
};

export default LoadingSpinner