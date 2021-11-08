
const btnAgregar = document.getElementById("btnAgregar");
const contenedor = document.getElementById("contenedor");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", () => {
    event.preventDefault();
    agregarLi();    
});

const agregarLi = () => {

    const nuevoLi = document.createElement("li");

    if(textoNuevaEntrada.value.trim() == "") {
        alert("El campo esta vacío");
    } else {

        const spanText = document.createElement("span");
        spanText.innerText = textoNuevaEntrada.value.trim();
        spanText.className = "texto";

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Eliminar"
        deleteBtn.className = 'delete';
        deleteBtn.addEventListener("click", () => {
            eliminarLi(nuevoLi)
        });

        const editBtn = document.createElement("button");
        editBtn.innerText = "Editar";
        editBtn.className = 'edit';
        editBtn.addEventListener("click", () => {
            editarLi(spanText, editBtn, deleteBtn);
            editBtn.disabled = true;setInterval
            deleteBtn.disabled = true;
        });


        nuevoLi.appendChild(spanText);
        nuevoLi.appendChild(deleteBtn);
        nuevoLi.appendChild(editBtn);
        contenedor.appendChild(nuevoLi);

        textoNuevaEntrada.value = "";
    }

}

const eliminarLi = (li) => {
    li.remove();
}

const editarLi = (span, editBtn, deleteBtn) => {

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "textEditar");
    let texto = span.innerText;
    input.value = texto;
    span.innerText = "";

    const btnGuargar = document.createElement("button");
    btnGuargar.innerText = "Guardar";
    btnGuargar.className = "save";
    btnGuargar.addEventListener("click", () => {
        
        if (input.value.trim() == "") {
            alert("El campo esta vacío");
        } else {
            span.innerText = input.value.trim();
            editBtn.disabled = false;
            deleteBtn.disabled = false;
        }
    });

    span.appendChild(input);
    span.appendChild(btnGuargar);

    console.log(texto);

}