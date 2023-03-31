import { useRouter } from "next/router"
import { useEffect } from "react"

import { RefinePage } from "./_app"

const IndexPage: RefinePage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace("/claim")
  }, [])

  return null
}

export default IndexPage
