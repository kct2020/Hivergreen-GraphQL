import { useRouter } from "next/router"
import { useCallback } from "react"

export const useRoutePath = () => {
  const router = useRouter()
  const inPath = useCallback(
    (path: string) => router.asPath.includes(path),
    [router.asPath],
  )

  return { router, inPath }
}
