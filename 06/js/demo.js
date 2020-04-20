function show_prompt() {
	var product = prompt("请输入您想要的宠物", "在这里填写您想要的宠物种类：狗子、猫猫、兔子、其他");
	switch (product) {
		case "狗子":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/dog1.jpg'><br/><img src='images/dog2.jpg'></div>";
			break;
		case "猫猫":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/cat1.jpg'><br/><img src='images/cat.jpg'></div>";
			break;
		case "兔子":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/rabbit1.jpg'><br/><img src='images/rabbit.jpg'></div>";
			break;
		case "其他":
			document.getElementById("result").innerHTML = "<div align='center'><img src='images/anther1.jpg'><br/><img src='images/anther2.jpg'></div>";
			break;
		default: alert('是宠物不可爱嘛？点取消！！');
	
	}
}
function warming() {

	alert('还没开始就放弃\n还不赶紧选择开始？');
} 
