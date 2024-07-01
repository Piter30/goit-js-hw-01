function getElementWidth(content, padding, border) {
  const contentValue = Number.parseFloat(content);
  const paddingValue = Number.parseFloat(padding);
  const borderValue = Number.parseFloat(border);

  //   return contentValue + 2 * paddingValue + 2 * borderValue;
  const totalWidth = contentValue + 2 * paddingValue + 2 * borderValue;

  //   return Math.round(totalWidth); // zaokrąglenie zgodnie z zasadami matematycznymi
  return Math.floor(totalWidth); // zaokrąglenie w doł - mniejsza lub równa podanej liczbie
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
console.log(getElementWidth("500px", "120px", "120.3px")); // 980 jeżeli Math.floor lub 981 jeżeli Math.round
