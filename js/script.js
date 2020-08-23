/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project ReSources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {Quote:"The greatest glory in living lies not in never falling, but in rising every time we fall." , Source: 'Nelson Mandela', Citation: 'test', year:'2016'},
  {Quote:"The way to get started is to quit talking and begin doing." , Source: 'Walt Disney', Citation: 'test', year:'2020' },
  {Quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." ,Source:'Steve Jobs', Citation: 'test', year:'' },
  {Quote:"If life were predictable it would cease to be life, and be without flavor."  , Source:'Eleanor Roosevelt', Citation: 'test', year:'' },
  {Quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." , Source:'Oprah Winfrey', Citation: 'test', year:'' },
  {Quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."  , Source:'James Cameron', Citation: 'test', year:'' },
  {Quote:"When you reach the end of your rope, tie a knot in it and hang on."  , Source:'Franklin D. Roosevelt', Citation: 'test', year:'2015' },
  {Quote:"Always remember that you are absolutely unique. Just like everyone else."  , Source:'Margaret Mead', Citation: 'test', year:'' },
  {Quote:"Don't judge each day by the harvest you reap but by the seeds that you plant." , Source:'Robert Louis Stevenson', Citation: 'test', year:'' },
  {Quote:"The future belongs to those who believe in the beauty of their dreams."  , Source:'Eleanor Roosevelt', Citation: 'test', year:'' }
]

/***
 * `getRandomQuote` function
***/
function getRandomQuote(num){
  let i = Math.floor(Math.random() * num); 
  return quotes[i];
}

/***
 * `printQuote` function
***/
function printQuote (){
  const quote = getRandomQuote(9)
  let HTML = 
    `<p class="quote"> ${quote.Quote} </p>
      <p class="source"> ${quote.Source}`
    if (quote.Citation !== ''){
       HTML += `<span class="citation"> ${quote.Citation} </span>`;
    } 
    
    if (quote.year !== ''){
      HTML += `<span class="citation"> ${quote.year} </span>`;
    } 
  HTML += '</p>'
  document.getElementById('quote-box').innerHTML = HTML; 
  
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);