
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("data-form");
    const successModal = document.getElementById("success-modal");
    const errorModal = document.getElementById("error-modal");
    const closeSuccessModal = document.getElementById("close-success-modal");
    const closeErrorModal = document.getElementById("close-error-modal");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nivel = document.getElementById("nivel").value;
        const grado = document.getElementById("grado").value;
        const especialidad = document.getElementById("especialidad").value;

        const data = {
            nivel: nivel,
            grado: grado,
            especialidad: especialidad,
        };

        fetch("http://192.168.0.5:3000/api/cursos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log("Respuesta de la API:", result);
            if (result.success) {
                successModal.style.display = "block";
            } else {
                errorModal.style.display = "block";
            }
        })
    });

    

    

    closeSuccessModal.addEventListener("click", function() {
        successModal.style.display = "none";
    });

    closeErrorModal.addEventListener("click", function() {
        errorModal.style.display = "none";
    });

    // Cerrar los modales cuando se hace clic en el fondo oscuro
    successModal.addEventListener("click", function(event) {
        if (event.target === successModal) {
            successModal.style.display = "none";
        }
    });

    errorModal.addEventListener("click", function(event) {
        if (event.target === errorModal) {
            errorModal.style.display = "none";
        }
    });
});

