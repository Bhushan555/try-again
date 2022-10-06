import React from 'react'
import CollectionCard from './CollectionCard'

const PunkList = ({punkListData}) => {
  console.log(punkListData)
  return (
    <>
    <div className='punkList'> 
      {
        punkListData.map((punk) => {
            <div>
                <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}
                />
            </div>
        })
      }
    </div>
    <CollectionCard
            
            id={5}
            name={'5sbhsbhb'}
            traits={[{'value':0}]}
            image={'punk.image_original_url'}
            />
    <CollectionCard
            
            id={5}
            name={'5sbhsbhb'}
            traits={[{'value':0}]}
            image={'punk.image_original_url'}
            />
    </>
  )
}

export default PunkList
