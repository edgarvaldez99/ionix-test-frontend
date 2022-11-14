import { createContext, ReactElement, useContext, useState } from "react";

export type AlertContextValue = {
  alertMessage: string;
  setAlertMessage: (_: string) => void;
};

export const AlertContext = createContext<AlertContextValue>({
  setAlertMessage: () => {},
  alertMessage: "",
});

export const useAlertContext = () => useContext(AlertContext);

type AlertProviderProps = {
  children: ReactElement;
};

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alertMessage, setAlertMessage] = useState("");
  return (
    <AlertContext.Provider value={{ alertMessage, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
