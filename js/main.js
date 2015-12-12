$(document).ready(function(){


$('.arrow-to-top').fadeOut();
$('.lang .lang-but').on('click',function(){
	if($('.lang').height() == 17){ 
		$('.lang').animate({'height':'60px'},200)
		$('.lang-but').css('display','none');
		}
	})
		
	$('.lang').on('click',function(){
	if($('.lang').height() == 60){ 
		$('.lang').animate({'height':'17px'},200)
		$('.lang-but').css('display','block');
		}
	})
	var date = new Date();
	var dHour = date.getHours()
	var dminute = date.getMinutes();
	if(dminute <= 9){
		dminute = '0'+dminute
		}
	if(dHour <= 9){
		dHour = '0'+dHour
		}
	$('.chat-time').html(dHour+":"+dminute)
	$('.chat-message textarea').on('click',function(){
		$(this).text('');
	})
	var imgProfile = $('.contacts-profile-img img').attr('src');
	var imgUser = $('.profile-foto img').attr('src');
	// function chat(){
	// 	$('.chat-mailing').append('<div class="chat-interlocutor left"><div class="chat-img left"><img src="'+imgProfile+'" alt=""></div><div class="chat-text left arrow-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div><div class="chat-time left">14:33</div></div>')
	// }setTimeout(chat,5000);
	var imgUser = $('.profile-foto img').attr('src');
	$('.chat-message a').on('click',function(){
		var textMessage = $('.chat-message textarea').val();
		$('.chat-mailing').append('<div class="chat-user right"><div class="chat-img right"><img src="'+imgUser+'" alt=""></div><div class="chat-text right arrow-right">'+textMessage+'</div><div class="chat-time left">'+dHour+':'+dminute+'</div></div>')
		$('.chat-message textarea').val(' ');
	})
	$('.chat-message textarea').keypress(function( event){
		 if ( event.which == 13 ) {
		var textMessage = $('.chat-message textarea').val();
		$('.chat-mailing').append('<div class="chat-user right"><div class="chat-img right"><img src="'+imgUser+'" alt=""></div><div class="chat-text right arrow-right">'+textMessage+'</div><div class="chat-time left">'+dHour+':'+dminute+'</div></div>')
		$('.chat-message textarea').val(' ');
		}
	})
	$('.smile-block').on('click',function(){
		if($('.smiles').css('display')== 'none'){
			$('.smiles').css('display','block');
		}
		else{
			$('.smiles').css('display','none');
		}
		$('.chat-message textarea').val(' ');
	})
	$('.smiles img').on('click',function(){
		var smileImg = $(this).attr('src');
		$('.chat-mailing').append('<div class="chat-user right"><div class="chat-img right"><img src="'+imgUser+'" alt=""></div><div class="chat-text right arrow-right"><img src="'+smileImg+'" alt=""></div><div class="chat-time left">'+dHour+':'+dminute+'</div></div>')
			$('.smiles').css('display','none');
	})
	$('.search-filter-block-title').on('click',function(){
	var filterHeight = $(this).parent().find('.choice-filter-h').height();
		if($(this).parent().find('.choice-filter').height() == 0){
			$(this).css('color','#e5d6e1');
			$(this).parent().find('.choice-filter').animate({'height':filterHeight},300);
	}else{
			$(this).parent().find('.choice-filter').animate({'height':'0'},300);
			$(this).css('color','#6d6d6d');
	}
	})
	$('.choice-filter p').on('click',function(){
	 var filterChoice = $(this).text();
	 $(this).parent().parent().parent().find('.search-filter-block-title').text(filterChoice)
		$(this).parent().parent().animate({'height':'0'},300);
			$(this).parent().parent().parent().find('.search-filter-block-title').css('color','#6D6D71');
	})
})