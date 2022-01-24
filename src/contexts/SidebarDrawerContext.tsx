import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react'

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

const useCallBackRef = (callback: () => void) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  return callbackRef
}

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  const savedOnClose = useCallBackRef(disclosure.onClose)

  useEffect(() => {
    savedOnClose.current()
  }, [router.asPath, savedOnClose])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
