import React, { useEffect, useRef, useState } from "react";
import { styled } from "@stitches/react";
import type { CSS } from "@stitches/react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { CheckIcon } from "@radix-ui/react-icons";

interface TerminalProps {
  renderData: {
    data: string[];
    setData: (data: string[]) => void;
  };
  terminalStyle?: CSS;
}

interface TerminalContextProps {
  children: React.ReactNode;
  renderData: {
    data: string[];
    setData: (data: string[]) => void;
  };
  darkmode?: {
    dark: boolean;
    setDark: (dark: boolean) => void;
  };
}

export const Terminal = ({ renderData, terminalStyle }: TerminalProps) => {
  const { data, setData } = renderData;
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(true);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  const darkmode = {
    dark: dark,
    setDark: setDark,
  };

  return (
    <TerminalContext renderData={renderData} darkmode={darkmode}>
      <StyledTerminal css={terminalStyle} dark={dark}>
        {data.map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
        <div ref={messageEndRef} />
      </StyledTerminal>
    </TerminalContext>
  );
};

export const TerminalContext = ({
  children,
  renderData,
  darkmode,
}: TerminalContextProps) => {
  const { data, setData } = renderData;
  const dark = darkmode?.dark;
  const setDark = darkmode?.setDark;
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>{children}</ContextMenu.Trigger>
      <StyledContent>
        <StyledItem onSelect={() => setData([])}>Clear</StyledItem>
        {darkmode ? (
          <>
            <StyledSeperator />
            <StyledCheckboxItem checked={dark} onCheckedChange={setDark}>
              <StyledItemIndicator>
                <CheckIcon />
              </StyledItemIndicator>
              Dark Mode
            </StyledCheckboxItem>
          </>
        ) : (
          <></>
        )}
      </StyledContent>
    </ContextMenu.Root>
  );
};

const StyledTerminal = styled("div", {
  backgroundColor: "#ddd",
  border: "1px solid #ddd",
  borderRadius: "5px",
  color: "#252a33",
  fontSize: "13px",
  overflowY: "scroll",
  padding: "10px 13px",
  fontFamily:
    "'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "2px",
    background: "#eee",
  },
  variants: {
    dark: {
      true: {
        backgroundColor: "#252a33",
        border: "1px solid #252a33",
        color: "#eee",
      },
    },
  },
});

/**
 * Context Menu Style
 */
const StyledContent = styled(ContextMenu.Content, {
  minWidth: "200px",
  backgroundColor: "#958C98",
  border: "1px solid #958C98",
  borderRadius: "5px",
  padding: "5px",
  overflow: "hidden",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const itemStyle = {
  all: "unset",
  userSelect: "none",
  fontSize: "13px",
  color: "#eee",
  padding: "3px 5px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "20px",
  borderRadius: "5px",
  position: "relative",
  "&:focus": {
    backgroundColor: "#eee",
    color: "#958C98",
  },
};

const StyledItem = styled(ContextMenu.Item, {
  ...itemStyle,
});

const StyledCheckboxItem = styled(ContextMenu.CheckboxItem, {
  ...itemStyle,
});

const StyledItemIndicator = styled(ContextMenu.ItemIndicator, {
  position: "absolute",
  left: "0",
  width: "20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledSeperator = styled(ContextMenu.Separator, {
  height: "1px",
  backgroundColor: "#eee",
  margin: "5px",
});

export default Terminal;
