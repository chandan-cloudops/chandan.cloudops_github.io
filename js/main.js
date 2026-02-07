
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













(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Elements
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const cursorGlow = document.getElementById('cursorGlow');
  const toTop = document.getElementById('toTop');

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll progress + navbar state + top button
  function updateScrollUI() {
    const y = window.scrollY || document.documentElement.scrollTop;

    if (navbar) {
      if (y > 80) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }

    if (scrollProgress) {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (y / height) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    }

    if (toTop) {
      if (y > 600) toTop.classList.add('show');
      else toTop.classList.remove('show');
    }
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  // Back to top
  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Cursor glow
  if (!prefersReducedMotion && cursorGlow) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.setProperty('--mx', e.clientX + 'px');
      cursorGlow.style.setProperty('--my', e.clientY + 'px');
    }, { passive: true });
  }

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Typing animation
  const typingText = document.getElementById('typing-text');
  const texts = ['scalable infrastructure', 'GitOps automation', 'Kubernetes reliability', 'secure CI/CD pipelines'];
  let textIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    if (!typingText) return;

    const currentText = texts[textIndex];

    if (isDeleting) {
      typingText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      delay = 1200;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  // Tech grid
  function createTechGrid() {
    const techGrid = document.getElementById('techGrid');
    if (!techGrid) return;

    const techTools = [
      { name: 'AWS', image: 'images/aws.png' },
      { name: 'Azure', image: 'images/azure.png' },
      { name: 'GCP', image: 'images/gcp.png' },
      { name: 'Kubernetes', image: 'images/kubernetes.png' },
      { name: 'Terraform', image: 'images/terraform.png' },
      { name: 'Jenkins', image: 'images/jenkins.png' },
      { name: 'Ansible', image: 'images/ansible.png' },
      { name: 'ArgoCD', image: 'images/argocd.png' },
      { name: 'GitLab', image: 'images/gitlab.jpg' },
      { name: 'Python', image: 'images/python.png' },
      { name: 'Prometheus', image: 'images/promethius.png' },
      { name: 'Grafana', image: 'images/grafana.png' },
      { name: 'SonarQube', image: 'images/sonarqube.png' },
      { name: 'Nexus', image: 'images/nexus.png' },
      { name: 'Trivy', image: 'images/trivy.png' },
      { name: 'Docker', image: 'images/docker.png' },
      { name: 'GitHub Actions', image: 'images/github-action.png' }
    ];

    techGrid.innerHTML = '';

    techTools.forEach((tool, index) => {
      const item = document.createElement('div');
      item.className = 'tech-item reveal';
      item.style.setProperty('--d', `${Math.min(index * 60, 600)}ms`);

      const icon = document.createElement('div');
      icon.className = 'tech-icon';

      const img = document.createElement('img');
      img.src = tool.image;
      img.alt = tool.name;
      img.loading = 'lazy';
      img.onerror = function () {
        this.style.display = 'none';
        icon.innerHTML = `<span style="color: var(--neon-cyan); font-size: 2rem;">⚙️</span>`;
        icon.style.background = 'transparent';
      };

      const name = document.createElement('div');
      name.className = 'tech-name';
      name.textContent = tool.name;

      icon.appendChild(img);
      item.appendChild(icon);
      item.appendChild(name);
      techGrid.appendChild(item);
    });
  }

  // Reveal on scroll
  function setupReveal() {
    const elements = document.querySelectorAll('.reveal, .project-card, .contact-card, .timeline-item');
    elements.forEach((el, i) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      // stagger only if it doesn't already have
      if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${Math.min(i * 70, 700)}ms`);
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    elements.forEach(el => io.observe(el));
  }

  // ScrollSpy active section
  function setupScrollSpy() {
    const sections = [...document.querySelectorAll('section[id]')];
    const links = [...document.querySelectorAll('.nav-link[href^="#"]')];

    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0.01 });

    sections.forEach(sec => spy.observe(sec));
  }

  // Tilt + shine on project cards
  function setupProjectTilt() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.project-card').forEach(card => {
      if (!card.querySelector('.shine')) {
        const shine = document.createElement('div');
        shine.className = 'shine';
        card.appendChild(shine);
      }

      const maxTilt = 10;

      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        const px = (x / r.width) - 0.5;
        const py = (y / r.height) - 0.5;

        const rotateY = px * maxTilt;
        const rotateX = -py * maxTilt;

        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.setProperty('--sx', `${(x / r.width) * 100}%`);
        card.style.setProperty('--sy', `${(y / r.height) * 100}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    type();
    createTechGrid();
    setupReveal();
    setupScrollSpy();
    setupProjectTilt();
  });
})();




})(jQuery);


