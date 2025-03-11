const lugares = {
    "ABDEM": {
        "Nombre": "Asociación Balear de Esclerosis Múltiple, ABDEM",
        "Web": "mullat.abdem.es/",
        "Info": "https://mojateporlaem.org/evento.php?id=65",
        "Email": "esdeveniments@abdem.es",
        "Tel": "34679780325",
        "Material": "https://mullat.abdem.es/",
        "Donar": "La Caixa ES28 2100 2795 32 0200001474"
    },
    "AVEMPO": {
        "Nombre": "Asociación Viguesa de Esclerosis Múltiple de Pontevedra, AVEMPO",
        "Web": "avempo.org/mollate",
        "Info": "https://mojateporlaem.org/evento.php?id=80",
        "Email": "avempovigo@hotmail.com",
        "Tel": "685113398",
        "Donar": "ES35 2100 5095 39 0200026946"
    },
    "Alaba": {
        "Nombre": "Asociación de Esclerosis Múltiple de Araba, AEMAR",
        "Web": "www.asociacionaemar.com",
        "Info": "https://mojateporlaem.org/evento.php?id=67",
        "Email": "info@asociacionaemar.com",
        "Tel": "620 332 290",
        "VincDonar": "https://www.asociacionaemar.com/",
    },
    "Alicante": {
        "Nombre": "Asociación de Esclerosis Múltiple de Alicante, ADEMA",
        "Web": "mullat.cat",
        "Info": "https://mojateporlaem.org/evento.php?id=75",
        "Email": "mizquierdosilgado@gmail.com",
        "Tel": "637 879 103",
       
    },
    "Barcelona": {
        "Nombre": "Fundació Esclerosis Múltiple - Cataluña, FEM",
        "Web": "mullat.abdem.es/",
        "Info": "https://mojateporlaem.org/evento.php?id=81",
        "Email": "jpueyo@fem.es@gmail.com",
        "Tel": "93 288 96 99",
       "VincDonar": "https://www.fem.es/es/colabora/haz-un-donativo/",
    },
    "Bizkaia": {
        "Nombre": "Fundación Esclerosis Multiple Euskadi",
        "Web": "esclerosismultipleeuskadi.org",
        "Info": "https://mojateporlaem.org/evento.php?id=72",
        "Email": "kzubizarreta@emeuskadi.org",
        "Tel": "944 76 51 38",
       "VincDonar": "https://www.esclerosismultipleeuskadi.org/colabora/donar/",
    },
};

function mostrar(valorSeleccionado) {
    const mostrarDiv = document.getElementById("mostrar");

    if (valorSeleccionado === "empty") {
        mostrarDiv.innerHTML = "";
        return;
    }
    
        let data = lugares[valorSeleccionado];
        const telefonoLimpio = data.Tel.split(' ').join('');

        let html = `<p class="bold__font">${data.Nombre}</p>`;

        html += `<p class="bold__font">Página web: <a href="https://${data.Web}" target="_blank">${data.Web}</a></p>`;
        html += `<p class="bold__font">Más Informacion <a href="${data.Info}" target="_blank">Click aquí</a></p>`;
        html += `<p  class="bold__font">Email: <a href="mailto:${data.Email}"  target="_blank">${data.Email}</a></p>`;
        html += `<p  class="bold__font">Teléfono: <a href="tel:+34${telefonoLimpio}">${data.Tel}</a></p>`;

        if (data.Material) {
            html += `<p><a href="${data.Material}" target="_blank">MATERIAL</a></p>`;
        }
        if (data.Donar) {
            html += `<p><span class="bold__font">DONAR:</span> ${data.Donar}</p>`;
        }
        if(data.VincDonar){
            html+=`<p><a href="${data.VincDonar}">Donar</a></p>`;
        }

        mostrarDiv.innerHTML = html;
    
}