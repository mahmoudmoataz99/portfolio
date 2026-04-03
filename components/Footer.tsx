/* Footer.tsx - 90's style */
export default function Footer() {
  return (
    <footer className="relative">
      {/* Webring */}
      <div className="webring">
        <span className="font-mono text-xs text-[#ff0000]">
          🕸️ [PREV] 🏠 WEBRING 🏠 [NEXT] 🕸️
        </span>
      </div>

      {/* Main Footer */}
      <div className="bg-black border-t-2 border-[#00ff00] py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* 88x31 Button */}
          <div className="flex justify-center gap-2 mb-4">
            <img src="/api/placeholder/88/31" alt="HTML 4.0" className="pixelate" />
            <img src="/api/placeholder/88/31" alt="CSS Valid" className="pixelate" />
            <img src="/api/placeholder/88/31" alt="Best viewed with Netscape" className="pixelate" />
          </div>

          <p className="font-mono text-xs text-white/60 mb-2">
            © {new Date().getFullYear()} Mahmoud Moataz - All Rights Reserved
          </p>
          <p className="font-mono text-xs text-white/40">
            Best viewed with Netscape Navigator 4.0+ at 800x600 resolution
          </p>
          <p className="font-mono text-xs text-white/40 mt-2">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          {/* Hit Counter */}
          <div className="hit-counter inline-block mt-4">
            <span>📊 HITS: 008421</span>
          </div>
        </div>
      </div>
    </footer>
  )
}