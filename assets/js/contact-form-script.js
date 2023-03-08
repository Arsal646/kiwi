/*==============================================================*/
// Raque Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
      
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();
            submitMSG(false, "Did you fill in the form properly?");
        } else {
            // everything looks good!
          	
          	// Not really!
          	if($("select[name='investment-amount']").val() == "" 
           		|| $("select[name='when-to-invest']").val() == "" 
               || grecaptcha.getResponse() == ""
          	) {
        		formError();
	            submitMSG(false, "All inputs are mandatory.");
            	event.preventDefault();  
          		return false;
        	}
            event.preventDefault();
            submitForm($(this));
        }
    });


    function submitForm(form){
        // Initiate Variables With Form Content
        $.ajax({
            type: "POST",
            url: "assets/php/form-process.php",
            data: form.serialize(),
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
      	window.location.replace("/thank-you.html");
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict