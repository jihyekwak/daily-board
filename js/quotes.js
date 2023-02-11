const quotes = [
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Enjoy the journey and try to get better every day. And don't lose the passion and the love for what you do.",
        author: "Nadia Comaneci"
    },
    {
        quote: "If I know what love is, it is because of you.",
        author: "Hermann Hesse"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        author: "Marilyn Monroe"
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "Malala Yousafzai"
    }
];

const quote = document.querySelector("#quotes span:nth-child(1)");
const author = document.querySelector("#quotes span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;