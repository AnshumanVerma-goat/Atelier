import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5F1E8] text-[#0D0F1A] font-sans">
      <div className="text-center px-6">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
          Reality Not Found
        </h1>
        <p className="text-base md:text-lg font-light text-[#0D0F1A]/60 mb-10 max-w-md mx-auto">
          The project universe you are searching for is currently being crafted, or you have drifted into uncharted territory.
        </p>
        <Link 
          href="/" 
          className="text-sm font-medium uppercase tracking-widest border-b border-[#0D0F1A] pb-1 hover:text-[#2E6F5E] hover:border-[#2E6F5E] transition-colors"
        >
          Return to base
        </Link>
      </div>
    </div>
  );
}
