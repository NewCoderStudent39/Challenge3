var UpperCase = false;
var Specials = false;
var Numbers = false;
var LowerCase = false;
var total = 0;
var password = [];
var passwordLength;

document.getElementById("upperCase").addEventListener("click", upperCase);
document.getElementById("Special").addEventListener("click", specials);
document.getElementById("Numbers").addEventListener("click", numbers);
document.getElementById("lowerCase").addEventListener("click", lowerCase);

function upperCase() //evt
{
    UpperCase = true; 
    total++; 
    console.log(total);
    //console.log(evt.target.checked);
    //evt.target.checked=false;
    //console.log(evt.target.checked);
}
function specials() 
{
    Specials = true; 
    total = total +2; 
    console.log(total); 
}
function numbers() 
{
    Numbers = true; 
    total = total +5;
    console.log(total);
}
function lowerCase() 
{
    LowerCase = true; 
    total = total+9;
    console.log(total);
}

document.getElementById("generateButton").onclick = function()
{
    
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var capAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
    'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var specials = ['!','@','#','$','%','^','&','*'];
    var combinedArrays = [];
    var temp = document.getElementById("passwordLength").value;
    passwordLength = Number(temp);


    if (passwordLength < 8 || passwordLength > 128)
    {
        alert("please enter a valid number between 8-128");
    }
            switch (total)
        {
            case 1:
                for (var i = 0; i < passwordLength; i++){
                password[i] = alphabet[Math.floor(Math.random() * alphabet.length)];}
                break;
            case 2:
                for (var i = 0; i < passwordLength; i++){
                password[i] = capAlphabet[Math.floor(Math.random() * capAlphabet.length)];}
                break;
            case 3:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(alphabet, capAlphabet);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 5:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = numbers;
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 6:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(alphabet, numbers);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 7:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(numbers,capAlphabet);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 8:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(alphabet,capAlphabet, specials);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 9:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = specials;
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 10:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(alphabet,specials);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 11:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(capAlphabet, specials);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 12:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(alphabet,capAlphabet, specials);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            case 17:
                for (var i = 0; i < passwordLength; i++){
                combinedArrays = [].concat(alphabet,capAlphabet,numbers, specials);
                password[i] = combinedArrays[Math.floor(Math.random() * combinedArrays.length)];}
                break;
            default:
                console.log("error");
        }

    document.getElementById("answer").innerHTML = password;
    total=0;

    console.log(total);
}
