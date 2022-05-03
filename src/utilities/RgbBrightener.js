export default function RgbBrightener(r, g, b, multiplier) {
  return "rgb(" + (r + (255 - r) * multiplier) + "," + (g + (255 - g) * multiplier) + "," + (b + (255 - b) * multiplier) + ")"
}