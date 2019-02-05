var code = "";

function getPhpStuff(boolean){
    if(boolean == true) return 1;
    return 0;
}

function setPhpStuff(int){
    if(int == 1) return true;
    return false;
}

function load() {
	document.getElementById('my_file').click();
}

function restart() {
	clearInterval(cookie.cookiehandler);
	cookie.eraseCookie("CandyCookie");
	//location.reload();
	window.location.reload(true); 
}

function readFile (evt) {
	
	var files = evt.target.files;
	var file = files[0];           
	var reader = new FileReader();
	
	reader.onload = function(event) {
		
		var temp = event.target.result;
		var var_list = []

		var lines = temp.split("\n");
		
		
		//reset all
		cookie.eraseCookie("CandyCookie");
		main.onload();
		
		
		
		cookie.updateData(var_list);
		cookie.createCookie("CandyCookie", cookie.getData(), 365);
		
		window.location.reload(true); 
		
	}
	
	reader.readAsText(file)
}
