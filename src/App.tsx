import * as React from "react";

function App() {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    fetch("/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <div>Hello, World!</div>
      <div data-testid="message">{message}</div>
    </div>
  );
}

export default App;
