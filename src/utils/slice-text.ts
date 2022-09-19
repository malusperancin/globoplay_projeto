export function sliceText(text: string, quantity: number) {
  if (!text?.length) return "";
  return text.length > quantity ? `${text.slice(0, quantity)}...` : text;
}
