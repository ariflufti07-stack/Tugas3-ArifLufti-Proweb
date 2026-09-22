function cekInput() {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    let tombol = document.querySelectorAll(".operasi");
    let bolehHitung = angka1 !== "" && angka2 !== "";

    for (let i = 0; i < tombol.length; i++) {
        tombol[i].disabled = !bolehHitung;
    }
}

function hitung(operasi) {
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let hasil;

    if (operasi == "+") {
        hasil = angka1 + angka2;
    } else if (operasi == "-") {
        hasil = angka1 - angka2;
    } else if (operasi == "*") {
        hasil = angka1 * angka2;
    } else if (operasi == "/") {
        if (angka2 == 0) {
            document.getElementById("hasil").innerHTML = "Hasil: tidak bisa dibagi 0";
            return;
        }
        hasil = angka1 / angka2;
    }

    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}