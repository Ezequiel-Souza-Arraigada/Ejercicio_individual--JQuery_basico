$(document).ready(function () {
    // Ocultar la imagen y el texto
    $("#btn-ocultar").click(function () {
        $("#imagen, #texto").hide(); // Ocultamos ambos elementos
        $("#titulo").text("¡No tenemos ninguna imagen ni texto!");
    });

    // Mostrar la imagen y el texto
    $("#btn-mostrar").click(function () {
        $("#imagen, #texto").show(); // Mostramos ambos elementos
        $("#titulo").text("¡Mirá la siguiente imagen!");
    });
});
