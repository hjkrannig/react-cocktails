import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ cocktail }) => {
  const {
    idDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strDrinkThumb,
    strDrink,
  } = cocktail
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{cocktail.strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>
          {strCategory}: {strAlcoholic}
        </p>
        <Link
          to={`/cocktails/${idDrink}`}
          className="btn btn-primary btn-details"
        >
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
