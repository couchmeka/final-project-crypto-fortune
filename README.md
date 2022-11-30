# Crypto Fortune App
This Web Application give you an inspirational quote in the form of a fortune cookie fortune and generates a random lucky cryptocurrency token. It also uses text to speech to read the fortune for those who have a hard time seeing. This is meant to be for fun and is not meant to be financial advise. 


## Info
This application uses Coin Gecko API https://www.coingecko.com/en/api/documentation
And Quotes Free API https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

## Usage 
Fork the repo and clone to your desktop using the repository URL

```
git clone repoURL
```

### Change Image 
The location to change the image will be in the javascript main.js file in line 20 for the starting image and line 35 for the second image to populate.

```
//image placement
cardIMG.src = 'fortuneclosed.png';


// quotes 
// blockchain https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd



//Event Listener
fortuneCookie.addEventListener('click', () => {
    
    
console.log('clicked');

//image changing to cookie open
cardIMG.src = 'cookieopen.png';
```