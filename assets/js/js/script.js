function validaContra(pass) {
    if (pass.length < 6) {
        alert("Contrasenya massa curta");
        return false;
    } else {
        alert("Contrasenya correcta");
        return true;
    }
}

function validaDOC(doc) {
    var docu = doc;
    var num, ultima_lletra, lletra;
    var expressio_regular_docu = /^[XYZ]?\d{7,8}[A-Z]/;
    docu = docu.toUpperCase();
    if (expressio_regular_docu.test(docu) === true) {
        num = docu.substring(0, docu.length - 1);
        num = num.replace('X', 0);
        num = num.replace('Y', 1);
        num = num.replace('Z', 2);
        ultima_lletra = docu.substring(docu.length - 1);
        alert("Ultima lletra " + ultima_lletra);
        num = num % 23;
        lletra = 'TRWAGMYFPDXBNJZSQVHLCKET'
        lletra = lletra.substring(num, num + 1);
        if (lletra != ultima_lletra) {
            alert('DOCUMENT erroni,la lletra no es valida');
            return false;
        } else {
            alert('DOCUMENT correcte')
            return true;
        }
    } else {
        alert('Document erroni,format no vàlid');
        return false;
    }
}

function validarForm() {
    alert("Hola Món");
    var nom = document.getElementById("nom").value;
    var pass = document.getElementById("pass").value;
    var doc = document.getElementById("doc").value;
    alert("Comencem a validar..." + nom + " " + doc)
    if (validaContra(pass) && validaDOC(doc)) {
        alert("Tot correcte,envie'm el teu formulari. Gràcies " + nom)
        document.getElementById("formulari").submit();
        return true;
    } else {
        return false;
    }

}