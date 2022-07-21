import React, { ReactNode } from 'react'
import CategoryRail from '../rails/category-rail/category-rail'
import { RailData } from './Types'
import ChannelRail from '../rails/channel-rail/channel-rail'
import TitleRail from '../rails/title-rail/title-rail'
import OfHighlightRail from '../rails/highlight-rail/highlight-rail'

type Props = {
  isFocused: boolean
  mediaInfoHeight: number
  onCardFocus: Function
  rails: []
}

const VerticalScroll: React.FC<Props> = ({
  isFocused,
  mediaInfoHeight,
  onCardFocus,
  rails,
}) => {

  const renderRails = (): ReactNode => {
    const allRails = rails as RailData[]
    // eslint-disable-next-line array-callback-return
    return allRails.map((i) => {
      switch (i.contentType) {
        case 'CATEGORY':
            return <CategoryRail data={i} isFocused={false}/>
          case 'BROADCAST_CHANNEL':
            console.log("a")
            return <ChannelRail data={i} isFocused={false} />
          case 'OFFERHIGHLIGHT':
            return <OfHighlightRail data={i} isFocused={false} />
          case 'TITLE':
            return <TitleRail data={i} isFocused={false} />
      }
    })
}
 

  return (
    <div>
      {renderRails()}
    </div>
  )
}

export default VerticalScroll


