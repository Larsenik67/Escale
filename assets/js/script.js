document.getElementById("envoyer").onclick = function () {
        var mardi_e = document.getElementById('mardi_ee').value;
        var mardi_p = document.getElementById('mardi_pp').value;
        var mardi_a = document.getElementById('mardi_aa').value;
        var mercredi_e = document.getElementById('mercredi_ee').value;
        var mercredi_p = document.getElementById('mercredi_pp').value;
        var mercredi_a = document.getElementById('mercredi_aa').value;
        var jeudi_e = document.getElementById('jeudi_ee').value;
        var jeudi_p = document.getElementById('jeudi_pp').value;
        var jeudi_a = document.getElementById('jeudi_aa').value;
        var vendredi_e = document.getElementById('vendredi_ee').value;
        var vendredi_p = document.getElementById('vendredi_pp').value;
        var vendredi_a = document.getElementById('vendredi_aa').value;
        document.getElementById('mardi_e').innerHTML = mardi_e;
        document.getElementById('mardi_p').innerHTML = mardi_p;
        document.getElementById('mardi_a').innerHTML = mardi_a;
        document.getElementById('mercredi_e').innerHTML = mercredi_e;
        document.getElementById('mercredi_p').innerHTML = mercredi_p;
        document.getElementById('mercredi_a').innerHTML = mercredi_a;
        document.getElementById('jeudi_e').innerHTML = jeudi_e;
        document.getElementById('jeudi_p').innerHTML = jeudi_p;
        document.getElementById('jeudi_a').innerHTML = jeudi_a;
        document.getElementById('vendredi_e').innerHTML = vendredi_e;
        document.getElementById('vendredi_p').innerHTML = vendredi_p;
        document.getElementById('vendredi_a').innerHTML = vendredi_a;
        window.scrollTo(0, 0);
    }