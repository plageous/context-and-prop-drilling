import { createContext, useState } from "react";
import { UnitsContext } from "./UnitsContext.jsx";

export function UnitsProvider({ children }) {
    const [units, setUnits] = useState("F");

    return <UnitsContext value={{ units, setUnits }}>{children}</UnitsContext>;
}