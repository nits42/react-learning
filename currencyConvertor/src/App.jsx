import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './App.css'
import {InputBox} from './components/Index';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  //const[data, setData] = useState(null);
  
  const [amount , setAmount] =  useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const [currencyName, setCurrencyName] = useState("usd")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  // const currencyNames = Object.keys(currencyName)
  // const currNames = Object.values(currencyName)
  // for (let i = 0; i < options.length; i++) {
  //   if (options[i] === currencyNames[i]) {
  //     options[i] = options[i].concat(" - " + currNames[i])
  //     console.log(" -- "+options[i].concat(" - " + currNames[i]));
  //   }
  // }
  
  //
  

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(parseFloat(amount).toFixed(2))
    setAmount(parseFloat(convertedAmount).toFixed(2))
  }

  const convert = () => {
    setConvertedAmount(amount * parseFloat(currencyInfo[to]).toFixed(2))
  }
  
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(`https://continentl.com/api/country-list?page=1&key=sk-ph2A66e07b7867fa6388`);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  let currencyNameUrl = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json'
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(currencyNameUrl)
        const data = await response.json();
        console.log(data);
        setCurrencyName(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }
  , []);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className="text-2xl text-white text-center mb-4">Currency Exchange</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(parseFloat(amount).toFixed(2))}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white 
                 bg-purple-600 hover:bg-green-500 text-white px-2 py-0.5 rounded-xl transition-all duration-1000 transform group-hover:translate-x-full ease"
                onClick={swap}
              > 
                swap
              </button>
              
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={parseFloat(convertedAmount).toFixed(2)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              />
            </div>
            <div className="w-full mt-1 mb-4 text-white">
              Exchange Rate:  {parseFloat(currencyInfo[to]).toFixed(2)}
            </div>

            <button type="submit" className="w-full bg-purple-600 hover:bg-green-500 text-white px-4 py-3 
              rounded-xl transition-all duration-1000 transform group-hover:translate-x-full ease">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
