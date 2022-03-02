import React from "react";
import type { CSS } from "@stitches/react";
export interface TData {
    data: string[];
    setData: (data: string[]) => void;
}
export interface TerminalProps {
    renderData: TData;
    terminalStyle?: CSS;
}
export interface TerminalContextProps {
    children: React.ReactNode;
    renderData: TData;
    darkmode?: {
        dark: boolean;
        setDark: (dark: boolean) => void;
    };
}
export declare const Terminal: ({ renderData, terminalStyle }: TerminalProps) => JSX.Element;
export declare const TerminalContext: ({ children, renderData, darkmode, }: TerminalContextProps) => JSX.Element;
export default Terminal;
