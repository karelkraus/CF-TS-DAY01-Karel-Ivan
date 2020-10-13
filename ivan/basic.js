var multiply = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, multiply_1 = multiply; _i < multiply_1.length; _i++) {
    var n = multiply_1[_i];
    for (var _a = 0, multiply_2 = multiply; _a < multiply_2.length; _a++) {
        var m = multiply_2[_a];
        document.write(n + "x" + m, "=" + (n * m) + "<br>");
    }
}
