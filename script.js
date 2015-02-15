function add(){
	$("div.forms").prepend("<input type='text' class='user'>");
}
function make(){
	var url = [];
	if($("input[name=itunes]:checked").val()){
		url.push("https://www.google.co.jp/#q=%s+site:itunes.apple.com");
	}
	if($("input[name=play]:checked").val()){
		url.push("https://play.google.com/store/search?q=%s&hl=ja");
	}
	if($("input[name=amazon]:checked").val()){
		url.push("http://www.amazon.co.jp/gp/search/?field-keywords=%s");
	}
	var num = $(".forms input").length;
	console.log(num);
	for (var i = 1;i <= num;i++){
		console.log(i+"回目");
		var text =$(".forms input:nth-child("+i+")").val();
		console.log(text);
		url.push(text);
	}
	urlj = JSON.stringify(url);
	var result = "javascript:(function(){var url = "+urlj+";";
	result = result +'var key = prompt("キーワードを入力");';
	result = result + 'for(var i = 0;i <= url.length;i++){';
	result = result + '	var target = url[i].replace("%s",key);';
		result = result + 'window.open(target,"_blank");';
	result = result + '};';
	result = result + "})();";
	result = encodeURI(result);
	$("#show").val(result);
	$("#forpc").html('<a href="'+result+'" class="btn btn-success">PC登録用(クリックで実行)</a>');
}