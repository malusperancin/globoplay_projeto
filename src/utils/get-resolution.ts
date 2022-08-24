const resolution =
  document.getElementsByTagName("body")[0].clientWidth ||
  window.innerWidth ||
  window.screen.availWidth;

export const isFullHD = () => {
  return resolution >= 1400 && resolution < 3800;
};
