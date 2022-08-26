import { isFullHD } from "../utils/get-resolution";

export const CARD_TITLE = {
  CARD_HEIGHT: isFullHD() ? 189 : 126,
  NUM_CARD_SCREEN: 14,
  DOWN: isFullHD() ? -50 : -90,
};

export const CARD_CATEGORY = {
  CARD_HEIGHT: isFullHD() ? 354 : 237,
  NUM_CARD_SCREEN: 14,
  DOWN: isFullHD() ? -100 : -170,
};

export const CARD_CHANNEL = {
  CARD_HEIGHT: isFullHD() ? 354 : 237,
  NUM_CARD_SCREEN: 14,
  DOWN: isFullHD() ? -100 : -170,
};
