const SignupForm = ({ title }) => {
  return (
    <>
      <p className="p-1 mb-2">{title}</p>
      <form className="max-w-sm">
        <div className="flex items-center border rounded-md border-gray-300 p-1 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
          />
          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
