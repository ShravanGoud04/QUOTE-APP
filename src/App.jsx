
import React from "react";
import QuoteCard from "./Components/QuoteCard";
import { QuoteProvider } from "./Context/QuoteContext";

const App = () => {
  return (
    <QuoteProvider>
    
    <div className='container p-5'>
      <h1 className='display-3 text-center'>Daily Quote</h1>
      <QuoteCard/>
    </div>
    </QuoteProvider>
  );
};

export default App;
