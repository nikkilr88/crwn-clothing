import React from 'react'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {
  const itemsList = items
    .filter((item, index) => index < 4)
    .map(item => <div key={item.id}>{item.name}</div>)

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">{itemsList}</div>
    </div>
  )
}

export default CollectionPreview
