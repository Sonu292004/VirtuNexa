async function loadEmojis() {
  const response = await fetch("emojis.json");
  return await response.json();
}

function searchEmojis(query, emojiList) {
  return emojiList.filter((emoji) =>
    emoji.keywords.some((keyword) => keyword.includes(query.toLowerCase()))
  );
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = ""; 

  if (results.length === 0) {
    resultsContainer.textContent = "No emojis found!";
    return;
  }

  results.forEach((item) => {
    const emojiDiv = document.createElement("div");
    emojiDiv.textContent = item.emoji;
    emojiDiv.classList.add("emoji");
    emojiDiv.addEventListener("click", () => copyToClipboard(item.emoji));
    resultsContainer.appendChild(emojiDiv);
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`${text} copied to clipboard!`);
  });
}

async function main() {
  const emojiList = await loadEmojis();
  const input = document.getElementById("emojiSearch");

  input.addEventListener("input", () => {
    const query = input.value.trim();
    const results = searchEmojis(query, emojiList);
    displayResults(results);
  });
}

main();
