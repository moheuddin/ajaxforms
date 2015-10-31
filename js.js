/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

   function submitForm() {                     
            // console.log("submit event");
            var fd = new FormData(document.getElementById("new_post"));          
                       
                       
                        var error = 0;                         
 
                        var post_content = $('[name=post_content]').val();
                        if(!post_content){
                                $('[name=post_content]').css('background-color','#ffffc5');
                                error = 1;
                        }else{
                                $('[name=post_content]').css('border','1px solid #999').css('background-color','#FFF');
       
                        }
                       
                                       
                        if(!error){
                                $('#output').css('display','block').css('margin-top','20px');
                                $('#output').html('<p>Processing...</p>');
                               
                                $.ajax({
                                url: "<?php print $admin_baseurl;?>ajax_query.php?new_blog_post=yes",
                                type: "POST",
                                data: fd,
                                enctype: 'multipart/form-data',                  
                                success: function (data) {
                                        $('#output').html(data);
                                        document.getElementById("new_post").reset();
                                },
                                processData: false,  // tell jQuery not to process the data
                                contentType: false   // tell jQuery not to set contentType
                });
                        }
            return false;              
        };
       