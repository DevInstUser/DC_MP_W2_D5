var word = "javascript";
var word_secret = word.split("");
var word_init = word.split("");

for (i = 0; i < word_secret.length-1; i++){
	if (i !== 0 && i !== word_secret.length){
		word_secret[i] = "*";
		
	}
}



var nb_test = 10; // max number of attempt
var bool = 0; // boolean intialized at false


while (nb_test >0)

{

	var ans = prompt("Choose a letter");

	for (i=1; i<word_secret.length;i++)


	{
	if (ans == word_init[i]) // if one letter found while parsing the word array
	{
		word_secret[i] = ans;
		bool = 1;
		
	}

}

// check after each parsing if all letters are found, if yes the player wins
if (word_secret.join("")===word_init.join("")) 
{
	console.log("You Win! Congrats Dude!"); 
	break; 
}

// check after each parsing the remaing nb tries 
// if remaining tries = 0 the player lose
if (bool ==0) {nb_test = nb_test-1};
if (nb_test==0) {console.log("You Lose! Try Again Insert Coin ;)"); break;}
bool=0; // reinit boolean


}

//log to ensure values are as expected
console.log(word_secret);
console.log(word_init);
console.log(word_secret.join(""));
console.log(word_init.join(""));


console.log(nb_test);
//console.log(nb_success);
console.log(bool);