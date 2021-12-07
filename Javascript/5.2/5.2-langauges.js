let lang = "Mandarin";

function spoken(lang) {
    switch (lang) {
        case lang = "Mandarin":
            console.log(`${lang} has the highest number of native speakers`);
            break;
        case lang = "Spanish":   
            console.log(`${lang} has the 2nd highest number of native speakers`)
            break;
        case lang = "English":   
            console.log(`${lang} has the 3rd highest number of native speakers`)
            break;
        case lang = "Hindi":   
            console.log(`${lang} has the 4th highest number of native speakers`)
            break;
        case lang = "Arabic":   
            console.log(`${lang} has the 5th highest number of native speakers`)
            break;
        default:
            console.log('Not in the top 5');
            break;
        }
}

spoken(lang);