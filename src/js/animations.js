let isAnimated = document.querySelectorAll('.trans')
let isAnimatedSingle = document.querySelectorAll('.trans--large')

function addAnimation() {
	console.log('prueba')
	for( let i = 0; i < isAnimated; i++ ) {
		isAnimated.classList.add('animate__animated', 'animate__flipInY')
	}
	for( let i = 0; i < isAnimatedSingle; i++ ) {
		isAnimatedSingle.classList.add('animate__animated', 'animate__fadeInUp', 'animate_delay-2s')
	}
}

window.addEventListener('load', addAnimation())