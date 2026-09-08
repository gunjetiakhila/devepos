const form = document.getElementById("myyform");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const Gender = document.getElementById("gender").value;
    const Age = parseInt(document.getElementById("age").value);
    const Seattype = document.getElementById("seattype").value;
    text = " ";
    if (isNaN(Age) || Age < 18) {
        alert(text = "Not eligible for the admission because age is less than 18");
        return;
    }
    else if (Seattype == "reserved" && Gender != "female") {
        alert(text = "You are not eligible for the admission because you are not female");
        return;
    }
    else if (Seattype != "reserved" && Gender == "female") {
        alert(text = "You are not eligible for the admission because your seattype is not reserved");
        return;
    }
    else {
        alert(text = "You are eligible for the admission!");
    }
});