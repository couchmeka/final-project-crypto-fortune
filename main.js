//query selectors 
let fortuneCookie = document.querySelector('#getFortune');
let cookieButton = document.querySelector('#newCookie');
let cryptoButton = document.querySelector('#getCrypto');
let cardDiv = document.querySelector('.card');
let cardIMG = document.querySelector('.card-img');
let list = document.querySelector('.list-group');
let list2 = document.querySelector('.list-group2');



//create elements 
let fortune = document.createElement('p');
let crypto = document.createElement('div');
let cryptoPrice = document.createElement('div');
let cryptoImg = document.createElement('img');


//image placement
cardIMG.src = 'fortuneclosed.png';


// quotes https://zenquotes.io/api/quotes/
// blockchain https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd



//Event Listener
fortuneCookie.addEventListener('click', () => {
    
    
console.log('clicked');

//image changing to cookie open
cardIMG.src = 'cookieopen.png';


//Audio for cookie crunch
let sound = new Audio("crunch.mp3"); // buffers automatically when created
sound.play();


//api Request quotes
let quoteRequest = async () => {
    let response = await fetch('https://type.fit/api/quotes');
    let data = await response.json();
    fortune.innerText = data[Math.ceil(Math.random() * 1500)].text;
    
 //Voice Functionality   
    function getVoices() {
      let voices = speechSynthesis.getVoices();
      if(!voices.length){
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
      }
      return voices;
    }
    
    let textToSpeak = `${fortune.innerText}`;
    
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = 1; // From 0 to 1
    speakData.rate = .8; // From 0.1 to 10
    speakData.pitch = 1; // From 0 to 2
    speakData.text = textToSpeak;
    speakData.lang = 'en';
    speakData.voice = getVoices()[0];
    
    speechSynthesis.speak(speakData);

        }

quoteRequest()


//api request blockchain for crypto fortune
let tickerRequestFortune = async () => {
    let response1 = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    let data1 = await response1.json();
    console.log(data1[Math.ceil(Math.random() * 100)].name);
    let cryptoType = data1[Math.ceil(Math.random() * 100)];

    //add image
    cryptoImg.src = cryptoType.image;
    cryptoImg.style.width = "50px";
    cryptoImg.style.height = "50px";

    // inner text for crypto fortune
    cryptoPrice.innerText =`Current Price: ${cryptoType.current_price}`;
    crypto.innerText =`Lucky Crypto: ${cryptoType.name} `;


        }


tickerRequestFortune();

//append crypto data
list.appendChild(crypto);
list.appendChild(cryptoPrice);
list.appendChild(cryptoImg);



//paragraph styles and append for Fortune
fortune.classList = "card-img-overlay card-text text-stroke text-black";
fortune.style.textAlign="center";
fortune.style.display = "flex";
fortune.style.justifyContent = "center";
fortune.style.alignItems = "center";
fortune.style.maxWidth = "250px";
fortune.style.fontWeight ="bold"
cardDiv.appendChild(fortune);



})





//button to create table
cryptoButton.addEventListener('click', () => {
  
  const table = document.querySelector(".table");

//open and hide table display
  if (table.style.display === '') 
  {
    table.style.display = 'block';

  } else if (table.style.display === 'none')
  {
    table.style.display = 'block';
  }
  else {
    table.style.display = 'none';
  }
 

//API call and table creation
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
  
    //call function 
    loadTableData();
     
  
 }
  
  //calling the api function for table population
  tickerRequest();
  


})



//button to reset the page
cookieButton.addEventListener('click', () => {

    location.reload();

})



