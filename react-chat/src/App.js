import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Velkommen from "./Velkommen";

function App() {
  const [step, setStep] = useState(0);
  const [globalUsername, setGlobalName] = useState("");
  return (
    <div className="App">
      {step === 0 && (
        <Velkommen setStep={setStep} setGlobalName={setGlobalName} />
      )}
      {step === 1 && <Chat globalUsername={globalUsername} />}
    </div>
  );
}

export default App;
