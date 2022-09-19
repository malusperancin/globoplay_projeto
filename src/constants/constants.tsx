import { isFullHD } from "../utils/get-resolution";

export const CARD_TITLE = {
  CARD_WIDTH: isFullHD() ? 189 : 126,
  NUM_CARD_SCREEN: 14,
  DOWN: isFullHD() ? -0 : -90,
};

export const CARD_CATEGORY = {
  CARD_WIDTH: isFullHD() ? 354 : 237,
  NUM_CARD_SCREEN: 8,
  DOWN: isFullHD() ? -0 : -170,
};

export const CARD_CHANNEL = {
  CARD_WIDTH: isFullHD() ? 354 : 237,
  NUM_CARD_SCREEN: 14,
  DOWN: isFullHD() ? -0 : -170,
};

export const CARD_BROADCAST = {
  CARD_WIDTH: isFullHD() ? 354 : 237,
  NUM_CARD_SCREEN: 0,
  DOWN: isFullHD() ? -0 : -170,
};
