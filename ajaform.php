<html>
    <body>
    <head>
        <script src="js.js" type="text/javascript" />
    </head>
<form method="post" id="new_post" name="fileinfo" onsubmit="return submitForm();">  
        <input type="hidden" name="user_id" value="<?php echo $user_id; ?>" /> <!-- Wall id -->
        <input type="hidden" name="author" value="<?php echo $user_id; ?>" />  <!-- Who is posting-->
       
        <textarea name="post_content"></textarea>
        <div class="new_post_bar">
            <label>Upload photo: <i class="fa fa-camera"></i>
            <input type="file" name="file"/><em>[jpg, gif, png only]</em>
            </label>
            <span><label>Visibility: <select name="post_status">
                        <option>Public</option>
                    <option>Private</option>
                    </select></label>
            <input type="submit" value="Post Now" /></span>
        </div>
        </form>
</body>
</html>