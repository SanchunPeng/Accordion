$(function(){
	var arr=["网页制作1","网页制作2","网页制作3","网页制作4","网页制作5","网页制作6"];
	var img=["a","b","c","d","e","f"];
	for(var i=0;i<arr.length;i++){
		var $li="<li>";
		$li+="<div class='couser'>";
		$li+=addDl(img[i],arr[i],1);
		$li+=addDl(img[i],arr[i],2);
		$li+=addDl(img[i],arr[i],3);
		$li+=addDl(img[i],arr[i],4);
		$li+="</div>";
		$li+="<p class='title1'>"+arr[i]+"</p>";
		$li+="<p class='title2'>"+arr[i]+"</p>";
		$li+="</li>";
		$("#box_ul").append($li);
	}
	function addDl(img,txt,i){
		var fragment="<dl>";
		fragment+="<dt><img src='img/"+img+i+".jpg'/></dt>";
		fragment+="<dd>"+txt+"</dd>";
		fragment+="</dl>";
		return fragment;
	}
})