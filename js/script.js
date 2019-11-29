let xhr= new XMLHttpRequest();



window.onload = () =>
{
    document.getElementById("btnClick").addEventListener("click", Mostrar);
}

function Mostrar()
{
    //paso 2 Asignar las acciones al metodo del cambio de estado
    xhr.onreadystatechange = MiFuncionCallBack;
    //paso3 Indicamos que el metodo que vamos a utilziar y que recursos estamos solicitando
    xhr.open("GET","resultado.html", true);
    //Paso 4 enviamos la peticion a AJAX
    xhr.send();
}
function MiFuncionCallBack()
{
    console.log("El estado de mi solicitud es: "+ xhr.readyState)
    if(xhr.readyState ==4)
    {
        alert("Ya se proceso tu solicitud y fue correcta");
        document.getElementById("divResultado").innerHTML = xhr.responseText
    }
}