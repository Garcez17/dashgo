import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactNode, createContext, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDraweContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ 
  children 
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDraweContext.Provider value={disclosure}>
      {children}
    </SidebarDraweContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDraweContext);