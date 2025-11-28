export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-amber-500/30 border-t-amber-500 animate-spin" />
        <span className="text-amber-400 font-bold text-xl">Dart Agency</span>
        <span className="text-gray-500 text-sm">Loading...</span>
      </div>
    </div>
  );
}
