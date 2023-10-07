//Hamburger fumction


	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
	const overlay = document.querySelector('.overlay');
	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
		overlay.classList.toggle('overlay-active');
	});
overlay.addEventListener('click', function(){
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
	overlay.classList.toggle('overlay-active');
})

//Profile testimonial carousel
 //pulling buttons and all the block divs from the DOM
 const leftBtn = document.querySelector('.left');
 const rightBtn = document.querySelector('.right');
 const blockOne = document.querySelectorAll('.blockOne');
 let isAnimating = false;
 
 //On click the function will move all the divs in the dom to the left/with animation and create a carousel.
 leftBtn.addEventListener('click', () => {
	 if (isAnimating) {
				 return; 
			 }
			 isAnimating = true;
	 blockOne.forEach((card)=> {
		 const currentLeft = parseInt(window.getComputedStyle(card).getPropertyValue('left'));
		 const width = String(card.offsetWidth) + 'px';
		 if (currentLeft ===  - + parseInt(width)) {
			 card.style.left = width;
		 } else if (currentLeft === parseInt(width)) {
			 card.style.animation = 'secondMove .5s ease-in';
			 card.style.filter = 'none';
			 card.style.left = '0px';
		 } else {
			 card.style.animation = 'moving .5s ease-in';
			 card.style.left = "-" + width;
			 card.style.filter = 'blur(10px)';
		 }
		 setTimeout(() => {
			 isAnimating = false;
		 }, 500);
	 })
 });
   
 //On click it will move all the divs to the right.
 rightBtn.addEventListener('click', () => {
	 if (isAnimating) {
		 return; 
	 }
	 isAnimating = true;
	 blockOne.forEach((card)=> {
		 const currentRight = parseInt(window.getComputedStyle(card).getPropertyValue('left'));
		 const width = String(card.offsetWidth) + 'px';
		 if (currentRight === parseInt(width)) {
			 card.style.left = "-" + width;
		 } else if (currentRight === - + parseInt(width)) {
			 card.style.animation = 'secondMoveRight .5s ease-in';
			 card.style.left = '0px';
			 card.style.filter = 'none';
		 } else {
			 card.style.animation = 'movingRight .5s ease-in';
			 card.style.left = width;      
			 card.style.filter = 'blur(10px)';
		 }
		 setTimeout(() => {
			 isAnimating = false;
		 }, 500);
	 })
 
 });
 
 