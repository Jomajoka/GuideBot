import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <Navbar />
      {/* Title and Globe Section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center mt-2 gap-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0a5e0d] mb-4">
            GuideBot AI
          </h1>
          <p className="text-lg md:text-xl text-[#0a5e0d] mb-8 max-w-xl">
            Your AI-powered travel assistant.
          </p>
          <a
            href="/plan"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Plan
          </a>
        </div>
      </div>
    </main>
  )
}
