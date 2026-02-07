
/*

AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

*/











:root{
  --bg: #f7faf8;
  --surface: #ffffff;
  --surface2: #f0f6f2;
  --text: #0b1220;
  --muted: #5b6678;
  --line: rgba(12, 19, 31, 0.10);

  /* RUGR-like green */
  --green: #16a34a;
  --green2:#22c55e;
  --green3:#86efac;

  --shadow: 0 18px 45px rgba(11, 18, 32, 0.08);
  --shadow2: 0 10px 25px rgba(11, 18, 32, 0.06);

  --radius: 18px;
  --radius2: 24px;
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x:hidden;
}

section[id]{ scroll-margin-top: 88px; }

.container{
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 18px;
}

/* Top progress */
.top-progress{
  position: fixed;
  top:0; left:0;
  height: 3px;
  width: 0%;
  z-index: 2000;
  background: linear-gradient(90deg, var(--green), var(--green2));
}

/* Cursor glow */
.cursor-glow{ position: fixed; inset: 0; pointer-events: none; z-index: 1; }
.cursor-glow::before{
  content:"";
  position:absolute;
  width: 420px; height: 420px;
  transform: translate(-50%,-50%);
  left: var(--mx, 50%);
  top: var(--my, 20%);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(34,197,94,0.16), transparent 60%);
  filter: blur(10px);
  opacity: .9;
}

@media (prefers-reduced-motion: reduce){
  *{ animation:none !important; transition:none !important; scroll-behavior:auto !important; }
}

/* Header */
.site-header{
  position: sticky;
  top: 0;
  z-index: 1200;
  background: rgba(247,250,248,0.78);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--line);
}

.site-nav{
  height: 72px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 12px;
}

.brand{
  display:flex;
  align-items:center;
  gap: 10px;
  text-decoration:none;
  color: var(--text);
  font-weight: 900;
  letter-spacing: -0.3px;
}

.brand-mark{
  width: 34px; height: 34px;
  border-radius: 12px;
  background: radial-gradient(circle at 30% 30%, var(--green3), var(--green));
  box-shadow: 0 8px 20px rgba(34,197,94,0.18);
}
.brand-mark.sm{ width: 22px; height: 22px; border-radius: 9px; }

.brand-text{ font-size: 1.05rem; }

.nav-links{
  display:flex;
  gap: 18px;
  align-items:center;
}
.nav-link{
  text-decoration:none;
  color: rgba(11,18,32,0.72);
  font-weight: 700;
  font-size: .95rem;
  padding: 10px 10px;
  border-radius: 12px;
  transition: background .2s ease, color .2s ease;
}
.nav-link:hover, .nav-link.active{
  background: rgba(34,197,94,0.10);
  color: var(--text);
}
.nav-cta{ display:flex; align-items:center; gap:10px; }

.nav-toggle{
  display:none;
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: 14px;
  padding: 10px 10px;
  box-shadow: var(--shadow2);
}
.nav-toggle span{
  display:block;
  width: 22px;
  height: 2px;
  background: rgba(11,18,32,0.75);
  margin: 4px 0;
  border-radius: 10px;
}

.mobile-nav{
  display:none;
  padding: 12px 18px 18px;
  border-top: 1px solid var(--line);
  background: rgba(247,250,248,0.95);
}
.mobile-nav .m-link{
  display:block;
  padding: 12px 10px;
  border-radius: 14px;
  color: rgba(11,18,32,0.78);
  text-decoration:none;
  font-weight: 800;
}
.mobile-nav .m-link:hover{
  background: rgba(34,197,94,0.10);
}
.mobile-nav .m-cta{ margin-top: 10px; width: 100%; text-align:center; }

/* Buttons */
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  border-radius: 14px;
  padding: 12px 16px;
  font-weight: 900;
  text-decoration:none;
  border: 1px solid transparent;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
  cursor:pointer;
}
.btn:hover{ transform: translateY(-1px); box-shadow: var(--shadow2); }
.btn:active{ transform: translateY(0px); }

.btn-primary{
  background: linear-gradient(135deg, var(--green), var(--green2));
  color: #fff;
}
.btn-ghost{
  background: rgba(11,18,32,0.03);
  border-color: rgba(11,18,32,0.08);
  color: rgba(11,18,32,0.82);
}
.btn-sm{ padding: 10px 12px; border-radius: 12px; font-weight: 900; font-size: .92rem; }

