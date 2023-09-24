document.addEventListener("DOMContentLoaded", function() {
    const materiaForm = document.getElementById("materia-form");
    const successModal = document.getElementById("success-modal");
    const errorModal = document.getElementById("error-modal");

    materiaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const tipo_mat = document.getElementById("tipo_mat").value;

        
        if (!nombre || !tipo_mat) {
            alert("Por favor, complete todos los campos antes de guardar.");
            return;
        }

        const data = {
            nombre: nombre,
            tipo_mat: tipo_mat
        };

        // Generar un número aleatorio único
        const id_mat = generateUniqueId();
        data.id_mat = id_mat;

        fetch("http://192.168.0.19:3000/api/materia", {
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
                // Mostrar el ID de la materia en el mensaje de éxito
                document.getElementById("success-message").textContent = "Materia guardada con éxito. ID de Materia: " + id_mat;
                // Si deseas realizar más acciones después de un éxito, agrégalo aquí
            } else {
                errorModal.style.display = "block";
                // Si deseas realizar más acciones después de un error, agrégalo aquí
            }
        })
        .catch(error => {
            console.error("Error al realizar la solicitud:", error);
            errorModal.style.display = "block";
            // Si deseas realizar más acciones después de un error, agrégalo aquí
        });

        // Deshabilitar el botón "Guardar" para evitar múltiples envíos
        const guardarBtn = document.getElementById("guardarBtn");
        guardarBtn.disabled = true;
    });

    // Agregar evento de clic al botón "Guardar" fuera de la función del evento submit
    const guardarBtn = document.getElementById("guardarBtn");
    guardarBtn.addEventListener("click", function () {
        const confirmacion = window.confirm("¿Estás seguro de que deseas guardar esta materia?");
        
        if (confirmacion) {
            // Aquí puedes agregar tu lógica para guardar la materia
            alert("La materia ha sido guardada correctamente.");
        } else {
            // Aquí puedes manejar la cancelación
            alert("La materia no se ha guardado.");
        }
    });
});



    
