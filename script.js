const copyBtn = document.getElementById('copy');
const displayPassword = document.querySelector('.password');
const lengthSelector = document.getElementById('length');
const upperSelector = document.getElementById('uppercase');
const lowerSelector = document.getElementById('lowercase');
const numSelector = document.getElementById('number');
const symbolSelector = document.getElementById('symbol');
const generateBtn= document.getElementById('generate');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '^&()_+/#';

copy.addEventListener('click', () => {});

generateBtn.addEventListener('click', () => {
  generatePassword()
});

const getUppercase = ()=> {
  return uppercaseLetters[
    Math.floor(Math.random() * uppercaseLetters.length)]
}
const getLowercase = ()=> { 
  return lowercaseLetters[
    Math.floor(Math.random() * lowercaseLetters.length)]
  }

const getNumbers = ()=> { 
  return numbers[
    Math.floor(Math.random() * numbers.length)]
  }

const getSymbols = ()=> { 
  return symbols[
    Math.floor(Math.random() * symbols.length)]
  }

const generatePassword = ()=> {
  const len = lengthSelector.value;
  let password = '';

  for(let i=0; i<len; i++){
    const char = generateChars();
    password += char;
  }
  displayPassword.innerText = password;
}

// checks for checked parameters and generates 
// characters to feed the generatePassword function
const generateChars = () => {
  const chars = []; 

  if(upperSelector.checked){
    chars.push(getUppercase())
  }

  if(lowerSelector.checked){
    chars.push(getLowercase());
  }

  if(numSelector.checked){
    chars.push(getNumbers());
  }

  if(symbolSelector.checked){
    chars.push(getSymbols());
  }
  
  if(chars.length === 0) return "";

  return chars[Math.floor(Math.random()*chars.length)];
}

// copies text to clipboard
copyBtn.addEventListener('click', ()=> {
  let copiedPassword = displayPassword.innerText;
  if(!copiedPassword)return;
  if(copiedPassword){
    navigator.clipboard.writeText(copiedPassword);
    document.querySelector('.copied').classList.add('active');
    setTimeout(()=>{
      document.querySelector('.copied').classList.remove('active');
    }, 700)
  }
})