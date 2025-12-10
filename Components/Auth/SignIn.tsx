import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiXMark } from "react-icons/hi2";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 via-indigo-500 to-blue-400 flex items-center justify-center px-4 py-16">
      <div className="relative w-full max-w-md bg-[#0b1024] text-white shadow-2xl rounded-2xl p-8 border border-indigo-700/40">
        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl font-semibold">Sign in</h1>
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
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-pink-500" />
              <span>Remember me</span>
            </label>
            <Link href="#" className="hover:text-pink-400 transition-colors">
              Forget Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold shadow-lg shadow-pink-500/30 transition-colors cursor-pointer"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-300">
          Don't have account?{" "}
          <Link href="/signup" className="text-pink-400 hover:text-pink-300 transition-colors cursor-pointer">
            Sign up
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
            aria-label="Sign in with Google"
          >
            <FcGoogle className="h-5 w-5" />
            <span >Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

