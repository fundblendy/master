$(function(){
	/* 開く・閉じる*/
	$('#panel > dd').hide();
  //選択したパネルを開く
	$('#panel > dt').click(function(){
		$('#panel > dt').not(this).next().hide(250);
		$(this).next().slideToggle(250);
  });
});
