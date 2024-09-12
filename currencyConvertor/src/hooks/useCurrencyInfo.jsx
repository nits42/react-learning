import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data, setData] = useState({})

    useEffect(()=> {   
        function fetchData() { 
            try {
                fetch(url)
                .then((res) => res.json())
                .then((res) => setData(res[currency]))
            } catch (error) {
                console.error("Error while fetching data: ", error);
            }
        }
        fetchData();
    }, [currency])
    
    console.log(data);
    return data;
}

export default useCurrencyInfo;