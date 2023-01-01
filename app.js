let quotes = [{
        'quote': "Success is most often achieved by those who don't know that failure is inevitable.",
        'author': '- Coco Chanel',
        'works': 'Null'
    },
    {
        'quote': "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        'author': '- Nelson Mandela',
        'works': 'Works at Bostom University'
    },
    {
        'quote': "The way to get started is to quit talking and begin doing.",
        'author': '- Walt Disney',
        'works': 'Works at Cambridge University'
    },
    {
        'quote': "If life were predictable it would cease to be life, and be without flavor.",
        'author': '- Eleanor Roosevelt',
        'works': 'Null'
    },
    {
        'quote': "If you look at what you have in life, you'll always have more.",
        'author': '- Oprah Winfrey',
        'works': 'USA president assistant'
    },
    {
        'quote': "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        'author': '- James Cameron',
        'works': 'Collaborative CR.LLC'
    },
]

// // Variables

// const btn = document.getElementById('btn');
// const quote = document.getElementById('quote');
// const author = document.getElementById('author');

// // Event Listener

// btn.addEventListener('click', () => {
//     let random = Math.floor(Math.random() * quotes.length);

//     quote.innerHTML = quotes[random].quote;
//     quote.innerHTML = quotes[random].quote;
// });



// Let's handle 

let btn = document.querySelector('.myButton');
let quote = document.querySelector('.myQuotes');
let author = document.querySelector('.author')
let work = document.querySelector('.worksAt');

// Let's see them in action.

btn.addEventListener('click', () => {
    let randomQuotes = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[randomQuotes].quote;
    author.innerHTML = quotes[randomQuotes].author;
    work.innerHTML = quotes[randomQuotes].works;
})