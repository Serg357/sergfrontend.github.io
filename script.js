let number = +prompt("Введите целое число");

//21

function checkNumberDivide(num) {
	let flag = "false";
	
  for(let i = 2; i < num; i++) {
		if(num % i == 0) {
			flag = true;
		}
   }
	return flag;
}

alert(checkNumberDivide(number));