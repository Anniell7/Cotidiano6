var op = window.prompt("1. M-10 2. M-30 3. M eqis 4. M borde 5. M diagonal 6. M diagonal al otro lado 7. M en X 8. Salir");

if (op==1){
    var m = new Array(10); 
        for (var f = 1; f <= 10; f++){ 
            for (var c = 1; c <= 10; c++){
                m[f,c] = 10; 
                document.writeln(m[f,c])
            }
            document.writeln("<p>" + "</p>"); 
        }
}
if (op==2){
    var m = new Array(10); 
        for (var f = 1; f <= 10; f++){ 
            for (var c = 1; c <= 10; c++){
                m[f,c] = 30; 
                document.writeln(m[f,c])
            }
            document.writeln("<p>" + "</p>"); 
        }
}
if (op==3){
    var m = new Array(10); 
    for (var f = 0; f < 10; f++){ 
        m[f] = new Array(10); 
        for (var c = 0; c < 10; c++){
            if ((f == 0 && c == 0) || (f == 0 && c == 9) || (f == 9 && c == 0) || (f == 9 && c == 9)) {
                m[f][c] = "X"; 
            } else {
                m[f][c] = "n"; 
            }
            document.write(m[f][c] + " ");
        }
        document.write("<br>");
}
}
if (op==4){
    var m = new Array(10); 
    for (var f = 0; f < 10; f++){ 
        m[f] = new Array(10); 
        for (var c = 0; c < 10; c++){
            if (f === 0 || f === 9 || c === 0 || c === 9) {
                m[f][c] = "X"; 
            } else {
                m[f][c] = "n"; 
            }
            document.write(m[f][c] + " ");
        }
        document.write("<br>");
    }
}
if (op==5) {
    var m = new Array(10); 
    for (var f = 0; f < 10; f++){ 
        m[f] = new Array(10); 
        for (var c = 0; c < 10; c++){
            if (f == c) {
                m[f][c] = "X"; // Asigna "X" en la diagonal principal
            } else {
                m[f][c] = "n"; // Utiliza otro carácter para el resto de la matriz
            }
            document.write(m[f][c] + " ");
        }
        document.write("<br>");
    }
}
if (op==6) {
    var m = new Array(10); 
    for (var f = 0; f < 10; f++){ 
        m[f] = new Array(10); 
        for (var c = 0; c < 10; c++){
            if (f == 9 - c) {
                m[f][c] = "X"; // Asigna "X" en la diagonal secundaria
            } else {
                m[f][c] = "n"; // Utiliza otro carácter para el resto de la matriz
            }
            document.write(m[f][c] + " ");
        }
        document.write("<br>");
    }
}
if (op==7) {
    var m = new Array(10); 
    for (var f = 0; f < 10; f++){ 
        m[f] = new Array(10); 
        for (var c = 0; c < 10; c++){
            if (f == c || f + c == 9) {
                m[f][c] = "X"; 
            } else {
                m[f][c] = "n"; 
            }
            document.write(m[f][c] + " ");
        }
        document.write("<br>");
    }
}
if (op==8) {
    document.write("<h2>Adiós, que le valla bien 👋🏻" + "</h2>");
}