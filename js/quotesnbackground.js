const quotes = [
  {
    quote:
      "The Night Is Darkest Right Before The Dawn. And I Promise You, The Dawn Is Coming.",
    author: "Harvey Dent",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/07/The-Dark-Knight-Harvey-Dent-Aaron-Ackheart.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "The Training Is Nothing. The Will Is Everything. The Will To Act.",
    author: "Henri Ducard",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Bruce-Wayne-and-Ras-al-Ghul-engaging-in-a-swordfight-in-Batman-Begins-Cropped.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "You Always Fear What You Don't Understand.",
    author: "Carmine Falcone",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/Carmine-Falcone.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "You I Believe What Doesn't Kill You Simply Makes You... Stranger.",
    author: "The Joker",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/Heath-Ledger-as-the-Joker-in-the-opening-scene-of-The-Dark-Knight.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "He's the hero Gotham deserves but not the one it needs right now.",
    author: "Commissioner Jim Gordon",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Gary-Oldman-as-Commissioner-Gordon-in-The-Dark-Knight-trilogy.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "Why do we fall, sir? So that we can learn to pick ourselves up.",
    author: "Alfred",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Thomas-Wayne-and-Alfred-rescue-Bruce-Wayne-from-the-cave-he-fell-into-in-Batman-Begins.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote:
      "Madness, as you know, is a lot like gravity. All it takes is a little push.",
    author: "The Joker",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/12/1-Heath-Ledger-Joker-Car-Window-Wind-Hair.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "It's not who I am underneath but what I do that defines me.",
    author: "The Batman",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/04/Christian-Bale-as-Bruce-Wayne.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote:
      "You either die a hero or live long enough to see yourself become the villain.",
    author: "The Two-Face",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2018/05/Aaron-Eckhart-as-Harvey-Dent-Two-Face-in-The-Dark-Knight.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote: "Some men just want to watch the world burn.",
    author: "Alfred",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/michael-caine-alfred-batman-dark-knight.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    quote:
      "As A Man, I'm Flesh And Blood; I Can Be Ignored, I Can Be Destroyed. But As A Symbol... As A Symbol, I Can Be Incorruptible. I Can Be Everlasting.",
    author: "Bruce Wayne",
  },
  {
    quote:
      "A Hero Can Be Anyone, Even Someone Doing Something As Simple And Reassuring As Putting A Coat Around A Little Boy's Shoulders To Let Him Him Know The World Hadn't Ended.",
    author: "The Batman",
    image:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/10/0.thehumor.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const bgImage = document.createElement("img");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author} -`;
bgImage.src = todaysQuote.image;

document.body.appendChild(bgImage);
