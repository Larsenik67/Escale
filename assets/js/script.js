document.getElementById("envoyer").onclick = function () {
        document.getElementById('mardi_e').value;
        document.getElementById('mardi_p').value;
        document.getElementById('mardi_a').value;
        document.getElementById('mercredi_e').value;
        document.getElementById('mercredi_p').value;
        document.getElementById('mercredi_a').value;
        document.getElementById('jeudi_e').value;
        document.getElementById('jeudi_p').value;
        document.getElementById('jeudi_a').value;
        document.getElementById('vendredi_e').value;
        document.getElementById('vendredi_p').value;
        document.getElementById('vendredi_a').value;
        document.getElementById("tout").innerHTML = "<div class='container'> <div class='row my-3'> <div class='col'> <p> <span class='jaune'>09 84 41 78 28 <br/> 06 25 84 51 41</span><br/> <span class='petit'>2 rue de l'église saint-joseph,<br/> 67500 Haguenau</span></p></div><div class='col logo'> <img src='assets\img\logo.jpg' alt=''> </div><div class='col'> <p>Du mardi au samedi <br/> <span class='jaune petit'>11:30-14:00, 18:00-22:00</span> Dimanche <span class='jaune petit'>18:00-22:00</span> Lundi <span class='jaune petit'>fermé</span></p></div></div><hr/> <h1 class='mb-4 mt-5'>Les Plats du Jour</h1> <div class='row'> <div class='col menu mx-2 my-3'> <h2 class='jaune mt-2'>Mardi</h2> <p><script type='text/javascript'>document.write(mardi_e) </script></br> <script type='text/javascript'>document.write(mardi_p) </script></br> <script type='text/javascript'>document.write(mardi_a) </script></br> Dessert du jour </br> Thé ou Café </br> Boisson 33cl au choix </p></div><div class='col menu mx-2 my-3'> <h2 class='jaune mt-2'>Mercredi</h2> <p>Salade Grecque </br> Tomate et patate farcies </br> Riz </br> Dessert du jour </br> Thé ou Café </br> Boisson 33cl au choix </p></div></div><div class='row'> <div class='col menu mx-2 my-3'> <h2 class='jaune mt-2'>Jeudi</h2> <p>Bruschetta pesto mozzarella</br> Linguine crevette citron</br> Dessert du jour</br> Thé ou Café</br> Boisson 33cl au choix </p></div><div class='col menu mx-2 my-3'> <h2 class='jaune mt-2'>Vendredi</h2> <p>Salade composée</br> Duo de Brochette</br> Frites | Legumes </br> Dessert au choix</br> Thé ou Café</br> Boisson 33cl au choix </p></div></div></div><p class='my-5 jour'>Tous nos plats du jour sont à <span class='jaune jour'>12€</span></p>";
    }