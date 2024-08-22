window.addEventListener("DOMContentLoaded", async (event) => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const $lista = document.getElementById("lista");

    try {
        const data = await fetch(URL);
        const response = await data.json();

        const listaElementos = response.map((item, index) => {
            const $item = `<article class="contacto">
                                <article class="contacto_datos">
                                    <p>Nombre: <span>${item.name}</span></p>
                                    <p>Correo: <span>${item.email}</span></p>
                                </article>

                                <article class="contacto_detaller">
                                    <p>Dirección: <span>${item.address.street} | ${item.address.suite}</span></p>
                                    <p>Telefono: <span>${item.phone}</span></p>
                                </article>
                            </article>`;

            return $item;
        });

        $lista.innerHTML = listaElementos.join("");
    } catch (error) {
        console.log("Error en la api" + error);
    }
});
