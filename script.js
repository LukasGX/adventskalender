function door(div, num) {
    let saying;
    switch (num) {
        case 1:
            saying = 'Die beste Zeit des Jahres ist die Weihnachtszeit.';
            break;
        case 2:
            saying = 'Weihnachten ist kein Zeitpunkt, sondern ein Gefühl.';
            break;
        case 3:
            saying = 'In der Weihnachtszeit leuchten die Herzen heller.';
            break;
        case 4:
            saying = 'Möge der Zauber der Weihnacht dein Herz berühren.';
            break;
        case 5:
            saying = 'Freude, Frieden und Liebe – das sind die Geschenke der Weihnacht.';
            break;
        case 6:
            saying = 'Weihnachten ist die Zeit des Gebens und Teilens.';
            break;
        case 7:
            saying = 'Die schönsten Geschenke kann man nicht einpacken.';
            break;
        case 8:
            saying = 'Weihnachten ist die Zeit, um das Herz zu öffnen.';
            break;
        case 9:
            saying = 'Die Lichter der Weihnacht erhellen die Dunkelheit.';
            break;
        case 10:
            saying = 'Jedes Jahr erleuchtet der Weihnachtsbaum unsere Herzen.';
            break;
        case 11:
            saying = 'Möge die Weihnachtszeit dich mit Freude erfüllen.';
            break;
        case 12:
            saying = 'Weihnachten ist die Zeit, um mit Familie und Freunden zu feiern.';
            break;
        case 13:
            saying = 'Die Liebe ist das größte Geschenk der Weihnacht.';
            break;
        case 14:
            saying = 'Weihnachten – eine Zeit der Hoffnung und des Neuanfangs.';
            break;
        case 15:
            saying = 'Möge die Magie der Weihnacht immer bei dir sein.';
            break;
        case 16:
            saying = 'Weihnachten ist die Zeit der Wunder und der Träume.';
            break;
        case 17:
            saying = 'Die besten Erinnerungen entstehen in der Weihnachtszeit.';
            break;
        case 18:
            saying = 'Möge dein Herz zur Weihnachtszeit mit Freude erfüllt sein.';
            break;
        case 19:
            saying = 'Weihnachten – eine Zeit, um innezuhalten und dankbar zu sein.';
            break;
        case 20:
            saying = 'Die Seele der Weihnacht ist die Liebe und das Teilen.';
            break;
        case 21:
            saying = 'Weihnachten ist die Zeit für Frieden und Harmonie.';
            break;
        case 22:
            saying = 'Feiere die Weihnachtszeit mit einem Herzen voller Freude.';
            break;
        case 23:
            saying = 'Möge dein Weihnachten strahlend und voller Glück sein.';
            break;
        case 24:
            saying = 'Die Weihnachtszeit ist die Zeit der Besinnung und der Hoffnung.';
            break;
    }
    div.innerHTML = saying;
    div.style.fontSize = '1em';

    div.addEventListener('mouseleave', function () {
        div.innerHTML = num.toString();
        div.style.fontSize = '2em';
    });
}