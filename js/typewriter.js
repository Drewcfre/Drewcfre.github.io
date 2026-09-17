// Creates a "typewriter" effect for the introduction title.
// Writes a number of phrases into the element context character by character.

const introTitlePhrases = ["Andrew.", "a full stack engineer.", "building reliable services."];
const element = document.getElementById("typewriter");

let phraseIndex = 0, characterIndex = 6, deleting = true;

function tick() {
  if (phraseIndex >= introTitlePhrases.length) phraseIndex = 0;
  const phrase = introTitlePhrases[phraseIndex];

  if (!deleting) {
    element.textContent = phrase.slice(0, ++characterIndex);
    if (characterIndex === phrase.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
  }
  else {
    element.textContent = phrase.slice(0, --characterIndex);
    if (characterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrase.length;
    }
  }
  setTimeout(tick, deleting ? 45 : 80);
}

setTimeout(tick, 3000);
