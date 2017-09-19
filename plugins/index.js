$(function() {

    /* 使用on和off	*/
    var rightFunc = function() {
        $('.right').scroll(function() {
            $('.left').scrollTop($(this).scrollTop());
        });
    }

    var leftFunc = function() {
        $('.left').scroll(function() {
            $('.right').scrollTop($(this).scrollTop());
        });
    }
    $('.rightcenter').click(function() {
        $('.left').off();
        $('.right').on("click", rightFunc);
    });
    $('.leftcenter').click(function() {
        $('.right').off();
        $('.left').on("click", leftFunc);
    });


    /* 使用类名序列的叠加，无法选取该类
    $('.right').click(function() {
        $('.left').removeClass("scrollFunc");
        $('.right').addClass("scrollFunc");
        $('.scrollFunc').scroll(function() {
            $('.left').scrollTop($(this).scrollTop());
        });
    });


    $('.left').click(function() {
        $('.right').removeClass("scrollFunc");
        $('.left').addClass("scrollFunc");
        $('.scrollFunc').scroll(function() {
            $('.right').scrollTop($(this).scrollTop());
        });
    });
    */

    /* 使用类名序列的叠加，无法选取该类
	var count = 0;
		$('.right').click(function(){
		$('.left').removeClass("scrollFunc"+count);
		count++;
        $('.right').addClass("scrollFunc"+count);
        var temp = "'.scrollFunc"+count+"'";
        $(temp).scroll(function() {
            $('.left').scrollTop($(this).scrollTop());
        });
	});
    
 
	$('.left').click(function(){
		$('.right').removeClass("scrollFunc"+count);
		count++;
        $('.left').addClass("scrollFunc"+count);
		 var temp = "'.scrollFunc"+count+"'";
		 alert(temp);
        $('temp').scroll(function() {
            $('.right').scrollTop($(this).scrollTop()); 
        });
	});
	*/

    /* 使用bind和unbind	
    $('.right').click(function() {
        $('.left').unbind(leftFunc());
        $(this).bind(rightFunc());
    });

	$('.left').click(function() {
	    $('.right').unbind(rightFunc());
	    $(this).bind(leftFunc());
	});

	function rightFunc() {
	    $('.right').scroll(function() {
	        $('.left').scrollTop($(this).scrollTop());
	    });
	}

	function leftFunc() {
	    $('.left').scroll(function() {
	        $('.right').scrollTop($(this).scrollTop());
	    });
	}
	*/

    /* mouseover focus无效
    $('.rightcenter').mouseover(function(){
    	$('.right').scroll(function(){
    		$('.left').scrollTop($(this).scrollTop());
    	});
    });
    $('.leftcenter').mouseover(function(){
    	$('.left').scroll(function(){
    		$('.right').scrollTop($(this).scrollTop());
    	});
    });
    */

});