function setup() {
  let cards = document.querySelectorAll(".card");
  let arrayCards = Array.from(cards);
  arrayCards.map((card) => {
    initCard(card);
  });
}
setup();
function initCard(card) {
    const cardContent = card.querySelector(".card__content");
    console.log(card);
    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect();
      let halfWidth = cardRect.width / 2;
      let halfHeight = cardRect.height / 2;
      let cardCenterX = cardRect.left + halfWidth;
      let cardCenterY = cardRect.top + halfHeight;
      const positionX = e.clientX;
      const positionY = e.clientY;
      let deltaX = positionX - cardCenterX;
      let deltaY = positionY - cardCenterY;
      let distanceToCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      let maxDistance = Math.max(halfWidth, halfHeight);
      // console.log(cardRect);
      // console.log(distanceToCenter);
      // console.log(cardCenterX, cardCenterY);
      // console.log(halfWidth, halfHeight);
      // console.log(maxDistance);
      const degree = mapNumberRange(distanceToCenter, 0, maxDistance, 0, 10);
      const rx = mapNumberRange(deltaY, 0, halfWidth, 0, 1); 
      const ry = mapNumberRange(deltaX, 0, halfHeight, 0, 1);
      cardContent.style.transform = `perspective(400px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
      mapNumberRange(deltaX, 0, halfWidth, 0, 1);
      mapNumberRange(deltaY, 0, halfHeight, 0, 1);
  });
    card.addEventListener('mouseleave', function(){
      cardContent.style = null;
    })
}
function mapNumberRange(n, a, b, e, d){
    return (n - a) * (d - e) / (b - a);
}
