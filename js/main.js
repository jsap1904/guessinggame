function game () {
	var answer = Math.floor(Math.random() * 10)
	var guess = document.getelementbyid("guess").value
	var tries = i++

for(var i = 1; i<=10; i++) {
	
	if (answer == guess) {
alert("user wins")
	return
}
if (i = 10) {
	alert("you lose")
	return
}
else {
	alert("try again")
	i++
}


