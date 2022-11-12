import { createContext, ReactElement, useContext, useState } from "react";

export type RefreshContextValue = {
  updated: boolean;
  setUpdated: (_: boolean) => void;
  setOpenAlert: (_: boolean) => void;
  setAbmAlert: (_: string) => void;
  openAlert: boolean;
  abmAlert: string;
};

export const RefreshContext = createContext<RefreshContextValue>({
  updated: false,
  setUpdated: ()=> {},
  setOpenAlert: ()=> {},
  setAbmAlert: ()=> {},
  openAlert: false,
  abmAlert: ''
});

export const useRefreshContext = () => useContext(RefreshContext);

type RefreshProviderProps = {
  children: ReactElement;
};
const RefreshProvider = ({ children }: RefreshProviderProps) => {
  const [updated, setUpdated] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [abmAlert, setAbmAlert] = useState('creado');
  return (
    <RefreshContext.Provider value={{updated, setUpdated, openAlert, setOpenAlert, abmAlert, setAbmAlert}}>
      {children}
    </RefreshContext.Provider>
  );
};

export default RefreshProvider;
