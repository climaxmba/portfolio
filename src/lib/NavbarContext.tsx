import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface IdList {
  activeId: string;
  addId: (id: string) => void;
  removeId: (id: string) => void;
}

export const NavbarContext = createContext<IdList | undefined>(undefined);

export const useNavContext = () => {
  const nav = useContext(NavbarContext);

  if (nav === undefined)
    throw new Error("useNavContext must be used with a NavbarContext");

  return nav;
};

export default function NavbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeNav, setActiveNav] = useState<string>("");
  const [intersectingIds, setIntersectingIds] = useState<string[]>([]);

  const handleAdd = (id: string) => {
    if (!intersectingIds.includes(id))
      setIntersectingIds([...intersectingIds, id]);
  };

  const handleRemove = (id: string) => {
    if (intersectingIds.includes(id))
      setIntersectingIds(
        intersectingIds.filter((intersectingId) => intersectingId !== id)
      );
  };

  useEffect(() => {
    setActiveNav(intersectingIds[0] || "");
  }, [intersectingIds]);

  return (
    <NavbarContext.Provider
      value={{ activeId: activeNav, addId: handleAdd, removeId: handleRemove }}
    >
      {children}
    </NavbarContext.Provider>
  );
}
