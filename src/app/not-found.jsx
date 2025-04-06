import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          404
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>

        {/* Description */}
        <p className="text-sm text-gray-600">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Home button */}
        <Link
          href="/"
          className="inline-block px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-xs"
        >
          Return Home
        </Link>

        {/* Dots */}
        <div className="pt-8 flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
