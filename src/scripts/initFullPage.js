let isAnimatedSingle = document.querySelectorAll('.trans--single')
let isAnimatedHero = document.querySelectorAll('.hero .trans')
let isAnimatedModelo = document.querySelectorAll('.modelo .trans')
let isAnimatedEntrenamiento = document.querySelectorAll('.entrenamiento .trans')
let isAnimatedDesarrollador = document.querySelectorAll('.desarrollador .trans')
let isAnimatedDonativos = document.querySelectorAll('.donativos .trans')
let isAnimatedContacto = document.querySelectorAll('.contacto .trans')
let isAnimatedContactoSingle = document.querySelectorAll('.contacto .transContacto--single')


function addClassList(query, iterator, animation0, animation1, animation2, animation3) {
	if (iterator === 0) {
		animation = query[iterator].classList.add('animate__animated', animation0)
		return animation
	}
	else if (iterator === 1) {
		animation = query[iterator].classList.add('animate__animated', animation1)
		return animation
	}
	else if (iterator === 2) {
		animation = query[iterator].classList.add('animate__animated', animation2)
		return animation
	}
	else if (iterator === 3) {
		animation = query[iterator].classList.add('animate__animated', animation3)
		return animation
	}
	else {
		return console.error('error');
	}
}

new fullpage('#fullpage', {
	//options here
	anchors:['1', '2', '3', '4', '5','6','7'],
	autoScrolling: true,
	keyboardScrolling: true,
	verticalCentered: false,
	scrollingSpeed: 700,
	menu: '#myMenu',
	afterLoad: function(origin, destination, direction) {
		let loadedSection = this;

		for (let i = 0; i < isAnimatedSingle.length; i++) {
			isAnimatedSingle[i].classList.add('animate__animated', 'animate__shakeX', 'animate__slow' , 'animate__infinite')
		}


		if ( origin.index == 0 ) {
			for (let i = 0; i < isAnimatedHero.length; i++) {
				isAnimatedHero[i] = addClassList(isAnimatedHero, i, 'animate__fadeInLeft', 'animate__fadeInUp')
			}
		}

		if ( origin.index == 0 && destination.index == 1 ) {	
			for (let i = 0; i < isAnimatedModelo.length; i++) {
				isAnimatedModelo[i] = addClassList(isAnimatedModelo, i, 'animate__fadeInUp', 'animate__fadeInRight', 'animate__fadeInLeft', 'animate__fadeInUp')
			}
		}
		
		if ( (origin.index == 0 || origin.index ==  1 ) && destination.index == 2 ) {	
			for (let i = 0; i < isAnimatedEntrenamiento.length; i++) {
				isAnimatedEntrenamiento[i] = addClassList(isAnimatedEntrenamiento, i, 'animate__fadeInUp', 'animate__fadeInUp')
			}
		}
		if ( (origin.index == 0 || origin.index ==  1 || origin.index == 2) && destination.index == 3 ) {	
			for (let i = 0; i < isAnimatedDesarrollador.length; i++) {
				isAnimatedDesarrollador[i] = addClassList(isAnimatedDesarrollador, i, 'animate__fadeInUp', 'animate__fadeInRight')
			}
		}
		if ( (origin.index == 0 || origin.index ==  1 || origin.index == 2 || origin.index == 3) && destination.index == 4 ) {	
			for (let i = 0; i < isAnimatedDonativos.length; i++) {
				isAnimatedDonativos[i] = addClassList(isAnimatedDonativos, i, 'animate__fadeInRight', 'animate__fadeInLeft', 'animate__fadeInRight')
			}
		}
		if ( (origin.index == 0 || origin.index ==  1 || origin.index == 2 || origin.index == 3 || origin.index == 4) && destination.index == 5 ) {	
			for (let i = 0; i < isAnimatedContacto.length; i++) {
				isAnimatedContacto[i] = addClassList(isAnimatedContacto, i, 'animate__fadeInLeft')
			}
			for (let i = 0; i < isAnimatedContactoSingle.length; i++) {
				isAnimatedContactoSingle[i].classList.add('animate__animated', 'animate__fadeInUp')
			}
		}
	},
});

//métodos
fullpage_api.setAllowScrolling(true);
