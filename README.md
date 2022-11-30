# Crypto Fortune App
This Web Application give you an inspirational quote in the form of a fortune cookie fortune and generates a random lucky cryptocurrency token. It also uses text to speech to read the fortune for those who have a hard time seeing. This is meant to be for fun and is not meant to be financial advise. 

<img width="879" alt="Screenshot 2022-11-30 at 12 04 13 PM" src="https://user-images.githubusercontent.com/21232416/204861855-1ec0d464-9e70-4e48-abe7-78df6daea6e6.png">

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

### Change Audio 

Lines 39 and 40. If you would like to change the sound download the MP3 and load it into root folder of the project. Point the new audio to the audio of your choice
```
let sound = new Audio("crunch.mp3"); // buffers automatically when created
sound.play();
```

### Change Blockchain API

If you would like to change the data population into the table for the blockchain api you will need to modify the event listener and the table data. This is located between 143 and lines 181 

```
    let tickerRequest = async () => {
      let response1 = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
      let data1 = await response1.json();
      console.log(data1[Math.ceil(Math.random() * 100)].name);
        
  
      //create table function
      function loadTableData() {
          const table = document.querySelector(".table");

       //looping through items in data array for table population
          data1.forEach( item => {
            let row = table.insertRow();
            let name = row.insertCell(0);
            let currentPrice = row.insertCell(1);
            let image = row.insertCell(2);
            let symbol = row.insertCell(3);
            let high24 = row.insertCell(4);
            let low24 = row.insertCell(5);
            let volume = row.insertCell(6);
      
      //adding data to table rows
            high24.innerHTML = item.high_24h;
            low24.innerHTML = item.low_24h;
            volume.innerHTML =item.total_volume;
            symbol.innerHTML = item.symbol;
            name.innerHTML = item.name;
            currentPrice.innerHTML = item.current_price;

      //add logo to table   
            image.innerHTML="";
            let img = document.createElement('img');
            img.src = item.image;
            img.style.height = "50px";
            image.appendChild(img);
            
          });
        }

```




