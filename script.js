console.log("🟥 🟦 🟩 🟨")

const BLOCKS = document.getElementById("blocks")
console.log(BLOCKS)

function createRed(e) {
  const block = createBlock("red")
  BLOCKS.appendChild(block)
}

function createBlue(e) {
  const block = createBlock("blue")
  BLOCKS.appendChild(block)
}

function createGreen(e) {
  const block = createBlock("green")
  BLOCKS.appendChild(block)
}

function createYellow(e) {
  const block = createBlock("yellow")
  BLOCKS.appendChild(block)
}

/**
 * @param {"red"|"blue"|"green"|"yellow"} color
 * @returns {HTMLDivElement}
 */
function createBlock(color) {
  const block = document.createElement("div")
  block.classList.add("block", `${color}-fill`)
  console.log("Created a block:", block)
  return block
}

// function appendTo