/* Hero */
.hero{
  position:relative;
  padding: 64px 0 34px;
}
.hero-bg{ position:absolute; inset:0; pointer-events:none; z-index:0; overflow:hidden; }
.hero-bg .grid{
  position:absolute; inset:0;
  background-image: linear-gradient(rgba(11,18,32,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(11,18,32,0.05) 1px, transparent 1px);
  background-size: 44px 44px;
  opacity: .28;
  mask-image: radial-gradient(circle at 30% 10%, #000 0%, transparent 55%);
}
.blob{
  position:absolute;
  border-radius: 999px;
  filter: blur(38px);
  opacity: .65;
}
.b1{
  width: 520px; height: 520px;
  left: -120px; top: -180px;
  background: radial-gradient(circle, rgba(34,197,94,0.35), transparent 60%);
}
.b2{
  width: 520px; height: 520px;
  right: -140px; top: -120px;
  background: radial-gradient(circle, rgba(22,163,74,0.30), transparent 60%);
}

.hero-inner{
  position:relative;
  z-index: 2;
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 32px;
  align-items: center;
}

.pill{
  display:inline-flex;
  align-items:center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(34,197,94,0.10);
  border: 1px solid rgba(34,197,94,0.18);
  font-weight: 900;
  color: rgba(11,18,32,0.78);
  width: fit-content;
}
.pill .dot{
  width:10px; height:10px;
  border-radius: 99px;
  background: var(--green2);
  box-shadow: 0 0 18px rgba(34,197,94,0.35);
}

.hero-title{
  margin-top: 14px;
  font-size: clamp(2.2rem, 3.5vw, 3.25rem);
  line-height: 1.06;
  letter-spacing: -1px;
  font-weight: 950;
}
.green{ color: var(--green); }
.muted{ color: rgba(11,18,32,0.55); font-weight: 900; }

.hero-sub{
  margin-top: 14px;
  font-size: 1.05rem;
  color: rgba(11,18,32,0.72);
  max-width: 60ch;
}

.hero-actions{
  margin-top: 18px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Stats */
.hero-stats{
  margin-top: 22px;
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.stat{
  background: rgba(255,255,255,0.75);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 14px;
  box-shadow: var(--shadow2);
}
.stat-num{
  font-weight: 950;
  letter-spacing: -0.4px;
  color: rgba(11,18,32,0.88);
}
.stat-label{
  margin-top: 5px;
  font-weight: 800;
  color: rgba(11,18,32,0.55);
  font-size: .92rem;
}

/* Profile card */
.profile-card{
  background: rgba(255,255,255,0.82);
  border: 1px solid var(--line);
  border-radius: var(--radius2);
  box-shadow: var(--shadow);
  padding: 18px;
}
.profile-top{ display:flex; gap: 14px; align-items:center; }
.profile-img{
  width: 78px; height: 78px;
  border-radius: 18px;
  object-fit: cover;
  border: 1px solid rgba(11,18,32,0.08);
}
.profile-meta .name{ font-weight: 950; letter-spacing: -0.4px; }
.profile-meta .role{ font-weight: 800; color: rgba(11,18,32,0.62); margin-top:2px; }
.typing{ margin-top: 6px; font-weight: 900; color: rgba(11,18,32,0.72); }
#typingText{ color: var(--green); }

.profile-badges{
  display:flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.badge{
  display:inline-flex;
  padding: 7px 10px;
  border-radius: 999px;
  font-weight: 900;
  font-size: .86rem;
  background: rgba(34,197,94,0.10);
  border: 1px solid rgba(34,197,94,0.18);
  color: rgba(11,18,32,0.75);
}
.profile-cta{
  display:flex;
  gap: 10px;
  margin-top: 14px;
}

/* Floating minis */
.floating-cards{
  display:grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 14px;
}
.mini-card{
  background: rgba(255,255,255,0.78);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 14px;
  box-shadow: var(--shadow2);
}
.mini-title{ font-weight: 950; letter-spacing: -0.3px; }
.mini-sub{ margin-top: 4px; font-weight: 800; color: rgba(11,18,32,0.58); }

/* Sections */
.section{ padding: 64px 0; }
.section.soft{ background: var(--surface2); border-top:1px solid var(--line); border-bottom:1px solid var(--line); }

.section-head{ margin-bottom: 18px; }
.h2{
  font-size: clamp(1.6rem, 2.6vw, 2.2rem);
  letter-spacing: -0.6px;
  font-weight: 950;
}
.p{
  margin-top: 6px;
  color: rgba(11,18,32,0.62);
  font-weight: 700;
}

/* Cards 3 */
.cards-3{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 16px;
}
.card{
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--line);
  border-radius: var(--radius2);
  box-shadow: var(--shadow2);
  padding: 18px;
}
.card .icon{
  width: 44px; height: 44px;
  border-radius: 14px;
  display:flex; align-items:center; justify-content:center;
  background: rgba(34,197,94,0.12);
  border: 1px solid rgba(34,197,94,0.20);
  font-size: 20px;
}
.card h3{
  margin-top: 12px;
  font-weight: 950;
  letter-spacing: -0.4px;
}
.card p{
  margin-top: 6px;
  font-weight: 700;
  color: rgba(11,18,32,0.64);
}
.bullets{ margin-top: 10px; padding-left: 18px; }
.bullets li{
  margin: 6px 0;
  color: rgba(11,18,32,0.62);
  font-weight: 750;
}

/* CTA strip */
.cta-strip{
  margin-top: 14px;
  background: linear-gradient(135deg, rgba(22,163,74,0.10), rgba(34,197,94,0.10));
  border: 1px solid rgba(34,197,94,0.18);
  border-radius: var(--radius2);
  padding: 18px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap: 12px;
}
.cta-title{ font-weight: 950; letter-spacing: -0.3px; }
.cta-sub{ margin-top: 4px; font-weight: 800; color: rgba(11,18,32,0.62); }

/* Tech Grid */
.tech-grid{
  margin-top: 16px;
  display:grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;
}
.tech-item{
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px;
  text-align:center;
  box-shadow: var(--shadow2);
  transition: transform .18s ease, box-shadow .18s ease;
}
.tech-item:hover{ transform: translateY(-2px); box-shadow: var(--shadow); }
.tech-icon{
  width: 56px; height: 56px;
  margin: 0 auto 10px;
  border-radius: 16px;
  background: rgba(11,18,32,0.03);
  border: 1px solid rgba(11,18,32,0.06);
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 10px;
}
.tech-icon img{ width: 100%; height: 100%; object-fit: contain; }
.tech-name{ font-weight: 900; color: rgba(11,18,32,0.78); font-size: .92rem; }

/* Timeline */
.timeline{ margin-top: 14px; display:flex; flex-direction:column; gap: 12px; }
.t-item{
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--line);
  border-radius: var(--radius2);
  box-shadow: var(--shadow2);
  padding: 18px;
  display:grid;
  grid-template-columns: 320px 1fr;
  gap: 16px;
}
.t-date{ font-weight: 900; color: rgba(11,18,32,0.62); }
.t-company{ margin-top: 6px; font-weight: 950; letter-spacing: -0.3px; }
.t-role{ margin-top: 2px; font-weight: 900; color: rgba(11,18,32,0.66); }
.t-right ul{ padding-left: 18px; }
.t-right li{ margin: 7px 0; color: rgba(11,18,32,0.66); font-weight: 750; }

/* Projects */
.projects{
  margin-top: 16px;
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}
.p-card{
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--line);
  border-radius: var(--radius2);
  box-shadow: var(--shadow2);
  overflow:hidden;
  transition: transform .18s ease, box-shadow .18s ease;
}
.p-card:hover{ transform: translateY(-3px); box-shadow: var(--shadow); }
.p-thumb{
  height: 170px;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid var(--line);
}
.p-body{ padding: 16px; }
.p-body h3{ font-weight: 950; letter-spacing:-0.3px; }
.p-body p{ margin-top: 6px; font-weight: 750; color: rgba(11,18,32,0.62); }
.tags{ margin-top: 10px; display:flex; gap: 8px; flex-wrap:wrap; }
.tags span{
  background: rgba(34,197,94,0.10);
  border: 1px solid rgba(34,197,94,0.18);
  color: rgba(11,18,32,0.72);
  font-weight: 900;
  font-size: .84rem;
  border-radius: 999px;
  padding: 6px 10px;
}
.center{ margin-top: 16px; display:flex; justify-content:center; }

/* Contact */
.contact-grid{
  margin-top: 16px;
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}
.c-card{
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--line);
  border-radius: var(--radius2);
  box-shadow: var(--shadow2);
  padding: 16px;
}
.c-ico{
  width: 44px; height: 44px;
  border-radius: 14px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(34,197,94,0.12);
  border: 1px solid rgba(34,197,94,0.20);
}
.c-title{ margin-top: 10px; font-weight: 950; letter-spacing:-0.2px; }
.c-val{ margin-top: 4px; font-weight: 800; color: rgba(11,18,32,0.62); }
.link{ color: rgba(11,18,32,0.72); text-decoration: none; }
.link:hover{ text-decoration: underline; }

.social{
  margin-top: 16px;
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Footer */
.footer{
  border-top: 1px solid var(--line);
  background: rgba(255,255,255,0.55);
  padding: 18px 0;
}
.foot{
  display:flex;
  justify-content:space-between;
  gap: 10px;
  align-items:center;
}
.foot-sub{ margin-top: 4px; font-weight: 800; color: rgba(11,18,32,0.58); }

/* Reveal */
.reveal{
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .7s ease, transform .7s ease;
  transition-delay: var(--d, 0ms);
}
.reveal.visible{
  opacity: 1;
  transform: translateY(0);
}

/* Back to top */
.to-top{
  position: fixed;
  right: 14px;
  bottom: 14px;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.85);
  box-shadow: var(--shadow2);
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity .2s ease, transform .2s ease;
  z-index: 1300;
}
.to-top.show{ opacity: 1; transform: translateY(0); }

/* Responsive */
@media (max-width: 1000px){
  .hero-inner{ grid-template-columns: 1fr; }
  .hero-stats{ grid-template-columns: 1fr; }
  .cards-3{ grid-template-columns: 1fr; }
  .tech-grid{ grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .t-item{ grid-template-columns: 1fr; }
  .projects{ grid-template-columns: 1fr; }
  .contact-grid{ grid-template-columns: 1fr; }
  .nav-links, .nav-cta{ display:none; }
  .nav-toggle{ display:block; }
  .mobile-nav.open{ display:block; }
}

@media (max-width: 420px){
  .tech-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
