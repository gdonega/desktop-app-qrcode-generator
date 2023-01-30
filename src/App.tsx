import QRCode from "./qrcodegenerator";
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <div className="container">
        <p>QR Code Generator</p>
        <div >
          <input
            placeholder="Input"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div style={{ marginTop: "10px" }} >
          <img
            src={QRCode.generatePNG(message)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
