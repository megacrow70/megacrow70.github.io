function userInput() {
    //Get user input values
    let fnameInput = document.getElementById("firstName").value;
    let lnameInput = document.getElementById("lastName").value;
    let emailInput = document.getElementById("email").value;
    let addressInput = document.getElementById("contact-info").value;

    //Return response upon completion of form

    function showAlert(alertId) {
        const bootstrapAlert = document.querySelector("#" + alertId)
        const collapse = new bootstrap.Collapse(bootstrapAlert);
        collapse.show();
    }

    const modalYesBtn = document.querySelector("#contact-modal .btn-primary");
    modalYesBtn.addEventListener("click", function (){
        const sendBtn = document.querySelector("send-form-btn")
        sendBtn.computedStyleMap.display = "none";
        showAlert("conf-alert");
    });
}