console.log("🟥 🟦 🟩 🟨")

const BLOCKS = document.getElementById("blocks")
console.log(BLOCKS)

// Putting them all in one place
const COUNTS = {
  RED: document.getElementById("red-count"),
  BLUE: document.getElementById("blue-count"),
  GREEN: document.getElementById("green-count"),
  YELLOW: document.getElementById("yellow-count"),
}
console.log(COUNTS)

/**
 * @param {MouseEvent} e
 */
function createRed(e) {
  const block = createBlock("red")
  updateCounter(COUNTS.RED)
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createBlue(e) {
  const block = createBlock("blue")
  updateCounter(COUNTS.BLUE)
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createGreen(e) {
  const block = createBlock("green")
  updateCounter(COUNTS.GREEN)
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createYellow(e) {
  const block = createBlock("yellow")
  updateCounter(COUNTS.YELLOW)
  BLOCKS.appendChild(block)
}

/**
 * @param {"red"|"blue"|"green"|"yellow"} color
 * @returns {HTMLDivElement}
 */
function createBlock(color) {
  const block = document.createElement("div")
  block.classList.add("block", `${color}-fill`)
  // block.addEventListener("click", deleteBlock)
  console.log("Created a block:", block)
  return block
}

/**
 * @param {HTMLButtonElement} counter
 */
function updateCounter(counter) {
  let count = Number(counter.innerText)
  count++
  counter.innerText = count
}

/**
 * @param {MouseEvent} e
 */
function deleteBlock(e) {
  e.target.remove()
}
