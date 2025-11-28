export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-600 p-[3px] animate-pulse">
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              <span className="text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                D
              </span>
            </div>
          </div>
          {/* Spinning Ring */}
          <div className="absolute -inset-2 rounded-3xl border-4 border-transparent border-t-amber-500 animate-spin" />
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Dart Agency
          </h2>
          <p className="text-gray-500 text-sm mt-1">Loading...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
