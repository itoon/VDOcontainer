(function ($) { 
    $.fn.mlVDO = function(options) {
	    var title = $(this).data('title');
    	var video = $(this).find('video');	    	
    	var settings = $.extend({	            
			image    : true,
			title    : $(video).attr('src'),
			desc     : $(this).data('desc'),
			image_url: $(this).data('user-image'),
			icons    : options.icons,
			target   : '_blank'
        }, options );	    	
        if(title != ''){
        	settings.title = title;
        }
    	$(video).wrap("<div class='ml-vdo-container'></div>");
    	var ml_vdo_container = $(this).find('.ml-vdo-container');	    	
    	meta = setMLMeta(settings.title, settings.desc, settings.image_url);	    		    	
    	social = setIcons(settings.icons, settings.target);	    	
    	$(ml_vdo_container).prepend(meta);	    	
    	$(ml_vdo_container).prepend(social);	    	
    };	

    function setMLMeta(title, desc, image_url){	    		    	
	    var meta       = "";	    	
		var start_meta = "<div class='ml-meta'>";			
    	if(image_url != undefined){
    		image = "<div class='ml-circle'><img src='"+image_url+"' alt=''></div>";
    	}else{
    		image = '';
    	}  	
    	if(title != ''){
    		title_class = "";
    		if(image_url == undefined){
    			title_class = "style='display:block'";
    		}
    		title = "<div class='ml-title' "+title_class+"><h2>"+title+"</h2></div>";				
    	}else{
    		title = '';
    	}
    	if(desc != ''){
    		desc = "<div class='ml-desc'><p>"+desc+"</p></div>";
    	}else{
    		desc = '';
    	}
    	var end_meta = "</div>";	    	
    	return_meta = start_meta+image+title+desc+end_meta;
    	return return_meta;
    }

    function setIcons(icons, target){	    		    		    
		var return_icon = "";	
		this.temp_icon  = "";  
		this.target     = target;
		var self        = this;  	
    	if(icons.length > 0){
    		var start_icon = "<div class='ml-social'>";				
	    	$.each(icons, function(index,value){	    				    				    			    				    		
	    		self.temp_icon += "<a target='"+self.target+"' href='"+value.link+"'><i class='"+value.icon+"'></i></a>";		    		
	    	});	    	
	    	var end_icon = "</div>";
	    	return_icon = start_icon+this.temp_icon+end_icon;	    	
    	}			
    	return return_icon;
    } 
}( jQuery ));