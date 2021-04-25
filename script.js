let images = [
	'dice-01.svg',
	'dice-02.svg',
	'dice-03.svg',
	'dice-04.svg',
	'dice-05.svg',
	'dice-06.svg',
];
let dice = document.querySelectorAll('img');
const text = document.querySelector('#demo');
let check;

function roll() {
	check = true;
	dice.forEach(die => {
		die.classList.add('shake');
	});
	setTimeout(function () {
		dice.forEach(die => {
			die.classList.remove('shake');
		});
		let dieOneValue = Math.floor(Math.random() * 6);
		let dieTwoValue = Math.floor(Math.random() * 6);
		document.querySelector('#die-1').setAttribute('src', images[dieOneValue]);
		document.querySelector('#die-2').setAttribute('src', images[dieTwoValue]);
		for (let i = 0; i < 6; i++) {
			if(dieOneValue === i && dieTwoValue === i) {
				text.style.fontSize = '18px';
				text.textContent = 'Опа, тут выпало что ты еблан, не повезло :(';
				check = false;
			}
		}
		if(check){
			text.style.fontSize = '20px';
			text.textContent = `Your roll is ${dieOneValue + dieTwoValue + 2}`;
		}
	}, 1000);
}