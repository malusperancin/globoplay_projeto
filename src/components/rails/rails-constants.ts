import CATEGORY_RAIL_CONSTANTS from './category-rail/category-rail-constants'
import CHANNEL_RAIL_CONSTANTS from './channel-rail/channel-rail-constants'
import TITLE_RAIL_CONSTANTS from './title-rail/title-rail-constants'

const RAILS_CONSTANTS = {
  [CATEGORY_RAIL_CONSTANTS.CONTENT_TYPE]: CATEGORY_RAIL_CONSTANTS,
  [CHANNEL_RAIL_CONSTANTS.CONTENT_TYPE]: CHANNEL_RAIL_CONSTANTS,
  [TITLE_RAIL_CONSTANTS.CONTENT_TYPE]: TITLE_RAIL_CONSTANTS,
} as const

export default RAILS_CONSTANTS
