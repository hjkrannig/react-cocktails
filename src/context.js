import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

// useReducer not implemented. See unsplash-images as example
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback(async () => {
    try {
      setLoading(true)
      const response = await fetch(`${url}${search}`)
      if (response.ok) {
        const data = await response.json()
        setCocktails(data.drinks)
      } else {
        console.log('fetch-response not OK')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setLoading(false)
  }, [search])

  useEffect(() => {
    fetchDrinks()
  }, [search, fetchDrinks])

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearch }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
