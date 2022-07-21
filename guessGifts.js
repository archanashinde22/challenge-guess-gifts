var wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

var presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

const guessGifts = (wishlist, presents) => {
  let guesspresents = [];
  for (let i = 0; i < presents.length; i++) {
    for (let j = 0; j < wishlist.length; j++) {
      if (
        presents[i].size === wishlist[j].size &&
        presents[i].clatters === wishlist[j].clatters &&
        presents[i].weight === wishlist[j].weight
      ) {
        guesspresents.push(wishlist[j].name);
      }
    }
  }
  return console.log(guesspresents);
};
guessGifts(wishlist, presents);
