import { PersonalityResult } from "./PersonalityApi";

export const PERSONALITIES_MOCK: PersonalityResult = {
    personalities: [
        {
            id: 1,
            name: "ООО 'Интернет решения'",
            number: "Номер ОГРН: 1027739244741",
            info: "Основное детище: Ozon («Озо́н») — российский маркетплейс. Основан в 1998 году как интернет-магазин по продаже книг и видеокассет. Помимо торговой площадки, компания развивает экспресс-доставку товаров повседневного спроса Ozon fresh, доставку товаров из-за рубежа Ozon Global, финансовые сервисы от Ozon Банк, а также бронирование авиа и железнодорожных билетов, отелей и туров Ozon Travel.",
            type: "Юридическое лицо",
            image: "http://localhost:9000/lab1/1.jpeg",
            status: true
        }, {
            id: 2,
            name: "Гейль Александр Владимирович",
            number: "Номер ИНН: 660402078756",
            info: "Генеральный Директор ООО 'Интернет решения'. Организации, в отношении которых упоминается данное лицо, зарегистрированы в регионе Москва (торговля розничная, осуществляемая непосредственно при помощи информационно-коммуникационной сети Интернет; деятельность по складированию и хранению).",
            type: "Физическое лицо",
            image: "http://localhost:9000/lab1/Geyl.jpeg",
            status: true
        }, {
            id: 3,
            name: "Петров Петр Петрович",
            number: "Номер ИНН: 670981456782",
            info: "Заместитель Генерального Директора ООО 'Интернет решения'. Информации про Петра Петровича очень мало.",
            type: "Физическое лицо",
            image: "http://localhost:9000/lab1/Petrov.jpg",
            status: true
        }
    ],
    application_id: 2,
    application_count: 1
}