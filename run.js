$('button.follow-text span').each(function() { 
   if($(this).text() == 'Follow') { 
	  setTimeout(
		  function() 
		  {
			$(this).parent().click();
		  }, getRandomInt(2000, 4000)
	  );
   }
}); 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
