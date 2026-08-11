/*
Nama        : METRIZAL
NIM         : 250401020031
Kelas       : IF201
Mata Kuliah : Pemrograman Web 1
Project     : Trip to Flores
*/


function prosesBooking() {

    let nama = document.getElementById("nama").value;
    let telepon = document.getElementById("telepon").value;
    let tanggal = document.getElementById("tanggal").value;
    let peserta = document.getElementById("peserta").value;
    let paket = document.getElementById("paket").value;


    if (nama == "") {

        alert("Silakan masukkan nama lengkap.");

        return false;

    }


    if (telepon == "") {

        alert("Silakan masukkan nomor WhatsApp.");

        return false;

    }


    if (tanggal == "") {

        alert("Silakan pilih tanggal perjalanan.");

        return false;

    }


    if (peserta == "") {

        alert("Silakan masukkan jumlah peserta.");

        return false;

    }


    if (paket == "") {

        alert("Silakan pilih paket pemandu.");

        return false;

    }


    alert(
        "Booking berhasil dikirim!\n\n" +
        "Terima kasih, " + nama +
        ", telah menggunakan Trip to Flores."
    );


    return false;

}
