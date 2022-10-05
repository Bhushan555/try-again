import React from 'react';
import ethImg from '../assets/weth.png'

const CollectionCard = ({id, name, traits, image}) => {
  return (
    <div className='collectionCard'>
      
        <figure>
            <img src={image} alt="" />
        </figure>
        <div className="details">
            <div className="name-wrap">
                <h4>{name}</h4>
                <span>.#{id}</span>
            </div>
            <div className="price-wrap">
                <img src={ethImg} alt="" />
                <h5>{traits[0]?.value}</h5>
            </div>
        </div>
    </div>
  )
}

export default CollectionCard
