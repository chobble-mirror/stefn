const levels = [
  [
    "0111111111111110",
    "0000000000000000",
    "1110000000000000",
    "0000000000001111",
    "0000111000000000",
    "0000000000011110",
    "1000000000000000",
    "1000000000111111",
    "1000000000011000",
    "0110000000000000",
    "0000000010000110",
    "0001111111100000",
    "0000000000000000",
    "0000000000010000",
    "0000001111111000",
    "0000000000000000",
  ],
  [
    "0000000000000000",
    "0000000000000000",
    "0000000011111000",
    "0000000000000001",
    "0000111000000000",
    "0000000000011110",
    "0011111000000000",
    "0000000000000111",
    "0000001111001000",
    "0011000000000010",
    "0000000000000000",
    "0001111001111000",
    "0000000000000000",
    "0001110000000000",
    "0000001111000000",
    "0111000000000000",
  ],
  [
    "0000000000000000",
    "0111111110000000",
    "0000000000000000",
    "0000000001111001",
    "1111100110000000",
    "0000000001110010",
    "0000011100000000",
    "1000000000000000",
    "0000111000000000",
    "0011100000111010",
    "0000001100000000",
    "0000000001001000",
    "0000111000000000",
    "0010000001111000",
    "0000000000110000",
    "0110000000001100",
  ],
];

function clearCanvas(layer) {
  layer.clearRect(0, 0, layer.width, layer.height);
}

function drawLevel() {
  clearCanvas(bg);
  bg.fillStyle = "black";
  for (let row = 0; row < currentLevel.length; row++) {
    for (let col = 0; col < currentLevel[0].length; col++) {
      if (currentLevel[row][col] === "1") {
        bg.fillRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }
  }
}
