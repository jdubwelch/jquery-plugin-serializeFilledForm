/**
 * this plugin goes through a form's inputs
 * it removes any unset fields or disabled fields
 * then builds the query string
 * 
 * Author: Jason Welch
 * http://www.jwelchdesign.com
 */
(function ($) {
	$.fn.serializeFilledForm = function( options ) {

		// set some default options
		var settings = $.extend({
				decode: true, // return params URI decoded
				invalidClass: null // pass a class to invalidate a field
			}, options),
			clone = this.clone( true , true ),
			serialized;

		// get the select and textarea values
		$.each(f.find('select'), function(i) {
			clone.find('select').eq(i).val( $(this).val() );
		});
		$.each(f.find('textarea'), function(i) {
			clone.find('textarea').eq(i).val( $(this).val() );
		});

		// filter out the empty fields
		clone.find('input:text, select, textarea').filter(invalidField).remove();

		// serialize it
		serialized = clone.serialize(); 

		if (settings.decode)
			return decodeURI( serialized );
		else
			return serialized;

		function invalidField() {

			// input has to have a value
			if ( ! this.value )
				return true;

			if (settings.invalidClass && $(this).hasClass( settings.invalidClass ))
				return true;

			return false;
		}
	};
})( jQuery );
