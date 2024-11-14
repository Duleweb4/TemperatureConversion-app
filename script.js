let unos = document.getElementById("unos");
let rez = document.getElementById("rezultat");
let prvi = document.getElementById("farenthajt");
let drugi = document.getElementById("celsius");
let temp;

function Convert()
{
    if(prvi.checked)
    {
        temp = Number(unos.value);
        temp = temp * 9 / 5 + 32;
        rez.textContent = `${temp.toFixed(1)}°F`;
    }
    else if(drugi.checked)
    {
        temp = Number(unos.value);
        temp = (temp - 32) * (5/9);
        rez.textContent = `${temp.toFixed(1)}°C`;
    }
    else
    {
        rez.textContent = "Select a Unit!";
    }
}