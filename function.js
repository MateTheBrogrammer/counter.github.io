var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var reset = document.getElementById("reset");
var numplace = document.getElementById("numplace");
var result = 0;

plus.addEventListener("click", function(){
    result++;
    numplace.textContent = result;
});

minus.addEventListener("click", function() {
    if (result > 0) {
        result--;
        numplace.textContent = result--;
    } else {
        numplace.textContent = 0;
    }
});

reset.addEventListener("click", function() {
    result = 0;
    numplace.textContent = result;
});