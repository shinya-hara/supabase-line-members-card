"use client";

import liffModule, { Liff } from "@line/liff";
import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const LiffContext = createContext<{ liff: Liff | null }>({ liff: null });

export const useLiff = () => useContext(LiffContext);

export const LiffProvider: FC<PropsWithChildren<{ liffId: string }>> = ({
  children,
  liffId,
}) => {
  const [liff, setLiff] = useState<Liff | null>(null);

  const initializeLiff = useCallback(async () => {
    try {
      await liffModule.init({ liffId });
      setLiff(liffModule);
      console.log("LIFF initialized!");
    } catch (e) {
      console.error(e);
    }
  }, [liffId]);

  useEffect(() => {
    initializeLiff();
  }, []);

  return (
    <LiffContext.Provider value={{ liff }}>{children}</LiffContext.Provider>
  );
};
