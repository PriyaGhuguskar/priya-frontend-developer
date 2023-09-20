import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const Context = createContext();



export const ComtextApi = (props) => {

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetchData()

    }, []);

    async function fetchData() {
        try {
            const response = await axios.get('https://api.spacexdata.com/v3/capsules');
            // console.log(response.data)
            setLoading(true)
            let capsuleData = await (response.data)
            setSearchResults(capsuleData)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

