// components/EmailCaptureForm.tsx
export default function EmailCaptureForm() {
    return (
      <form className="flex flex-col items-center space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full max-w-md p-4 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full max-w-md py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    );
  }
  