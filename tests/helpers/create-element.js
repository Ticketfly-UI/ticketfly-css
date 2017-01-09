export default function createElement(tagName = 'div') {
  const elem = document.createElement(tagName);

  document.body.appendChild(elem);

  return elem;
}
