var streets = ["Пушкиская", "улица 2", "улица 3", "улица 4"];

var streetSelect = document.getElementById("street");

for (var i = 0; i < streets.length; i++) {
    var option = document.createElement("option");
    option.value = streets[i];
    option.text = streets[i];
    streetSelect.appendChild(option);
}