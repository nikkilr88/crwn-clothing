import React, { Component } from 'react'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

import SHOP_DATA from './shop.data'

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state

    const collectionsList = collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))

    return (
      <div className="shop-page">
        SHOP PAGE
        {collectionsList}
      </div>
    )
  }
}

export default ShopPage
