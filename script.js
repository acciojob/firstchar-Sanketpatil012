function firstChar(text) {
 
   let trimStr= text.trim()

	return  text.length> 0 ? trimStr.charAt(0) : " " 
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
