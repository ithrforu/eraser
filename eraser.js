document.addEventListener('mousemove', (event) => {
  const round = document.createElement('span');

  round.style.left =  `${-75 + event.offsetX}px`;
  round.style.top = `${-75 + event.offsetY}px`;

  document.querySelector('body').appendChild(round);
});
