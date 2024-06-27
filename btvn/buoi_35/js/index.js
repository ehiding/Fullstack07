const boldBtn = document.querySelector("#bold-btn");
const underlineBtn = document.querySelector("#underline-btn");
const italicBtn = document.querySelector("#italic-btn");
const colorBtn = document.querySelector("#color-btn");

boldBtn.addEventListener("click", () => {
  document.execCommand("bold");
});

underlineBtn.addEventListener("click", () => {
  document.execCommand("underline");
});

italicBtn.addEventListener("click", () => {
  document.execCommand("italic");
});

colorBtn.addEventListener("input", () => {
  document.execCommand("forecolor", false, colorBtn.value);
});

const newBtn = document.querySelector("#new-btn");
const textBtn = document.querySelector("#text-btn");
const pdfBtn = document.querySelector("#pdf-btn");
const content = document.querySelector("#content");
const fileName = document.querySelector("#filename-input");

newBtn.addEventListener("click", () => {
  content.innerHTML = "";
});

textBtn.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content.innerText]));
  a.download = fileName.value + ".txt";
  a.click();
});

pdfBtn.addEventListener("click", () => {
  html2pdf().from(content).save(fileName.value);
});

function countCharacters() {
  const content = document.querySelector("#content").innerText;

  const charCount = content.length;
  document.getElementById("charCount").textContent = charCount;

  const uppercaseCount = content.replace(/[^A-Z]/g, "").length;
  document.getElementById("uppercaseCount").textContent = uppercaseCount;

  const lowercaseCount = content.replace(/[^a-z]/g, "").length;
  document.getElementById("lowercaseCount").textContent = lowercaseCount;
}

function countWords() {
  const content = document.querySelector("#content").innerText;

  const wordCount = content.split(/\s+/).length;
  document.getElementById("wordCount").textContent = wordCount;
}

function countLine() {
  const content = document.querySelector("#content").innerText;

  const lineCount = content.split("\n").length;
  document.getElementById("lineCount").textContent = lineCount;
}
