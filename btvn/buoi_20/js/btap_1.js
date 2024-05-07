var content = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
var oldPosition = 0;
var position = content.indexOf(" ");

setInterval(function () {
  result =
    content.slice(0, oldPosition) +
    `<span style="color: red">${content.slice(
      oldPosition,
      position + 1
    )}</span>` +
    content.slice(position + 1);

  oldPosition = position;
  position = content.indexOf(" ", oldPosition + 1);

  if (position === -1) {
    oldPosition = 0;
    position = content.indexOf(" ");
  }

  document.querySelector(".content").innerHTML = result;
}, 1000);
