//1. Проекспериментувати з типами даних. 

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо
// можливі конвертації - у долар, євро, нафту(brent), золото. Додатково 
// зробити перевірку чи не обманює вас юзер і перевіряти 
// чи не прийшов вам null or undefined. 

let userMoney = +prompt('Скільки у вас є гривень?', 100);
let dolarKoef, euroKoef, brendExsKoef, goldKoef;

if(userMoney != null || userMoney != undefined ){
	if(confirm('Переводити в долари?')){
		dolarKoef = 28;
		alert(userMoney/dolarKoef.toFixed(2));
	}else if (confirm('Переводити в євро?')) {
		euroKoef = 33;
		alert((userMoney/euroKoef).toFixed(2));
	}else if (confirm('Переводити в нафту?')) {
		brendExsKoef = 50;
		dolarKoef = 28;
		alert((userMoney/(brendExsKoef*dolarKoef)).toFixed(2));
	}else if (confirm('Переводити в золотл?')) {
		goldKoef = 1730;
		alert((userMoney/goldKoef).toFixed(2));
	}else{
		alert('Виберіть інструмент для конвертації ваших грошей');
	};
};

//3. Спитатись у юзера суму замовлення і вивести результат з урахуванням 
//знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%,
// більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 

// let orderCount = +prompt('Вкажіть суму вашого замовлення в гривнях.', 1000);
// let newCount;

// if (orderCount < 500) {
// 	newCount =  orderCount - orderCount * 0.01;
// 	alert(`Сума з урахуванням знижки ${newCount} гривень`);
// }else if (orderCount >= 500  && orderCount < 1000) {
// 	newCount =  orderCount - orderCount * 0.05;
// 	alert(`Сума з кахуванням знижки ${newCount} гривень`);	
// }else if (orderCount >= 1000) {
// 	newCount =  orderCount - orderCount * 0.1;
// 	alert(`Сума з урахуванням знижки ${newCount} гривень`);
// 	alert(`І так ви отримали подарунковий сертифікат на суму 200 гривень`);
// 	if(confirm('Використати данну знижку?')){
// 		newCount -= 200;
// 		alert(`Сума з урахуванням знижки і з використаним подарунковим сертифікатом ${newCount} гривень`);
// 	}else{
// 		alert(`Сума з урахуванням знижки ${newCount} гривень і у вас ще залишається подарунковий сертифікат на наступну покупку`);
// 	}
// }



//4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань,
// вірна відповідь - 1 бал, якщо юзер відповість правильно на
// всі 5 запитань - додатково додати 1 бонусний бал. 

/*let scoreCounter = 0;

if(confirm('Ви готові пройти тест?')){
	alert('Кожна правильна відповідь один бал.')
	if(confirm('Ви часто падаєте з ліжка?')){
		scoreCounter++;
	};
	if(confirm('Ви часто їсте корм для котів?')){
		scoreCounter++;
	};
	if(confirm('Чи любите ви співати в душі?')){
		scoreCounter++;
	};
	if(confirm('Чи часто ви виходите на зв’язок із космосом?')){
		scoreCounter++;
	};
	if(confirm('Ви мене поважаєте?')){
		scoreCounter++;
	};
	if(scoreCounter === 5){
		scoreCounter++;
		alert(`Вітаю всі відповідді правильні і ви отримуєте додатковий бал, ваш бал: ${scoreCounter}!!!`);	
	}else{
		alert(`Ви не на всі відповіді відповіли чесно, ваш бал: ${scoreCounter}!!!`);
	};
}else{
	alert('Ну тоді іншим разом пройдем тест)');
};*/


//5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 

/*let userNumber = prompt('Введіть трьох значне число.', 123);

if(userNumber.length == 3){
	if(userNumber[0] == userNumber[1] || userNumber[1] == userNumber[2] || userNumber[0] == userNumber[2]){
		alert(`Ваше число має одинакові числа ${userNumber}`);
	}else if (userNumber == userNumber) {
		alert(`Усі три числа співпали`);
	};
}else {
	alert('Введіть трьох значне число');
};*/

//6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що
// буде при нажиманні цифри разом з шифтом.


let arrWithShift = '!@#$%^&*()_+';
let arrWIthoutShift = '1234567890-=';
let userButton = prompt('Введіть одну кнопоку від 1 до = на клавіатурі');

arrWithShift = arrWithShift.split('');
arrWIthoutShift = arrWIthoutShift.split('');

for(let i=0; i <= arrWIthoutShift.length; i++){
	if(arrWIthoutShift[i] == userButton){	
		alert(`А якщо нажати Shift буде такий символ:   ${arrWithShift[i]}`);
	}
}
//7. ǿтворити масив у якому буде 3 юзера описані як обєкти з
//такими полями - age, name, hobby (теж повинно бути
//масивом ).

/*let clients = [
	{
		age: '20',
		name: 'Peter',
		hobby: ['tenis', 'movies']
	},
	{
		age: '25',
		name: 'Robin',
		hobby: ['music']
	},
	{
		age: '23',
		name: 'Sam',
		hobby: ['football']
	}
];*/