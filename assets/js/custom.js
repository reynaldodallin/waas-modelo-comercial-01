custom.js  /* ===============================================
   WaaS Modelo Comercial 01 - Custom JavaScript
   Menu Hamburger Mobile + Header Transparente
=============================================== */

(function($) {
	
	// Header transparente no scroll
	var $header = $('#header');
	var $body = $('body');
	
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$body.addClass('scrolled');
		} else {
			$body.removeClass('scrolled');
		}
	});
	
	// Mobile menu toggle
	var $navPanelToggle = $('#navPanelToggle');
	var $navPanel = $('#navPanel');
	var $navPanelOverlay = $('#navPanel-overlay');
	
	if ($navPanelToggle.length) {
		$navPanelToggle.on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$body.toggleClass('navPanel-visible');
		});
		
		// Fechar ao clicar no overlay
		$navPanelOverlay.on('click', function(e) {
			e.preventDefault();
			$body.removeClass('navPanel-visible');
		});
		
		// Fechar ao clicar em link interno
		$navPanel.find('a').on('click', function() {
			$body.removeClass('navPanel-visible');
		});
		
		// Fechar ao pressionar ESC
		$(document).on('keydown', function(e) {
			if (e.keyCode === 27 && $body.hasClass('navPanel-visible')) {
				$body.removeClass('navPanel-visible');
			}
		});
	}
	
})(jQuery);
