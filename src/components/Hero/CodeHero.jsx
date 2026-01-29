import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"

export default function CodeHero() {
  const fullText = useMemo(
    () =>
      `const app = {
  frontend: ["React", "Angular"],
  backend: ["PHP", ".NET", "Java"],
  databases: ["MySQL", "MongoDB"],
}

export default app`,
    []
  )

  const [typed, setTyped] = useState("")
  const [i, setI] = useState(0)

  useEffect(() => {
    if (i >= fullText.length) return

    const timeout = setTimeout(() => {
      setTyped((prev) => prev + fullText[i])
      setI((prev) => prev + 1)
    }, 18) // velocidad de tipeo (ajustable)

    return () => clearTimeout(timeout)
  }, [i, fullText])

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
        {/* Header de la card */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
          <span className="text-sm font-semibold text-gray-900">
            {"</>"} code
          </span>

          {/* “lucecitas” estilo editor */}
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
          </div>
        </div>

        {/* Body tipo terminal/editor */}
        <div className="bg-gray-950 text-green-400 p-4">
          <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
            {typed}
            <span className="inline-block w-2 align-middle animate-pulse text-green-400">
              |
            </span>
          </pre>
        </div>
      </div>
    </motion.div>
  )
}
