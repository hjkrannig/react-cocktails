import React from 'react'
import { Link } from 'react-router-dom'

const SingleCocktailComp = ({ cocktail }) => {
  const {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,
  } = cocktail

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title"> {name} </h2>
      <div className="drink">
        <img src={image} alt={name} />
        {/* <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p className="no-capitalize">
            <span className="drink-data no-capitalize ">instructions : </span>
            {instructions}
          </p>
          <p className="no-capitalize">
            <span className="drink-data">ingredients : </span>
            {ingredients.map((item, index) => {
              return item && <span key={index}>{item}</span>
            })}
          </p>
        </div> */}

        <div className="drink-info">

          <div className="drink-data">name : </div>
          <p> {name} </p>

          <div className="drink-data">category: </div>
          <p> {category}</p>

          <div className="drink-data">info: </div>
          <p> {info} </p>

          <div className="drink-data">glass: </div>
          <p> {glass} </p>

          <div className="drink-data">instructions: </div>
          <p className='no-capitalize'> {instructions}</p>

          <div className="drink-data">ingredients: </div>
          <p className='no-capitalize'>
            {ingredients.map((item, index) => {
              return item && <span key={index}>{item}</span>
            })}
          </p>
        </div>

      </div>
    </section >
  )
}

export default SingleCocktailComp
