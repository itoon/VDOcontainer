VDOcontainer
============

#### require:
- jquery
- font-awesome

#### file:
- style.css
- script.js

```javascript
<script>
	$(document).ready(function(){
	  var icons = [
		 {'icon':'fa fa-heart-o', 'link': 'https://code.jquery.com/jquery-2.2.4.min.js'},
		 {'icon':'fa fa-heart', 'link': 'https://code.jquery.com/jquery-2.2.4.min.js'}
		]
	  var options = {						
		 icons: icons,
		 target: '_blank'
		 };		
	  $(".ml-vdo").mlVDO(options);
	});	
</script>

```
![ScreenShot](https://raw.github.com/itoon/VDOcontainer/master/vdo-container/ss.png)
