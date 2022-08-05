/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { createContext, ReactNode, useContext, useEffect } from 'react'

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerData)

export function SideBarDrawerProvider({
  children
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const { pathname } = useLocation()

  useEffect(() => {
    disclosure.onClose()
  }, [pathname])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
