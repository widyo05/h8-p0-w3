var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


function dataHandler2(input) {
    var tgl = '';
    var tampil;
    var tampung;
    var urut;
    var nama;
    var gabung;
    input.splice(2, 3, 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro');
    tgl = '21/01/1989';
    tampil = tgl.split('/');
    tampung = tampil[1];
    console.log(tampil);
    switch (tampung) {
        case '01':
            tampung = 'Januari';
            console.log(tampung);
            break;
        case '02':
            tampung = 'Februari';
            console.log(tampung);
            break;
        case '03':
            tampung = 'Maret';
            console.log(tampung);
            break;
        case '04':
            tampung = 'April';
            console.log(tampung);
            break;
        case '05':
            tampung = 'Mei';
            console.log(tampung);
            break;
        case '06':
            tampung = 'Juni';
            console.log(tampung);
            break;
        case '07':
            tampung = 'Juli';
            console.log(tampung);
            break;
        case '08':
            tampung = 'Agustus';
            console.log(tampung);
            break;
        case '09':
            tampung = 'September';
            console.log(tampung);
            break;
        case '10':
            tampung = 'Oktober';
            console.log(tampung);
            break;
        case '11':
            tampung = 'November';
            console.log(tampung);
            break;
        case '12':
            tampung = 'Desember';
            console.log(tampung);
            break;

    }
    urut = tampil.sort(function (a, b) { return b - a }); //hasil ["21", "1989", "01"] belum sesuai hasil
    console.log(urut);
    gabung = tampil.join('-');
    console.log(gabung);
    nama = input[1].slice(0, 15)
    console.log(nama);
    return input;

}


console.log(dataHandler2(input));



