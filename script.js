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
  updateCounter(COUNTS.RED, 1)
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createBlue(e) {
  const block = createBlock("blue")
  updateCounter(COUNTS.BLUE, 1)
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createGreen(e) {
  const block = createBlock("green")
  updateCounter(COUNTS.GREEN, 1)
  BLOCKS.appendChild(block)
}

/**
 * @param {MouseEvent} e
 */
function createYellow(e) {
  const block = createBlock("yellow")
  updateCounter(COUNTS.YELLOW, 1)
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
 * @param {number} change
 */
function updateCounter(counter, change) {
  let count = Number(counter.innerText)
  count += change
  counter.innerText = count
}

/**
 * @param {MouseEvent} e
 */
function deleteBlock(e) {
  /** @type {HTMLDivElement} */
  const block = e.target
  block.remove()
}
