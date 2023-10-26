console.log("🟥 🟦 🟩 🟨")

const BLOCKS = document.getElementById("blocks")
console.log(BLOCKS)

/**
 * @param {MouseEvent} e
 */
function createRed(e) {
  const block = createBlock("red")
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createBlue(e) {
  const block = createBlock("blue")
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createGreen(e) {
  const block = createBlock("green")
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
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
  block.addEventListener("click", deleteBlock)
  console.log("Created a block:", block)
  return block
}

/**
 * @param {MouseEvent} e
 */
function deleteBlock(e) {
  e.target.remove()
}
