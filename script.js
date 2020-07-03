(function() {
    const registerEmailButton = document.getElementById("registerEmail");
    const emailFormModal = document.getElementById("emailFormModal");
    const closeModal = document.getElementById("close");
    
    let openedModal = false;

    registerEmailButton.addEventListener('click', () => {
        emailFormModal.style.display = 'block';
        openedModal = true;
        console.log("openedModal ", openedModal)
    });

    closeModal.addEventListener('click', () => {
        emailFormModal.style.display = 'none';
        openedModal = false;
        console.log("openedModal ", openedModal)
    });

    console.log("openedModal ", openedModal)
 })(); 
