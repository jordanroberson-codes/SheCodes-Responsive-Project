//FACT GENERATOR
var factPlaceholder = document.getElementById("fun-fact");
var showFact = document.getElementById("show-fact");

var funFacts = [
  "I have been a nurse practitioner for almost 5 years and was previously a nurse for 4 years before that.",
  "I am happily married to my highschool sweetheart and we have 2 beautiful kids, a boy and a girl.",
  "I love learning and challenges,which is usually why I am always enrolled in some kind of class.",
  "My favorite sports are soccer and tennis",
  "I prefer mac over windows -- all day everyday.  🍎",
  "I am a perfectionist and constantly feel that there are things to improve on in all aspects of life.",
  "I am 31 years old and live in Florida.",
  "Surprisingly I HATE the beach but love being in the ocean.",
  "XBOX > PlayStation",
  "I love videos games - GTA 5 is my favorite 😜",
  "My first coding experience was NeoPets and LiveJournal.",
];

var factNumber;

function randomFact() {
  return funFacts[factNumber];
}

showFact.addEventListener("click", function () {
  factNumber = Math.floor(Math.random() * 11);
  factPlaceholder.textContent = randomFact();
});
