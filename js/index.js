window.onload = (e => {
    const stats = [
        {
            "dt": "Investigadores Asociados",
            "dd": "7"
        },
        {
            "dt": "Asistentes de Investigación",
            "dd": "5"
        },
        {
            "dt": "Investigadores Externos Nacionales",
            "dd": "12"
        },
        {
            "dt": "Investigadores Externos Internacionales",
            "dd": "8"
        },
        {
            "dt": "Publicaciones Indexadas",
            "dd": "+20"
        },
        {
            "dt": "Conferencias / Congresos",
            "dd": "8"
        },
        {
            "dt": "Memoristas UDLA",
            "dd": "2"
        },
        {
            "dt": "Practicantes UDLA",
            "dd": "+10"
        },
        {
            "dt": "Vinculación con el Medio",
            "dd": "4"
        },
        {
            "dt": "Proyectos con Fondos Internos adjudicación",
            "dd": "3"
        },
        {
            "dt": "Co-tutorias de Memorias otras universidades",
            "dd": "5"
        },
        {
            "dt": "Participación en programas de Postgrado UDLA",
            "dd": "2"
        },
    ];

    console.log("first flag")

    for (let i = 0; i < stats.length; i++) {
        let container = document.getElementsByTagName("dl");
        let el = `
            <div class="flex flex-col bg-gray-400/5 p-8 shadow-lg place-content-center snap-center">
            <dt class="text-lg font-semibold leading-6 text-gray-600">${stats[i].dt}</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-orange-600">${stats[i].dd}</dd>
            </div>
        `;
        let content = [];

        content.push(el);
        container.innerHTML = el
        console.log("done the " + i)
      };

    console.log("second flag")
});