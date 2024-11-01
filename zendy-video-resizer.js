// LOAD CONTENT, THEN RESIZE VIDEOS
jQuery(window).load(function(){

	// If we have at least 1 iFrame
	if( jQuery('iframe').length ){

		// LOOP OVER ALL IFRAMES
		jQuery('iframe').each( function(){
				
			// IF THE IFRAME IS A YOUTUBE, VIMEO, OR WISTIA EMBED
			if( 
				typeof( jQuery(this).attr('src') ) !== 'undefined' &&
				(
					jQuery(this).attr('src').indexOf( 'youtube' ) !== -1 || 
					jQuery(this).attr('src').indexOf( 'vimeo' ) !== -1 || 
					jQuery(this).attr('src').indexOf( 'wistia' ) !== -1
				)
			){
			
				// GET WIDTH OF PARENT CONTAINER
				var contentWidth = jQuery( this ).parent().width();
				
				// RESIZE IFRAME
				jQuery( this ).width( contentWidth ).height( ( 9 * contentWidth ) / 16 );
				
			}
			
		});
	
	}
	
});