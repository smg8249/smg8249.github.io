var image = document.getElementById("Primavera");
		image.addEventListener("animationend", function(){
			image.classList.remove("bounce");
			void image.offsetWidth;
			image.classList.add("bounce");
		});