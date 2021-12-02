/*function generatePDF(){
    const element = document.getElementById("table");
    html2pdf()
    .from(element)
    .save();
}
*/

/*document.addEventListener("DOMContentLoaded", () =>{
    alert("por dios de");
    const $boton = document.querySelector("#btnCrearPDF");
    $boton.addEventListener("click", () => {
        const elementoParaConvertir = document.getElementById("tabla");
        html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    fotmat: "a3",
                    orientation: 'horizontal'
                }
            })
            .from(elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});*/

function myFunction() {
    var x = document.getElementById("Agregar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


