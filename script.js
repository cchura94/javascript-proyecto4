/*
        fetch("https://reqres.in/api/users")
            .then((respuesta) => respuesta.json())
            .then((json) => {
                console.log(json)
                // destructuracion de datos
                const { data, page, ...resto } = json

                console.log("DATOS: ", data)
                console.log("RESTO: ", resto);

                document.getElementById("datos").innerHTML =  "<pre>"+JSON.stringify(data)+"</pre>";
            })
            */

async function obtenerDatosFetch() {
  const respuesta = await fetch("https://dev.to/api/articles");
  const datos = await respuesta.json();

  let html = "";
  datos.forEach((prod) => {
    html =
      html +
      `
                    <div class="bg-blue-200 p-4 rounded-lg shadow-lg">
                        <img src="${prod.cover_image}" width="100px" class="w-full h-48 object-cover rounded-t-lg mb-4"/>
                        <h2 class="text-xl font-semibold mb-2">${prod.title}</h2>
                        <p class="text-gray-700 mb-1"><strong>DESCRIPCIÓN: </strong>${prod.description}</p>
                        <p class="text-gray-700 mb-1"><strong>PRECIO: </strong>${prod.precio}</p>

                    </div>
                    `;
  });

  document.getElementById("datos").innerHTML = html;
}

async function obtenerDatosAxios() {
  const { data } = await axios.get("https://dev.to/api/articles");
  document.getElementById("datos").innerHTML =
    "<pre>" + JSON.stringify(data) + "</pre>";
}

obtenerDatosFetch();

// axios.get("URL")
// axios.post("URL", body);
// axios.put("URL", body);
// axios.delete("URL");
// FETCH - AXIOS
