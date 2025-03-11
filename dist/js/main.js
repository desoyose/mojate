document.addEventListener("DOMContentLoaded", () => {
  const ruleta = document.querySelector(".img__ruleta img");
  const botonGirar = document.querySelector(".img__jugar");
  let anguloInicial = 40;
  let anguloActual = anguloInicial;

  botonGirar.addEventListener("click", () => {
    botonGirar.style.pointerEvents = "none";

    let vueltas = Math.floor(Math.random() * 10) + 10; // 🔹 Entre 10 y 19 vueltas
    let anguloSector = 360 / 5; // 🔹 Cada sector mide 72°
    let anguloRandom = Math.floor(Math.random() * anguloSector); // 🔹 Variación dentro del sector
    let anguloFinal = vueltas * 360 + anguloRandom; // 🔹 Giro total
    anguloActual += anguloFinal; // 🔹 Actualizamos el ángulo de la ruleta

    // Aplicamos la rotación incluyendo la inclinación inicial de 40°
    ruleta.style.transition = "transform 4s ease-out"; // 🔄 Animación suave
    ruleta.style.transform = `rotate(${anguloActual}deg)`;

    setTimeout(() => {
      let anguloDetenido = (anguloActual - anguloInicial) % 360; // 🔹 Eliminamos las vueltas completas
      let sector = Math.floor(((anguloDetenido + anguloSector / 2) + 40) / anguloSector) % 5; // 🔹 Ajustamos la inclinación inicial de 40°

      let opciones = [
        {
          "Imagen": "/img/vestido.webp",
          "Titulo": "Moja vestid@",
          "Texto": "Sí, sí, vestid@. Y así no pierdes tiempo. Y si ya estabas con el bañador puesto, pues a volver a ponerte la camiseta (y si es una de las camisetas “Mójate”, mejor). Es el reto que te ha tocado para mojarte por la EM, ¡ea! No olvides compartir tan graciosa escena con #Mójate2024"
        },
        {
          "Imagen": "/img/conalgo.webp",
          "Titulo": "Mójate con algo: un cubo, globo o pistola de agua...",
          "Texto": "Refrescarse en verano ‘es bien’, pero mejor es hacerlo por la EM. Coge el elemento que tengas más cerca para mojarte con ello y sumarte al ejército veraniego de #Mójate2024."
        },
        {
          "Imagen": "/img/ahora.webp",
          "Titulo": "Mójate ahora, simulando nadar",
          "Texto": "Sí, sí, estés donde estés. ¡Anda que no te ha tocado un reto facilito! Por mar, por tierra, por aire (nunca se sabe…). Lo importante es que lo compartas con el mundo acompañado de #Mójate2024, y si es de una manera original, ¡mejor!"
        },
        {
          "Imagen": "/img/alguien.webp",
          "Titulo": "Moja a alguien",
          "Texto": "Para hacer frente a la EM son importantes las conexiones: todos, como sociedad, tomamos parte en la visibilización y lucha por una mejor calidad de vida. Simboliza tu implicación y esa cadena de unión mojando a alguien y mostradlo al mundo con #Mójate2024."
        },
        {
          "Imagen": "/img/en_el_mar.webp",
          "Titulo": "Mójate en una piscina, río, lago, pantano, charco o mar...",
          "Texto": "En la próxima salida a la playa o a la pisci, inmortaliza ese momento de relax o diversión. Flotando, saltando, dándote un chapuzón, o lo que prefieras, comparte ese momento con el hashtag #Mójate2024."
        },
      ];

      let resultadoDiv = document.createElement("div");
      resultadoDiv.classList.add("resultado"); 

      resultadoDiv.innerHTML = `
      <div class="box__span">
      <div  class="cross">
        <span>x</span>
      </div>
        <img class="img__span" src="${opciones[sector].Imagen}" alt="${opciones[sector].Titulo}" />
        <h3 class="title__span">${opciones[sector].Titulo}</h3>
        <p class="text__span">${opciones[sector].Texto}</p>
        <p class="text__generic">¡Comparte la ruleta en tus redes y haz que tod@s se mojen por la Esclerosis Múltiple!</p>
      </div>
        `;

      document.body.appendChild(resultadoDiv);

      setTimeout(() => {
        resultadoDiv.classList.add("visible");
      }, 1000); 

      document.body.addEventListener("click", function hideResult(event) {
        resultadoDiv.classList.remove("visible");
        setTimeout(() => {
          resultadoDiv.remove();
        }, 1000); 

        botonGirar.style.pointerEvents = "auto";

        document.body.removeEventListener("click", hideResult);
      });
    }, 4000); 
  });
  const form = document.querySelector('#form__diploma');

  form.addEventListener('submit',  (event) => {
    event.preventDefault(); 
    
    const nombre = form.querySelector('[name="nombre"]').value;
    const piscina = form.querySelector('[name="piscina"]').value;
    const email = form.querySelector('[name="email"]').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const numberMetros = form.querySelector('[name="metros"]').value;
    const legal = form.querySelector('[name="legal"]');
    const acept = form.querySelector('[name="acept"]');
    const error = document.querySelector(".error");
    const news = document.querySelector(".news");
    
    let errorForm = ""; 
    
    if (nombre.trim() === '') {
      errorForm += "<p class='errorMsg'>Debes escribir un nombre válido.</p>"; 
    }
    if (piscina.trim() === "") {
      errorForm += "<p class='errorMsg'>Debes escribir un lugar válido.</p>"; 
    }
    if (isNaN(numberMetros) || numberMetros <= 0) {
      errorForm += "<p class='errorMsg'>Pon un número válido para los metros.</p>";
    }
    if (email.trim() === '' || !emailRegex.test(email)) {
      errorForm += "<p class='errorMsg'>Pon un email válido.</p>";
    }
    if (!legal.checked) {  
      errorForm += "<p class='errorMsg'>Debes aceptar la política legal.</p>";  
    }  
    if (!errorForm && acept.checked) { 
      news.innerHTML = "<p class='news__ok'>Recibirás noticias nuestras.</p>";
    } else {
      news.innerHTML = "";  
    }
    
    if (errorForm) {
      error.innerHTML = `<div class='errorBox'>${errorForm}</div>`;
      return; 
    }else{
      error.innerHTML="<div class='gracias'><p class='no__error'>Gracias por colaborar con nosotros</p></div>";
      form.reset();
    }

  });

});
