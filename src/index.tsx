//import { StrictMode } from "react";
import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import Header from "./template/Header";
import { Footer } from "./template/Footer";
//import { Refresh } from "./template/Refresh";


const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);

function AppWithUI() {
    const [count, setCount] = useState(0);
  
    return (
      <StrictMode>
        <Footer
        
          title="NAVER"
          url="http://www.naver.com"

          
          
        />
      </StrictMode>
      

      
      
    );
  }

root.render(
  <StrictMode>
        <Header />
    <AppWithUI />
    <App />

  </StrictMode>
);



