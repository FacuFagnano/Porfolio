import { useEffect, useMemo, useState } from "react"

export default function useActiveSection(sectionIds = []) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds])
  const [active, setActive] = useState(ids[0] || "home")

  useEffect(() => {
    const offset = 140 // punto debajo del navbar (ajustable)

    const getActiveFromPoint = () => {
      // 1) Si estamos al final de la página, marcamos la última sección (Contact)
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      if (nearBottom && ids.length) {
        setActive(ids[ids.length - 1])
        return
      }

      // 2) Detectamos qué elemento está debajo del "punto guía"
      const el = document.elementFromPoint(window.innerWidth / 2, offset)
      if (!el) return

      // 3) Buscamos el ancestor más cercano que sea una sección con id que nos interese
      const section = el.closest("section")
      if (!section?.id) return

      if (ids.includes(section.id)) {
        setActive(section.id)
      }
    }

    getActiveFromPoint()

    const onScroll = () => getActiveFromPoint()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ids])

  return active
}
