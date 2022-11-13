window.onload = function() {
    document.getElementById("toradocu_download").onclick = downloadProject("toradocu.zip")
    document.getElementById("unix_like_kernel_download").onclick = downloadProject("unix-like-kernel.zip")
    document.getElementById("pet_adoption_app_download").onclick = downloadProject("pet-adoption-app.zip")
}

function downloadProject(fileName) {
    return function() {
        window.open("Projects/" + fileName);
    }
}