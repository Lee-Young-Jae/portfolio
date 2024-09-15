import { useEffect } from "react";

type ConsoleMessage = {
  text: string;
  style?: Record<string, string>;
};

interface useConsoleMessagesProps {
  messages: ConsoleMessage[];
}

const useConsoleMessages = ({ messages }: useConsoleMessagesProps) => {
  useEffect(() => {
    messages.forEach(({ text, style = {} }) => {
      const styles = Object.entries(style)
        .map(([key, value]) => `${key}: ${value}`)
        .join(";");

      console.log(`%c${text}`, styles);
    });
  }, [messages]);
};

export default useConsoleMessages;
