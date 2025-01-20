export const generateRandomMonsterPath = (startY) => {
  const path = [];
  let currentX = 0;
  let currentY = startY; // 500 ~ 520 범위의 y 시작 (캔버스 y축 중간쯤에서 시작할 수 있도록 유도)

  path.push({ x: currentX, y: currentY });

  while (currentX < 500) {
    currentX += Math.floor(Math.random() * 100) + 50; // 50 ~ 150 범위의 x 증가
    // x 좌표에 대한 clamp 처리
    if (currentX > 500) {
      currentX = canvas.width;
    }

    currentY += Math.floor(Math.random() * 20) - 20; // -100 ~ 100 범위의 y 변경
    // y 좌표에 대한 clamp 처리
    if (currentY < startY-100) {
      currentY = startY-100;
    }
    if (currentY > canvas.height) {
      currentY = canvas.height;
    }
    if (currentY < startY+100) {
      currentY = startY+100;
    }

    path.push({ x: currentX, y: currentY });
  }

  return path;
}

export const adjustPathY = (path, offsetY) => {
  return path.map(point => ({
    x: point.x,
    y: point.y + offsetY
  }));
};