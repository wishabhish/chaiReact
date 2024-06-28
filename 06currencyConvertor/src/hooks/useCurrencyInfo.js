import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;