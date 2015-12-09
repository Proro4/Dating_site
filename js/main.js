$(document).ready(function(){


$('.arrow-to-top').fadeOut();
$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 17){ 
		$('.lang').animate({'height':'60px'},200)
		$('.lang-but').css('display','none');
		}
	})
		
	$('.lang').on('click',function(){
	if($('.lang').height() == 50){ 
		$('.lang').animate({'height':'17px'},200)
		$('.lang-but').css('display','block');
		}
	})
	$('.chat-message textarea').on('click',function(){
		$(this).text('');
	})
	// function chat(){
	// 	$('.chat-mailing').append('<div class="chat-interlocutor left"><div class="chat-img left"><img src="img/photo/chat-img1.jpg" alt=""></div><div class="chat-text left arrow-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div><div class="chat-time left">14:33</div></div>')
	// }setTimeout(chat,5000);
	$('.chat-message a').on('click',function(){
		var textMessage = $('.chat-message textarea').val();
		$('.chat-mailing').append('<div class="chat-user right"><div class="chat-img right"><img src="img/photo/chat-img.jpg" alt=""></div><div class="chat-text right arrow-right">'+textMessage+'</div><div class="chat-time left">14:33</div></div>')
		$('.chat-message textarea').val(' ');
	})
	$('.chat-message textarea').keypress(function( event){
		 if ( event.which == 13 ) {
		var textMessage = $('.chat-message textarea').val();
		$('.chat-mailing').append('<div class="chat-user right"><div class="chat-img right"><img src="img/photo/chat-img.jpg" alt=""></div><div class="chat-text right arrow-right">'+textMessage+'</div><div class="chat-time left">14:33</div></div>')
		$('.chat-message textarea').val(' ');
		}
	})
	

})