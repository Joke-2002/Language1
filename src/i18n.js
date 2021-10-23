import i18n from "i18next";
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-lanquagedetector';
import { initReactI18next } from "react-i18next";
const transitionEn = {
    "n": "News",
    "p": "Photo",
    "h": "Home",
    "o": "Our ({{count}}) Courses",
    "i": "IT company"
}
const transitionRu = {
    "n": "Новости",
    "p": "Фото",
    "h": "Главная",
    "o": "Наши ({{count}}) курсы",
    "i": "IT компания"
}  
const transitionKG = {
    "n": "Жаңылыктар",
    "p": "Сүрөттөр",
    "h": "Башкы бет",
    "o": `Биздин ({{count}}) курстар`,
    "i": "IT компаниясы"
} 
i18n
  // .use(Backend)
  // .use(LanguageDetector)  
  .use(initReactI18next) 
  .init({ 
    debig: true,
    detection:{
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },  
    resources: {      
      en: {        
        translation: transitionEn

      },
      ru: {        
        translation: transitionRu
      
      },
      kg: {        
        translation: transitionKG
      
      },
    //   kg: {
    //       translation: {"Welcome to React": "React компоненттери render () ыкмасын колдонот, ал киргизүүнү алат жана бир нерсени кайра кайтарат. Бул мисал JSX деп аталган окшош XML синтаксисин колдонот. Компонентке берилген киргизүү this.props аркылуу render () ичинде жеткиликтүү."}
    //   },  
    //   kz: {
    //       translation: {"Welcome to React": "React компоненттері енгізуді қабылдайтын және көрсету үшін бірдеңені қайтаратын render () әдісін қолданады. Бұл мысалда JSX деп аталатын ұқсас XML синтаксисі қолданылады. Компонентке берілген енгізу this.props арқылы render () ішінде қол жетімді."}
    //   },
    //   tj: {
    //       translation: {"Welcome to React":"Компонентҳои реаксия усули render () -ро татбиқ мекунанд, ки вурудро мегирад ва чизе барои нишон доданро бармегардонад. Ин мисол як синтаксиси XML -ро бо номи JSX истифода мебарад. Вуруди ба ҷузъ додашуда дар render () тавассути this.props дастрас аст."}
    //   }, 
    //   gr: {
    //       translation: {"Welcome to React": "Τα στοιχεία React υλοποιούν μια μέθοδο render () που λαμβάνει είσοδο και επιστρέφει κάτι για απόδοση. Αυτό το παράδειγμα χρησιμοποιεί μια παρόμοια σύνταξη XML που ονομάζεται JSX. Η είσοδος που μεταβιβάζεται στο στοιχείο είναι διαθέσιμη σε rendering () μέσω this.props."}
    //   }
    }, 
         
    lng: "en", 
    fallbackLng: "en",    
    interpolation: {      
    escapeValue: false 
   
      }  });
      export default i18n;