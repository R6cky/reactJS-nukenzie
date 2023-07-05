import "./App.css";
import {Dashboard} from "./components/dashboard"
import {Home} from './components/home'
import { useState } from "react";

function App() {

  const [listTransactions, setListTransactions] = useState([])

  const [currentPage, setCurrentPage] = useState(true)

 
  return <div className="App">
          {
            currentPage ? 
            <Home setCurrentPage={setCurrentPage} /> :
            <Dashboard listTransactions={listTransactions} setListTransactions={setListTransactions} setCurrentPage={setCurrentPage} /> 
          }
           
        </div>;
}

export default App;
