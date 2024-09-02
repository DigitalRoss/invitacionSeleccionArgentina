const imagenes = [
	{ name: "fondo5.gif?v=4", background: "fondo1.gif", backgroundColor: "#ffffff", width: "0px", top: "60px", left: "70px" },
	{ name: "fondo5.gif?v=4", background: "fondo2.gif", backgroundColor: "#ffffff", width: "0px", top: "80px", left: "-5px" },
	{ name: "fondo5.gif?v=4", background: "fondo3.gif", backgroundColor: "#ffffff", width: "0px", top: "80px", left: "0px" },
	{ name: "fondo5.gif?v=4", background: "fondo4.gif", backgroundColor: "#ffffff", width: "0px", top: "10px", left: "-70px" },
];

let posicion_imagen = 0;
const elemento_img = document.getElementById("imagenes");
const elemento_background = document.getElementById("fondo_imagenes");
const names_container = document.getElementById("contenedor_nombres");

function cambiarImagenes() {
	elemento_img.hidden = true;
	elemento_img.style.top = imagenes[posicion_imagen].top;
	elemento_img.style.left = imagenes[posicion_imagen].left;
	elemento_img.style.width = imagenes[posicion_imagen].width;
	elemento_img.src = "./img/" + imagenes[posicion_imagen].name;
	// elemento_background.style.backgroundImage = "url(./img/" + imagenes[posicion_imagen].background + ")";
	names_container.style.backgroundColor = imagenes[posicion_imagen].backgroundColor;

	setTimeout(() => {
		elemento_img.hidden = false;
	}, 50);
	posicion_imagen < imagenes.length - 1 ? posicion_imagen++ : (posicion_imagen = 0);
}

cambiarImagenes();

function remove_loader() {
	let loader = document.getElementById("loader");
	// remove loader element
	loader.parentNode.removeChild(loader);
	audio.play();
}
window.onload = () => {
	if (imagenes.length > 1) setInterval(cambiarImagenes, 6000);
};
