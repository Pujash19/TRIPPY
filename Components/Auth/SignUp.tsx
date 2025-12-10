import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiXMark } from "react-icons/hi2";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 via-indigo-500 to-blue-400 flex items-center justify-center px-4 py-16">
      <div className="relative w-full max-w-md bg-[#0b1024] text-white shadow-2xl rounded-2xl p-8 border border-indigo-700/40">
        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl font-semibold">Sign up</h1>
          <Link
            href="/"
            aria-label="Close"
            className="h-8 w-8 flex items-center justify-center rounded-full bg-rose-600 hover:bg-rose-700 transition-colors text-white text-lg"
          >
            <HiXMark className="h-5 w-5" />
          </Link>
        </div>

        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm text-gray-200">
              Full Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="px-4 py-3 bg-[#111632] border border-indigo-700/40 rounded-lg outline-none text-white placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm text-gray-200">
              Email Address:
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="px-4 py-3 bg-[#111632] border border-indigo-700/40 rounded-lg outline-none text-white placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm text-gray-200">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="px-4 py-3 bg-[#111632] border border-indigo-700/40 rounded-lg outline-none text-white placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="confirm" className="text-sm text-gray-200">
              Confirm Password:
            </label>
            <input
              id="confirm"
              type="password"
              placeholder="••••••••"
              className="px-4 py-3 bg-[#111632] border border-indigo-700/40 rounded-lg outline-none text-white placeholder:text-gray-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold shadow-lg shadow-pink-500/30 transition-colors cursor-pointer"
          >
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link href="/sign" className="text-pink-400 hover:text-pink-300 transition-colors cursor-pointer">
            Sign in
          </Link>
        </div>

        <div className="mt-6 flex items-center space-x-4 text-gray-400">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-xs uppercase tracking-widest">OR</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            className="h-12 px-5 rounded-full bg-[#111632] border border-indigo-700/40 flex items-center justify-center space-x-2 text-white hover:border-pink-500 transition-colors text-sm font-semibold cursor-pointer"
            aria-label="Sign up with Google"
          >
            <FcGoogle className="h-5 w-5" />
            <span>Sign up with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

