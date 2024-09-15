import "./App.css";
import AppContent from "./components/layout/AppContent";
import Background from "./components/layout/Background";
import useConsoleMessage from "./hooks/useConsoleMessage";

function App() {
  const messages = [
    {
      text: " 찾아주셔서 감사합니다, 개발자 Young Jae 입니다!🚀 ",
      style: {
        "font-size": "16px",
        "font-weight": "bold",
        "background-color": "#000000",
        color: "#64FFDA",
        "line-height": "3",
        "text-align": "center",
      },
    },
  ];

  useConsoleMessage({ messages });

  return (
    <div className="App">
      <Background />
      <AppContent />
    </div>
  );
}

export default App;
