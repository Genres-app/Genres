export default function RgbaInterpolate(r, g, b, a, multiplier, r2, g2, b2, a2, ReturnCSS) {
  return ReturnCSS?
  `rgba(${(r + (r2 - r) * multiplier)}, ${(g + (g2 - g) * multiplier)}, ${(b + (b2 - b) * multiplier)}, ${(a + (a2 - a) * multiplier)})`
  :
  {
    r: (r + (r2 - r) * multiplier),
    g: (g + (g2 - g) * multiplier),
    b: (b + (b2 - b) * multiplier),
    a: (a + (a2 - a) * multiplier)
  };
}