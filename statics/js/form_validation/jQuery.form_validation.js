(function($){
	jQuery.extend({
		form_validation : function form_validation(obj){
			obj.on('submit',function(e){ e.preventDefault();
				$lst = obj.find('input,textarea');
				$lst.each(function(i,e){
					
				});
			});
		}
	});
})(jQuery,document,'form_validation');