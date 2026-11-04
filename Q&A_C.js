function getGroupName(i) {
    const n = i + 1;
    if (n <= 140) return "Skupina A - Zlepšenie racionálneho jazdného správania na základe bezpečnostných predpisov";
    if (n <= 270) return "Skupina B - Vnútroštátne a medzinárodné právne predpisy vzťahujúce sa na cestnú dopravu (uplatňovanie predpisov)";
    if (n <= 348) return "Skupina C - Zdravie, cestná a environmentálna bezpečnosť";
    return "Skupina D - Ekonomické prostredie nákladnej dopravy, organizácia trhu a služby";
}

 
    const rawquestions = [
            {
                "q": "1. Z čoho sa skladá vonkajšia prehliadka vozidla pred jazdou?",
                "options": [
                    "a) celkový stav karosérie; a čistota EČV a svetiel",
                    "b) stav pneumatík a čistota EČV a svetiel",
                    "c) celkový stav karosérie, úplnosť výstroja, stav pneumatík, čistota EČV, svetiel, spätných zrkadiel a okien",
                    "d) celkový stav karosérie a ostatné úkony napríklad kontrola pneumatík vykonávame raz za týždeň."
                ],
                "correct": 2
            },
            {
                "q": "2. Aké úkony má vykonať vodič pred začatím jazdy aby jazda z vozidlom, ktoré preberá na prepravu bola bezpečná?",
                "options": [
                    "a) je to na vodičovi stačí aby mal doklad o školení vodičov,",
                    "b) nastavenie sedadla, spätných zrkadiel (resp. kontrola funkčnosti kamerového systému) a pripútane sa bezpečnostným pásom",
                    "c) nastavenie sedadla a pripútane sa bezpečnostným pásom,",
                    "d) pripútane sa bezpečnostným pásom"
                ],
                "correct": 1
            },
            {
                "q": "3. Keď vodič vozidla dokončí radenie prevodových stupňov čo musí urobiť?",
                "options": [
                    "a) ľavú ruku po 1O sekundách vrátime na volant,",
                    "b) pravú ruku nemusíme vrátiť na volant a môžeme ju mať aj na riadiacej páke lebo nedochádza k zbytočnému zaťaženiu mechanizmu radenia a jeho zbytočnému opotrebovaniu u nových vozidiel,",
                    "c) je to na vodičovi, stačí aby mal doklad o školení vodičov a príslušný vodičský preukaz,",
                    "d) pravú ruku vrátime na volant a nenechávame ju na riadiacej páke lebo dochádza k zbytočnému zaťaženiu mechanizmu radenia a jeho zbytočnému opotrebovaniu"
                ],
                "correct": 3
            },
            {
                "q": "4. Aké sú hlavné zásady vedenia vozidla na rovnej ceste?",
                "options": [
                    "a) Zamerať sa na vozidlo idúce pred nami a držať sa od neho odstup",
                    "b) viesť vozidlo v pravej polovici vozovky a pokiaľ tomu nebránia osobitné okolnosti, pri pravom okraji vozovky; pozorne sledovať premávku pred vozidlom aj za vozidlom aj vedľa vozidla; podľa možnosti sleduje premávku ďalej pred vozidlo a snažíme sa správne odhadovať vývoj dopravnej situácie a podľa toho včas a správne reagovať",
                    "c) viesť vozidlo v pravej polovici vozovky a pokiaľ tomu nebránia osobitné okolnosti, pri pravom okraji vozovky; pozorne sledovať premávku pred vozidlom;",
                    "d) viesť vozidlo v pravej polovici jazdného pruhu; pozorne sledovať vozidlo pred sebou; podľa možnosti sleduje premávku aj za vozidlom a snažíme sa správne odhadovať vývoj dopravnej situácie a podľa toho včas a správne reagovať."
                ],
                "correct": 1
            },
            {
                "q": "5. Aké sú hlavné zásady vedenia vozidla v zákrute?",
                "options": [
                    "a) stačí zamerať sa na vozidlo idúce pred nami a nebrzdiť v zákrute",
                    "b) pred zákrutou včas znížime rýchlosť jazdy, prípadne preradíme na nižší prevodový systém; pri vchádzaní do zákruty a počas jej prechádzania už nebrzdíme ak nemáme vozidlo vybavené ABS",
                    "c) pred zákrutou včas znížime rýchlosť jazdy, prípadne preradíme na nižší prevodový systém; pri vchádzaní do zákruty a počas jej prechádzania už nebrzdíme; volantom je potrebné natáčať plynulo aby dráha vozidla zostávala v pravej polovici vozovky a v neprehľadných zákrutách byť pripravený aj na možnú prekážku napr. odstavené vozidlo, cyklistu, chodca a pod.",
                    "d) pred zákrutou včas znížime rýchlosť jazdy podľa dopravnej značky a prípadne preradíme na nižší prevodový systém; volantom je potrebné natáčať plynulo aby dráha vozidla zostávala v pravej polovici vozovky a v neprehľadných zákrutách byť pripravený aj na možnú prekážku napr. odstavené vozidlo a pod ."
                ],
                "correct": 2
            },
            {
                "q": "6. Aké sú hlavné zásady vedenia nákladného vozidla v meste alebo obci?",
                "options": [
                    "a) stačí zamerať sa na vozidlo idúce pred nami a neprechádzať z pruhu do pruhu",
                    "b) podľa možnosti sa prispôsobíme najmä vozidlám idúcim pred nami v našom jazdnom pruhu a zbytočne neprechádzame z pruhu do pruhu; využívame jazdné pruhy pre autobusy; pred priechodom pre chodcov alebo cyklistov dodržiavame dostatočný odstup od vozidiel aby sme mohli pri vstúpení chodcov a cyklistov na priechod pred ním plynule a bezpečne zastaviť vozidlo",
                    "c) podľa možnosti sa prispôsobíme najmä vozidlám idúcim pred nami v našom jazdnom pruhu a podľa potreby prechádzame z pruhu do pruhu; pred priechodom pre chodcov alebo cyklistov zvýšime opatrnosť",
                    "d) podľa možnosti sa prispôsobíme najmä vozidlám idúcim pred nami v našom jazdnom pruhu; pred priechodom pre chodcov alebo cyklistov dodržiavame dostatočný odstup najmenej 30 metrov od vozidiel aby sme mohli pri vstúpení chodcov a cyklistov na priechod pred ním plynule a bezpečne zastaviť vozidlo"
                ],
                "correct": 1
            },
            {
                "q": "7. Aké má hlavné nároky na vedenie vozidla v meste aby bolo bezpečné?",
                "options": [
                    "a) stačí zamerať sa na vozidlo idúce pred nami a neprechádzať z pruhu do pruhu a vedenie je podobné ako mimo mesta",
                    "b) v meste musíme sledovať svetelné signály, pokyny oprávnených osôb, dopravné značenie, pohyb chodcov, vozidiel, smerové tabule; preto vedenie vozidla v meste si vyžaduje určité sústredenie vodiča",
                    "c) v meste musíme sledovať svetelné signály, pokyny oprávnených osôb, dopravné značenie, pohyb chodcov, cyklistov, kolobežkárov, vozidiel, smerové tabule atď.; preto vedenie vozidla v meste si vyžaduje veľké sústredenie, predvídavosť, rozhodnosť a určitú zručnosť vodiča",
                    "d) nároky sú hlavne na zručnosť ovládania vozidla pri jazde cez križovatky a ovládanie predpisov cestnej premávky"
                ],
                "correct": 2
            },
            {
                "q": "8. Ktoré informačné systémy sa nepoužívajú na optimalizáciu trasy prepravy v cestnej doprave?",
                "options": [
                    "a) elektronický navigačný systém",
                    "b) mobilný telefón používaný vodičom vybavený aj modulom GPS",
                    "c) palubná jednotka na platbu mýtneho",
                    "d) softvér na trasovanie prepravy (napr. Route 66, Waze, Google maps a pod.)"
                ],
                "correct": 2
            },
            {
                "q": "9. V nákladných vozidlách a autobusoch",
                "options": [
                    "a) sa vôbec nepoužíva vznetový motor",
                    "b) sa vôbec nepoužíva zážihový motor",
                    "c) zastúpenie vznetových a zážihových motorov je v rovnováhe",
                    "d) prevažuje použitie vznetových motorov"
                ],
                "correct": 3
            },
            {
                "q": "10. Vznetový motor",
                "options": [
                    "a) spaľuje naftu ktorá sa vznieti teplom stlačeného vzduchu",
                    "b) spaľuje naftu ktorá sa do pracovného priestoru valca dostala pri nasávaní a vznieti sa teplom stlačeného vzduchu",
                    "c) môže spaľovať naftu alebo iné vhodné palivo, ktoré sa po vstrieknutí do pracovného priestoru valca vznietia teplom kompresiou stlačeného vzduchu",
                    "d) môže spaľovať akékoľvek tekuté palivo"
                ],
                "correct": 2
            },
            {
                "q": "11. K pretočeniu motora (prekročeniu maximálnych otáčok motora) môže dôjsť v dôsledku preradenia na",
                "options": [
                    "a) vyšší prevodový stupeň",
                    "b) nižší prevodový stupeň",
                    "c) pri moderných motoroch sa to nemôže stať",
                    "d) je to len teoretická možnosť"
                ],
                "correct": 1
            },
            {
                "q": "12. Pri prekročení maximálnych otáčok motora",
                "options": [
                    "a) hrozí poškodenie motora v dôsledku zrážky dna piesta s ventilom",
                    "b) hrozí poškodenie motora v dôsledku zlomenia ojnice",
                    "c) mazací systém motora nedokáže vytvoriť mazací film na valcoch motora, v dôsledku čoho dôjde k zadretiu piesta",
                    "d) nehrozí poškodenie motora, dôjde len k prekročeniu maximálnych otáčok"
                ],
                "correct": 0
            },
            {
                "q": "13. Optimálna prevádzková teplota vodou chladeného motora je",
                "options": [
                    "a) 80- 90 °C",
                    "b) 90 -105 °C",
                    "c) nesmie prekročiť bod varu",
                    "d) nie je stanovená"
                ],
                "correct": 0
            },
            {
                "q": "14. Nesprávna geometria riadiacej nápravy",
                "options": [
                    "a) má vplyv na ovládateľnosť vozidla a opotrebenie pneumatík",
                    "b) nie je rozhodujúca",
                    "c) má napomôcť len návratu kolies do priameho smeru po uvoľnení volantu",
                    "d) nemá žiadny vplyv na bezpečnosť jazdy"
                ],
                "correct": 0
            },
            {
                "q": "15. Pripojiť brzdený príves za vozidlo vybavené ABS",
                "options": [
                    "a) nie je dovolené pripájať príves",
                    "b) je dovolené pripájať len príves bez ABS",
                    "c) je dovolené pripájať len príves s ABS",
                    "d) je možné pripojiť akýkoľvek príves"
                ],
                "correct": 2
            },
            {
                "q": "16. Pri výmene žiaroviek musíme použiť žiarovku",
                "options": [
                    "a) rovnakého výkonu",
                    "b) rovnakého výkonu a napätia",
                    "c) rovnakého výkonu, napätia a konštrukcie, pričom nie je dôležité správne umiestnenie",
                    "d) rovnakého výkonu, napätia a konštrukcie, pričom musíme dbať na jej správne umiestnenie"
                ],
                "correct": 3
            },
            {
                "q": "17. Pri výmene poistky",
                "options": [
                    "a) môžeme použiť poistku s vyššou hodnotou ako bola pôvodná, len ak nemáme originálnu poistku",
                    "b) nie je dovolené použiť poistku vyššej hodnoty",
                    "c) možno použiť len poistku nižšej hodnoty",
                    "d) ak nemáme náhradnú poistku, je možné vykonať premostenie poistky drôtom"
                ],
                "correct": 1
            },
            {
                "q": "18. V akumulátore je energia skladovaná vo forme elektrochemickej reakcie",
                "options": [
                    "a) preto môžeme po neúspešnom štarte motora ihneď opakovať štartovanie",
                    "b) v lete môžeme štartovať aj viackrát za sebou, v zime musím pred opakovaným štartom počkať 30 sekúnd",
                    "c) po neúspešnom štarte motora musíme počkať v lete 15 - 20 sekúnd v zime 30 sekúnd, kým prebehne chemická reakcia",
                    "d) štartujeme motor až kým nezačne pracovať"
                ],
                "correct": 2
            },
            {
                "q": "19. Kapacita akumulátora s klesajúcou teplotou okolia",
                "options": [
                    "a) sa nemení",
                    "b) zvyšuje sa",
                    "c) klesá",
                    "d) záleží od jeho nabitia"
                ],
                "correct": 2
            },
            {
                "q": "20. Akumulátoru škodí",
                "options": [
                    "a) ak je nabitý na svoju plnú kapacitu",
                    "b) častá jazda v noci",
                    "c) nič mu neškodí",
                    "d) dlhé vybíjanie vysokým prúdom, skraty, ponechanie vo vybitom stave atď."
                ],
                "correct": 3
            },
            {
                "q": "21. Rozsvietená kontrolka dobíjania znamená, že",
                "options": [
                    "a) alternátor nedodáva prúd",
                    "b) akumulátor je nabitý",
                    "c) akumulátor je vybitý",
                    "d) možno pokračovať v jazde bez obmedzenia"
                ],
                "correct": 0
            },
            {
                "q": "22. Diferenciál pri prejazde zákrutou umožňuje",
                "options": [
                    "a) aby sa vonkajšie kolesá otáčali pomalšie ako vnútorné",
                    "b) aby sa vonkajšie kolesá otáčali rýchlejšie ako vnútorné",
                    "c) sa preniesla vyššia hnacia sila na vonkajšie kolesá",
                    "d) aby sa preniesla vyššia hnacia sila na vnútorné kolesá"
                ],
                "correct": 1
            },
            {
                "q": "23. Uzávierka diferenciálu",
                "options": [
                    "a) zabezpečí, že sa na obe kolesá jednej nápravy privedie rovnaký krútiaci moment. Nesmie sa použiť na povrchoch s dobrou priľnavosťou",
                    "b) zabezpečí, že sa na obe kolesá jednej nápravy privedie rôzny krútiaci moment. Nesmie sa použiť na povrchoch s dobrou priľnavosťou",
                    "c) zabezpečí, že sa na obe kolesá jednej nápravy privedie veľký krútiaci moment. Nesmie sa použiť na povrchoch so zlou priľnavosťou",
                    "d) nemá vplyv na rozdelenie krútiaceho momentu"
                ],
                "correct": 0
            },
            {
                "q": "24. Schopnosť pneumatík prenášať sily na podklad",
                "options": [
                    "a) s narastajúcou rýchlosťou sa nemení",
                    "b) s narastajúcou rýchlosťou tiež narastá",
                    "c) s klesajúcou rýchlosťou klesá",
                    "d) s narastajúcou rýchlosťou klesá"
                ],
                "correct": 3
            },
            {
                "q": "25. Nepravidelne opotrebený behúň pneumatiky upozorňuje na",
                "options": [
                    "a) chybu v zavesení kolies a v geometrii náprav",
                    "b) potrebu výmeny zavesenia kolesa",
                    "c) chybný tlmič",
                    "d) nesprávnu zbiehavosť kolies"
                ],
                "correct": 0
            },
            {
                "q": "26. Zanesený filter vzduchu",
                "options": [
                    "a) zhoršuje plnenie valcov a zvyšuje spotrebu paliva",
                    "b) nemá vplyv na výkon motora",
                    "c) síce spôsobuje zníženie výkonu motora, ale neovplyvňuje spotrebu paliva",
                    "d) filter vzduchu je samočistiaci a nie je potrebné sa oň starať"
                ],
                "correct": 0
            },
            {
                "q": "27. Pri prehriati vodou chladeného motora v dôsledku nedostatočného množstva chladiacej kvapaliny",
                "options": [
                    "a) opatrne necháme uniknúť pretlak v chladiacom systéme a vodu dolievame až po vychladnutí motora",
                    "b) vodu dolejeme a môžeme pokračovať v jazde",
                    "c) nízka hladina chladiacej kvapaliny neprekáža v ďalšej jazde",
                    "d) pokiaľ je nedostatok chladiacej kvapaliny, v chladiacom systéme nemôže byť pretlak"
                ],
                "correct": 0
            },
            {
                "q": "28. Trecia spojka",
                "options": [
                    "a) slúži na udržanie vozidla v stúpaní, pokiaľ čakáme na uvoľnenie cesty",
                    "b) používame ju pri každom brzdení",
                    "c) slúži na umožnenie rozdielnych otáčok jednotlivých kolies hnacej nápravy",
                    "d) slúži na krátkodobé prerušenie spojenia medzi motorom a kolesami"
                ],
                "correct": 3
            },
            {
                "q": "29. Úlohou oleja v motore je",
                "options": [
                    "a) len mazať pohybujúce sa časti motora",
                    "b) mazať, tesniť, chladiť, odplavovať nečistoty, chrániť proti korózii, tlmiť hluk",
                    "c) len mazať pohybujúce sa časti a chladiť dno piesta",
                    "d) nemá zvlášť dôležité poslanie"
                ],
                "correct": 1
            },
            {
                "q": "30. Pri výmene oleja v motore",
                "options": [
                    "a) môžeme použiť akýkoľvek druh motorového oleja",
                    "b) musíme použiť aditívovaný olej",
                    "c) musím použiť celosezónny olej",
                    "d) musíme použiť olej v súlade s odporúčaniami výrobcu"
                ],
                "correct": 3
            },
            {
                "q": "31. Pri dopĺňaní motorového oleja môžeme použiť",
                "options": [
                    "a) len aditívovaný olej",
                    "b) akýkoľvek olej",
                    "c) len aditívovaný motorový olej",
                    "d) len olej rovnakého druhu a kvality aký je v motore použitý"
                ],
                "correct": 3
            },
            {
                "q": "32. Prečo je kontrola množstva prevádzkových kvapalín dôležitá?",
                "options": [
                    "a) je dôležitá z hľadiska nemrznúcich náplní, pretože tieto kvapaliny zabezpečujú ochranu chladiaceho systému voči korózii a voči mrazu",
                    "b) je dôležitá, pretože nedostatok hydraulickej kvapaliny môže znefunkčniť vyklápaciu funkciu sklápacích vozidiel",
                    "c) je dôležitá z hľadiska správnej funkcie, mazania, chladenia a hydraulických systémov",
                    "d) nie je dôležitá; moderné vozidlá sú vybavené snímačmi množstva prevádzkových kvapalín a upozornia vodiča na potrebu nápravy nesprávneho stavu"
                ],
                "correct": 2
            },
            {
                "q": "33. Na motorovom vozidle sa používajú",
                "options": [
                    "a) len motorové oleje, ktoré možno použiť aj na mazanie prevodových skríň a diferenciálov",
                    "b) prevodové a motorové oleje, pričom ich vlastnosti sú si tak podobné, že ich možno zamieňať pri dopĺňaní stavu",
                    "c) len prevodové oleje, ale musia byť celoročné",
                    "d) prevodové a motorové oleje, prípadne hydraulické"
                ],
                "correct": 3
            },
            {
                "q": "34. Pred zimnou prevádzkou",
                "options": [
                    "a) skontrolujeme či je vozidlo pripravené na zimnú prevádzku (množstvo, stav a kvalitu prevádzkových kvapalín, výstroj a výzbroj vozidla)",
                    "b) skontrolujeme nabitie akumulátora",
                    "c) pokiaľ je vozidlo v dobrom technickom stave, je pripravené aj na zimné podmienky",
                    "d) skontrolujeme bod mrznutia chladiacej kvapaliny a viskozitu oleja"
                ],
                "correct": 0
            },
            {
                "q": "35. Pri výmene kolesa",
                "options": [
                    "a) používame náhradné koleso predpísané výrobcom",
                    "b) použijeme akékoľvek náhradné koleso bez ohľadu na rozmer",
                    "c) použijeme akékoľvek koleso, pokiaľ je schopné preniesť okamžité zaťaženie nápravy",
                    "d) použijeme akékoľvek koleso, ktoré je nahustené na predpísaný tlak"
                ],
                "correct": 0
            },
            {
                "q": "36. Pri výmene kolesa",
                "options": [
                    "a) nie je potrebné zaistiť vozidlo proti samovoľnému pohybu. Toto zaistenie preberá na seba zdvihák vozidla",
                    "b) musíme zaistiť vozidlo proti samovoľnému pohybu. Matice kolies povoľujeme až keď je koleso vozidla zodvihnuté tak, že stratilo kontakt s podkladom",
                    "c) musíme zaistiť vozidlo proti samovoľnému pohybu zabrzdením a zakladacími klinmi. Matice kolies povolíme. Odstránime ich až keď je koleso vozidla zodvihnuté tak, že stratilo kontakt s podkladom",
                    "d) musíme zaistiť vozidlo proti samovoľnému pohybu. Matice kolies odstránime už keď je pod koleso podložený zdvihák"
                ],
                "correct": 2
            },
            {
                "q": "37. Pri výmene kolies",
                "options": [
                    "a) použijeme zdvihák akejkoľvek nosnosti",
                    "b) použijeme zdvihák nosnosti rovnajúcej sa najmenej zaťaženiu kolesa ktoré chceme vymeniť",
                    "c) použijeme zdvihák nosnosti rovnajúcej sa najmenej zaťaženiu kolesa ktoré chceme vymeniť, pričom nie je na závadu, ak zdvihák pomaly klesá",
                    "d) nosnosť zdviháku musí byť o 100 kg väčšia ako je zaťaženie kolesa"
                ],
                "correct": 1
            },
            {
                "q": "38. Ak pri výmene kolies treba dohustiť pneumatiku",
                "options": [
                    "a) pneumatiku dohustíme na tlak, aký poskytuje kompresor vozidla",
                    "b) pneumatiku dohustíme na tlak, ktorý poskytuje kompresor na čerpacej stanici",
                    "c) nemeníme tlak hustenia, rezervné koleso má byť nahustené na najvyšší tlak hustenia",
                    "d) na tlak predpísaný pre nápravu na ktorú sme koleso namontovali"
                ],
                "correct": 3
            },
            {
                "q": "39. Snehové reťaze zlepšia adhéziu kolesa",
                "options": [
                    "a) na akomkoľvek povrchu, pretože reťaze sa zatlačia do podkladu",
                    "b) len na hlinenej a štrkovej ceste",
                    "c) len na asfaltovom a betónovom povrchu",
                    "d) len na ceste pokrytej dostatočnou vrstvou snehu"
                ],
                "correct": 3
            },
            {
                "q": "40. Po výmene kolesa matice kolies",
                "options": [
                    "a) dotiahneme len čiastočne, plne ich dotiahneme až po prejdení vzdialenosti cca 50 km",
                    "b) matice kolies dotiahneme kľúčom a po spustení nápravy ich dotiahneme podľa pokynov výrobcu. Ich dotiahnutie po prejdení vzdialenosti cca 50 km skontrolujeme",
                    "c) matice kolies dotiahneme kľúčom a po spustení nápravy ich dotiahneme podľa pokynov výrobcu. Ak sme postupovali podľa pokynov výrobcu, kontrolu ich dotiahnutia po prejdení vzdialenosti cca 50 km už nemusíme vykonať",
                    "d) dotiahneme až po spustení nápravy na zem"
                ],
                "correct": 1
            },
            {
                "q": "41. Hĺbka drážky dezénu pneumatiky",
                "options": [
                    "a) je rozhodujúca pre životnosť pneumatiky v ubehnutých kilometroch",
                    "b) nie je rozhodujúca",
                    "c) je rozhodujúca pre odvod vody z kontaktnej plochy s vozovkou",
                    "d) ovplyvňuje hlučnosť pneumatiky"
                ],
                "correct": 2
            },
            {
                "q": "42. Pokiaľ poškodenie pneumatiky odhaľuje jej kostru, pneumatika",
                "options": [
                    "a) sa môže ďalej používať pokiaľ hĺbka drážky dezénu je viac ako 1,6 mm",
                    "b) sa môže používať len ak rýchlosť vozidla neprekročí 60 km/h",
                    "c) sa môže používať len ak je použitá na zadnej náprave v dvojmontáži",
                    "d) sa nesmie používať"
                ],
                "correct": 3
            },
            {
                "q": "43. Čo spôsobuje podhustená pneumatika?",
                "options": [
                    "a) skracuje životnosť pneumatiky v ubehnutých kilometroch, ale nemá vplyv na jazdné vlastnosti vozidla",
                    "b) zhoršuje jazdné vlastnosti vozidla, ale nemá vplyv na životnosť pneumatiky",
                    "c) zhoršuje prenos síl medzi pneumatikou a podkladom, ale nemá vplyv na jej životnosť v ubehnutých kilometroch",
                    "d) znižuje životnosť pneumatiky v ubehnutých kilometroch a zhoršuje aj prenos síl medzi pneumatikou a podkladom"
                ],
                "correct": 3
            },
            {
                "q": "44. Rozdielny polomer pneumatík na dvojmontáži čo spôsobuje?",
                "options": [
                    "a) nie je dôležitý",
                    "b) spôsobuje, že pneumatika s menším polomerom prenáša väčšie zaťaženie",
                    "c) spôsobuje, že pneumatika s väčším polomerom prenáša menšie zaťaženie",
                    "d) pneumatika s väčším polomerom prenáša väčšie zaťaženie"
                ],
                "correct": 3
            },
            {
                "q": "45. Kedy sú pneumatiky zhodné?",
                "options": [
                    "a) ak majú rovnaký rozmer",
                    "b) ak majú rovnaký rozmer a konštrukciu",
                    "c) ak majú rovnaký rozmer, konštrukciu a druh dezénu",
                    "d) ak majú rovnaký rozmer, konštrukciu, druh dezénu a značku"
                ],
                "correct": 3
            },
            {
                "q": "46. Pneumatiky rovnakého rozmeru, konštrukcie (diagonálna - radiálna) od rôznych výrobcov majú aké vlastnosti?",
                "options": [
                    "a) majú rovnaké vlastnosti",
                    "b) majú rôzne vlastnosti",
                    "c) majú rovnaké vlastnosti na mokrej vozovke",
                    "d) majú rovnaký odpor valenia"
                ],
                "correct": 1
            },
            {
                "q": "47. Čo ovplyvňujú pneumatiky rôzneho druhu a konštrukcie na tej istej náprave?",
                "options": [
                    "a) neovplyvňujú jazdné vlastnosti vozidla",
                    "b) ovplyvňujú jazdné vlastnosti vozidla",
                    "c) spôsobujú vyššiu spotrebu paliva",
                    "d) spôsobujú nižšiu spotrebu paliva"
                ],
                "correct": 1
            },
            {
                "q": "48. Ak sme opravovali defekt na pneumatike namontovanej na delenom ráfiku čo musíme zaistiť?",
                "options": [
                    "a) musíme dať pozor na tlak hustenia pneumatiky",
                    "b) pneumatiku nahustíme na predpísaný tlak až keď ju namontujeme na koleso",
                    "c) nahustíme ju na tlak, ktorý je vylisovaný na jej boku",
                    "d) musíme pri jej hustení mechanicky zaistiť, aby uvoľnený záverný kruh nemohol spôsobiť úraz"
                ],
                "correct": 3
            },
            {
                "q": "49. Vozidlo vybavené systémom bŕzd ABS ako sa správa pri intenzívnom brzdení?",
                "options": [
                    "a) má zaručenú riaditeľnosť smeru aj pri intenzívnom brzdení",
                    "b) má zaručenú riaditeľnosť smeru iba pri intenzívnom brzdení",
                    "c) ABS nemá vplyv na riaditeľnosť vozidla pri intenzívnom brzdení",
                    "d) je určené len pre vodičov začiatočníkov"
                ],
                "correct": 0
            },
            {
                "q": "50. Čo môže spôsobiť použitie odľahčovacej brzdy pri jazde za zhoršených adhéznych podmienok?",
                "options": [
                    "a) môže spôsobiť šmyk vozidla, prípadne zalomenie súpravy",
                    "b) nemôže spôsobiť šmyk vozidla, prípadne zalomenie súpravy",
                    "c) slúži len na udržanie rýchlosti jazdy dolu svahom a nemá vplyv na šmyk vozidla",
                    "d) zvyšuje hluk vozidla, ale nemá vplyv na jeho jazdné vlastnosti"
                ],
                "correct": 0
            },
            {
                "q": "51. Ako sa mení dráha na zastavenie vozidla?",
                "options": [
                    "a) je totožná s brzdnou dráhou",
                    "b) sa mení s dĺžkou reakcie vodiča a rýchlosťou vozidla",
                    "c) sa nemení s dĺžkou reakcie vodiča ale s rýchlosťou vozidla",
                    "d) závisí len od súčiniteľa priľnavosti"
                ],
                "correct": 1
            },
            {
                "q": "52. V čom pomáha Elektronický stabilizačný systém (ESP)?",
                "options": [
                    "a) zabráni vozidlu a jazdnej súprave dostať sa do šmyku",
                    "b) porovnáva skutočný pohyb vozidla s natočením riadiacich kolies a zabráni zalomeniu súpravy",
                    "c) napomáha vodičovi udržať vozidlo v želanom smere jazdy v rámci fyzikálnych zákonov",
                    "d) napomáha vodičovi udržať vozidlo v želanom smere jazdy"
                ],
                "correct": 2
            },
            {
                "q": "53. Vzduchojemy je potrebné odvodňovať, aby kondenzačná voda nespôsobila?",
                "options": [
                    "a) nespôsobila koróziu brzdového systému",
                    "b) neznižovala svojim objemom potrebnú zásobu tlakového vzduchu",
                    "c) nespôsobila nefunkčnosť brzdového systému, najmä v zime v dôsledku zamrznutia",
                    "d) aby zbytočne nezvyšovala hmotnosť vozidla"
                ],
                "correct": 2
            },
            {
                "q": "54. Pokles tlaku vzduchu vo vzduchojemoch pri vzduchových brzdách môže spôsobiť?",
                "options": [
                    "a) nemá vplyv na účinnosť brzdenia",
                    "b) spôsobí, že budú brzdiť len kolesá prednej nápravy",
                    "c) spôsobí, že budú brzdiť len kolesá zadnej nápravy",
                    "d) spôsobí zhoršenú účinnosť brzdenia"
                ],
                "correct": 3
            },
            {
                "q": "55. Ak porovnáme brzdnú dráhu vozidiel, tak ktoré vozidlo brzdí účinnejšie?",
                "options": [
                    "a) nákladné vozidlo brzdí účinnejšie ako osobné vozidlo, pretože má väčšiu hmotnosť a je pritláčané k vozovke väčšou silou",
                    "b) nákladné vozidlo má rovnako účinné brzdy ako osobné vozidlo",
                    "c) nákladné vozidlo brzdí účinnejšie, pretože brzdný účinok vyvoláva tlakový vzduch, zatiaľ čo pri osobných vozidlách len svalová sila vodiča",
                    "d) osobné vozidlo brzdí účinnejšie"
                ],
                "correct": 3
            },
            {
                "q": "56. Ako postupujeme pri hľadaní poruchy na vozidle?",
                "options": [
                    "a) postupujeme na základe znalosti konštrukcie vozidla od najzložitejších častí k jednoduchším",
                    "b) postupujeme na základe znalosti konštrukcie vozidla od jednoduchších k zložitejších častiam",
                    "c) počkáme na servis",
                    "d) požiadame o pomoc okoloidúcich vodičov"
                ],
                "correct": 1
            },
            {
                "q": "57. Ak pri zošliapnutí prevádzkovej brzdy počuť unikať vzduch. čo to znamená?",
                "options": [
                    "a) je to normálny stav",
                    "b) je to signál, že brzdový systém je netesný",
                    "c) znamená to, že kompresor dodáva vysoký tlak vzduchu",
                    "d) kompresor pracuje na plný výkon"
                ],
                "correct": 1
            },
            {
                "q": "58. Veľká vôľa brzdových kľúčov môže spôsobiť?",
                "options": [
                    "a) znamená, že brzdy pri jazde koleso nepribrzďujú. Je to ideálny stav",
                    "b) spotreba tlakového vzduchu je nižšia",
                    "c) pri brzdení sa zväčšuje spotreba tlakového vzduchu a predlžuje sa čas nábeh brzdného účinku",
                    "d) nič nesignalizuje"
                ],
                "correct": 2
            },
            {
                "q": "59. Ak pri brzdení blokuje jedno koleso čo sa má vykonať?",
                "options": [
                    "a) nič sa nedeje",
                    "b) je to dôvod na dočasné vyradenie vozidla z prevádzky",
                    "c) nie je považované za závadu, ak blokuje koleso zadnej nápravy",
                    "d) vodič smie jazdiť len rýchlosťou do 60 km/h"
                ],
                "correct": 1
            },
            {
                "q": "60. Ak štartér nedokáže pretočiť motor príčinou je?",
                "options": [
                    "a) vždy vybitý akumulátor",
                    "b) vždy zlý kontakt na svorkách akumulátora",
                    "c) zlý kontakt na ukostrení štartéra a akumulátora",
                    "d) vybitý akumulátor, zlý kontakt na svorkách akumulátora, chyba v ukostrení akumulátora alebo štartéra, zlý štartér, alebo kombinácia týchto závad"
                ],
                "correct": 3
            },
            {
                "q": "61. Z akých príčin nesvieti žiarovka vonkajšieho osvetlenia vozidla?",
                "options": [
                    "a) príčinou je vždy nefunkčná žiarovka",
                    "b) príčinou môže byť nefunkčná žiarovka, prípadne porušená poistka v príslušnom obvode",
                    "c) skrat vo vedení, vypálená poistka, zlý kontakt na kostru vozidla, porucha vo vedení, zlá žiarovka",
                    "d) ak po výmene žiarovky táto nezačne svietiť, zavolám servis"
                ],
                "correct": 2
            },
            {
                "q": "62. Kde zisťujeme vôľu riadenia?",
                "options": [
                    "a) na volante",
                    "b) na kolesách",
                    "c) v prevodke riadenia",
                    "d) v uložení kolesa"
                ],
                "correct": 0
            },
            {
                "q": "63. Akumulátor neudrží kapacitu a ihneď po pripojení na nabíjačku prudko vrie. Čo je potrebné vykonať?",
                "options": [
                    "a) nabíjací prúd je nízky a treba ho zvýšiť",
                    "b) nabíjacie napätie je nízke a treba ho zvýšiť",
                    "c) akumulátor sme skratovali",
                    "d) akumulátor je potrebné vymeniť"
                ],
                "correct": 3
            },
            {
                "q": "64. Čo môže byť príčinou rozsvietenia kontrolky dobíjania?",
                "options": [
                    "a) je vysoký odber prúdu",
                    "b) je uvoľnený alebo poškodený klinový remeň, prípadne je poškodený alternátor",
                    "c) potvrdzuje správnu činnosť alternátora",
                    "d) nemá vplyv na ďalšie použitie vozidla"
                ],
                "correct": 1
            },
            {
                "q": "65. Ak stierač čelného skla zanecháva nezotreté plochy. čo je potrebné vykonať?",
                "options": [
                    "a) okamžite vymením stierač",
                    "b) počkám s výmenou stieračov do najbližšej kontroly technického stavu",
                    "c) ak mi nezotreté časti nebránia vo výhľade, nemusím sa týmto problémom zaoberať",
                    "d) pravdepodobnou príčinou je mastná stieracia lišta stačí ju odmastiť"
                ],
                "correct": 0
            },
            {
                "q": "66. Emisné kontroly motorových vozidiel sú v Slovenskej republike povinné?",
                "options": [
                    "a) sú povinné",
                    "b) nie sú povinné, pokiaľ vozidlo je vybavené katalyzátorom",
                    "c) sú povinné len pre vozidlá s benzínovým motorom",
                    "d) sú povinné len kontroly technického stavu"
                ],
                "correct": 0
            },
            {
                "q": "67. Ako sú stanovené intervaly údržby vozidla výrobcom?",
                "options": [
                    "a) sú len orientačné, výrobca nemôže obmedziť záručné podmienky pravidelným vykonávaním údržby a dodržiavaním ich intervalov",
                    "b) sú stanovené s ohľadom na technickú a prevádzkovú životnosť jednotlivých častí a náplní a sú potrebné pre dodržanie životnosti vozidla a bezpečnosti jeho prevádzky",
                    "c) sú len orientačné a údržba sa vykoná podľa potreby",
                    "d) sú dôležité len pokiaľ ide o prevádzkové kvapaliny"
                ],
                "correct": 1
            },
            {
                "q": "68. Pravidelná kontrola tlaku hustenia pneumatík",
                "options": [
                    "a) neovplyvňuje bezpečnosť jazdy",
                    "b) má vplyv len na životnosť pneumatík v kilometroch",
                    "c) ovplyvňuje bezpečnosť cestnej premávky, pretože správne nahustené pneumatiky lepšie prenášajú sily na vozovku",
                    "d) je strata času. Stačí vykonať vizuálnu kontrolu"
                ],
                "correct": 2
            },
            {
                "q": "69. Vytekajúci olej z tlmiča",
                "options": [
                    "a) nie je prekážkou v ďalšom využívaní vozidla na jazdu v cestnej premávke",
                    "b) má za následok zmenu jazdných vlastností vozidla a je dôvodom na dočasné vyradenie vozidla z cestnej premávky",
                    "c) znečisťuje životné prostredie ale nemá vplyv na bezpečnosť jazdy",
                    "d) netreba sa znepokojovať, zásoba oleja v tlmiči je dostatočne veľká"
                ],
                "correct": 1
            },
            {
                "q": "70. Technické kontroly nákladných automobilov sa vykonávajú v intervaloch",
                "options": [
                    "a) každé 4 roky",
                    "b) každý rok",
                    "c) každé 3 roky",
                    "d) každé 2 roky"
                ],
                "correct": 1
            },
            {
                "q": "71. Pri prekonávaní stúpaní by mal vodič",
                "options": [
                    "a) udržiavať motor pri najnižších otáčkach",
                    "b) udržiavať motor pri najvyšších otáčkach",
                    "c) udržiavať motor v nestabilnej oblasti otáčok",
                    "d) udržiavať motor v stabilnej oblasti otáčok"
                ],
                "correct": 3
            },
            {
                "q": "72. Pri jazde ustálenou rýchlosťou, aby dosiahol najnižšiu spotrebu paliva by mal vodič",
                "options": [
                    "a) zaradením prevodového stupňa udržovať motor v otáčkach blízkych maximálnemu točivému momentu motoru",
                    "b) zaradením prevodového stupňa udržovať motor v otáčkach blízkych maximálnemu výkonu motora",
                    "c) zaradiť najvyšší možný prevodový stupeň tak, aby motor pracoval pravidelne a bez známok preťaženia",
                    "d) jazdiť s takým prevodovým stupňom, ktorý umožňuje najdynamickejšiu jazdu"
                ],
                "correct": 2
            },
            {
                "q": "73. Kedy sa spotreba vozidla zvyšuje?",
                "options": [
                    "a) ak vozidlo prekonáva stúpanie",
                    "b) ak vozidlo ťahá príves",
                    "c) ak vodič použil nevhodné palivo",
                    "d) ak vozidlo prekonáva stúpanie, zvyšuje rýchlosť jazdy, ťahá príves, má podhustené pneumatiky"
                ],
                "correct": 3
            },
            {
                "q": "74. Za akých podmienok sa môžu sa v Slovenskej republike využívať aerodynamické zariadenia na zadnej časti nákladného vozidla (jazdnej súpravy)?",
                "options": [
                    "a) Na zvýšenie energetickej účinnosti môžu byť v Slovenskej republike vybavené nákladné vozidlá alebo jazdné súpravy na ich zadnej časti aerodynamickými zariadeniami, ktoré môžu presiahnuť najväčšie povolené dĺžky. Aerodynamické zariadenia, ktoré presahujú dĺžku 500 mm, musia byť pred uvedením na trhy schválené. Pri používaní týchto zariadení sa musia spĺňať prevádzkové požiadavky podľa platnej legislatívy týkajúcej sa nadrozmernej prepravy a tým vybaviť aj prepravné povolenie.",
                    "b) Na zvýšenie energetickej účinnosti môžu byť v Slovenskej republike vybavené nákladné vozidlá alebo jazdné súpravy na ich zadnej časti aerodynamickými zariadeniami, ktoré môžu presiahnuť najväčšie povolené dĺžky. Aerodynamické zariadenia, ktoré presahujú dĺžku 1000 mm , musia byť pred uvedením na trhy schválené. Pri používaní týchto zariadení sa musia spĺňať prevádzkové požiadavky podľa platnej legislatívy týkajúcej sa prevádzky vozidiel v cestnej premávke.",
                    "c) Na zvýšenie energetickej účinnosti môžu byť v Slovenskej republike vybavené nákladné vozidlá alebo jazdné súpravy na ich zadnej časti aerodynamickými zariadeniami, ktoré môžu presiahnuť najväčšie povolené dĺžky. Aerodynamické zariadenia, ktoré presahujú dĺžku 500 mm, musia byť pred uvedením na trhy schválené. Pri používaní týchto zariadení sa musia spĺňať prevádzkové požiadavky podľa platnej legislatívy týkajúcej sa prevádzky vozidiel v cestnej premávke.",
                    "d) Na zvýšenie energetickej účinnosti môžu byť v Slovenskej republike vybavené nákladné vozidlá alebo jazdné súpravy na ich zadnej časti aerodynamickými zariadeniami, ktoré môžu presiahnuť najväčšie povolené dĺžky. Aerodynamické zariadenia, ktoré presahujú dĺžku 500 mm, musia byť pred uvedením na trhy schválené. Pri používaní týchto zariadení sa musia vydať pokyny od vedúceho dopravy."
                ],
                "correct": 2
            },
            {
                "q": "75. Najšetrnejší k životnému prostrediu je motor spĺňajúci emisné limity",
                "options": [
                    "a) EURO 4",
                    "b) EURO 6",
                    "c) EURO 3",
                    "d) EURO 5"
                ],
                "correct": 1
            },
            {
                "q": "76. Defenzívny spôsob jazdy",
                "options": [
                    "a) zaisťuje minimálnu spotrebu a prispieva k bezpečnosti cestnej premávky",
                    "b) defenzívne jazdia len neskúsení vodiči, tí ktorí majú určité skúsenosti, môžu jazdiť dynamicky",
                    "c) defenzívna jazda znamená veľké zdržanie, preto netreba dbať na spotrebu. Úspora času je predsa dôležitejšia",
                    "d) defenzívna jazda znamená, že vodič bude tvoriť prekážku rýchlejším a dravším"
                ],
                "correct": 0
            },
            {
                "q": "77. Ak začne na vozidlo pôsobiť bočná sila (bočný vietor), neutrálne vozidlo",
                "options": [
                    "a) nezmení svoj smer pohybu, posunie sa len v smere pôsobenia bočnej sily",
                    "b) predná náprava bude vybočovať viac ako zadná a vozidlo sa začne správať ako nedotáčavé",
                    "c) zadná náprava bude vybočovať viac ako predná náprava a vozidlo sa začne správať ako pretáčavé",
                    "d) zadná náprava bude vybočovať viac ako predná a vozidlo sa bude správať ako nedotáčavé"
                ],
                "correct": 0
            },
            {
                "q": "78. Ak má vozidlo s neutrálnou charakteristikou podhustené pneumatiky na prednej náprave, bude sa správať ako vozidlo",
                "options": [
                    "a) nedotáčavé",
                    "b) pretáčavé",
                    "c) neutrálne",
                    "d) bude lepšie brzdiť"
                ],
                "correct": 0
            },
            {
                "q": "79. Ak vozidlo mení smer a rýchlosť jazdy, neupevnený náklad",
                "options": [
                    "a) vždy mení smer pohybu a rýchlosť spolu s vozidlom",
                    "b) má snahu pohybovať sa v pôvodnom smere a pôvodnou rýchlosťou",
                    "c) náklad ovplyvňuje len zaťaženie náprav, jeho pohyb je vždy zhodný s pohybom vozidla",
                    "d) rozmiestnenie nákladu ovplyvňuje len polohu ťažiska a pohybuje sa spolu s vozidlom"
                ],
                "correct": 1
            },
            {
                "q": "80. Stopový a obrysový polomer zatáčania vozidla",
                "options": [
                    "a) sú rôzne polomery, pričom vonkajší obrysový polomer je vždy väčší ako stopový polomer",
                    "b) vnútorný stopový polomer je väčší ako vonkajší stopový polomer",
                    "c) sú to tie isté polomery, len inak pomenované",
                    "d) stopový polomer zatáčania je dôležitý, aby vozidlo svojim predným nárazníkom nezachytilo nejakú prekážku"
                ],
                "correct": 0
            },
            {
                "q": "81. Ak iný účastník cestnej premávky svojim správaním vyvolá nebezpečnú situáciu na ceste",
                "options": [
                    "a) ostatní účastníci cestnej premávky musia svojim správaním odvrátiť hroziace ak je to v ich silách nebezpečenstvo,",
                    "b) nebezpečnú situáciu nevyvolali, preto nemusia vykonať žiadne opatrenia na odvrátenie hroziaceho nebezpečenstva. Prípadné následky dopravnej nehody v plnej miere znáša ten, kto nebezpečnú situáciu vyvolal",
                    "c) musí odvrátiť vzniknuté nebezpečenstvo len pokiaľ nemusí náhle meniť smer jazdy ani rýchlosť jazdy",
                    "d) musí vinníka upozorniť zvukovým výstražným znamením, musí sa však zdržať hanlivých gest"
                ],
                "correct": 0
            },
            {
                "q": "82. Dynamická agresívna jazda na hranici technických možností je prejavom",
                "options": [
                    "a) toho, že vodič plne zvláda svoje vozidlo",
                    "b) toho, že vodič je nebezpečný sebe aj ostatným účastníkom dopravy, pretože mu neostáva rezerva na zvládnutie kritických situácií",
                    "c) šetrí spotrebu paliva",
                    "d) zvyšuje opotrebenie vozidla, nemá ale vplyv na bezpečność jazdy"
                ],
                "correct": 1
            },
            {
                "q": "83. Vodiči smú jazdiť len takou rýchlosťou",
                "options": [
                    "a) aby mohli na ich správanie reagovať aj ostatní účastníci cestnej premávky",
                    "b) jazdia len tak rýchlo, aby boli schopní sami zastaviť",
                    "c) môžu jazdiť vždy takou rýchlosťou aká je v danom úseku povolená",
                    "d) môžu jazdiť o 10 km/h rýchlejšie ako je v danom úseku povolená, pretože polícia takéto prekročenie rýchlosti jazdy toleruje"
                ],
                "correct": 0
            },
            {
                "q": "84. Deti nachádzajúce sa pri okraji cesty",
                "options": [
                    "a) nič neznamenajú, pokiaľ v danom úseku nie je vyznačený priechod pre chodcov, nesmú vstúpiť do vozovky vzhľadom na rýchlosť a vzdialenosť prichádzajúcich vozidiel",
                    "b) znamenajú, že vodič musí zvýšiť opatrnosť, pretože dieťa nie vždy vie správne vyhodnotiť situáciu",
                    "c) znamenajú, že vodič nemusí dbať na túto skutočnosť, pokiaľ v danom úseku nie je použitá dopravná značka A15 Deti",
                    "d) znamenajú, že vodič je povinný pripraviť sa brzdiť a znížiť rýchlosť jazdy na polovicu oproti rýchlosti, ktorou chcel úsek prejsť"
                ],
                "correct": 1
            },
            {
                "q": "85. Ak je na vozovke vyznačený vyhradený jazdný pruh, ostatní vodiči vozidiel, pre ktorých nie je vyhradený jazdný pruh určený, smú naň vojsť?",
                "options": [
                    "a) smú naň vojsť len pri obchádzaní, predchádzaní, odbočovaní, otáčaní, vchádzaní na cestu, alebo ak to dovoľuje dopravná značka alebo ak to vyžadujú mimoriadne okolnosti, najmä ak nie je medzi vyznačeným jazdným pruhom a okrajom vozovky dostatok miesta",
                    "b) smú naň vojsť ak to vyžaduje hustota premávky, najmä ak vozidlá môžu jazdiť len takou rýchlosťou ak vozidlá jazdiace vpredu a v okolitých jazdných pruhoch",
                    "c) smú vojsť keď to považujú za potrebné",
                    "d) smú vojsť, ak neobmedzia vozidlá už vo vyhradenom jazdnom pruhu jazdiace"
                ],
                "correct": 0
            },
            {
                "q": "86. Ak vozidlo spomaľuje, pôsobia na náklad a prepravované osoby zotrvačné sily, ktoré",
                "options": [
                    "a) narastajú s veľkosťou zmeny",
                    "b) nemenia sa s veľkosťou zmeny",
                    "c) čím je zmena prudšia, tým menšie sily pôsobia",
                    "d) ťažšie predmety majú väčšiu schopnosť zachovať svoj polohu"
                ],
                "correct": 0
            },
            {
                "q": "87. Schopnosť pneumatík prenášať brzdné sily",
                "options": [
                    "a) sa s rýchlosťou mení - vyššia rýchlosť horšia schopnosť prenášať sily",
                    "b) sa s rýchlosťou nemení",
                    "c) pri vyššej rýchlosti pneumatiky lepšie brzdia",
                    "d) ak sú zahriate na prevádzkovú teplotu, ich schopnosť prenášať brzdné a bočné sily sa s rýchlosťou nemení"
                ],
                "correct": 0
            },
            {
                "q": "88. Ak pri brzdení pôsobia na vozidlo súčasne aj bočné sily",
                "options": [
                    "a) schopnosť pneumatík viesť vozidlo nie je dotknutá",
                    "b) schopnosť pneumatík viesť vozidlo nie je dotknutá len na ceste s dobrou priľnavosťou",
                    "c) schopność pneumatík prenášať bočné sily sa znižuje a pri zablokovaní kolesa dôjde k úplnej strate schopnosti prenášať bočné sily",
                    "d) schopnosť pneumatiky prenášať bočné sily sa zvyšuje"
                ],
                "correct": 2
            },
            {
                "q": "89. Vodič vozidla, ktoré nie vybavené systémom ABS",
                "options": [
                    "a) by mal počítať s tým, že pri intenzívnom brzdení môže stratiť možność ovládať smer pohybu vozidla",
                    "b) nemusí sa ničoho obávať, brzdné dráhy vozidiel s ABS a bez ABS sú rovnaké",
                    "c) má síce dlhšiu brzdnú dráhu ako vozidlo vybavené ABS, ale dráha na zastavenie vozidla je rovnaká",
                    "d) vozidlo bez ABS má kratšiu brzdnú dráhu a ovládanie smeru pohybu vozidla pri brzdení nie je dôležité"
                ],
                "correct": 0
            },
            {
                "q": "90. Použitie zimných pneumatík na suchom povrchu pri teplote pod 7 °C",
                "options": [
                    "a) skráti brzdnú dráhu",
                    "b) nemá vplyv na brzdnú dráhu. Zimné pneumatiky sa prejavia len na snehu a ľade",
                    "c) na suchom povrchu aj pri teplote pod 7 °C má vozidlo s letnými pneumatikami kratšiu brzdnú dráhu",
                    "d) zimná pneumatika zvyšuje hluk vozidla a preto je nevhodné ju používať"
                ],
                "correct": 0
            },
            {
                "q": "91. Vodič je povinný prispôsobiť rýchlosť jazdy",
                "options": [
                    "a) svojim schopnostiam, vlastnostiam vozidla a nákladu, poveternostným podmienkam, stavu a povahe vozovky a iným okolnostiam, ktoré možno predvídať.",
                    "b) svojim schopnostiam. Náklad má upevnený, a náklad teda nemôže ovplyvniť jazdné vlastnosti vozidla",
                    "c) svojim schopnostiam. Naložené vozidlo lepšie brzdí, vodič môže jazdiť rýchlejšie",
                    "d) nemá sa čomu prispôsobiť. Ak náklad nepresahuje o viac ako jeden meter, nemá vplyv na jazdné vlastnosti vozidla"
                ],
                "correct": 0
            },
            {
                "q": "92. Náklad musí byť zabezpečený",
                "options": [
                    "a) tak, aby pri zmene rýchlosti jazdy alebo zmene smeru jazdy vozidla sa nezošmykol, neprevrátil, nespadol alebo sa inak voľne nepohyboval",
                    "b) povinnosť zabezpečovať náklad platí len pre ľahký materiál. Ťažké predmety sa fixujú svojou váhou",
                    "c) povinnosť zabezpečovať náklad platí len pre vozidlá jazdiace vyššou rýchlosťou ako 60 km/h",
                    "d) povinnosť zabezpečovať náklad platí len pre nákladné automobily. Pri preprave nákladu v autobuse v priestore pre cestujúcich za náklad zodpovedá osoba, ktorá náklad prepravuje"
                ],
                "correct": 0
            },
            {
                "q": "93. Pri preprave nákladu",
                "options": [
                    "a) sa nesmie prekročiť najväčšia prípustná celková hmotnosť vozidla, najväčšia prípustná hmotnosť jazdnej súpravy, najväčšia prípustná celková hmotnosť prípojného vozidla ani najväčšia prípustná hmotnosť pripadajúca na nápravy vozidla",
                    "b) sa nesmie prekročiť najväčšia prípustná celková hmotnosť vozidla, najväčšia prípustná hmotnosť jazdnej súpravy, najväčšia prípustná celková hmotnosť prípojného vozidla. Najväčšiu prípustnú hmotnosť pripadajúcu na nápravy vozidla vodič nevie skontrolovať, a teda nemá za jej prekročenie zodpovednosť",
                    "c) Vodič kontroluje len podľa odhadu. Za prekročenie nosnosti a rozloženie nákladu zodpovedá ten kto nakladá. To platí aj pre osoby prepravujúce sa v autobuse",
                    "d) Vodič nemá zodpovednosť za preťaženie vozidla. Čo mu naložia, to vezie."
                ],
                "correct": 0
            },
            {
                "q": "94. Vodič vozidla, ktoré je povinne vybavené prenosným výstražným trojuholníkom",
                "options": [
                    "a) je povinný tento trojuholník použiť počas núdzového státia, najmä pri prerušení jazdy pre chybu na vozidle alebo na náklade alebo v dôsledku dopravnej nehody, ak také vozidlo tvorí prekážku cestnej premávky",
                    "b) výstražný trojuholník použije len ak je znížená viditeľnosť",
                    "c) výstražný trojuholník umiestni len vo vzdialenosti, aby naň stále videl",
                    "d) výstražný trojuholník sa podľa nových predpisov nepoužíva"
                ],
                "correct": 0
            },
            {
                "q": "95. Vodič nesmie zastaviť na vyhradenom parkovisku,",
                "options": [
                    "a) ak nejde o vozidlo, pre ktoré je parkovisko vyhradené",
                    "b) ak doba státia nepresiahne 5 minút",
                    "c) ak doba zastavenia nepresiahne 5 minút",
                    "d) ak toto zastavenie nepresiahne 3 minúty"
                ],
                "correct": 0
            },
            {
                "q": "96. Pred železničným priecestím je vodič návesovej súpravy povinný?",
                "options": [
                    "a) vodič je povinný počínať si mimoriadne opatrne, najmä sa presvedčiť, či môže bezpečne prejsť cez železničné priecestie",
                    "b) vodič je povinný počínať si mimoriadne opatrne, najmä sa presvedčiť, či môže bezpečne prejsť cez železničné priecestie. Ak už vidieť alebo počuť prichádzajúci vlak, smie prejsť cez železničné priecestie len ak tento úkon stihne spoľahlivo a bezpečne vykonať",
                    "c) vodič je povinný počínať si zvlášť opatrne a nesmie vojsť na železničné priecestie ani ak osoba pribratá na zaistenie bezpečnej prevádzky železničného priecestia dáva pokyn na jazdu cez železničné priecestie vodorovným kývaním ruky s červenou alebo so žltou zástavkou a za zníženej viditeľnosti bielym svetlom cez stred tela",
                    "d) vodič si musí počínať zvlášť opatrne a vždy pred železničným priecestím zastaviť a dôkladne sa presvedčiť, či nevidieť alebo nepočuť prichádzajúci vlak"
                ],
                "correct": 0
            },
            {
                "q": "97. Plne naložené vozidlo",
                "options": [
                    "a) má vyššiu spotrebu ako prázdne a takáto jazda je škodlivá voči životnému prostrediu",
                    "b) má síce vyššiu spotrebu paliva ale v prepočte na prepravenú užitočnú hmotnosť je to výhodné",
                    "c) ak vozidlo naložím len čiastočne, získam možnosť dynamickejšej jazdy a nižšiu spotrebu. Vplyv na životné prostredie nie je dôležitý",
                    "d) moderné motory zaisťujú rovnakú spotrebu paliva"
                ],
                "correct": 1
            },
            {
                "q": "98. Defenzívny spôsob jazdy",
                "options": [
                    "a) spôsobuje zvýšené opotrebenie bŕzd pretože vodič často brzdí a tým zvyšuje náklady na opravu",
                    "b) spôsobuje, že vodič menej často brzdí, zrýchľuje a preraďuje; to znižuje spotrebu paliva, opotrebenie bŕzd, pneumatík a celého vozidla",
                    "c) spôsobuje vyššie namáhanie podvozku vozidla",
                    "d) neovplyvňuje opotrebenie vozidla"
                ],
                "correct": 1
            },
            {
                "q": "99. Čo je potrebné zabezpečiť pri ukladaní nákladu na vozidlo?",
                "options": [
                    "a) treba náklad umiestniť čo najvyššie a hneď za kabínou vozidla. Tým sa dosiahne, že vozidlo sa bude správať mäkšie pri prejazde nerovností",
                    "b) náklad treba rozložiť rovnomerne po celej ložnej ploche tak, aby čo najmenej zvyšoval veľkosť čelnej plochy vozidla, čím sa zníži spotreba paliva",
                    "c) náklad uložiť čo najviac dozadu. Tým sa docieli odľahčenie prednej nápravy a ľahšie ovládanie riadenia",
                    "d) veľkosť čelnej plochy vozidla nemá vplyv na spotrebu paliva"
                ],
                "correct": 1
            },
            {
                "q": "100. Deflektor nad kabínou vozidla znižuje súčiniteľ odporu vzduchu vozidla",
                "options": [
                    "a) preto ho ponechám vo vztýčenej polohe aj keď vozidlo jazdí bez nákladu",
                    "b) pokiaľ vozidlo jazdí bez nákladu prestavím deflektor do zníženej polohy. Tým docielim zníženie veľkosti čelnej plochy a zníženie spotreby paliva",
                    "c) ponechám vo vztýčenej polohe za každých okolností",
                    "d) deflektor nemá vplyv na spotrebu paliva"
                ],
                "correct": 1
            },
            {
                "q": "101. Náklady na spotrebované palivo prepočítané na jeden ubehnutý kilometer",
                "options": [
                    "a) patria k najvýznamnejším variabilným (premenlivým) nákladom na ubehnutý kilometer",
                    "b) sú zanedbateľnou položkou, prevyšujú ich náklady na mzdy",
                    "c) sú zanedbateľné, prevyšujú ich odpisy vozidla",
                    "d) sú zanedbateľnou položkou, prevyšujú ich dane a odvody"
                ],
                "correct": 0
            },
            {
                "q": "102. Preťaženie vozidla pri jazde po verejných komunikáciách",
                "options": [
                    "a) je výhodné, pretože na jednu jazdu odveziem väčšie množstvo nákladu a dosiahnem vyššie tržby",
                    "b) je možné, pokiaľ výrobca vozidla pripúšťa vyššie zaťaženie na nápravu",
                    "c) nie je prípustné, pretože preťažené vozidlo poškodzuje komunikácie (napr. vytvára v povrchu cesty koľaje)",
                    "d) je prípustné, ale musím zvýšiť tlak hustenia pneumatík, aby nedochádzalo k poškodzovaniu cesty"
                ],
                "correct": 2
            },
            {
                "q": "103. Ovplyvňuje rýchlosť jazdy spotrebu paliva vozidla?",
                "options": [
                    "a) nie, spotreba paliva závisí iba od ubehnutej vzdialenosti",
                    "b) nie, spotreba paliva závisí iba od prepravovanej hmotnosti",
                    "c) áno, rýchlosť vozidla ovplyvňuje spotrebu paliva",
                    "d) čím vyššia je rýchlosť, tým je nižšia spotreba vozidla"
                ],
                "correct": 2
            },
            {
                "q": "104. Ako vplýva podhustená pneumatika na spotrebu paliva?",
                "options": [
                    "a) hustenie pneumatík nemá vplyv na spotrebu paliva",
                    "b) znižuje spotrebu paliva, pri rýchlostiach nad 60 km/hod.",
                    "c) znižuje spotrebu paliva, pri rýchlostiach pod 60 km/hod.",
                    "d) zvyšuje spotrebu paliva"
                ],
                "correct": 3
            },
            {
                "q": "105. Ako vplýva prehustená pneumatika na opotrebovanie plášťa?",
                "options": [
                    "a) hustenie pneumatík nemá vplyv na opotrebovanie plášťa",
                    "b) zvyšuje opotrebovanie plášťa",
                    "c) znižuje opotrebovanie plášťa, pri rýchlostiach nad 60 km/hod.",
                    "d) znižuje opotrebovanie plášťa, pri rýchlostiach pod 60 km/hod."
                ],
                "correct": 1
            },
            {
                "q": "106. Ako vplýva podhustená pneumatika na opotrebovanie plášťa?",
                "options": [
                    "a) hustenie pneumatík nemá vplyv na opotrebovanie plášťa",
                    "b) zvyšuje opotrebovanie plášťa",
                    "c) znižuje opotrebovanie plášťa, pri rýchlostiach nad 60 km/hod.",
                    "d) znižuje opotrebovanie plášťa, pri rýchlostiach pod 60 km/hod."
                ],
                "correct": 1
            },
            {
                "q": "107. Na prepravovaný náklad pôsobia pozdĺžne a priečne sily",
                "options": [
                    "a) náklad je ale dostatočne fixovaný svojou vlastnou hmotnosťou",
                    "b) náklad je potrebné upevniť proti pohybu v priečnom a pozdĺžnom smere, ako aj proti preklopeniu",
                    "c) náklad je potrebné upevniť len proti priečnemu pohybu",
                    "d) náklad je potrebné upevniť len proti priečnemu a pozdĺžnemu posunu"
                ],
                "correct": 1
            },
            {
                "q": "108. Pokiaľ je vozidlo naložené",
                "options": [
                    "a) dochádza k zmene jeho ťažiska, čo ale neovplyvní jeho jazdné vlastnosti",
                    "b) dochádza k zmene jeho ťažiska, čo ovplyvní jeho jazdné vlastnosti",
                    "c) nedochádza k zmene ťažiska",
                    "d) nedochádza k zmene jeho ťažiska ani k zmene jeho jazdných vlastností"
                ],
                "correct": 1
            },
            {
                "q": "109. Odstredivá sila pôsobiaca na náklad pri rovnakej rýchlosti jazdy",
                "options": [
                    "a) sa s polomerom zákruty nemení",
                    "b) klesá s polomerom zákruty",
                    "c) rastie s polomerom zákruty",
                    "d) rastie so zmenšujúcim sa polomerom zákruty"
                ],
                "correct": 3
            },
            {
                "q": "110. Pri preprave kvapalín v cisterne",
                "options": [
                    "a) sa kvapaliny prelievajú a menia polohu ťažisko vozidla, čo ale nemení jeho jazdné vlastnosti",
                    "b) sa kvapaliny prelievajú, no nemenia polohu ťažiska vozidla",
                    "c) sa kvapaliny prelievajú a menia polohu ťažiska vozidla, čo mení jeho jazdné vlastnosti",
                    "d) sa kvapaliny neprelievajú, cisterna je rozdelená prepážkami, tak nemôže dochádzať k zmene polohy ťažiska vozidla"
                ],
                "correct": 2
            },
            {
                "q": "111. Ak ukladám náklad v niekoľkých vrstvách",
                "options": [
                    "a) nie je potrebné dať pozor na nosnosť obalu, prípadne prepravovaného nákladu",
                    "b) je potrebné si uvedomiť, že na spodnú vrstvu vytvárajú tlak vrchné vrstvy",
                    "c) tovar by mal byť zabalený tak, že vydrží jeho ukladanie vo vrstvách",
                    "d) za nakládku tovaru je zodpovedný prepravca"
                ],
                "correct": 1
            },
            {
                "q": "112. Pokiaľ materiál vo vrstvách zaisťujeme proti pohybu pomocou vrchného viazania",
                "options": [
                    "a) je potrebné skontrolovať, či v dôsledku prídavného zaťaženia od upínacích prvkov nedôjde k prekročeniu povoleného zaťaženia jednotlivých vrstiev",
                    "b) musím skontrolovať či viazacie prostriedky dokážu preniesť potrebné pozdĺžne sily",
                    "c) nie je potrebné nič kontrolovať, ak sú upínacie prostriedky dostatočne napnuté",
                    "d) stačí skontrolovať tlak na vrchnú vrstvu"
                ],
                "correct": 0
            },
            {
                "q": "113. Pokiaľ náklad presahuje obrys vozidla",
                "options": [
                    "a) nie je potrebné ho označiť",
                    "b) je potrebné ho označiť v zmysle platnej legislatívy",
                    "c) je potrebné ho označiť len za zníženej viditeľnosti",
                    "d) je potrebné ho označiť ak vytvára nebezpečenstvo pre ostatných účastníkov cestnej premávky"
                ],
                "correct": 1
            },
            {
                "q": "114. Pri preprave nákladu",
                "options": [
                    "a) sa nesmie prekročiť pohotovostná hmotnosť vozidla",
                    "b) sa nesmie prekročiť najväčšia prípustná celková hmotnosť vozidla, najväčšia prípustná hmotnosť jazdnej súpravy, najväčšia prípustná celková hmotnosť prípojného vozidla ani najväčšia prípustná hmotnosť pripadajúca na nápravy vozidla",
                    "c) sa nesmie prekročiť pohotovostná hmotnosť prívesu",
                    "d) sa nesmie prekročiť celková hmotnosť nadstavby"
                ],
                "correct": 1
            },
            {
                "q": "115. Aká je najväčšia povolená hmotnosť pripadajúca na jednotlivú hnaciu nápravu pre všetky kategórie vozidiel, ak hnacia náprava je vybavená dvojitou montážou pneumatík a vzduchových odpružením alebo odpružením uznaným za rovnocenné v rámci Európskej únie v SR?",
                "options": [
                    "a) 8 ton",
                    "b) 10 ton",
                    "c) 11,5 ton",
                    "d) 13 ton"
                ],
                "correct": 2
            },
            {
                "q": "116. Ako musia byť označené vozidlá vykonávajúce nadrozmernú prepravu, ktorých šírka prevyšuje 3,00 m alebo výška prevyšuje 4,30 m alebo dĺžka prevyšuje 23,0m vrátane prepravovaného nákladu, alebo nadmernú prepravu, ktorých vozidlo alebo jazdná súprava prevyšuje 50,0 ton?",
                "options": [
                    "a) musia byť v prednej časti vozidla označené špeciálnym informatívnym označením, ktoré upozorňuje na zvláštnu prepravu",
                    "b) musia byť v prednej a zadnej časti vozidla označené špeciálnym informatívnym označením, ktoré upozorňuje na zvláštnu prepravu",
                    "c) musia byť v zadnej časti vozidla označené špeciálnym informatívnym označením, ktoré upozorňuje na zvláštnu prepravu",
                    "d) nemusia byť označené špeciálnym informatívnym označením"
                ],
                "correct": 1
            },
            {
                "q": "117. Ak pri nadrozmernej preprave vozidiel a jazdných súprav v cestnej premávke celková šírka vozidla prevyšuje 3 m alebo celková výška prevyšuje 4,3 m, alebo celková dĺžka prevyšuje 23 m vrátane prepravovaného nákladu sú potrebné sprievodné vozidlá?",
                "options": [
                    "a) vozidlo alebo jazdná súprava musia byť vpredu sprevádzané sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami oranžovej farby a označené špeciálnym označením",
                    "b) vozidlo alebo jazdná súprava musia byť vpredu (okrem diaľnice a rýchlostnej cesty) aj vzadu sprevádzané sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami oranžovej farby a označené špeciálnym označením",
                    "c) vozidlo alebo jazdná súprava musia byť vzadu sprevádzané sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami oranžovej farby a označené špeciálnym označením",
                    "d) vozidlo alebo jazdná súprava nemusí byť sprevádzaná sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami oranžovej farby a označené špeciálnym označením"
                ],
                "correct": 1
            },
            {
                "q": "118. Čo je potrebné zabezpečiť ak by pri nadrozmernej preprave malo dôjsť k obmedzeniu plynulosti a bezpečnosti cestnej premávki, prípadne obmedzeniu cestnej premávky?",
                "options": [
                    "a) vozidlo alebo jazdná súprava musia byť vzadu sprevádzané sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami oranžovej farby a označené špeciálnym označením",
                    "b) vozidlo alebo jazdná súprava musia byť v zadnej časti vozidla označené špeciálnym informatívnym označením, ktoré upozorňuje na zvláštnu prepravu",
                    "c) vozidlo alebo jazdná súprava musia byť sprevádzané policajnými sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami a označené špeciálnym označením",
                    "d) vozidlo alebo jazdná súprava musia byť vzadu sprevádzané sprievodnými vozidlami vybavenými zvláštnymi výstražnými svietidlami oranžovej farby a označené špeciálnym označením"
                ],
                "correct": 2
            },
            {
                "q": "119. Vozidlá vybavené vzadu zdvíhacou nakladacou plošinou (hydraulickým čelom) musia mať na zadných čelných plochách čo najbližšie k horným a bočným obrysom zdvíhacej nakladacej plošiny",
                "options": [
                    "a) označenie prichytené tak, aby pri sklopení zdvíhacej nakladacej plošiny v každej polohe špeciálne označenie bolo vo zvislej polohe a viditeľné zo zadnej strany",
                    "b) označenie prichytené tak, aby pri sklopení zdvíhacej nakladacej plošiny v každej polohe špeciálne označenie bolo vo zvislej polohe a viditeľné z boku",
                    "c) označenie prichytené napevno k plošine",
                    "d) označenie prichytené tak, aby pri sklopení zdvíhacej nakladacej plošiny v každej polohe špeciálne označenie bolo vo zvislej polohe a viditeľné z predu"
                ],
                "correct": 0
            },
            {
                "q": "120. Aké sú požiadavky na náklad pri preprave?",
                "options": [
                    "a) riadne umiestnený a upevnený, aby ohrozoval bezpečnosť a plynulosť cestnej premávky, znečisťoval a poškodzoval cestu a jej okolie, spôsoboval nadmerný hluk, znečisťoval ovzdušie a zakrýval ustanovené osvetlenie vozidla, jeho odrazky, tabuľku s evidenčným číslom a vyznačenie najvyššej povolenej rýchlosti. To platí aj o zariadení slúžiacom na upevnenie a ochranu nákladu. Predmety, ktoré možno ľahko prehliadnuť, nesmú prečnievať po strane vozidla.",
                    "b) riadne umiestnený a upevnený, aby neohrozoval bezpečnosť a plynulosť cestnej premávky pričom môže zakrývať ustanovené osvetlenie vozidla, jeho odrazky, tabuľku s evidenčným číslom a vyznačenie najvyššej povolenej rýchlosti. To platí aj pre zariadenie slúžiace na upevnenie a ochranu nákladu. Predmety, ktoré možno ľahko prehliadnuť, nesmú prečnievať po strane vozidla.",
                    "c) riadne umiestnený a upevnený, aby neohrozoval bezpečnosť a plynulosť cestnej premávky a predmety, ktoré možno ľahko prehliadnuť, môžu prečnievať po strane vozidla.",
                    "d) Náklad musí byť riadne umiestnený, rozložený a upevnený, aby neohrozoval bezpečnosť a plynulosť cestnej premávky, neznečisťoval ani nepoškodzoval cestu ani jej okolie, nespôsoboval nadmerný hluk, zneznečisťoval ovzdušie a nezakrýval svetlomety a svietidlá vozidla, odrazové sklá, tabuľku s evidenčným číslom a vyznačenie najvyššej povolenej rýchlosti. Náklad musí byť zabezpečený tak, aby pri zmene rýchlosti jazdy alebo zmene smeru jazdy vozidla sa nezošmykol, neprevrátil, nespadol alebo sa inak voľne nepohyboval. Predmety, ktoré možno ľahko prehliadnuť, nesmú prečnievať po strane vozidla."
                ],
                "correct": 3
            },
            {
                "q": "121. Nakladanie a skladanie nákladu na ceste",
                "options": [
                    "a) je dovolené len vtedy, ak to nemožno urobiť mimo cesty; náklad sa musí zložiť a naložiť čo najrýchlejšie a tak, aby nebola ohrozená bezpečnosť cestnej premávky",
                    "b) je dovolené vždy podľa potreby vodiča",
                    "c) nie je nikdy dovolené",
                    "d) je dovolené len vtedy, ak cesta má dostatočnú šírku na plynulý prejazd ostatných vozidiel bez zastavenia"
                ],
                "correct": 0
            },
            {
                "q": "122. Ak vodič počas jazdy zistí, že vozidlo, náklad alebo upevnenie nákladu nespĺňajú ustanovené podmienky",
                "options": [
                    "a) môže pokračovať podľa potreby do miesta, kde je možné chybu odstrániť, počas jazdy nemusí urobiť žiadne opatrenia",
                    "b) môže pokračovať ďalej v jazde primeranou rýchlosťou avšak musí urobiť také opatrenia, aby sa počas jazdy neohrozila bezpečnosť ani plynulosť cestnej premávky a aby sa nepoškodila cesta",
                    "c) je povinný chybu odstrániť na najbližšom mieste čerpania denného odpočinku, pričom do tohto miesta smie pokračovať primeranou rýchlosťou avšak musí urobiť také opatrenia, aby sa počas jazdy neohrozila bezpečnosť ani plynulosť cestnej premávky a aby sa nepoškodila cesta",
                    "d) je povinný chybu odstrániť na mieste; ak to nemôže urobiť, smie v jazde pokračovať primeranou rýchlosťou len do najbližšieho miesta, kde možno chybu odstrániť; pritom musí urobiť také opatrenia, aby sa počas jazdy na takéto miesto neohrozila bezpečnosť ani plynulosť cestnej premávky a aby sa nepoškodila cesta"
                ],
                "correct": 3
            },
            {
                "q": "123. Ak to vyžadujú okolnosti, najmä pri preprave dlhého nákladu čo musí vodič zabezpečiť?",
                "options": [
                    "a) vodič vykoná odbočenie len doprava",
                    "b) vodič musí odbočiť so zvýšenou opatrnosťou",
                    "c) vodič nesmie prudko zatáčať s vozidlom",
                    "d) vodič musí zaistiť bezpečné odbočenie pomocou spôsobilej a náležite poučenej osoby"
                ],
                "correct": 3
            },
            {
                "q": "124. Vodič musí pri nakládke a vykládke",
                "options": [
                    "a) vždy nakladať a vykladať tovar zhora žeriavom",
                    "b) pristaviť vozidlo na miesto nakládky alebo vykládky a odovzdať kľúče od vozidla nakladaciemu personálu, ktorý vykoná nakládku",
                    "c) zabezpečiť vozidlo proti nežiadúcemu pohybu pričom návesy, jednonápravové prívesy a poloprívesy nemusia byť podopreté",
                    "d) zabezpečiť vozidlo proti nežiadúcemu pohybu. Návesy, jednonápravové prívesy a poloprívesy musia byť tiež podopreté"
                ],
                "correct": 3
            },
            {
                "q": "125. Na zabránenie presunu obalov",
                "options": [
                    "a) môžu byť na vyplnenie akýchkoľvek prázdnych alebo ich zablokovaním a ukotvením miest použité obkladacie materiály proti nárazom,",
                    "b) možno použiť otočné zámky kontajnera",
                    "c) nemožno použiť obkladacie materiály proti nárazom",
                    "d) nemožno použiť zablokovanie a ukotvenie"
                ],
                "correct": 0
            },
            {
                "q": "126. Keď sú na upevnenie nákladu použité viazacie popruhy, čo je potrebné zabezpečiť?",
                "options": [
                    "a) tieto musia byť upevnené metódou vrchného viazania",
                    "b) tieto nesmú byť zatiahnuté tak, aby spôsobili poškodenie alebo deformáciu obalov",
                    "c) tieto musia byť zatiahnuté na silu predpísanú na štítku popruhu",
                    "d) tieto musia byť zatiahnuté na silu 500 daN"
                ],
                "correct": 1
            },
            {
                "q": "127. Náklad sa musí upevniť v smere dopredu proti šmyku a preklopeniu vplyvom zotrvačných síl vyvolaných",
                "options": [
                    "a) 60 percentami hmotnosti nákladu",
                    "b) 50 percentami hmotnosti nákladu",
                    "c) 80 percentami hmotnosti nákladu",
                    "d) 50 percentami hmotnosti nákladu proti šmyku a 70 percentami hmotnosti nákladu proti preklopeniu."
                ],
                "correct": 2
            },
            {
                "q": "128. Náklad sa musí upevniť v smere dozadu proti šmyku a preklopeniu vplyvom zotrvačných síl vyvolaných",
                "options": [
                    "a) 60 percentami hmotnosti nákladu",
                    "b) 50 percentami hmotnosti nákladu",
                    "c) 80 percentami hmotnosti nákladu",
                    "d) 50 percentami hmotnosti nákladu proti šmyku a 70 percentami hmotnosti nákladu proti preklopeniu"
                ],
                "correct": 1
            },
            {
                "q": "129. Náklad sa musí upevniť v smere do strán proti šmyku a preklopeniu vplyvom zotrvačných síl vyvolaných",
                "options": [
                    "a) 60 percentami hmotnosti nákladu",
                    "b) 50 percentami hmotnosti nákladu",
                    "c) 80 percentami hmotnosti nákladu",
                    "d) 50 percentami hmotnosti nákladu proti šmyku a 0 percentami hmotnosti nákladu proti preklopeniu"
                ],
                "correct": 3
            },
            {
                "q": "130. Užitočné zaťaženie vozidla sa vypočíta ako",
                "options": [
                    "a) celková hmotnosť vozidla mínus pohotovostná hmotnosť naloženého prívesu",
                    "b) celková hmotnosť vozidla mínus pohotovostná hmotnosť vozidla",
                    "c) celková hmotnosť vozidla mínus hmotnosť nadstavby",
                    "d) celková hmotnosť vozidla mínus hmotnosť prázdneho návesu"
                ],
                "correct": 1
            },
            {
                "q": "131. Užitočné zaťaženie návesu sa vypočíta v Slovenskej republike ako",
                "options": [
                    "a) 40 ton mínus pohotovostná hmotnosť návesu",
                    "b) 42 ton mínus pohotovostná hmotnosť ťahača",
                    "c) 40 ton mínus pohotovostná hmotnosť návesu a pohotovostná hmotnosť ťahača",
                    "d) 38 ton mínus pohotovostná hmotnosť návesu mínus pohotovostná hmotnosť ťahača"
                ],
                "correct": 2
            },
            {
                "q": "132. Celkový objem ložného priestoru sa približne vypočíta ako",
                "options": [
                    "a) vnútorná dĺžka delene vnútorná šírka krát vnútorná výška ložného priestoru",
                    "b) vnútorná dĺžka mínus vnútorná šírka krát vnútorná výška ložného priestoru",
                    "c) vnútorná dĺžka plus vnútorná šírka plus vnútorná výška ložného priestoru",
                    "d) vnútorná dĺžka krát vnútorná šírka krát vnútorná výška ložného priestoru"
                ],
                "correct": 3
            },
            {
                "q": "133. Ak chceme znížiť riziko šmyku nákladu mali by sme?",
                "options": [
                    "a) eliminovať trenie medzi nákladom a ložnou plochou pomocou podložky",
                    "b) znížiť trenie medzi nákladom a ložnou plochou",
                    "c) zvýšiť trenie medzi nákladom a ložnou plochou pomocou protišmykovej podložky",
                    "d) naložiť náklad na zľadovatelú kovovú ložnú plochu"
                ],
                "correct": 2
            },
            {
                "q": "134. Označenie LC na identifikačnom štítku viazacieho popruhu podľa EN 12195-2 znamená?",
                "options": [
                    "a) dĺžku popruhu",
                    "b) viazaciu kapacitu v priamom ťahu",
                    "c) normálnu napínaciu silu",
                    "d) max. predĺženie popruhu pri dovolenom zaťažení"
                ],
                "correct": 1
            },
            {
                "q": "135. Označenie STF na identifikačnom štítku viazacieho popruhu podľa EN 12195-2 znamená?",
                "options": [
                    "a) dĺžku popruhu",
                    "b) viazaciu kapacitu v priamom ťahu",
                    "c) normálnu napínaciu silu",
                    "d) max. predĺženie popruhu pri dovolenom zaťažení"
                ],
                "correct": 2
            },
            {
                "q": "136. Aké maximálne predĺženie môže mať popruh certifikovaný podľa EN 12195-2?",
                "options": [
                    "a) 4 %",
                    "b) 5 %",
                    "c) 7 %",
                    "d) 10 %"
                ],
                "correct": 2
            },
            {
                "q": "137. Ktorú metódu upevnenia je najvhodnejšie použiť pre vrecia paletizované a zabalené na palete fóliou v skriňovom vozidle alebo kontajneri ak náklad nevypĺňa celú ložnú plochu. Vyberte iba jednu alternatívu?",
                "options": [
                    "a) blokovanie spodkov paliet a vrchné viazanie <br><img src='137a.jpg' style='max-width: 40%; height: auto; margin-top: 8px; display: block;'>",
                    "b) slučkové viazanie <br><img src='137b.jpg' style='max-width: 40%; height: auto; margin-top: 8px; display: block;'>",
                    "c) zviazanie paliet dohromady <br><img src='137c.jpg' style='max-width: 40%; height: auto; margin-top: 8px; display: block;'>",
                    "d) vyplnenie medzier vzduchovými vankúšmi alebo prázdnymi paletami <br><img src='137d.jpg' style='max-width: 40%; height: auto; margin-top: 8px; display: block;'>"
                ],
                "correct": 3,
            },
            {
                "q": "138. Ako je potrebné rozložiť náklad na bežnom návese?",
                "options": [
                    "a) aby jeho ťažisko bolo približne 1 m od stredu návesu v pozdĺžnom smere a v strede návesu v priečnom smere a pokiaľ je to možné čo najnižšie",
                    "b) aby jeho ťažisko bolo približne v strede návesu v pozdĺžnom aj priečnom smere a pokiaľ je to možné čo najnižšie",
                    "c) aby jeho ťažisko bolo približne v strede návesu v pozdĺžnom smere pričom v priečnom smere na tom nezáleží.",
                    "d) aby jeho ťažisko bolo približne 1 m dopredu od stredu návesu v pozdĺžnom smere a v strede v priečnom smere pričom pokiaľ je to možné čo najnižšie"
                ],
                "correct": 1
            },
            {
                "q": "139. Čo môže vodič počas nakládky vykonávať?",
                "options": [
                    "a) musí zostať v kabíne vozidla a čerpať bezpečnostnú prestávku",
                    "b) nie je pripustený k vozidlu",
                    "c) môže dávať pokyny nakladaciemu personálu k rozloženiu nákladu",
                    "d) je povinný nakladať tovar"
                ],
                "correct": 2
            },
            {
                "q": "140. Na upevnenie ťažkých nákladov napríklad pracovných strojov je vhodné využiť akú metódu upevnenia a aké upevňovacie prostriedky?",
                "options": [
                    "a) vrchné viazanie a viazacie popruhy",
                    "b) priame viazanie a viazacie reťaze",
                    "c) blokovanie",
                    "d) stačí trecie viazanie a protišmykové podložky"
                ],
                "correct": 1
            },
            {
                "q": "141. Je povinný dopravca pri tvorbe harmonogramu prepravy rešpektovať požiadavky sociálnych predpisov na jazdu, prestávky a odpočinky vodiča?",
                "options": [
                    "a) áno, pri tvorbe harmonogramu prepravy je dopravca povinný rešpektovať požiadavky sociálnych predpisov (napr. Nariadenie (ES) č. 561/2006 a Dohody AETR)",
                    "b) áno, pri tvorbe harmonogramu prepravy je dopravca povinný rešpektovať požiadavky sociálnych predpisov, ale iba pri vnútroštátnej doprave",
                    "c) áno, pri tvorbe harmonogramu prepravy je dopravca povinný rešpektovať požiadavky sociálnych predpisov, ale iba pri medzinárodnej doprave",
                    "d) nie, pri tvorbe harmonogramu prepravy nie je dopravca povinný rešpektovať požiadavky sociálnych predpisov; za dodržiavanie požiadaviek sociálnych predpisov je zodpovedný výlučne vodič"
                ],
                "correct": 0
            },
            {
                "q": "142. Aký je maximálny nepretržitý čas jazdy vodiča vo vnútroštátnej cestnej doprave s vozidlom s celkovou hmotnosťou vyššou ako 3,5 tony?",
                "options": [
                    "a) 3 hodiny",
                    "b) 4 hodiny",
                    "c) 4,5 hodiny",
                    "d) 5 hodín"
                ],
                "correct": 2
            },
            {
                "q": "143. Aká je minimálna doba prestávky v práci vo vnútroštátnej cestnej doprave, ktorú musí vodič čerpať po nepretržitom čase jazdy 4,5 hodiny, ak nezačína čerpať denný čas odpočinku alebo týždenný čas odpočinku?",
                "options": [
                    "a) najmenej 10 minút",
                    "b) najmenej 15 minút",
                    "c) najmenej 30 minút",
                    "d) najmenej 45 minút"
                ],
                "correct": 3
            },
            {
                "q": "144. Po akom dlhom nepretržitom čase jazdy vodiča s motorovým vozidlom s celkovou hmotnosťou vyššou ako 3,5 tony musí vodič jazdu prerušiť a čerpať prestávku v práci?",
                "options": [
                    "a) nepretržitý čas jazdy vodiča nesmie trvať dlhšie ako 4 hodiny",
                    "b) nepretržitý čas jazdy vodiča nesmie trvať dlhšie ako 4,5 hodiny",
                    "c) nepretržitý čas jazdy vodiča nesmie trvať dlhšie ako 3 hodiny",
                    "d) nepretržitý čas jazdy vodiča nesmie trvať dlhšie ako 5 hodín"
                ],
                "correct": 1
            },
            {
                "q": "145. Ktorá z nasledujúcich možností čerpania prestávok v práci vodiča nespĺňa požiadavky právnych predpisov pre vnútroštátnu cestnú nákladnú dopravu realizovanú s vozidlom s celkovou hmotnosťou vyššou ako 3,5 tony?",
                "options": [
                    "a) 45 minút prestávky čerpanej po 4,5 hodinách času jazdy",
                    "b) dve prestávky po 30 minút, čerpané pred prekročením 4,5 hodinového času jazdy",
                    "c) tri prestávky po 15 minút, čerpané pred prekročením 4,5 hodinového času jazdy",
                    "d) prestávka 20 minút, po ktorej nasleduje druhá prestávka v trvaní 30 minút, čerpaná pred prekročením 4,5 hodinového času jazdy"
                ],
                "correct": 2
            },
            {
                "q": "146. Kde môže vodič čerpať denný čas odpočinku?",
                "options": [
                    "a) len v ubytovacom zariadení, vo vozidle nemôže čerpať denný odpočinok ani v prípade, ak je vozidlo vybavené ležadlom",
                    "b) vo vozidle, ak je vybavené vhodným ležadlom, môže čerpať vodič odpočinok aj za jazdy",
                    "c) v zaparkovanom vozidle vtedy ak je vozidlo vybavené ležadlom",
                    "d) v zaparkovanom vozidle aj vtedy, ak nie je vozidlo vybavené ležadlom za podmienky, že vodič bude čerpať skrátený čas denného odpočinku"
                ],
                "correct": 2
            },
            {
                "q": "147. Aká je minimálna doba prestávky v práci v medzinárodnej cestnej doprave, ktorú musí vodič čerpať po nepretržitom čase jazdy 4,5 hodiny, ak nezačína čerpať denný čas odpočinku alebo týždenný čas odpočinku?",
                "options": [
                    "a) najmenej 10 minút",
                    "b) najmenej 15 minút",
                    "c) najmenej 30 minút",
                    "d) najmenej 45 minút"
                ],
                "correct": 3
            },
            {
                "q": "148. Za aké obdobie je vodič nákladného vozidla povinný predložiť záznamy o svojej činnosti v prípade kontroly práce vodiča formou cestnej kontroly Inšpektorátom práce SR?",
                "options": [
                    "a) za posledný deň prechádzajúceho týždňa a všetky dni týždňa, v ktorom vykonáva vodič prepravu",
                    "b) za posledný deň prechádzajúceho týždňa v ktorom vodič viedol vozidlo a všetky dni týždňa, v ktorom vykonáva vodič prepravu",
                    "c) za predchádzajúcich 15 dní",
                    "d) za bežný deň a predchádzajúcich 28 kalendárnych dní"
                ],
                "correct": 3
            },
            {
                "q": "149. Ako dlho musí slovenský dopravca vykonávajúci medzinárodnú cestnú dopravu uchovávať tachografové záznamy?",
                "options": [
                    "a) najmenej po dobu 24 mesiacov",
                    "b) najmenej po dobu 12 mesiacov",
                    "c) najmenej po dobu 10 mesiacov",
                    "d) najmenej po dobu 6 mesiacov"
                ],
                "correct": 0
            },
            {
                "q": "150. Je povinný digitálny tachograf pre každé nákladné vozidlo s celkovou hmotnosťou nad 3,5 t?",
                "options": [
                    "a) áno, je povinný pre všetky nákladné vozidlá.",
                    "b) nie, je povinný iba pre nákladné vozidlá, ktoré vykonávajú prepravy na dlhšiu trasu ako 150 km",
                    "c) nie, je povinný iba pre nákladné vozidlá, ktoré vykonávajú medzinárodnú cestnú nákladnú dopravu",
                    "d) nie, je povinný iba pre nákladné vozidlá, ktoré boli prvý krát registrované po 1. 5. 2006"
                ],
                "correct": 3
            },
            {
                "q": "151. Na koľko rokov sa vydáva karta vodiča do digitálneho tachografu (akú má karta vodiča do digitálneho tachografu platnosť)?",
                "options": [
                    "a) 3 roky",
                    "b) 4 roky",
                    "c) 5 rokov",
                    "d) 6 rokov"
                ],
                "correct": 2
            },
            {
                "q": "152. Ktorý údaj musí vodič potvrdiť v digitálnom tachografe bezprostredne po prekročení štátnej hranice?",
                "options": [
                    "a) krajinu výjazdu",
                    "b) čas prekročenia štátnej hranice",
                    "c) číslo karty vodiča",
                    "d) stav počítadla vzdialenosti (stav ODO metra)"
                ],
                "correct": 0
            },
            {
                "q": "153. Ako má postupovať vodič, ak dôjde k poruche digitálneho tachografu?",
                "options": [
                    "a) vodič nemôže pokračovať v preprave, musí okamžite odstaviť vozidlo a privolať servis na opravu tachografu",
                    "b) vodič môže pokračovať s vozidlom iba do najbližšieho servisu, kde musí byť tachograf opravený",
                    "c) vodič, ak zistí poruchu tachografu, je povinný vykonávať ďalej záznam ručne na zadnej strane pásky do digitálneho tachografu až do dojazdu do sídla dopravcu, maximálne však 7 dní.",
                    "d) v prípade poruchy vodič môže pokračovať v jazde do sídla firmy bez zaznamenávania svojej činnosti v prípade, ak je schopný kontrolnému orgánu preukázať, že k poruche tachografu došlo počas prepravy"
                ],
                "correct": 2
            },
            {
                "q": "154. Akým spôsobom je možné rozdeliť pravidelný denný čas odpočinku pri medzinárodnej cestnej doprave vykonávanej v členských krajinách EÚ?",
                "options": [
                    "a) denný odpočinok je možné rozdeliť na dve alebo tri časti, z ktorých jedná musí byť minimálne 8 nepretržitých hodín",
                    "b) denný odpočinok je možné rozdeliť na dve alebo tri časti, z ktorých jedná musí byť minimálne 8 nepretržitých hodín, pričom odpočinok sa predlžuje na 12 hodín",
                    "c) denný odpočinok je možné rozdeliť iba na dve časti za požiadavky, že prvá časť odpočinku musí byť minimálne 3 hodiny, po ktorej nasleduje druhá časť odpočinku v trvaní minimálne 8 hodín",
                    "d) denný odpočinok je možné rozdeliť iba na dve časti za požiadavky, že prvá časť odpočinku musí byť minimálne 3 hodiny, po ktorej nasleduje druhá časť odpočinku v trvaní minimálne 9 hodín"
                ],
                "correct": 3
            },
            {
                "q": "155. Ako je definovaný pracovný týždeň pre stanovenie režimov práce v medzinárodnej cestnej doprave?",
                "options": [
                    "a) akékoľvek obdobie siedmich za sebou nasledujúcich dní, počas ktorého vodič pracuje",
                    "b) týždeň, začínajúci sa o polnoci zo soboty na nedeľu a trvajúci do polnoci zo soboty na nedeľu v nasledujúcom týždni",
                    "c) akékoľvek obdobie siedmich dní, začínajúce sa o polnoci a trvajúce do polnoci toho istého dňa v nasledujúcom týždni",
                    "d) týždeň, začínajúci sa o polnoci z nedele na pondelok a trvajúci do nasledujúcej polnoci z nedele na pondelok"
                ],
                "correct": 3
            },
            {
                "q": "156. Pán Novák, ktorý skončil denný čas odpočinku o 7.00 hod., pristavil vozidlo s nosnosťou 10 ton na nakládku (čas jazdy od 7.00 do 7:30). Nakládka sa realizovala od 7:30 do 8.30 hod. Bezprostredne po nakládke vodič začal jazdu do cieľa prepravy, vzdialeného 650 km. Kedy najneskôr musí prerušiť čas jazdy, ak sa preprava vykonáva iba v rámci členských krajín EÚ?",
                "options": [
                    "a) o 11.30 hod.",
                    "b) o 12.30 hod.",
                    "c) o 13.00 hod.",
                    "d) o 13.30 hod."
                ],
                "correct": 1
            },
            {
                "q": "157. Sociálne právo upravujúce prácu vodiča umožňuje vodičovi čerpať okrem pravidelného aj skrátený denný čas odpočinku. Aký je najkratší možný odpočinok, ktorý je možné započítať za skrátený denný čas odpočinku?",
                "options": [
                    "a) osem hodín",
                    "b) deväť hodín",
                    "c) 10 hodín",
                    "d) 11 hodín"
                ],
                "correct": 1
            },
            {
                "q": "158. Ktorá z nasledujúcich možností vyhovuje požiadavkám na denný odpočinok pri viacčlennej osádke vozidla pri medzinárodnej cestnej doprave?",
                "options": [
                    "a) denný odpočinok 8 hodín čerpaný v priebehu 30-tich po sebe nasledujúcich hodín",
                    "b) denný odpočinok 9 hodín čerpaný v priebehu 30-tich po sebe nasledujúcich hodín",
                    "c) denný odpočinok 8 hodín čerpaný v priebehu 24-tich po sebe nasledujúcich hodín",
                    "d) denný odpočinok 9 hodín čerpaný v priebehu 30-tich po sebe nasledujúcich hodín"
                ],
                "correct": 1
            },
            {
                "q": "159. Ktorá z nasledujúcich možností čerpania prestávok v práci vodiča nespĺňa požiadavky právnych predpisov pre medzinárodnú cestnú nákladnú dopravu realizovanú s vozidlom s celkovou hmotnosťou vyššou ako 3,5 tony?",
                "options": [
                    "a) 45 minút prestávky čerpanej po 4,5 hodinách času jazdy",
                    "b) dve prestávky po 30 minút, čerpané pred prekročením 4,5 hodinového času jazdy",
                    "c) tri prestávky po 15 minút, čerpané pred prekročením 4,5 hodinového času jazdy",
                    "d) prestávka 20 minút, po ktorej nasleduje druhá prestávka v trvaní 30 minút, čerpaná pred prekročením 4,5 hodinového času jazdy"
                ],
                "correct": 2
            },
            {
                "q": "160. Koľko musí trvať minimálne druhá časť rozdeleného pravidelného denného času odpočinku pri medzinárodnej cestnej doprave?",
                "options": [
                    "a) 11 nepretržitých hodín",
                    "b) 9 nepretržitých hodín",
                    "c) 8 nepretržitých hodín",
                    "d) 6 nepretržitých hodín"
                ],
                "correct": 1
            },
            {
                "q": "161. Koľko musí trvať minimálne prvá časť rozdeleného pravidelného denného času odpočinku pri medzinárodnej cestnej doprave?",
                "options": [
                    "a) 1 nepretržitá hodina",
                    "b) 3 nepretržité hodiny",
                    "c) 6 nepretržitých hodín",
                    "d) 9 nepretržitých hodín"
                ],
                "correct": 1
            },
            {
                "q": "162. Najneskôr po koľkých dňoch od posledného stiahnutia karty je potrebné znova stiahnuť údaje z karty vodiča do digitálneho tachografu?",
                "options": [
                    "a) najneskôr po 20 dňoch",
                    "b) najneskôr po 25 dňoch",
                    "c) najneskôr po 28 dňoch",
                    "d) najneskôr po 3 mesiacoch"
                ],
                "correct": 2
            },
            {
                "q": "163. Akú farbu má karta vodiča do digitálneho tachografu?",
                "options": [
                    "a) zelenú",
                    "b) červenú",
                    "c) modrú",
                    "d) bielu"
                ],
                "correct": 3
            },
            {
                "q": "164. Ako má postupovať vodič, ak z dôvodu zdržania spôsobeného dopravnou nehodou sa odklonil od požiadaviek sociálnych predpisov (npr. prekročil nepretržitý čas jazdy)?",
                "options": [
                    "a) do siedmich dní musí upozorniť inšpektorát práce miestne príslušný sídlu zamestnávateľa",
                    "b) uvedie dôvod na osobitnom čistom papieri, ktorý odovzdá zamestnávateľovi pri sťahovaní karty vodiča",
                    "c) vodič vypíše tlačivo: Potvrdenie činnosti vodiča, v ktorom uvedie dôvody odklonu od požiadaviek sociálneho práva",
                    "d) na zadnú stranu pásky do digitálneho tachografu, vodič uvedie meno a priezvisko, číslo karty vodiča, čas, dôvod odchýlky a podpis"
                ],
                "correct": 3
            },
            {
                "q": "165. Koľko krát za týždeň môže vodič pri medzinárodnej cestnej nákladnej doprave vykonávanej v rámci krajín EÚ predĺžiť denný čas jazdy na 10 hodín?",
                "options": [
                    "a) raz do týždňa",
                    "b) dvakrát do týždňa",
                    "c) trikrát do týždňa",
                    "d) nikdy"
                ],
                "correct": 1
            },
            {
                "q": "166. Koľko hodín musí vodič cestnej nákladnej dopravy čerpať odpočinok, ak bude čerpať pravidelný denný odpočinok?",
                "options": [
                    "a) min. 8 za sebou nasledujúcich hodín",
                    "b) min. 9 za sebou nasledujúcich hodín",
                    "c) min. 11 za sebou nasledujúcich hodín",
                    "d) min. 24 za sebou nasledujúcich hodín"
                ],
                "correct": 2
            },
            {
                "q": "167. Vodič vykonávajúci prepravu v medzinárodnej cestnej doprave vozidlom s celkovou hmotnosťou 15 ton v aktuálnom týždni jazdil s vozidlom 48 hodín. Aký maximálny čas jazdy môže vodič realizovať nasledujúci týždeň?",
                "options": [
                    "a) 40",
                    "b) 42",
                    "c) 44",
                    "d) 56"
                ],
                "correct": 1
            },
            {
                "q": "168. V ktorých prípadoch musí zamestnávateľ vodičovi poskytnúť kópie dát stiahnutých z digitálneho tachografu?",
                "options": [
                    "a) zamestnávateľ je povinný poskytnúť kópie záznamov vodičovi, ktorý o to požiada a potrebuje ich napr. pri súdnom konaní",
                    "b) zamestnávateľ je povinný poskytnúť kópie záznamov každému vodičovi bez požiadania",
                    "c) zamestnávateľ nie je povinný vodičom poskytnúť záznamy za žiadnych okolností",
                    "d) zo stiahnutých dát z digitálneho tachografu nie je dovolené vyrábať kópie bez povolenia Inšpektorátu práce príslušnému k sídlu dopravcu"
                ],
                "correct": 0
            },
            {
                "q": "169. Ktorá z nasledovných foriem odpočinku čerpaná v priebehu 24 hodín je v súlade s požiadavkami na pravidelný denný odpočinok pri medzinárodnej cestnej doprave vykonávanej v členských krajinách EÚ?",
                "options": [
                    "a) 3 hodiny+ 8 hodín",
                    "b) 3,5 hodiny+ 9 hodín",
                    "c) 8 hodín + 3,5 hodiny+ 0,5 hodiny",
                    "d) 6 hodín + 6 hodín"
                ],
                "correct": 1
            },
            {
                "q": "170. Na aký najkratší čas je možné skrátiť týždenný odpočinok v medzinárodnej cestnej nákladnej doprave vykonávanej v rámci členských krajín EÚ?",
                "options": [
                    "a) 24 hodín",
                    "b) 29 hodín",
                    "c) 36 hodín",
                    "d) 42 hodín"
                ],
                "correct": 0
            },
            {
                "q": "171. Aký je podľa sociálnych predpisov maximálny čas jazdy jedného vodiča v medzinárodnej cestnej doprave v priebehu jedného týždňa?",
                "options": [
                    "a) 30 hodín",
                    "b) 56 hodín",
                    "c) 60 hodín",
                    "d) 90 hodín"
                ],
                "correct": 1
            },
            {
                "q": "172. Aký je maximálny čas jazdy vodiča nákladného vozidla s celkovou hmotnosťou nad 3,5 tony v medzinárodnej cestnej doprave v priebehu dvoch po sebe nasledujúcich týždňov?",
                "options": [
                    "a) 90 hodín",
                    "b) 92 hodín",
                    "c) 96 hodín",
                    "d) 112 hodín"
                ],
                "correct": 0
            },
            {
                "q": "173. V ktorom prípade môže vodič v dvoch po sebe nesledujúcich týždňoch čerpať skrátený týždenný čas odpočinku?",
                "options": [
                    "a) v prípade, ak je odpočinok čerpaný v kabíne vozidla a vozidlo je vybavené lôžkom pre čerpanie odpočinku.",
                    "b) v prípade, ak je odpočinok čerpaný v mieste trvalého bydliska vodiča alebo operačného sídla dopravcu.",
                    "c) v prípade, ak ide o vozidlo do 16 ton celkovej hmotnosti a je vybavené vhodným ležadlom pre čerpanie týždenného odpočinku vo vozidle.",
                    "d) v prípade medzinárodnej cestnej nákladnej dopravy za predpokladu, že v priebehu obidvoch týždňov sa vodič s vozidlom nebude nachádzať na území štátu, v ktorom ma vodič trvalý pobyt, resp. dopravca má svoje sídlo."
                ],
                "correct": 3
            },
            {
                "q": "174. Kedy najneskôr od skončenia predošlého denného času odpočinku musí vodič začať čerpať nový odpočinok, ak plánuje čerpať pravidelný denný čas odpočinku v trvaní 11 hodín?",
                "options": [
                    "a) po 9 hodinách od skončenia predchádzajúceho denného času odpočinku",
                    "b) po 10 hodinách od skončenia predchádzajúceho denného času odpočinku",
                    "c) po 13 hodinách od skončenia predchádzajúceho denného času odpočinku",
                    "d) po 20 hodinách od skončenia predchádzajúceho denného času odpočinku"
                ],
                "correct": 2
            },
            {
                "q": "175. Ktorý odpočinok nie je možné prerušiť pri preprave vozidla na trajekte?",
                "options": [
                    "a) pravidelný týždenný odpočinok",
                    "b) skrátený týždenný odpočinok",
                    "c) skrátený denný odpočinok",
                    "d) pravidelný denný odpočinok"
                ],
                "correct": 2
            },
            {
                "q": "176. V prípade straty tachografovej karty vodiča musí vodič vykonávať ručný záznam o priebehu svojej práce. V akom dokumente sa vykonáva ručný záznam?",
                "options": [
                    "a) na zadnej strane pásky určenej na tlač výtlačkov z digitálneho tachografu",
                    "b) na samostatný list papiera, ktorý je priložený k dokladom o vedení vozidla",
                    "c) formou manuálneho dodatku v digitálnom tachografe po každej zmene režimu práce",
                    "d) na dokumente: ,,Potvrdenie činnosti vodiča\""
                ],
                "correct": 0
            },
            {
                "q": "177. Koľko dní môže vodič pokračovať v preprave s pokazeným digitálnym tachografom?",
                "options": [
                    "a) maximálne 7 dní do návratu do sídla dopravcu",
                    "b) maximálne 10 dní do návratu do sídla dopravcu",
                    "c) maximálne 14 dní do návratu do sídla dopravcu",
                    "d) maximálne 28 dní do návratu do sídla dopravcu"
                ],
                "correct": 0
            },
            {
                "q": "178. Ktorý režim činnosti sa neoznačuje obrázkom postele (lôžka) pri zaznamenávaní práce vodiča v medzinárodnej cestnej nákladnej doprave?",
                "options": [
                    "a) odpočinok",
                    "b) dovolenka",
                    "c) práceneschopnosť",
                    "d) pohotovosť"
                ],
                "correct": 3
            },
            {
                "q": "179. Aké údaje obsahuje „Výtlačok aktivity\" z digitálneho tachografu?",
                "options": [
                    "a) graficky znázornené údaje o aktivitách vodiča za 7 predchádzajúcich dní od zvoleného dátumu",
                    "b) graficky znázornené údaje o aktivitách vozidla za 7 predchádzajúcich dní od zvoleného dátumu",
                    "c) graficky znázornené údaje o otáčkach vozidla za 7 predchádzajúcich dní od zvoleného dátumu",
                    "d) graficky znázornené údaje o rýchlosti vozidla za 7 predchádzajúcich dní od zvoleného dátumu"
                ],
                "correct": 0
            },
            {
                "q": "180. Za aké obdobie je garantované uchovanie údajov v pamäti digitálneho tachografu?",
                "options": [
                    "a) minimálne 28 dní",
                    "b) minimálne 90 dní",
                    "c) minimálne 365 dní",
                    "d) minimálne 5 rokov"
                ],
                "correct": 2
            },
            {
                "q": "181. Čo znamená, ak sa pri preskúmaní viacerých záznamov rýchlosti na výtlačku priebehu rýchlosti z digitálneho tachografu objaví mnoho strmých stúpaní a klesaní tesne vedľa seba?",
                "options": [
                    "a) nehospodárne vedenie vozidla",
                    "b) hospodárne vedenie vozidla",
                    "c) normálne akceptovateľné vedenie vozidla",
                    "d) normálne vedenie vozidla, ktoré je treba ešte zlepšiť"
                ],
                "correct": 0
            },
            {
                "q": "182. V ktorom prípade vodič dvojčlennej osádky má povolené absolvovať denný odpočinok v kabíne, upravenej na spanie?",
                "options": [
                    "a) ak je vozidlo zaparkované",
                    "b) ak sa vodič nachádza mimo svojho stanovišťa",
                    "c) ak osádku vozidla tvoria dve osoby",
                    "d) ak sa v blízkom okolí nenachádza žiadna vhodnejšia alternatíva"
                ],
                "correct": 0
            },
            {
                "q": "183. Aké sú intervaly kontroly tachografov cestných motorových vozidiel?",
                "options": [
                    "a) kontrola tachografov musí byť vykonávaná najmenej raz rok",
                    "b) kontrola tachografov musí byť vykonávaná najmenej raz za dva roky",
                    "c) kontrola tachografov musí byť vykonávaná najmenej raz za 4 roky",
                    "d) kontrola tachografov musí byť vykonávaná najmenej dva razy za rok"
                ],
                "correct": 1
            },
            {
                "q": "184. Ako je definovaný denný čas jazdy v medzinárodnej cestnej nákladnej doprave?",
                "options": [
                    "a) je celkový súhrn času jazdy medzi začiatkom a koncom doby denného odpočinku",
                    "b) je celkový súhrn času jazdy medzi koncom jednej doby denného odpočinku a začiatkom nasledujúcej doby denného odpočinku",
                    "c) je súhrnný čas jazdy konkrétny kalendárny deň",
                    "d) je súhrnný čas jazdy od 00:00 do 24:00 pri analógových tachografoch a od 01:00 do 01:00 nasledujúceho dňa pri digitálnych tachografoch (UTC posunutie)"
                ],
                "correct": 1
            },
            {
                "q": "185. Kedy najneskôr musí vodič v medzinárodnej cestnej nákladnej doprave začať čerpať nový týždenný odpočinok?",
                "options": [
                    "a) po 90 hodinách od skončenia predchádzajúceho týždenného odpočinku",
                    "b) po 144 hodinách od skončenia predchádzajúceho týždenného odpočinku",
                    "c) po 160 hodinách od skončenia predchádzajúceho týždenného odpočinku",
                    "d) po 184 hodinách od skončenia predchádzajúceho týždenného odpočinku"
                ],
                "correct": 1
            },
            {
                "q": "186. Ako sa zaznamenáva na tachografe čas strávený druhým vodičom sedením na mieste spolujazdca počas vedenia vozidla prvým vodičom?",
                "options": [
                    "a) ako jazda",
                    "b) ako pohotovosť",
                    "c) ako odpočinok",
                    "d) ako iná práca"
                ],
                "correct": 1
            },
            {
                "q": "187. Ktorý výtlačok z digitálneho tachografu nie je možné vytlačiť z prvej generácie digitálnych tachografov?",
                "options": [
                    "a) denný výtlačok z karty vodiča",
                    "b) výtlačok- priebeh rýchlosti",
                    "c) výtlačok prekročenia rýchlosti",
                    "d) výtlačok technických údajov"
                ],
                "correct": 1
            },
            {
                "q": "188. Kto podpisuje Potvrdenie činnosti vodiča vydané vodičovi v prípade, ak bol vodič práceneschopný?",
                "options": [
                    "a) obvodný lekár a vodič",
                    "b) dispečer dopravcu a vodič",
                    "c) obvodný lekár a dispečer dopravcu",
                    "d) iba dispečer dopravcu"
                ],
                "correct": 1
            },
            {
                "q": "189. Akú farbu má karta kontrolóra, prostredníctvom ktorej môže kontrolór stiahnuť údaje z digitálneho tachografu?",
                "options": [
                    "a) bielu",
                    "b) červenú",
                    "c) modrú",
                    "d) žltú"
                ],
                "correct": 2
            },
            {
                "q": "190. Vodič v prvom týždni pri medzinárodnej cestnej doprave s návesovou súpravou jazdil s vozidlom 30 hodín. Na koľko hodín je obmedzení čaj jazdy nasledujúci týždeň?",
                "options": [
                    "a) maximálne 45 hodín",
                    "b) maximálne 56 hodín",
                    "c) maximálne 60 hodín",
                    "d) maximálne 90 hodín"
                ],
                "correct": 1
            },
            {
                "q": "191. Vodič začal pracovnú zmenu v pondelok o 6:00 po pravidelnom týždennom odpočinku. Kedy najneskôr musí ukončiť prácu a začať čerpať skrátený denný odpočinok?",
                "options": [
                    "a) v pondelok o 18:00",
                    "b) v pondelok o 21:00",
                    "c) v pondelok o 22:00",
                    "d) v utorok o 5:00"
                ],
                "correct": 1
            },
            {
                "q": "192. Ktorý z nasledujúcich súborov je stiahnutý z pamäte digitálneho tachografu?",
                "options": [
                    "a) C_20090224_1116_RA-004AX-YV2AS02A77B462158.DDD",
                    "b) M_20090224_1116_RA-004AX-YV2AS02A77B462158.DDD",
                    "c) M_20090224_1116_J_Strbian _A00000000045X0 .DDD",
                    "d) C_20090224_1116_J_Strbian_A00000000045X0.DDD"
                ],
                "correct": 1
            },
            {
                "q": "193. Ktorý z nasledujúcich súborov je stiahnutý z karty vodiča?",
                "options": [
                    "a) C_20090224_1116_RA-004AX-YV2AS02A77B462158.DDD",
                    "b) M_20090224_1116_RA-004AX-YV2AS02A77B462158.DDD",
                    "c) M_20090224_1116_J_Strbian_A00000000045X.D0DD",
                    "d) C_20090224_1116_J_Strbian_A00000000045X0.DDD"
                ],
                "correct": 3
            },
            {
                "q": "194. Ak je miestny čas na Slovensku na digitálnom tachografe dňa 20. januára (zimný čas) zobrazený 10:00, aký UTC čas bude uvedený na výtlačkoch z tohto digitálneho tachografu?",
                "options": [
                    "a) 10:00",
                    "b) 12:00",
                    "c) 9:00",
                    "d) 8:00"
                ],
                "correct": 2
            },
            {
                "q": "195. Ak je miestny čas na Slovensku na digitálnom tachografe dňa 20. júla (letný čas) zobrazený 10:00, aký UTC čas bude uvedený na výtlačkoch z tohto digitálneho tachografu?",
                "options": [
                    "a) 10:00",
                    "b) 12:00",
                    "c) 9:00",
                    "d) 8:00"
                ],
                "correct": 3
            },
            {
                "q": "196. Čo znamená čierna bodka na displeji digitálneho tachografu zobrazená vedľa času 16:00?",
                "image": "196.jpg",
                "options": [
                    "a) 16:00 je UTC čas",
                    "b) 16:00 je miestny čas",
                    "c) 16:00 je čas karty vloženej do prvého otvoru tachografu",
                    "d) 16:00 je čas vloženie manuálneho dodatku do digitálneho tachografu"
                ],
                "correct": 1
            },
            {
                "q": "197. Čo znamená nasledujúce zobrazenie na digitálnom tachografe?",
                "image": "197.jpg",
                "options": [
                    "a) vodič môže jazdiť ešte 28 minút, následne musí čerpať odpočinok 3 h a 50 minút; v týždni už mal 3 krát 9 hodinový denný odpočinok, nasledujúci denný odpočinok musí byť minimálne 11 hodín",
                    "b) vodič môže jazdiť ešte 3 hodiny 50 minút, následne musí čerpať prestávku 28 minút; v týždni už mal 3 krát 9 hodinový denný odpočinok, nasledujúci denný odpočinok musí byť minimálne 11 hodín",
                    "c) vodič môže jazdiť ešte 28 minút, následne musí čerpať odpočinok 11 hodín; od posledného odpočinku má vyčerpané prestávky v práce celkovo 3 hodiny a 50 minút",
                    "d) vodič môže jazdiť ešte 28 minút, následne musí čerpať odpočinok 11 hodín; odpočinok musí začať čerpať najneskôr o 3 hodiny a 50 minút"
                ],
                "correct": 3
            },
            {
                "q": "198. Aký druh výtlačku je uvedený na obrázku nižšie?",
                "image": "198.jpg",
                "options": [
                    "a) denný výtlačok prekročenia rýchlosti vozidla",
                    "b) denný výtlačok - aktivity vodiča",
                    "c) denný výtlačok z karty vodiča",
                    "d) denný výtlačok z pamäte tachografu"
                ],
                "correct": 2
            },
            {
                "q": "199. Aký druh výtlačku je uvedený na obrázku nižšie?",
                "image": "199.jpg",
                "options": [
                    "a) denný výtlačok prekročenia rýchlosti vozidla",
                    "b) denný výtlačok - aktivity vodiča",
                    "c) denný výtlačok z karty vodiča",
                    "d) denný výtlačok z pamäte tachografu"
                ],
                "correct": 3
            },
            {
                "q": "200. Aký druh výtlačku je uvedený na obrázku nižšie?",
                "image": "200.jpg",
                "options": [
                    "a) výtlačok - aktivity vodiča",
                    "b) výtlačok - prekročenia rýchlosti",
                    "c) výtlačok - percentil otáčok vozidla",
                    "d) výtlačok - technické údaje vozidla"
                ],
                "correct": 3
            },
            {
                "q": "201. Aký druh výtlačku je uvedený na obrázku nižšie?",
                "image": "201.jpg",
                "options": [
                    "a) výtlačok - aktivity vodiča",
                    "b) výtlačok- prekročenia rýchlosti",
                    "c) výtlačok - percentil otáčok vozidla",
                    "d) výtlačok - technické údaje vozidla"
                ],
                "correct": 1
            },
            {
                "q": "202. Aký druh výtlačku je uvedený na obrázku nižšie?",
                "image": "202.jpg",
                "options": [
                    "a) výtlačok - aktivity vodiča",
                    "b) výtlačok - prekročenia rýchlosti",
                    "c) výtlačok - percentil otáčok vozidla",
                    "d) výtlačok - technické údaje vozidla"
                ],
                "correct": 0
            },
            {
                "q": "203. Koľko krát v priebehu týždňa môže byť predĺžený denný čas jazdy na 10 hodín?",
                "options": [
                    "a) jeden raz",
                    "b) dva razy",
                    "c) tri razy",
                    "d) štyri razy"
                ],
                "correct": 1
            },
            {
                "q": "204. Vodič po pracovnej zmene, ktorá trvala 13 hodín a 30 minút čerpal odpočinok v trvaní 10 hodín a 30 minút. O aký odpočinok ide?",
                "options": [
                    "a) pravidelný týždenný odpočinok",
                    "b) skrátený týždenný odpočinok",
                    "c) pravidelný denný odpočinok",
                    "d) skrátený denný odpočinok"
                ],
                "correct": 3
            },
            {
                "q": "205. Koľko krát je možné prerušiť pravidelný denný odpočinok v prípade, ak vodič bude časť odpočinku čerpať počas prepravy vozidla na trajekte?",
                "options": [
                    "a) pravidelný denný odpočinok nie je možné prerušovať",
                    "b) odpočinok môže prerušiť maximálne 1 raz",
                    "c) odpočinok môže prerušiť maximálne 2 razy",
                    "d) odpočinok môže prerušiť maximálne 3 razy"
                ],
                "correct": 2
            },
            {
                "q": "206. Koľko môže maximálne trvať prerušenie pravidelného denného odpočinku v prípade, ak vodič bude časť odpočinku čerpať počas prepravy vozidla na trajekte?",
                "options": [
                    "a) max. 30 minút",
                    "b) max. 1 hodinu",
                    "c) max. 75 minút",
                    "d) max. 2 hodiny"
                ],
                "correct": 1
            },
            {
                "q": "207. Vodič čerpal skrátený týždenný odpočinok 30 hodín. Koľko hodín kompenzácie za skrátený týždenný odpočinok musí vodič čerpať spolu s iným denným alebo týždenným odpočinkom?",
                "options": [
                    "a) 9 hodín",
                    "b) 15 hodín",
                    "c) 21 hodín",
                    "d) 24 hodín"
                ],
                "correct": 1
            },
            {
                "q": "208. V prípade ak vodič čerpal skrátený týždenný odpočinok, dokedy musí vyčerpať kompenzáciu za skrátenie týždenného odpočinku?",
                "options": [
                    "a) najneskôr do konca nasledujúceho týždňa po týždni, v ktorom došlo ku skráteniu odpočinku",
                    "b) najneskôr do konca druhého nasledujúceho týždňa po týždni, v ktorom došlo ku skráteniu odpočinku",
                    "c) najneskôr do konca tretieho nasledujúceho týždňa po týždni, v ktorom došlo ku skráteniu odpočinku",
                    "d) najneskôr do konca štvrtého nasledujúceho týždňa po týždni, v ktorom došlo ku skráteniu odpočinku"
                ],
                "correct": 2
            },
            {
                "q": "209. O aký čas je možné mimoriadne prekročiť denný čas jazdy v prípade, ak vodič realizuje dojazd do sídla spoločnosti a následne bude čerpať skrátený týždenný odpočinok?",
                "options": [
                    "a) o 30 minút",
                    "b) o 1 hodinu",
                    "c) o 1 hodinu a 30 minút",
                    "d) o 2 hodiny"
                ],
                "correct": 1
            },
            {
                "q": "210. O aký čas je možné mimoriadne prekročiť denný čas jazdy v prípade, ak vodič realizuje dojazd do sídla spoločnosti a následne bude čerpať pravidelný týždenný odpočinok?",
                "options": [
                    "a) o 30 minút",
                    "b) o 1 hodinu",
                    "c) o 1 hodinu a 30 minút",
                    "d) o 2 hodiny"
                ],
                "correct": 3
            },
            {
                "q": "211. Aký údaj musí zadať na digitálnom tachografe vodič bezprostredne po prekročení štátnej hranice?",
                "options": [
                    "a) krajinu výjazdu",
                    "b) krajinu príjazdu",
                    "c) čas prekročenia štátnej hranice",
                    "d) znak režimu OUT (prekročenie štátnej hranice)"
                ],
                "correct": 0
            },
            {
                "q": "212. Ako sa nastavuje miestny čas na digitálnom tachografe?",
                "options": [
                    "a) miestny čas si môže nastaviť vodič v menu tachografu",
                    "b) miestny čas je možné nastaviť v menu tachografu iba po načítaní podnikovej karty",
                    "c) miestny čas je možné nastaviť v menu tachografu iba po načítaní dielenskej karty",
                    "d) miestny čas sa automaticky mení bez zásahu vodiča pri prekročení časového pásma s vozidlom"
                ],
                "correct": 0
            },
            {
                "q": "213. V prípade straty karty vodiča do digitálneho tachografu môže vodič pokračovať v jazde v prípade, ak bude vykonávať ručný záznam. Na ktorom z výtlačkov je povinný vodič ručný záznam zapisovať?",
                "options": [
                    "a) denný výtlačok prekročenia rýchlosti vozidla",
                    "b) denný výtlačok - aktivity vodiča",
                    "c) denný výtlačok z karty vodiča",
                    "d) výtlačok - technické údaje"
                ],
                "correct": 3
            },
            {
                "q": "214. Akú pokutu môže dostať vodič v Slovenskej republike ak vedie nákladné vozidlo so záznamovým zariadením (tachografom), ktoré nemá platnú periodickú prehliadku alebo záznamové zariadenia (tachograf) nesprávne používa?",
                "options": [
                    "a) možno uložiť pokutu do 1 659 EUR,",
                    "b) možno uložiť pokutu do 169 EUR a zákaz činnosti do jedného roka",
                    "c) možno uložiť pokutu do 1 700 EUR a zákaz činnosti do dvoch rokov",
                    "d) možno uložiť pokutu do 1 000 EUR a zákaz činnosti do jedného roka"
                ],
                "correct": 2
            },
            {
                "q": "215. Akú pokutu môže dostať vodič v Slovenskej republike ak vedie nákladné vozidlo a nemá pri sebe kartu vodiča k záznamovému zariadeniu (tachografu) ani potvrdenie o jej strate alebo odcudzení?",
                "options": [
                    "a) možno uložiť pokutu do 1 000 EUR,",
                    "b) možno uložiť pokutu do 169 EUR a zákaz činnosti do jedného roka",
                    "c) možno uložiť pokutu do 1 400 EUR a zákaz činnosti do jedného roka",
                    "d) možno uložiť pokutu do 1 000 EUR a zákaz činnosti do jedného roka"
                ],
                "correct": 2
            },
            {
                "q": "216. Akú pokutu môže dostať vodič v Slovenskej republike ak vedie nákladné vozidlo a používajú kartu vodiča k záznamovému zariadeniu (tachografu), ktorá je kartou iného vodiča alebo je držiteľom viac ako jednej karty vodiča k záznamovému zariadeniu (tachografu)?",
                "options": [
                    "a) možno uložiť pokutu do 1 659 EUR,",
                    "b) možno uložiť pokutu do 169 EUR a zákaz činnosti do jedného roka",
                    "c) možno uložiť pokutu do 1 700 EUR a zákaz činnosti do dvoch rokov",
                    "d) možno uložiť pokutu do 1 000 EUR a zákaz činnosti do dvoch rokov"
                ],
                "correct": 2
            },
            {
                "q": "217. Ako sa realizuje zákaz činnosti vodiča nákladné cestnej dopravy podľa zákona o organizácii pracovného času v doprave v Slovenskej republike?",
                "options": [
                    "a) na čas zákazu činnosti sa vodičovi odoberie karta vodiča a vodičské oprávnenie; odobratú kartu vodiča a vodičské oprávnenie kontrolný orgán bezodkladne odovzdá Ministerstvu dopravy SR.",
                    "b) na čas zákazu činnosti sa vodičovi odoberie karta vodiča k záznamovému zariadeniu (tachografu); odobratú kartu vodiča kontrolný orgán bezodkladne odovzdá Ministerstvu dopravy SR",
                    "c) na čas zákazu činnosti sa vodičovi odoberie kvalifikačná karta vodiča; odobratú kvalifikačnú kartu vodiča kontrolný orgán bezodkladne odovzdá Ministerstvu dopravy SR",
                    "d) na čas zákazu činnosti sa vodičovi odoberie vodičské oprávnenie; odobraté vodičské oprávnenia odovzdá bezodkladne odovzdá Ministerstvu vnútra SR"
                ],
                "correct": 1
            },
            {
                "q": "218. Ktorí vodiči nákladnej cestnej dopravy sú povinní absolvovať kurz základnej kvalifikácie?",
                "options": [
                    "a) všetci vodiči nákladnej cestnej dopravy v SR, ktorá vedú vozidlo s celkovou hmotnosťou nad 2,5 tony",
                    "b) ktorí získali vodičské oprávnenie na vedenie vozidiel skupín C, C+E alebo C1+E alebo podskupiny C1 alebo vodičské oprávnenie uznané ako rovnocenné po 10.09.2009",
                    "c) ktorí získali vodičské oprávnenie na vedenie vozidiel skupín D, D+E alebo D1+E alebo podskupiny D1 alebo vodičské oprávnenie uznané ako rovnocenné po 10.09.2008",
                    "d) len vodiči, ktorí získali vodičské oprávnenie na vedenie vozidiel skupín C, C+E alebo C1+E alebo podskupiny C1 pred vstupom Slovenska do Európskej únie"
                ],
                "correct": 1
            },
            {
                "q": "219. Ako často vodiči nákladnej dopravy sú povinní absolvovať kurz pravidelného výcviku a v akom rozsahu?",
                "options": [
                    "a) vodiči nákladnej dopravy, ktorí získali vodičské oprávnenie na vedenie vozidiel skupín C, C+E alebo C1+E alebo podskupiny C1 alebo vodičské oprávnenie uznané ako rovnocenné sú povinný absolvovať kurz pravidelného výcviku raz za 5 rokov v rozsahu 35 hodín",
                    "b) vodiči nákladnej dopravy, ktorí získali vodičské oprávnenie na vedenie vozidiel skupín D, D+E alebo D1+E alebo podskupiny D1 alebo vodičské oprávnenie uznané ako rovnocenné sú povinný absolvovať kurz pravidelného výcviku raz za 3 roky v rozsahu 30 hodín",
                    "c) vodiči nákladnej dopravy, ktorí získali vodičské oprávnenie na vedenie vozidiel skupín C, C+E alebo C1+E alebo podskupiny C1 alebo vodičské oprávnenie uznané ako rovnocenné sú povinný absolvovať kurz pravidelného výcviku raz za 10 rokov v rozsahu 35 hodín",
                    "d) vodiči nákladnej dopravy, ktorí získali vodičské oprávnenie na vedenie vozidiel skupín C, C+E alebo C1+E alebo podskupiny C1 alebo vodičské oprávnenie uznané ako rovnocenné sú povinný absolvovať kurz pravidelného výcviku raz za 6 rokov v rozsahu 25 hodín"
                ],
                "correct": 0
            },
            {
                "q": "220. Kde v Slovenskej republike vodiči nákladnej dopravy musia absolvovať kurzy základnej kvalifikácie a pravidelného výcviku?",
                "options": [
                    "a) v autoškolách, kde získali vodičské oprávnenie na vedenie vozidiel skupín D, C+E alebo C1+E alebo podskupiny C1 alebo vodičské oprávnenie uznané ako rovnocenné",
                    "b) v školiacich strediskách schválených Ministerstvom dopravy SR, ktoré sú uvedené na webovom sídle: kkv.sk",
                    "c) vo všetkých autoškolách, ktoré môžu pripravovať vodičov na získanie vodičského oprávnenia na vedenie vozidiel skupín C, C+E alebo C1+E alebo podskupiny C1",
                    "d) v školiacich strediskách schválených Slovenskou komorou výcvikových zariadení autoškôl (SKVZA)"
                ],
                "correct": 1
            },
            {
                "q": "221. Dokedy, po ukončení kurzu základnej kvalifikácie v predpísanom rozsahu, je vodič nákladnej dopravy povinný vykonať záverečnú skúšku?",
                "options": [
                    "a) nie je to stanovené",
                    "b) vodič musí absolvovať skúšku najneskôr do piatich rokov odo dňa ukončenia kurzu",
                    "c) vodič musí absolvovať skúšku najneskôr do dvoch rokov odo dňa ukončenia kurzu",
                    "d) vodič musí absolvovať skúšku najneskôr do jedného roka odo dňa ukončenia kurzu"
                ],
                "correct": 3
            },
            {
                "q": "222. Aké doklady musí pripojiť vodič nákladnej dopravy k žiadosti na vydanie kvalifikačnej karty vodiča (KKV)?",
                "options": [
                    "a) vyplnenú žiadosť o vydanie KKV, potvrdenie o ukončení predpísaného kurzu resp. protokol o vykonaní skúšky a kolok v predpísanej hodnote na uhradenie správneho poplatku za vydanie KKV,",
                    "b) vyplnenú žiadosť o vydanie KKV a kolok v predpísanej hodnote na uhradenie správneho poplatku za vydanie KKV,",
                    "c) vyplnenú žiadosť o vydanie KKV, potvrdenie o skúške z autoškoly,",
                    "d) vyplnenú žiadosť o vydanie KKV, potvrdenie o ukončení predpísaného kurzu resp. protokol o vykonaní skúšky a vodičské oprávnenie"
                ],
                "correct": 0
            },
            {
                "q": "223. Inšpektorát práce uloží zamestnávateľovi alebo dopravnému podniku, ak neuzatvoril s vodičom, ktorý vykonáva pre neho dopravné činnosti v cestnej doprave, pracovný pomer, ak nejde o samostatne zárobkovo činného vodiča?",
                "options": [
                    "a) odobratie dopravnej licencie na jeden rok,",
                    "b) pokutu od 1.659 EUR do 16.596 EUR",
                    "c) pokutu do 1.659 EUR",
                    "d) pokutu od 3.000 EUR"
                ],
                "correct": 1
            },
            {
                "q": "224. Ktoré z uvedených porušení predpisov týkajúce sa režimu práce vodičov a používania záznamových zariadení (tachografov) je považované za najzávažnejšie?",
                "options": [
                    "a) prekročenie nepretržitej doby jazdy viac ako o 10 %",
                    "b) prekročenie dennej doby jazdy viac ako o 10 %",
                    "c) skrátenie denného odpočinku o 15 %",
                    "d) neoprávnené zásahy do záznamového zariadenie (tachografu)"
                ],
                "correct": 3
            },
            {
                "q": "225. Môže vodič dostať opakovane pokutu za porušenie sociálnej legislatívy pri kontrole na ceste, za ktorú mu už bola uložená pokuta pri predchádzajúcej kontrole?",
                "options": [
                    "a) áno",
                    "b) áno, ak kontrola je v inom štáte ako štát, v ktorom bola uložená pokuta",
                    "c) nie, zoznam pokút sa eviduje v systéme tachonet, inšpektor je povinný skontrolovať, či za dané porušenie už nebola uložená pokuta",
                    "d) nie v prípade, ak vodič predloží doklad o uložení pokuty resp. začatí konania"
                ],
                "correct": 3
            },
            {
                "q": "226. Ktorý právny predpis upravuje prepravnú zmluvu pri vnútroštátnej preprave medzi podnikateľskými subjektami v SR?",
                "options": [
                    "a) zákon o cestnej doprave",
                    "b) Dohovor CMR",
                    "c) Obchodný zákonník",
                    "d) Občiansky zákonník"
                ],
                "correct": 2
            },
            {
                "q": "227. Ktorý doklad je hodnoverným dokladom, že ste prepravili zásielku príjemcovi vo vnútroštátnej cestnej nákladnej doprave v SR pri jednorázovej objednávke?",
                "options": [
                    "a) ,,stazka\"",
                    "b) nákladný list CMR potvrdený príjemcom tovaru",
                    "c) záznam o prevádzke vozidla nákladnej dopravy",
                    "d) dodací list potvrdený príjemcom tovaru"
                ],
                "correct": 3
            },
            {
                "q": "228. Ktorý právny predpis upravuje prepravnú zmluvu pri medzinárodnej cestnej nákladnej preprave?",
                "options": [
                    "a) zákon o cestnej doprave",
                    "b) Dohovor CMR",
                    "c) Obchodný zákonník",
                    "d) Občiansky zákonník"
                ],
                "correct": 1
            },
            {
                "q": "229. Ktoré sú podstatné náležitosti zmluvy o preprave vecí?",
                "options": [
                    "a) určenie zmluvných strán; určenie zásielky; určenie miesta odoslania a miesta určenia a ceny za prepravu",
                    "b) výška prepravného; lehota na uskutočnenie prepravy",
                    "c) určenie zmluvných strán a dohoda o výške prepravného",
                    "d) určenie zásielky, výška prepravného; miesto odoslania a miesto určenia"
                ],
                "correct": 0
            },
            {
                "q": "230. Ak v dôsledku dopravnej nehody dôjde k poškodeniu prepravovaného tovaru pri medzinárodnej cestnej doprave a bol u Vás zistený alkohol:",
                "options": [
                    "a) budú aj naďalej platiť obmedzenia zodpovednosti dopravcu",
                    "b) bude dopravca braný na zodpovednosť do skutočne spôsobenej škody a poisťovňa môže použiť regres voči dopravcovi až do plnej výšky škody",
                    "c) bude dopravca braný na zodpovednosť do výšky 8,33 XDR za každý poškodený kilogram zásielky",
                    "d) nebude dopravca braný na zodpovednosť do skutočne spôsobenej škody"
                ],
                "correct": 1
            },
            {
                "q": "231. Aký je obsah prepravného poriadku?",
                "options": [
                    "a) v prepravnom poriadku sa uvedie najmä postup pri uzatváraní zmluvy o preprave osôb alebo nákladu",
                    "b) v prepravnom poriadku sa uvedie presne všetko ako je uvedené na vzore na vyhotovenie prepravného poriadku",
                    "c) v prepravnom poriadku sa uvedie, najmä: za akých podmienok možno s dopravcom uzavrieť zmluvu o preprave osôb alebo zmluvu o preprave vecí, rozsah prepravnej povinnosti, rozsah práv a povinností cestujúcich, odosielateľov a príjemcov vecí pri preprave, rozsah zodpovednosti dopravcu pri nedodržaní podmienok prepravy a z toho vyplývajúce nároky cestujúcich, odosielateľov a príjemcov vecí, najmä náhrada škody a pod.",
                    "d) v prepravnom poriadku sa uvedie najmä rozsah práv a povinností cestujúcich, odosielateľov a príjemcov vecí pri preprave, rozsah zodpovednosti dopravcu pri nedodržaní podmienok prepravy sa nemusí uvádzať"
                ],
                "correct": 2
            },
            {
                "q": "232. Ak dôjde k strate zásielky počas prepravy okrem hodnoty zásielky musí dopravca uhradiť aj",
                "options": [
                    "a) náklady na súd",
                    "b) colný dlh, prepravné a prípadne aj poistenie zásielky ak bolo dojednané",
                    "c) colný dlh a poistenie zásielky ak ho mal dohodnúť dopravca",
                    "d) 20 % zisk"
                ],
                "correct": 1
            },
            {
                "q": "233. Môže prepravný poriadok definovať základné povinnosti dopravcu odlišne od ustanovení zákona o cestnej doprave?",
                "options": [
                    "a) nie, prepravný poriadok musí byť v súlade so zákonom o cestnej doprave a základné povinnosti dopravcu musia byť prevzaté z tohto zákona",
                    "b) dopravca si môže v prepravnom poriadku ľubovoľne stanoviť základné povinnosti dopravcu, ustanovenia zákona o cestnej doprave majú iba odporúčací charakter",
                    "c) prepravný poriadok neupravuje základné povinnosti dopravcu",
                    "d) prepravnýporiadok sa po prijatí zákona o cestnej doprave nevyhotovuje"
                ],
                "correct": 2
            },
            {
                "q": "234. V akých prípadoch sa môže dopravca zbaviť zodpovednosti za stratu alebo zničenie zásielky?",
                "options": [
                    "a) v prípade ak dokáže, že zásielka bola poškodená z viny oprávneného, jeho príkazom a nie z nedbanlivosti dopravcu, vlastnou chybou zásielky alebo okolnosťami, ktoré dopravca nemohol odstrániť alebo odvrátiť",
                    "b) nemôže sa zbaviť zodpovednosti, lebo podľa Dohovoru CMR ide o absolútnu zodpovednosť",
                    "c) v prípade ak odosielateľ dokáže, že zásielka bola poškodená z viny techniky jazdy vodiča",
                    "d) v prípade ak dokáže, že zásielka bola poškodená z viny oprávneného, jeho príkazom alebo z nedbanlivosti dopravcu"
                ],
                "correct": 0
            },
            {
                "q": "235. Aká je zodpovednosť medzinárodného cestného dopravcu za škodu spôsobenú na prepravovanej zásielke pri technickej závade vozidla počas prepravy?",
                "options": [
                    "a) zbaví sa zodpovednosti z prepravnej zmluvy",
                    "b) zodpovedá opravovňa, ktorá zle vozidlo opravila",
                    "c) v tomto prípade sa nemôže zbaviť zodpovednosti za škodu na zásielke",
                    "d) zodpovedá opravovňa, ktorá zle vozidlo opravila, ak výška škody na zásielke ňou spôsobená je vyššia ako 10.000 EUR"
                ],
                "correct": 2
            },
            {
                "q": "236. Kedy sa považuje zásielka v medzinárodnej cestnej nákladnej doprave v zmysle Dohovoru CMR za stratenú?",
                "options": [
                    "a) ak nebola vydaná príjemcovi do 90 dní po uplynutí dohodnutej dodacej lehoty alebo do 60 dní od prevzatia zásielky k preprave, ak nebola dohodnutá dodacia lehota",
                    "b) ak nebola vydaná príjemcovi do 30 dní po uplynutí dohodnutej dodacej lehoty alebo do 60 dní od prevzatia zásielky k preprave, ak nebola dohodnutá dodacia lehota",
                    "c) ak nebola vydaná do 14 dní od dohodnutej dodacej lehoty",
                    "d) ak nebola vydaná príjemcovi do 60 dní po uplynutí dohodnutej dodacej lehoty alebo do 90 dní od prevzatia zásielky k preprave, ak nebola dohodnutá dodacia lehota"
                ],
                "correct": 1
            },
            {
                "q": "237. Ako sa vypočíta náhrada škody za stratenú zásielku vo vnútroštátnej cestnej nákladnej doprave v Slovenskej republike?",
                "options": [
                    "a) z hodnoty zásielky, ktorú mala v čase prevzatia k preprave",
                    "b) úradným odhadom",
                    "c) podľa dohody zmluvných strán",
                    "d) z hodnoty zásielky, ktorú by mala v čase jej odovzdania príjemcovi"
                ],
                "correct": 0
            },
            {
                "q": "238. Kto je oprávnený disponovať so zásielkou v priebehu medzinárodnej cestnej prepravy?",
                "options": [
                    "a) len dopravca",
                    "b) odosielateľ, alebo zasielateľ (,,špeditér\") za podmienok ustanovených Dohovorom CMR",
                    "c) dopravca bez obmedzenia",
                    "d) dopravca a príjemca zásielky"
                ],
                "correct": 1
            },
            {
                "q": "239. Aká je zodpovednosť medzinárodného cestného dopravcu za prevzatý náklad?",
                "options": [
                    "a) je neobmedzená",
                    "b) je neobmedzená, t. j. do hodnoty prepravovaného tovaru a prepravného",
                    "c) podľa Dohovoru CMR je neobmedzená",
                    "d) je obmedzená do určitej výšky podľa podmienok ustanovených v Dohovore CMR"
                ],
                "correct": 3
            },
            {
                "q": "240. Na čo sa vzťahuje poistenie zodpovednosti medzinárodného cestného dopravcu?",
                "options": [
                    "a) proti následkom za škody spôsobené vozidlom dopravcu na cudzom majetku, napr. vozidlách, dopravnom zariadení a pod.",
                    "b) proti následkom zodpovednosti medzinárodného cestného dopravcu, ktorá vyplýva z prepravnej zmluvy dojednanej v rozsahu a za podmienok stanovených v Dohovore CMR",
                    "c) proti následkom zodpovednosti medzinárodného cestného dopravcu, ktorá vyplýva z Colného dohovoru TIR",
                    "d) proti následkom za škody spôsobené na vozidle dopravcu"
                ],
                "correct": 1
            },
            {
                "q": "241. Na čo sa vzťahuje poistenie zahraničnej prepravy zásielok?",
                "options": [
                    "a) proti následkom zodpovednosti medzinárodného cestného dopravcu, ktorá vyplýva z prepravnej zmluvy dojednanej v rozsahu a za podmienok stanovených v Dohovore CMR",
                    "b) poistenie platí na škodu spôsobenú dopravnou nehodou v prípade, že došlo k poškodeniu zásielky prepravovanej druhou stranou (iným cestným dopravcom). Škody na zásielke druhej strany môžu byť hradené z tohto poistenia",
                    "c) ak nie je dojednané niečo iné, poistenie platí na škodu, čiastočnú stratu alebo úplnú stratu zásielky pri preprave nevzťahuje sa na škody spôsobené živelnými pohromami, škody spôsobené v sklade (dome) alebo v mieste uskladnenie",
                    "d) ak nie je dojednané niečo iné, poistenie platí na škodu, čiastočnú stratu alebo úplnú stratu zásielky pri preprave a začína sa okamihom, kedy zásielka pripravená na prepravu opúšťa sklad (dom) alebo miesto, kde bola uložená, trvá po celú dobu obvyklej prepravy a končí sa okamihom uloženia zásielky v sklade (dome) alebo v mieste uskladnenie, do ktorého je určená podľa poistnej zmluvy"
                ],
                "correct": 3
            },
            {
                "q": "242. Aké doklady môže odosielateľ pripojiť k medzinárodnému nákladnému listu CMR?",
                "options": [
                    "a) len ložný list",
                    "b) pokyny pre colné konanie a colné doklady napr. tranzitný colný doklad T1, ložný list, doklad o vážení zásielky, pokyny odosielateľa k preprave a manipulácii s nebezpečným vecami nad rámec všeobecných pokynov",
                    "c) pokyny pre colné konanie a colné doklady napr. tranzitný colný doklad TIR, ložný list, doklad o vážení zásielky, pokyny odosielateľa k preprave a manipulácii s nebezpečným vecami nad rámec všeobecných pokynov",
                    "d) doklad o vážení zásielky, ktorý je povinný podľa Dohovoru CMR"
                ],
                "correct": 1
            },
            {
                "q": "243. Aké sú povinnosti vodiča z hľadiska medzinárodnému nákladnému listu CMR pri preberaní zásielky na prepravu?",
                "options": [
                    "a) vodič nemá žiadne povinnosti len podpísať nákladný list vytavený odosielateľom",
                    "b) predložiť vlastné tlačivá medzinárodného nákladného listu, skontrolovať údaje zapísané v nákladnom liste zo strany odosielateľa či sa zhodujú s objednávkou prepravy, skontrolovať počet prepravných balení a vonkajší stav zásielky vrátane obalu, skontrolovať či je uvedený dátum prípadne čas nakládky, pečiatku a podpis odosielateľa; zapísať výhrady dopravcu ak sú potrebné a pripojiť meno a priezvisko paličkovým písmom a podpísať",
                    "c) predložiť vlastné tlačivá medzinárodného nákladného listu, skontrolovať počet prepravných balení a vonkajší stav zásielky vrátane obalu podľa nákladného listu vypísaného objednávateľom, skontrolovať či je uvedený dátum, pečiatku a podpis odosielateľa; zapísať výhrady dopravcu môže len na základe pokynu vedúceho dopravy a podpísať",
                    "d) predložiť vlastné tlačivá medzinárodného nákladného listu, skontrolovať počet prepravných balení a vonkajší stav obalu podľa objednávky prepravy, skontrolovať či je uvedený dátum, pečiatku a podpis odosielateľa v nákladnom liste CMR; zapísať výhrady dopravcu môže len na základe pokynu vedúceho dopravy a podpísať"
                ],
                "correct": 1
            },
            {
                "q": "244. Kto musí obstarať a predložiť odosielateľovi a na colnici odosielania karnet TIR ak preprava do tretieho štátu sa realizuje na tento colný doklad?",
                "options": [
                    "a) špeditér",
                    "b) kupujúci",
                    "c) vodič ako zástupca dopravcu",
                    "d) sprostredkovateľ prepravy"
                ],
                "correct": 2
            },
            {
                "q": "245. Aké sú základné požiadavky na dopravné a prepravné prostriedky, ktoré je možno využívať v režime TIR?",
                "options": [
                    "a) nákladový priestor musí byť konštruovaný a vybavený tak, aby z colne uzavretej časti vozidla nebolo možno tovar vybrať alebo ho do nej vložiť bez zanechania viditeľných stôp alebo bez porušenia colného uzáveru, bolo možno na ne ľahko a účinne priložiť colný uzáver, nebol v nich nijaký skrytý priestor na ukrytie tovaru a všetky priestory, v ktorých možno umiestniť tovar, boli pri colných prehliadkach ľahko prístupné",
                    "b) nie sú kladené špeciálne technické požiadavky",
                    "c) plachta musí byť z materiálu, ktorý splňa požiadavky podľa normy EHK, ostatné vybavenia vozidla musí zodpovedať STN",
                    "d) vek vozidla nesmie byť vyšší ako osem rokov, rozmerovo musí vozidlo zodpovedať požiadavkám zákona o cestnej doprave"
                ],
                "correct": 0
            },
            {
                "q": "246. Kto vydáva osvedčenia o schválení vozidiel na prepravy v režime TIR?",
                "options": [
                    "a) miestne príslušný obvodný úrad pre cestnú dopravu a pozemné komunikácie",
                    "b) miestne príslušný colný úrad podľa sídla dopravcu",
                    "c) ČESMAD Slovakia",
                    "d) Ministerstvo dopravy, pôšt a telekomunikácií SR"
                ],
                "correct": 1
            },
            {
                "q": "247. Ako sú označované vozidlá alebo súpravy pri medzinárodných prepravách na podklade karnetov TIR?",
                "options": [
                    "a) postačuje aby tabuľkami bol označený colný priestor, čiže napr. len náves; tabuľky bielej farby majú mať podľa Dohovoru TIR rozmery 250 x 400 mm, písmená TIR sú čiernej farby napísané veľkými písmenami latinky majú byť 200 mm vysoké a ich čiara je najmenej 20 mm hrubá",
                    "b) vždy je potrebné označiť tabuľkami ťahač aj náves; tabuľky modrej farby majú mať podľa Dohovoru TIR rozmery 250 x 400 mm, písmená TIR sú bielej farby napísané veľkými písmenami latinky majú byť 200 mm vysoké a ich čiara je najmenej 20 mm hrubá",
                    "c) vždy je potrebné pri každej medzinárodnej cestnej nákladnej doprave označiť tabuľkami ťahač aj náves",
                    "d) postačuje aby tabuľkami bol označený colný priestor, čiže napr. len náves; tabuľky modrej farby majú mať podľa Dohovoru TIR rozmery 250 x 400 mm, písmená TIR sú bielej farby napísané veľkými písmenami latinky majú byť 200 mm vysoké a ich čiara je najmenej 20 mm hrubá"
                ],
                "correct": 3
            },
            {
                "q": "248. Je možné na karnet TIR prepravovať nadrozmerné predmety, ktoré nie je možné prepravovať v zaplachtovaných vozidlách s colnou uzáverou, prípadne za akých podmienok?",
                "options": [
                    "a) prepravovať je možno predmety, ktoré sa zmestia do zaplachtovaných vozidiel a je potom možno priložiť colný uzáver",
                    "b) prepravovať je možno predmety, pri ktorých je možno z popisu zistiť ich totožnosť; karnet musí byť na obálke označený nápisom „ťažký alebo objemný tovar\" v angličtine a francúzštine",
                    "c) prepravovať je možno potom len jeden nadrozmerný predmet na jednom vozidle",
                    "d) nie je to možné, Dohovor TIR to neumožňuje"
                ],
                "correct": 1
            },
            {
                "q": "249. Do akej výšky je limitované colné ručenie na karnet TIR?",
                "options": [
                    "a) do výšky 5.000 USD vo všetkých členských štátoch Dohovoru TIR",
                    "b) do výšky 60.000 EUR vo všetkých členských štátoch Dohovoru TIR",
                    "c) do výšky 100.000 € v štátoch EÚ a 50.000 USD členských štátoch Dohovoru TIR,",
                    "d) do výšky 500.000 EUR vo všetkých členských štátoch Dohovoru TIR"
                ],
                "correct": 2
            },
            {
                "q": "250. Je možné požičať čistý karnet TIR vodičovi inej dopravnej firmy?",
                "options": [
                    "a) v žiadnom prípade ide o hrubé porušenie povinnosti držiteľa karnetu TIR",
                    "b) len v prípade dopravnej nehody",
                    "c) v prípade zlého vypísania karnetu TIR je to možné s tým, že iný vodič mi dá zle vypísaný karnet",
                    "d) v prípade nariadenia policajným orgánom"
                ],
                "correct": 0
            },
            {
                "q": "251. Na ktoré tovary pri prepravy do tretích krajín nie je možné využiť karnet TIR?",
                "options": [
                    "a) všetky tovary je možné prepravovať v režime TIR",
                    "b) cigarety, cigary, tabak na fajčenie, etylalkohol, liehoviny, likéry a ostatné liehové nápoje",
                    "c) cigarety, cigary, tabak na fajčenie, etylalkohol, liehoviny, likéry a pivo",
                    "d) cigarety, cigary a tabak na fajčenie"
                ],
                "correct": 1
            },
            {
                "q": "252. Je možné začať prepravu na karnet TIR v deň kedy končí platnosť karnetu?",
                "options": [
                    "a) platnosť karnetu TIR nie je časovo obmedzená",
                    "b) len v prípade živelnej pohromy",
                    "c) je to možné",
                    "d) je to možné len ak preprava skončí do 5 dní"
                ],
                "correct": 2
            },
            {
                "q": "253. Pri ktorých medzinárodných prepravách tovaru je možné použiť karnet ATA?",
                "options": [
                    "a) pri všetkých medzinárodných prepravách vecí obchodného tovaru okrem alkoholu a tabakových výrobkov",
                    "b) pri prepravách tovaru určeného na vystavenie alebo použitie na obchodných výstavách, prehliadkach a veľtrhoch alebo podobných podujatiach, prepravy obchodných vzoriek a prepravách zariadenia na výkon povolania",
                    "c) pri prepravách obchodného tovaru do členských štátoch Colného dohovoru ATA",
                    "d) pri prepravách všetkých druhov obchodného tovaru ktorého hodnota neprevyšuje jeden milión slovenských korún"
                ],
                "correct": 1
            },
            {
                "q": "254. Kto vystavuje karnety ATA v Slovenskej republike?",
                "options": [
                    "a) Slovenská obchodná a priemyselná komora",
                    "b) ČESMAD Slovakia",
                    "c) Ministerstvo dopravy, pôšt a telekomunikácií SR",
                    "d) Colné riaditeľstvo SR"
                ],
                "correct": 0
            },
            {
                "q": "255. Od koho dostane vodič karnet ATA, ak sa preprava zásielky realizuje aj s využitím tranzitného režimu ATA napríklad preprava tovaru na výstavu do švajčiarska?",
                "options": [
                    "a) od colného úradu v mieste odoslania",
                    "b) od odosielateľa zásielky; prípadne zasielateľa (,,špeditéra\")",
                    "c) od dopravcu, ktorý je povinný karnet TIR vybaviť",
                    "d) od Združenia cestných dopravcov SR- ČESMAD Slovakia"
                ],
                "correct": 1
            },
            {
                "q": "256. Je možné karnet ATA odovzdať v mieste výstavy objednávateľovi prepravy?",
                "options": [
                    "a) nie",
                    "b) áno, lebo karnet ATA slúži aj na prepravu naspäť",
                    "c) áno, lebo karnet ATA má platnosť na neobmedzený počet preprav za rok",
                    "d) nie, lebo slúži len ja jednu prepravu"
                ],
                "correct": 2
            },
            {
                "q": "257. Akej farby ostáva medzinárodný nákladný list CMR príjemcovi zásielky, ak sú farebne odlíšené?",
                "options": [
                    "a) list červenej farby",
                    "b) list modrej farby",
                    "c) list zelenej farby",
                    "d) list bielej farby"
                ],
                "correct": 1
            },
            {
                "q": "258. Akej farby ostáva medzinárodný nákladný list CMR dopravcovi zásielky, ak sú farebne odlíšené?",
                "options": [
                    "a) list červenej farby",
                    "b) list modrej farby",
                    "c) list zelenej farby",
                    "d) list bielej farby"
                ],
                "correct": 2
            },
            {
                "q": "259. Aké doklady musia byť vo vozidle pri preprave tovarov na podklade karnetov TIR?",
                "options": [
                    "a) manuál TIR a pokyny pre osádku vozidla týkajúce sa používania karnetov TIR",
                    "b) schvaľovacie osvedčenie od vozidla a minimálne päť fotografií vozidla vrátane jeho osádky potvrdených príslušným colným orgánom",
                    "c) schvaľovacie osvedčenie od vozidla",
                    "d) schvaľovacie osvedčenie od vozidla, tri fotografie vozidla potvrdené príslušným colným orgánom a karnety TIR"
                ],
                "correct": 3
            },
            {
                "q": "260. Na čo sa používa doklad T1?",
                "options": [
                    "a) je to vnútroštátny colný doklad určený len pre cestnú dopravu",
                    "b) je tranzitné colné prehlásenie (deklarácia), na ktoré je prepravovaný tovar v spoločnom tranzite v členských štátoch Dohovoru o spoločnom tranzitnom režime",
                    "c) je tranzitné colné prehlásenie (deklarácia), na ktoré je tovar v medzi krajinami EÚ a krajinami Spoločenstva nezávislých štátov",
                    "d) je to vnútroštátny colný doklad určený pre používanie všetkými dopravnými odbormi"
                ],
                "correct": 1
            },
            {
                "q": "261. Charakterizujte doklad T2?",
                "options": [
                    "a) je tranzitné colné prehlásenie (deklarácia), na ktoré je tovar v spoločnom tranzite prepravovaný medzi všetkými štátmi Európy",
                    "b) je tranzitné colné prehlásenie, na ktoré je tovar prepravovaný v spoločnom tranzitnom režime pri splnení zvláštnych podmienok a platí bez obmedzenia vo všetkých členských štátoch „Dohovoru o spoločnom tranzitnom režime\"",
                    "c) je colným dokladom a je len súčasťou dokladu T1",
                    "d) je tranzitné colné prehlásenie, na ktoré je tovar prepravovaný v spoločnom tranzitnom režime pri splnení zvláštnych podmienok; na doklad T2 je možno prepravovať tovar len vo vnútri EÚ (napr. z Francúzska do Talianska), alebo výnimočne tovar medzi štátom EÚ a niektorým štátom „Dohovoru\" za predpokladu, že prepravovaný tovar má colný štatút tovaru EÚ"
                ],
                "correct": 3
            },
            {
                "q": "262. Od koho najčastejšie vodiči medzinárodnej nákladnej dopravy dostávajú colné tranzitné doklady -T?",
                "options": [
                    "a) od zasielateľov (špeditérov), podľa pokynov odosielateľa",
                    "b) od vedúceho dopravy v dopravnej firme, kde je vodič zamestnaný",
                    "c) od príjemcu zásielky pri jej odovzdaní",
                    "d) od colných orgánov"
                ],
                "correct": 0
            },
            {
                "q": "263. Na aké prepravy platí licencia Spoločenstva v cestnej nákladnej doprave?",
                "options": [
                    "a) na medzinárodnú cestnú nákladnú dopravu medzi štátmi Európskej únie",
                    "b) na medzinárodnú cestnú nákladnú dopravu medzi štátmi Európskej únie a na vnútroštátnu nákladnú dopravu",
                    "c) na medzinárodnú cestnú nákladnú dopravu medzi štátmi Európskej únie a Ruskou federáciou",
                    "d) len na medzinárodnú cestnú nákladnú dopravu so SR do jedného štátu Európskej únie"
                ],
                "correct": 0
            },
            {
                "q": "264. Aký je to druh prepravného povolenia v cestnej medzinárodnej nákladnej doprave vydaný organizáciou ITF/CEMT?",
                "options": [
                    "a) trvalé povolenie (s dobou platnosti rok) platné v členských štátoch CEMT, ktoré oprávňuje dopravcu vykonávať prepravu medzi miestami ležiacimi na území členských štátov alebo tranzitom cez ich územia",
                    "b) trvalé povolenie (s dobou platnosti rok alebo mesiac) platné v členských štátoch EÚ, ktoré oprávňuje dopravcu vykonávať prepravu medzi miestami ležiacimi na území členských štátov alebo tranzitom cez ich územia",
                    "c) jednorazové povolenie platné v členských štátoch CEMT, ktoré oprávňuje dopravcu vykonávať prepravu medzi miestami ležiacimi na území členských štátov alebo tranzitom cez ich územia",
                    "d) jednorazové povolenie platné v členských štátoch EÚ, ktoré oprávňuje dopravcu vykonávať prepravu medzi miestami ležiacimi na území členských štátov alebo tranzitom cez ich územia"
                ],
                "correct": 0
            },
            {
                "q": "265. Do ktorého štátu je potrebné mať prepravné povolenie CEMT alebo jednorázové prepravné povoleníe, ak pracuje vodič u dopravcu registrovaného v Slovenskej republike?",
                "options": [
                    "a) do všetkých štátov mimo štátov Európskej únie,",
                    "b) napríklad do Ruskej federácie, Bieloruska",
                    "c) napríklad do Chorvátska, Grécka",
                    "d) do všetkých členských štátov CEMT/ITF"
                ],
                "correct": 1
            },
            {
                "q": "266. Všetky prepravné povolenia CEMT platia v členských štátoch CEMT/ITF?",
                "options": [
                    "a) neplatia vo všetkých členských štátoch EÚ",
                    "b) platia vo všetkých pokiaľ nie je na povolení CEMT vyznačená ich neplatnosť napr. na území Ruskej federácie, Rakúska, Maďarska, Talianska a Grécka",
                    "c) platia vo všetkých pokiaľ nie je na povolení vyznačená ich neplatnosť napr. na území Nemecka, českej republiky, Slovenska atď.",
                    "d) áno platia vo všetkých členských štátov CEMT/ITF"
                ],
                "correct": 1
            },
            {
                "q": "267. Aký ťahač a náves je možné použiť na prepravu na, ktoré je potrebné prepravné povolenie CEMT?",
                "options": [
                    "a) Nie je potrebné špeciálne osvedčenie okrem dokladov o emisnej a technickej kontrole ako pri prepravách do štátov Európskej únie",
                    "b) ťahač aj náves musia mať platné osvedčenie EURO 6, ktoré musí byť pri tejto preprave vo vozidle",
                    "c) ťahač aj náves musia mať platné osvedčenie o súlade s technickými a bezpečnostnými požiadavkami CEMT, ktoré musí byť pri tejto preprave vo vozidle",
                    "d) ťahač musí byť najmenej EURO 4 a musí mať platné osvedčenie o súlade s technickými a bezpečnostnými požiadavkami CEMT, ktoré musí byť pri tejto preprave vo vozidle"
                ],
                "correct": 2
            },
            {
                "q": "268. Kto poskytne vodičovi pred prepravou dostatočný počet platných jednorázových prepravných povolení, ak sa pri preprave do týchto štátov vyžadujú?",
                "options": [
                    "a) zasielateľ (špeditér)",
                    "b) Združenie cestných dopravcov SR - ČESMAD Slovakia",
                    "c) Colnica odoslania",
                    "d) dopravca, u ktorého vodič je zamestnaný"
                ],
                "correct": 3
            },
            {
                "q": "269. Je možné všetky hraničné priechody medzi SR a okolitými štátmi používať pre cestnú nákladnú dopravu?",
                "options": [
                    "a) áno, pre cestnú nákladnú dopravu je možné používať všetky hraničné priechody",
                    "b) áno, s výnimkou hraničných priechodov s Ukrajinou",
                    "c) áno, s výnimkou hraničného priechodu Makov, ktorý je určený iba pre osobnú dopravu",
                    "d) nie, cestná nákladná doprava môže využívať iba priechody určené pre nákladnú dopravu (niektoré priechody sú určené iba pre osobnú dopravu)"
                ],
                "correct": 3
            },
            {
                "q": "270. Od čoho závisí výška mýta plateného v cestnej nákladnej doprave v Európe?",
                "options": [
                    "a) len od celkovej hmotnosti vozidla",
                    "b) závisí od štátov, ale v niektorých štátoch Európskej únie napr. v Spolkovej republike Nemecko je výška mýta závislá od druhu cestnej infraštruktúry, celkovej hmotnosti nákladného vozidla a počtu náprav, od emisnej triedy a od vonkajšieho hluku",
                    "c) závisí od štátov, ale v niektorých štátoch Európskej únie napr. v Slovenskej republike je výška mýta závislá od celkovej hmotnosti nákladného vozidla a počtu náprav, od emisnej triedy a od vonkajšieho hluku",
                    "d) závisí od štátov, ale vo všetkých štátoch Európskej únie vrátane Slovenskej republike je výška mýta závislá od celkovej hmotnosti nákladného vozidla a počtu náprav, od emisnej triedy a od vonkajšieho hluku"
                ],
                "correct": 1
            },
            {
                "q": "271. Ako je v Slovenskej republike definovaná dopravná nehoda v zákone o cestnej premávke?",
                "options": [
                    "a) je udalosť v cestnej premávke, ktorá sa stane v priamej súvislosti s premávkou vozidla a pri ktorej sa usmrtí alebo zraní osoba alebo poškodí cesta alebo všeobecné prospešné zariadenie",
                    "b) je udalosť v cestnej premávke, ktorá sa stane v priamej súvislosti s premávkou vozidla a pri ktorej sa usmrtí alebo zraní osoba",
                    "c) je udalosť v cestnej premávke, ktorá sa stane v priamej súvislosti s premávkou vozidla a pri ktorej sa usmrtí alebo zraní osoba, poškodí cesta alebo všeobecné prospešné zariadenie alebo uniknú nebezpečné veci",
                    "d) je udalosť v cestnej premávke ktorá sa stane v priamej súvislosti s premávkou vozidla a pri ktorej sa usmrtí alebo zraní osoba alebo vznikne škoda vo výške nad 5 000 EUR"
                ],
                "correct": 2
            },
            {
                "q": "272. Aká sú najčastejšie hlavné príčiny vzniku dopravných nehôd v Slovenskej republike, na základe údajov Prezídia Policajného zboru?",
                "options": [
                    "a) nedovolená rýchlosť jazdy",
                    "b) porušenie povinnosti vodiča a to najmä nevenovania sa plne vedeniu vozidla a nesledovanie situácie v cestnej premávke",
                    "c) nesprávne predchádzanie",
                    "d) nesprávna jazda cez križovatku"
                ],
                "correct": 1
            },
            {
                "q": "273. Aká sú najčastejšie hlavné príčiny vzniku dopravných nehôd v Slovenskej republike, pri ktorých bola usmrtená osoba, na základe údajov Prezídia Policajného zboru?",
                "options": [
                    "a) nedovolená rýchlosť jazdy",
                    "b) porušenie povinnosti vodiča a to najmä nevenovanie sa plne vedeniu vozidla a nesledovanie situácie v cestnej premávke, nedanie prednosti chodcovi, ktorý vstúpil na vozovku a prechádza cez priechod pre chodcov",
                    "c) nesprávne predchádzanie",
                    "d) nesprávna jazda cez križovatku"
                ],
                "correct": 1
            },
            {
                "q": "274. Na ktorých cestách v Slovenskej republike, je najväčší počet usmrtených pri dopravných nehodách, na základe údajov Prezídia Policajného zboru?",
                "options": [
                    "a) diaľnice",
                    "b) cesty III. triedy",
                    "c) cesty I. a II. triedy",
                    "d) ostatné cesty"
                ],
                "correct": 2
            },
            {
                "q": "275. V ktorom dni v týždni je v Slovenskej republike, je najväčší počet dopravných nehôd, na základe údajov Prezídia Policajného zboru?",
                "options": [
                    "a) utorok",
                    "b) streda",
                    "c) nedeľa",
                    "d) piatok"
                ],
                "correct": 3
            },
            {
                "q": "276. Ako má postupovať vodič, ktorý počas čerpania denného odpočinku zistí náhlu srdcovú príhodu vodiča susedného vozidla?",
                "options": [
                    "a) musí bezodkladne vodičovi poskytnúť prvú pomoc, v prípade potreby môže prerušiť odpočinok a použiť vozidlo na prepravu pacienta do nemocnice",
                    "b) musí bezodkladne vodičovi poskytnúť prvú pomoc, vozidlo môže viesť až po uplynutí najmenej 60 % denného odpočinku",
                    "c) musí bezodkladne vodičovi poskytnúť prvú pomoc, vozidlo môže viesť až po uplynutí najmenej 80 % denného odpočinku",
                    "d) musí bezodkladne vodičovi poskytnúť prvú pomoc, vozidlo môže viesť až po uplynutí minimálne 6 hodín denného odpočinku"
                ],
                "correct": 0
            },
            {
                "q": "277. Vzťahuje sa požiadavka ochrannej prilby, ktorú požaduje odosielateľ vo svojich priestoroch, pri nakládke aj na vodiča?",
                "options": [
                    "a) nie, vodič nie je zamestnávateľom odosielateľa",
                    "b) nie, pokiaľ sa bude pohybovať v priestoroch odosielateľa opatrne",
                    "c) ochranná prilba je pre vodičov dobrovoľná",
                    "d) áno a ďalšie osobné ochranné pomôcky závisia od požiadaviek odosielateľa"
                ],
                "correct": 3
            },
            {
                "q": "278. Ako často sa musí podrobiť vodič, ktorý vedie nákladné motorové vozidlo a vyžaduje sa vodičské oprávnenie skupiny C, pravidelným lekárskym prehliadkam?",
                "options": [
                    "a) každé dva roky",
                    "b) každých päť rokov a po dosiahnutí veku 65 rokov každé dva roky",
                    "c) každých päť rokov a po dosiahnutí veku 50 rokov každé dva roky",
                    "d) každých dva roky a po dosiahnutí veku 65 rokov každý rok"
                ],
                "correct": 1
            },
            {
                "q": "279. Ako často sa musí podrobiť vodič, ktorý vedie nákladné motorové vozidlo a vyžaduje sa vodičské oprávnenie skupiny C, pravidelným psychologickým vyšetreniam?",
                "options": [
                    "a) každé dva roky",
                    "b) každých päť rokov a po dosiahnutí veku 65 rokov každé dva roky",
                    "c) každých päť rokov a po dosiahnutí veku 50 rokov každé dva roky",
                    "d) každých dva roky a po dosiahnutí veku 65 rokov každý rok"
                ],
                "correct": 1
            },
            {
                "q": "280. Ktorý z nižšie uvedených dokladov musí mať vodič, ktorý vedie motorové vozidlo skupiny C?",
                "options": [
                    "a) len doklad o psychickej spôsobilosti a na výzvu policajta sú povinní takýmto dokladom sa preukázať",
                    "b) doklad o zdravotnej spôsobilosti a aj doklad o psychickej spôsobilosti a na výzvu policajta nie sú povinní takýmto dokladom sa preukázať",
                    "c) doklad o zdravotnej spôsobilosti a aj doklad o psychickej spôsobilosti a na výzvu policajta sú povinní takýmto dokladom sa preukázať",
                    "d) len doklad o zdravotnej spôsobilosti na výzvu policajta sú povinní takýmto dokladom sa preukázať"
                ],
                "correct": 2
            },
            {
                "q": "281. Mení sa v priebehu dňa intenzita pozornosti vodiča?",
                "options": [
                    "a) nie, vodič je pozorný celý čas s rovnakou intenzitou",
                    "b) áno, najvyššia miera pozornosti je od polnoci do rána 6 hodiny ráno",
                    "c) áno, najnižšia miera pozornosti je od polnoci do rána 6 hodiny ráno",
                    "d) áno, najnižšia miera pozornosti je od 8 hodiny do 12 hodiny v priebehu dňa"
                ],
                "correct": 2
            },
            {
                "q": "282. Kedy musí vodič okamžite zastaviť vozidlo?",
                "options": [
                    "a) v prípade rozsvietenia kontrolného svetla nedostatok paliva v palivovej nádrži",
                    "b) v prípade nepretržitého času vedenia vozidla 3,5 hodiny",
                    "c) v prípade, že vodičovi sa z dôvodu únavy znižuje reakčný čas, zužuje zorné pole vnímania a hrozí zaspanie vodiča",
                    "d) v prípade nepretržitého vedenia vozidla 2,5 hodiny"
                ],
                "correct": 2
            },
            {
                "q": "283. Ako sa u vodiča prejaví požitie alkoholu?",
                "options": [
                    "a) požitie alkoholu nemení čas reakcie vodiča",
                    "b) požitie alkoholu znižuje čas reakcie vodiča",
                    "c) požitie alkoholu zvyšuje čas reakcie vodiča",
                    "d) požitie alkoholu znižuje čas reakcie vodiča, avšak znižuje kvalitu prepravnej služby, preto je pre dopravu neprípustné"
                ],
                "correct": 2
            },
            {
                "q": "284. Ako sa u vodiča prejaví požitie drog?",
                "options": [
                    "a) požitie drog nemení čas reakcie vodiča",
                    "b) požitie drog znižuje čas reakcie vodiča",
                    "c) požitie drog zvyšuje čas reakcie vodiča",
                    "d) požitie drog znižuje čas reakcie vodiča, avšak znižuje kvalitu prepravnej služby, preto je pre dopravu neprípustné"
                ],
                "correct": 2
            },
            {
                "q": "285. Mení sa dĺžka reakčného času vodiča?",
                "options": [
                    "a) sa nemení",
                    "b) sa mení len s vekom vodiča",
                    "c) sa mení s fyzickým a duševným stavom vodiča",
                    "d) sa nemení s fyzickým stavom vodiča"
                ],
                "correct": 2
            },
            {
                "q": "286. Rýchlosť odbúravania alkoholu v krvi",
                "options": [
                    "a) sa dá ovplyvniť množstvom vypitej kávy",
                    "b) sa dá ovplyvniť spánkom",
                    "c) sa dá ovplyvniť jedením",
                    "d) sa nedá ovplyvniť"
                ],
                "correct": 3
            },
            {
                "q": "287. Reakčnú dobu vodiča predlžuje",
                "options": [
                    "a) alkohol v krvi",
                    "b) alkohol v krvi a rovnako aj únava vodiča",
                    "c) únava vodiča, alkohol v krvi a jeho sústredenosť",
                    "d) len vek vodiča"
                ],
                "correct": 2
            },
            {
                "q": "288. Vodič nesmie počas vedenia vozidla držať v ruke alebo iným spôsobom obsluhovať?",
                "options": [
                    "a) telefónny prístroj alebo iné telekomunikačné, audiovizuálne alebo obdobné zariadenie vrátane použitia systému „voľné ruky\"",
                    "b) telefónny prístroj alebo iné telekomunikačné, audiovizuálne alebo obdobné zariadenie okrem použitia systému „voľné ruky\" alebo vykonávať inú obdobnú činnosť, ktorá nesúvisí s vedením vozidla",
                    "c) telefónny prístroj okrem použitia systému „voľné ruky\" alebo vykonávať inú obdobnú činnosť, ktorá nesúvisí s vedením vozidla",
                    "d) mobilný telefón okrem použitia systému „voľné ruky\" alebo vykonávať inú obdobnú činnosť, ktorá nesúvisí s vedením vozidla"
                ],
                "correct": 1
            },
            {
                "q": "289. Ako musí byť zabezpečené zariadenie obmedzujúce rýchlosť vozidla v nákladných vozidlách N2 a N3?",
                "options": [
                    "a) zariadenie obmedzujúce rýchlosť vo vozidle musí byť vždy zaplombované",
                    "b) zariadenie obmedzujúce rýchlosť vo vozidle nemusí byť zaplombované je to na rozhodnutí dopravcu",
                    "c) zariadenie obmedzujúce rýchlosť vo vozidle musí byť zaplombované alebo inak zabezpečené tak, aby sa zabránilo neoprávnenej manipulácii len pri preprave nebezpečných vecí",
                    "d) zariadenie obmedzujúce rýchlosť vo vozidle musí byť zaplombované alebo inak zabezpečené tak, aby sa zabránilo neoprávnenej manipulácii"
                ],
                "correct": 3
            },
            {
                "q": "290. Čo pomáha znižovať možnosť mikrospánku pri monotónnej jazde po diaľnici?",
                "options": [
                    "a) pred jazdou sa dosýta najesť",
                    "b) žuvať žuvačky alebo sušené ovocie a podobne",
                    "c) počúvať nehlasitú ukľudňujúcu hudbu",
                    "d) robiť si prestávky pod 4,5 hodinách nepretržitej jazdy, v trvaní najmenej 10 minút"
                ],
                "correct": 1
            },
            {
                "q": "291. Po nepretržitej 4,5 hod. jazde pri čerpaní bezpečnostnej prestávky, po ktorej bude nasledovať jazda toho istého vodiča sa odporúča?",
                "options": [
                    "a) celú prestávku stráviť na ležadle",
                    "b) počas prestávky odstrániť drobné poruchy na vozidle",
                    "c) opustiť sedadlo vodiča a vykonať cviky, ktoré uvoľnia napríklad chrbticu a pomôžu predchádzať únave a vplyvu na zdravie vodiča",
                    "d) opustiť sedadlo vodiča a dobre sa najesť a požiť energetický nápoj"
                ],
                "correct": 2
            },
            {
                "q": "292. Na akom telefónnom čísle v rámci celej EÚ je možné požadovať pomoc v prípade poranenia osôb pri dopravnej nehode?",
                "options": [
                    "a) 129",
                    "b) 150",
                    "c) 112",
                    "d) 999"
                ],
                "correct": 2
            },
            {
                "q": "293. Akým spôsobom sa v prípade dopravnej nehody zabezpečuje bezpečnosť ostatných osôb cestnej premávky?",
                "options": [
                    "a) zasvieti sa v dostatočnej vzdialenosti pred dopravnou nehodou žlté svetlo",
                    "b) v dostatočnej vzdialenosti pred dopravnou nehodou sa umiestni oranžová tabuľa s čiernym orámovaním a použije aj výstražnú funkciu výstražných svetiel",
                    "c) správnym umiestnením prenosného výstražného trojuholníka podľa miesta nehody a ak je vozidlo vybavené osobitným zariadením, ktoré umožňuje výstražnú funkciu smerových svietidiel, vodič je povinný ho použiť aspoň v čase, kým umiestni trojuholník na vozovke",
                    "d) v dostatočnej vzdialenosti pred dopravnou nehodou sa umiestni dopravná značka: stop, daj prednosť v jazde"
                ],
                "correct": 2
            },
            {
                "q": "294. Je možné si zhotoviť fotodokumentáciu v prípade, že vodič je účastníkom dopravnej nehody?",
                "options": [
                    "a) nie, oprávnenie fotografovať dopravnú nehodu má jedine policajný zbor",
                    "b) áno, ale fotodokumentácia nemôže byť zverejnená ani nijako ďalej použitá",
                    "c) áno, fotodokumentácia môže pomôcť účastníkovi nehody v prípade prípadných súdnych sporov",
                    "d) áno, ale nemôže byť fotodokumentácia vykonaná mobilným telefónom"
                ],
                "correct": 2
            },
            {
                "q": "295. Aké hlavné poslanie má predpísaný odpočinok vodiča?",
                "options": [
                    "a) zvýšenie bezpečnosti cestnej premávky znížením únavy vodičov",
                    "b) zníženie bezpečnosti cestnej premávky zvýšením únavy vodičov",
                    "c) zvýšenie bezpečnosti cestnej premávky zvýšením podielu jazdy vodičov",
                    "d) zníženie bezpečnosti cestnej premávky zvýšením podielu jazdy vodičov"
                ],
                "correct": 0
            },
            {
                "q": "296. Aké činnosti nesmie vykonávať vodič, ktorý je účastníkom dopravnej nehody?",
                "options": [
                    "a) nesmie používať mobilný telefón",
                    "b) nesmie vykonávať nijaké opatrenia v súvislosti s dopravnou nehodou (posúvanie vozidiel, vyprosťovanie osôb a pod.) až do príchodu polície",
                    "c) nesmie požívať alkoholické nápoje alebo iné návykové látky",
                    "d) nesie komunikovať so svedkami dopravnej nehody z dôvodu ovplyvňovania svedkov"
                ],
                "correct": 2
            },
            {
                "q": "297. V prípade, že v dôsledku dopravnej nehody došlo k zraneniu osôb, vodič je povinný:",
                "options": [
                    "a) zavolať odbornú zdravotnícku pomoc a zotrvať na mieste nehody",
                    "b) poskytnúť podľa svojich schopností a možností zranenej osobe potrebnú prvú pomoc a bezodkladne privolať odbornú zdravotnícku pomoc a políciu",
                    "c) zavolať odbornú zdravotnícku pomoc, po splnení tejto povinnosti vodič nemusí zotrvať na mieste nehody",
                    "d) bezodkladne o dopravnej nehode informovať správcu pozemnej komunikácie"
                ],
                "correct": 1
            },
            {
                "q": "298. Kto je účastníkom dopravnej nehody?",
                "options": [
                    "a) osoba, ktorá sa priamo aktívne alebo pasívne zúčastnila na dopravnej nehode",
                    "b) iba osoba, ktorá sa aktívne zúčastnila na dopravnej nehode",
                    "c) iba osoba, ktorá sa pasívne zúčastnila na dopravnej nehode",
                    "d) osoba, ktorá utrpela v dôsledku dopravnej nehody zranenie alebo smrť"
                ],
                "correct": 0
            },
            {
                "q": "299. Komu je povinný účastník dopravnej nehody preukázať svoju totožnosť?",
                "options": [
                    "a) iba príslušníkovi Policajného zboru SR",
                    "b) iba príslušníkom Policajnéhozboru SR alebo Hasičského zboru SR",
                    "c) účastník dopravnej nehody je povinný preukázať svoju totožnosť na požiadanie iného účastníka dopravnej nehody",
                    "d) účastník dopravnej nehody je povinný preukázať svoju totožnosť na požiadanie iného účastníka dopravnej nehody, ale len v prípade zranenia resp. úmrtia osôb"
                ],
                "correct": 2
            },
            {
                "q": "300. V ktorých prípadoch je potrebné bezodkladne dopravnú nehodu ohlásiť polícii?",
                "options": [
                    "a) v prípade, ak došlo k usmrteniu osoby",
                    "b) v prípade, ak došlo k usmrteniu alebo zraneniu osoby",
                    "c) v prípade, ak došlo k usmrteniu alebo zraneniu osoby, alebo došlo k poškodeniu všeobecne prospešného zariadenia alebo unikli nebezpečné veci",
                    "d) v prípade, ak došlo k usmrteniu alebo zraneniu osoby, alebo došlo k poškodeniu všeobecne prospešného zariadenia alebo unikli nebezpečné veci, alebo ak na niektorom zo zúčastnených vozidiel, vrátane prepravovaných vecí alebo na inom majetku vznikne hmotná škoda zrejme prevyšujúca jedenapolnásobok väčšej škody podľa Trestného zákona"
                ],
                "correct": 3
            },
            {
                "q": "301. Ktoré poistenie je povinné pri prevádzke vozidla používaného na podnikanie v cestnej doprave?",
                "options": [
                    "a) povinné zmluvné poistenie zodpovednosti za škodu spôsobenú prevádzkou motorového vozidla",
                    "b) havarijné poistenie motorového vozidla",
                    "c) poistenie motorového vozidla proti krádeži",
                    "d) poistenie motorového vozidla proti živelným pohromám"
                ],
                "correct": 0
            },
            {
                "q": "302. Môže byť účastníkovi dopravnej nehody v trestnom konaní z poistenia zodpovednosti dopravcu dohodnutý obhajca?",
                "options": [
                    "a) nie",
                    "b) na území SR nie, ale je možné dohodnúť obhajcu v prípade, že dopravná nehoda vznikla v zahraničí",
                    "c) áno, ale len v prípade, že dopravná nehoda vznikla na území SR",
                    "d) áno"
                ],
                "correct": 3
            },
            {
                "q": "303. Z akého dokladu je možné zistiť, kde je účastník dopravnej nehody poistený na zodpovednosť za škodu spôsobenú prevádzkou motorového vozidla?",
                "options": [
                    "a) z vodičského preukazu",
                    "b) z technického preukazu vozidla",
                    "c) z tzv. zelenej karty (v súčasnosti je farba je už biela)",
                    "d) z nákladného listu CMR"
                ],
                "correct": 2
            },
            {
                "q": "304. Komu je možné hradiť škodu zavinenú vlastným vozidlom . z poistenia zodpovednosti za škodu spôsobenú prevádzkou motorového vozidla?",
                "options": [
                    "a) škodu na vlastnom vozidle",
                    "b) každému účastníkovi cestnej premávky pri vzniku dopravnej nehody",
                    "c) inému účastníkovi cestnej premávky, ktorý nezavinil dopravnú nehodu",
                    "d) škodu na vlastnom aj cudzom vozidle"
                ],
                "correct": 2
            },
            {
                "q": "305. Je možné dopisovať alebo meniť údaje na tzv. ,,Zelenej karte\" zo strany vodiča?",
                "options": [
                    "a) dopisovanie alebo menenie údajov má za následok neplatnosť Zelenej karty",
                    "b) vodič môže dopisovať a meniť údaje, ale iba strojopisom",
                    "c) vodič môže dopisovať a meniť údaje v prípade aktualizácie údajov na karte",
                    "d) vodič môže iba dopisovať údaje, nie je prípustné meniť údaje"
                ],
                "correct": 0
            },
            {
                "q": "306. Vodič, ktorý sa zúčastnil dopravnej nehody:",
                "options": [
                    "a) je povinný bezodkladne zastaviť vozidlo",
                    "b) je povinný bezodkladne zastaviť vozidlo iba v prípade, ak došlo k hmotnej škode na majetku vyššej ako 500 EUR",
                    "c) je povinný bezodkladne zastaviť vozidlo iba v prípade, ak došlo k zraneniu alebo usmrteniu osôb",
                    "d) nie je povinný bezodkladne zastaviť vozidlo"
                ],
                "correct": 0
            },
            {
                "q": "307. Aké úkony je vodič povinný okamžite vykonať v prípade, ak je prvý, kto dorazil na miesto dopravnej nehody?",
                "options": [
                    "a) okamžite poskytnúť zraneným prvú pomoc bez ohľadu na rozsah ich zranení",
                    "b) okamžite poskytnúť zraneným prvú pomoc, pričom jeho bezpečnosť je v týmto prípade druhoradá",
                    "c) najskôr zaistiť vlastnú bezpečnosť, následne posúdiť rozsah zranení a vykonať opatrenia súvisiace s bezpečnosťou zranených",
                    "d) nemôže vykonať žiadne úkony okrem privolania polície"
                ],
                "correct": 2
            },
            {
                "q": "308. Je povolená hranica koncentrácie alkoholu v krvi vodiča v rámci EÚ jednotná?",
                "options": [
                    "a) nie, nie je jednotná",
                    "b) áno, je jednotná",
                    "c) áno, je jednotná, ale len pre vodičov osobných automobilov",
                    "d) áno, je jednotná, každá krajina EÚ má implementovanú nulovú toleranciu alkoholu v krvi vodiča"
                ],
                "correct": 0
            },
            {
                "q": "309. Ktorí účastníci cestnej premávky sú najzraniteľnejší?",
                "options": [
                    "a) chodci a cyklisti",
                    "b) vodiči osobných automobilov",
                    "c) spolucestujúci v osobnom automobile",
                    "d) vodiči vozidiel cestnej nákladnej dopravy"
                ],
                "correct": 0
            },
            {
                "q": "310. So zvyšujúcou sa rýchlosťou motorového vozidla sa dráha potrebná pre zastavenie vozidla:",
                "options": [
                    "a) skracuje",
                    "b) predlžuje",
                    "c) nemení, pretože rýchlosť vozidla nemá vplyv na brzdnú dráhu",
                    "d) predlžuje len u vozidiel cestnej nákladnej dopravy, u osobných automobilov má rýchlosť vozidla zanedbateľný vplyv na jeho brzdnú dráhu"
                ],
                "correct": 1
            },
            {
                "q": "311. Čo je najčastejšou príčinou vzniku dopravnej nehody?",
                "options": [
                    "a) ľudský faktor",
                    "b) len technický stav vozidla",
                    "c) preprava nevhodnej tovarovej skupiny vo vzťahu k použitému vozidlu",
                    "d) lesná zver"
                ],
                "correct": 0
            },
            {
                "q": "312. So zvyšujúcou sa rýchlosťou motorového vozidla sa pravdepodobnosť usmrtenia chodca pri zrážke s vozidlom:",
                "options": [
                    "a) znižuje",
                    "b) zvyšuje",
                    "c) nemení, pretože rýchlosť vozidla nesúvisí s rozsahom poranení chodca pri dopravnej nehode",
                    "d) zvyšuje, len ak k dopravnej nehode došlo na diaľnici alebo rýchlostnej ceste"
                ],
                "correct": 1
            },
            {
                "q": "313. Musí byť správa o dopravnej nehode medzi dvomi vozidlami podpísaná oboma vodičmi?",
                "options": [
                    "a) áno musí",
                    "b) áno musí, ale len v prípade, ak ich výpovede o dopravnej nehode nie sú protichodné",
                    "c) nie nemusí",
                    "d) nie nemusí, ak ich výpovede o dopravnej nehode sú rovnaké"
                ],
                "correct": 0
            },
            {
                "q": "314. Môžu byť v správe o dopravnej nehode uvedené aj protichodné výpovede jej účastníkov?",
                "options": [
                    "a) áno môžu, ale len v prípade, ak ich každý z účastníkov podloží svedectvami minimálne 10 svedkov",
                    "b) áno môžu, ale len ak ide o nehodu medzi štátnymi príslušníkmi iných štátov a protichodnosť výpovedí vznikla z dôvodu používania rôznych cudzích jazykov účastníkmi dopravnej nehody",
                    "c) áno môžu",
                    "d) nie nemôžu"
                ],
                "correct": 2
            },
            {
                "q": "315. Aké úkony môže uskutočniť poisťovňa po odovzdaní správy o dopravnej nehode účastníkom nehody?",
                "options": [
                    "a) môže obhliadnuť vozidlo priamo odborníkom z poisťovne alebo zmluvnou spoločnosťou do 24 hodín od dopravnej nehody a len v prítomnosti polície",
                    "b) môže obhliadnuť vozidlo priamo odborníkom z poisťovne alebo zmluvnou spoločnosťou",
                    "c) poisťovňa nemôže podniknúť žiadne kroky okrem náhrady škody majiteľovi poškodeného vozidla",
                    "d) poisťovňa nemôže podniknúť žiadne kroky"
                ],
                "correct": 1
            },
            {
                "q": "316. Je Slovenská republika členským štátom medzinárodného poisťovacieho systému zelenej karty?",
                "options": [
                    "a) áno, je členským štátom systému zelenej karty",
                    "b) nie, nie je členským štátom systému zelenej karty",
                    "c) nie, ale je v štádiu prístupových rokovaní pre vstup do systému zelenej karty",
                    "d) nie, nie je členským štátom systému zelenej karty, pretože vstupom SR do EÚ systém zelenej karty v SR zanikol"
                ],
                "correct": 0
            },
            {
                "q": "317. Čo je úlohou Schengenského informačného systému?",
                "options": [
                    "a) získavanie informácií o platcoch DPH v rámci EÚ",
                    "b) podávanie hlásení v systéme Intrastat",
                    "c) získavanie a spracovávanie informácií o výkonoch jednotlivých druhov dopráv od národných štatistických úradov",
                    "d) riadenie kontroly vonkajších hraníc EÚ"
                ],
                "correct": 3
            },
            {
                "q": "318. Ktorá hranica je z hľadiska nelegálnej imigrácie do SR najrizikovejšia?",
                "options": [
                    "a) medzi SR a ČR",
                    "b) medzi SR a Ukrajinou",
                    "c) medzi SR a Maďarskom",
                    "d) medzi SR a Rakúskom"
                ],
                "correct": 1
            },
            {
                "q": "319. Ako má postupovať vodič pri medzinárodnej cestnej nákladnej doprave v prípade, ak má podozrenie, že v ložnom priestore vozidla sa nachádzajú ilegálni migranti?",
                "options": [
                    "a) informovať hneď po zistení prítomnosti ilegálnych migrantov najbližšie oddelenie polície",
                    "b) pokračovať v preprave do miesta vykládky a informovať o prítomnosti ilegálnych migrantov príjemcu tovaru",
                    "c) pokračovať v preprave do štátu vykládky, kde informovať o prítomnosti ilegálnych migrantov oddelenie polície",
                    "d) vodič nie je zodpovedný za ilegálnych migrantov, nemá povinnosť informovať oddelenie polície o ich prítomnosti"
                ],
                "correct": 0
            },
            {
                "q": "320. Ktorý z postupov je správny z pohľadu zabránenia pašovaniu ilegálnych prisťahovalcov v medzinárodnej cestnej nákladnej doprave?",
                "options": [
                    "a) vodič po dennom odpočinku zistil prerezanie plachty na streche návesu; o skutočnosti informoval dopravcu a políciu a nepokračoval v preprave",
                    "b) vodič po dennom odpočinku zistil prerezanie plachty na streche návesu; aby nezmokol tovar, dieru zašil a pokračoval v preprave",
                    "c) vodič po dennom odpočinku zistil prerezanie plachty na streche návesu; skutočnosť si zaznamenal v zázname o prevádzke vozidla, informoval dopravcu a čakal na ďalšie pokyny dopravcu",
                    "d) vodič po dennom odpočinku zistil prerezanie plachty na streche návesu; informoval o tom políciu a čakal na jej ďalšie pokyny"
                ],
                "correct": 0
            },
            {
                "q": "321. Čo hrozí vodičovi cestnej nákladnej dopravy, ak by mu bolo preukázané zapojenie do pašovania ilegálnych prisťahovalcov?",
                "options": [
                    "a) pokuta vo výške 3500 EUR",
                    "b) odňatie kvalifikačnej karty vodiča na 2 roky",
                    "c) až trest odňatia slobody",
                    "d) odňatie kvalifikačnej karty vodiča na 2 roky a pokuta vo výške 3500 EUR"
                ],
                "correct": 2
            },
            {
                "q": "322. Môžu pracovníci Colnej správy v uniforme zastavovať nákladné vozidla?",
                "options": [
                    "a) len autobusy v blízkosti hraničných priechodov",
                    "b) len nákladné vozidlá s celkovou hmotnosťou nad 12 ton",
                    "c) nemôžu autobusy na pravidelných autobusových linkách",
                    "d) môžu na celom území SR"
                ],
                "correct": 3
            },
            {
                "q": "323. Ak má dopravca zavedenú minimálne sedembodovú kontrolu, ako prevenciu proti kriminalite a pašovaniu ilegálnych prisťahovalcov, ktoré úkony musí vodič pred nakládkou tovaru?",
                "options": [
                    "a) je povinná len pri preprave do tretích krajín a v rámci prepráv do štátov Európskej únie ju nemusí vodič vykonávať aj keď to požaduje odosielateľ,",
                    "b) skontroluje napríklad podlahu návesu, kabínu (úložné priestory), zadné dvere z vonku aj vnútra, strechu, čelo návesu, nádrž atď. a vykoná zápis do špeciálneho kontrolného listu alebo minimálne do prepravného dokladu",
                    "c) skontroluje podlahu návesu, kabínu (úložné priestory), zadné dvere z vonku aj vnútra, strechu, čelo návesu, nádrž o kontrole nemusí vykonať záznam",
                    "d) skontroluje odosielateľ za prítomnosti vodiča, napríklad podlahu návesu, kabínu (úložné priestory), zadné dvere z vonku aj vnútra, strechu, čelo návesu, nádrž atď. a vykoná zápis do špeciálneho kontrolného listu alebo minimálne do prepravného dokladu"
                ],
                "correct": 1
            },
            {
                "q": "324. Ktoré miesta predstavujú potenciálne najväčšie riziko útoku kriminálnych živlov na vodiča a vozidlo s tovarom?",
                "options": [
                    "a) autoservisy",
                    "b) nestrážené parkoviská",
                    "c) logistické centrá",
                    "d) trajekty"
                ],
                "correct": 1
            },
            {
                "q": "325. Ktoré opatrenie môže výrazne eliminovať útoky kriminálnych živlov na vodičov a vozidlá s tovarom?",
                "options": [
                    "a) nasadzovanie len dvojčlenných osádok",
                    "b) čerpanie pohonných látok len cez deň, nie v nočných hodinách",
                    "c) využívanie bezpečných parkovísk",
                    "d) zamestnávanie len fyzicky zdatných vodičov schopných odolať fyzickému útoku"
                ],
                "correct": 2
            },
            {
                "q": "326. Aké pokyny musí mať vodič pri preprave nebezpečných vecí?",
                "options": [
                    "a) musí vodič mať pri sebe všeobecné písomné pokyny podľa Dohody ADR od dopravnej firmy",
                    "b) vodič musí vedieť aké opatrenia vykonať , ak mu je vozidlo odcudzené",
                    "c) vodič nesmie nikde zastavovať, aby sa obmedzilo riziko vzniku nebezpečných situácií",
                    "d) nie sú žiadne zvláštne opatrenia"
                ],
                "correct": 0
            },
            {
                "q": "327. Kto zodpovedá za označenie prepravných obalov pri preprave nebezpečných vecí cestnou dopravou?",
                "options": [
                    "a) vždy dopravca",
                    "b) bezpečnostný technik dopravcu a osádka vozidla dopravcu, ktorá bude prepravovať nebezpečné veci",
                    "c) dispečer dopravcu za prítomnosti osádky vozidla dopravcu, ktorá bude prepravovať nebezpečné veci",
                    "d) odosielateľ nebezpečných vecí"
                ],
                "correct": 3
            },
            {
                "q": "328. Ktoré látky a predmety (tovar) sú považované za nebezpečné z pohľadu Dohody ADR?",
                "options": [
                    "a) sú to nebezpečné veci, ktoré sú hrozbou pre zdravie a život osôb",
                    "b) sú to nebezpečné veci, ktoré pre svoju jedovatosť, horľavosť, výbušnosť, samozápalnosť, infekčnosť, rádioaktívnosť alebo inú vlastnosť sú hrozbou pre zdravie a život osôb",
                    "c) sú to nebezpečné veci, ktoré pre svoju jedovatosť, horľavosť, výbušnosť, samozápalnosť, infekčnosť, rádioaktívnosť alebo inú vlastnosť sú hrozbou pre zdravie a život osôb, zvierat alebo rastlinstva, alebo pre zložky životného prostredia",
                    "d) sú to nebezpečné veci, ktoré sú hrozbou pre životné prostredie alebo niektoré jeho zložky"
                ],
                "correct": 2
            },
            {
                "q": "329. Čo sa zaradzuje tiež medzi nebezpečné veci?",
                "options": [
                    "a) všetok komunálny odpad",
                    "b) nebezpečné odpady",
                    "c) živé zvieratá",
                    "d) kovový šrot"
                ],
                "correct": 1
            },
            {
                "q": "330. Ako sa označujú nákladné vozidlá prepravujúce nebezpečné veci alebo nebezpečný odpad?",
                "options": [
                    "a) bielou tabuľou s písmenom v čiernej farbe „A\"",
                    "b) výstražným bezpečnostným nálepkami napr. horľavý náklad",
                    "c) základné označenie je výstražnou oranžovou tabuľou s čiernym orámovaním a pri preprave v napríklad v cisternách sa používa aj špeciálne číselné označenie podľa Dohody ADR a výstražné bezpečnostné značky",
                    "d) základné označenie je výstražnou oranžovou tabuľou s čiernym orámovaním vpredu, vzadu aj po stranách vozidlá"
                ],
                "correct": 2
            },
            {
                "q": "331. Akú povinnosť má dopravca pri preprave nebezpečných vecí pri preberaní sprievodnej listiny k tovaru?",
                "options": [
                    "a) označiť prepravné obaly bezpečnostnými značkami",
                    "b) preveriť sprievodnú listinu, prípadne ďalšie doklady, ktoré poskytol odosielateľ, z hľadiska, či nebezpečné veci možno v cestnej doprave prepravovať, a ak áno, akými vozidlami a za akých podmienok",
                    "c) preveriť obsah prepravovaných vecí chemickým rozborom",
                    "d) oznámiť odosielateľovi, kedy bude tovar dodaný príjemcovi"
                ],
                "correct": 1
            },
            {
                "q": "332. Kto sa musí oboznámiť s písomnými pokynmi na prepravu a manipuláciu s nebezpečnými vecami?",
                "options": [
                    "a) iba prepravca",
                    "b) iba dopravca",
                    "c) iba osádka vozidla",
                    "d) osádka vozidla, prípadne sprievodných vozidiel, ako aj ďalšie osoby, ktoré sa zúčastňujú na nakládke a vykládke nebezpečných vecí alebo na inej manipulácii s nimi"
                ],
                "correct": 3
            },
            {
                "q": "333. Aké doklady musí mať vodič pri preprave nebezpečných vecí vo vozidle?",
                "options": [
                    "a) sprievodnú listinu a písomné pokyny odosielateľa na prepravu nebezpečných vecí",
                    "b) sprievodnú listinu a písomné pokyny odosielateľa na prepravu nebezpečných vecí, osvedčenia o školení a skúške osádky vozidla",
                    "c) sprievodnú listinu a písomné pokyny od dopravcu podľa Dohody ADR, platné osvedčenia o školení a skúške podľa Dohody ADR",
                    "d) sprievodnú listinu a písomné pokyny odosielateľa na prepravu nebezpečných vecí, osvedčenia o školení a skúške osádky vozidla nie je povinné mať vo vozidle"
                ],
                "correct": 2
            },
            {
                "q": "334. Čo je základnou povinnosťou osádky vozidla pred započatím prepravy nebezpečných vecí?",
                "options": [
                    "a) oboznámiť sa s pokynmi pre prípad nehody podľa Dohody ADR",
                    "b) oboznámiť sa s trasou prepravy",
                    "c) skontrolovať správne hustenie pneumatík",
                    "d) označiť prepravné obaly bezpečnostnými značkami"
                ],
                "correct": 0
            },
            {
                "q": "335. Kde je to vhodné, musí byť vozidlo alebo kontajner vybavený",
                "options": [
                    "a) zariadením na zaznamenanie práce vodiča",
                    "b) zariadením na monitorovanie vlhkosti nákladu",
                    "c) zariadením obmedzujúcim rýchlosť jazdy vozidla",
                    "d) zariadením na uľahčenie zabezpečenia a manipulácie s nebezpečnými vecami"
                ],
                "correct": 3
            },
            {
                "q": "336. Obaly obsahujúce nebezpečné látky a nezabalené nebezpečné predmety sa musia zaistiť?",
                "options": [
                    "a) sa môžu prepravovať bez ohľadu na druh obalu",
                    "b) vhodnými prostriedkami schopnými zadržať veci (takými ako, upevňovacie pásy (,,gurtne\"), klzné lišty, nastaviteľné konzoly) vo vozidle alebo v kontajneri spôsobom, ktorý bude brániť akémukoľvek pohybu počas prepravy, ktorý by mohol zmeniť orientáciu obalu alebo spôsobiť ich poškodenie.",
                    "c) sa nemusia zaistiť vhodnými prostriedkami schopnými zadržať veci (takými ako, upevňovacie pásy (,,gurtne\"), klzné lišty, nastaviteľné konzoly) vo vozidle alebo v kontajneri",
                    "d) sa môžu otvárať ak si to vyžadujú okolnosti"
                ],
                "correct": 1
            },
            {
                "q": "337. Nebezpečné veci prepravované s inými vecami (napríklad ťažké mechanizmy alebo dopravné klietky) musia byť ako zabezpečené?",
                "options": [
                    "a) nemožno prepravovať",
                    "b) možno prepravovať len na základe schválenia povereným orgánom",
                    "c) musia byť pevne zabezpečené alebo zabalené vo vozidlách alebo v kontajneroch tak, aby bolo zabránené úniku nebezpečných vecí",
                    "d) musia byť poistené v prípade dopravnej nehody"
                ],
                "correct": 2
            },
            {
                "q": "338. Ako vplýva sprísňovanie emisných limitov vozidiel cestnej dopravy na produkciu emisií škodlivín vo výfukových plynoch?",
                "options": [
                    "a) sprísňovaním emisných limitov sa množstvo produkovaných škodlivín vo výfukových plynoch vozidla znižuje",
                    "b) sprísňovaním emisných limitov sa množstvo produkovaných škodlivín vo výfukových plynoch vozidla zvyšuje",
                    "c) sprísňovanie emisných limitov nemá vplyv na množstvo produkovaných škodlivín vo výfukových plynoch vozidla",
                    "d) emisné limity vozidiel sa sprísňujú len vtedy, ak s tým súhlasí dopravca"
                ],
                "correct": 0
            },
            {
                "q": "339. Aké ochranné pracovné pomôcky by mal použiť vodič pri nakládke a vykládke sypkých substrátov ohrozujúcich prašnosťou jeho zdravie?",
                "options": [
                    "a) respirátor a ochranné okuliare, ak je viditeľnosť menšia ako 5 metrov",
                    "b) len respirátor",
                    "c) respirátor a ochranné okuliare alebo ochrannú masku, ale len ak nakládka alebo vykládka trvá viac ako 1 hodinu",
                    "d) respirátor a ochranné okuliare alebo ochrannú masku"
                ],
                "correct": 3
            },
            {
                "q": "340. Kde musí byť bezpečnostný reflexný odev napríklad vesta, overal, nohavice, bunda alebo pláštenka?",
                "options": [
                    "a) bezpečnostný reflexný odev sa umiestňuje vo vozidle, je to na vodičovi",
                    "b) nie je to predpísané",
                    "c) bezpečnostný reflexný odev sa umiestňuje v uzamykateľnej skrine, ktorá nemusí byť v dosahu zo sedadla vodiča vozidla",
                    "d) bezpečnostný reflexný odev sa umiestňuje v dosahu zo sedadla vodiča vozidla"
                ],
                "correct": 3
            },
            {
                "q": "341. Aké hasiace prístroje sú povinnou výbavou motorového vozidla kategórie N2 a N3 ?",
                "options": [
                    "a) len jeden hasiaci prístroj, ktorého celková hmotnosť náplne je najmenej 10 kg",
                    "b) jeden alebo viac hasiacich prístrojov, ktorých celková hmotnosť náplní je najmenej 6 kg",
                    "c) jeden alebo viac hasiacich prístrojov, ktorých celková hmotnosť náplní je najmenej 10 kg",
                    "d) len jeden hasiaci prístroj, ktorého celková hmotnosť náplne je najmenej 12 kg"
                ],
                "correct": 1
            },
            {
                "q": "342. Hasiace prístroje musia byť umiestnené na dobre viditeľnom a ľahko prístupnom mieste",
                "options": [
                    "a) pričom musia byť chránené proti krádeži zámkom",
                    "b) pričom umiestnenie nie je to predpísané",
                    "c) pričom jeden musí byť v dosahu zo sedadla vodiča vozidla",
                    "d) pričom všetky musia byť v dosahu zo sedadla vodiča vozidla"
                ],
                "correct": 2
            },
            {
                "q": "343. Pokiaľ cúvanie zabezpečuje iná osoba, aká je základná požiadavka na vodiča?",
                "options": [
                    "a) vodič môže cúvanie dokončiť, ak vie správne odhadnúť vzdialenosť",
                    "b) vodič musí nacúvať k miestu nakládky alebo vykládky s presnosťou 5 cm",
                    "c) vodič musí vozidlo okamžite zastaviť, pokiaľ sa mu táto osoba stratí z výhľadu",
                    "d) musí dávať pozor na iné zaparkované vozidlá"
                ],
                "correct": 2
            },
            {
                "q": "344. Ak je nevyhnutné vystúpiť na ložný priestor vozidla alebo z neho zostúpiť, musí sa použiť",
                "options": [
                    "a) výťah",
                    "b) pohyblivé schody",
                    "c) rebrík alebo iné rovnocenné zariadenie",
                    "d) hydraulická plošina"
                ],
                "correct": 2
            },
            {
                "q": "345. Ak je nevyhnutné vystúpiť na ložný priestor vozidla alebo z neho zostúpiť, musí vodič byť vybavený",
                "options": [
                    "a) ochrannými okuliarmi",
                    "b) pracovnou obuvou",
                    "c) firemným oblečením",
                    "d) pracovným oblečením"
                ],
                "correct": 1
            },
            {
                "q": "346. Ktorú alternatívu musí zvoliť vodič, pri trasovaní prepravy v cestnej nákladnej doprave pomocou elektronického navigačného systému, aby trasa viedla prevažne po tranzitných cestách vyššej triedy, diaľniciach a rýchlostných cestách?",
                "options": [
                    "a) najkratšia cesta",
                    "b) najrýchlejšia cesta",
                    "c) trasovanie mimo cestnej siete",
                    "d) trasovanie - priama cesta"
                ],
                "correct": 1
            },
            {
                "q": "347. Je možné nastavovať elektronický navigačný systém vodičom počas jazdy?",
                "options": [
                    "a) vodič počas jazdy nemôže nastavovať elektronický navigačný systém",
                    "b) vodič môže nastavovať elektronický navigačný systém počas jazdy iba v obci",
                    "c) vodič môže nastavovať elektronický navigačný systém počas jazdy iba mimo obce",
                    "d) vodič počas jazdy môže nastavovať elektronický navigačný systém"
                ],
                "correct": 0
            },
            {
                "q": "348. Umožňuje elektronický navigačný systém aj hlasovú navigáciu?",
                "options": [
                    "a) nie neumožňuje",
                    "b) umožňuje, ale iba mimo miest a obcí",
                    "c) umožňuje, ale iba v území miest a obcí",
                    "d) áno, umožňuje hlasovú navigáciu"
                ],
                "correct": 3
            },
            {
                "q": "349. Ktorý druh dopravy ma najväčší podiel na preprave nákladu v Slovenskej republike?",
                "options": [
                    "a) železničná doprava",
                    "b) cestná doprava",
                    "c) vodná doprava",
                    "d) letecká doprava"
                ],
                "correct": 1
            },
            {
                "q": "350. V každom prevádzkovanom vozidle nákladnej dopravy nad 2,5 tony celkovej hmotnosti používanom podnikanie v cestnej nákladnej doprave musí byť aký doklad podľa zákona o cestnej doprave?",
                "options": [
                    "a) doklad o udelenom povolení živnostenského úradu",
                    "b) doklad o udelenom povolení vykonávať prevádzkovateľa vnútroštátnej nákladnej dopravy",
                    "c) doklad o udelenom povolení vykonávať prevádzkovateľa vnútroštátnej nákladnej dopravy a vždy aj licencii Spoločenstva aj keď vykonáva vnútroštátnu dopravu",
                    "d) doklad o udelenom povolení vykonávať prevádzkovateľa vnútroštátnej nákladnej dopravy alebo o licencii Spoločenstva"
                ],
                "correct": 3
            },
            {
                "q": "351. Čo patrí do budovania imidžu podniku z hľadiska vodiča?",
                "options": [
                    "a) dodržiavanie pracovného manuálu vodiča a napr. nosenie predpísaného firemného oblečenia pri styku so zákazníkmi",
                    "b) dodržiavanie legislatívy a napr. nosenie pevnej obuvi pri styku so zákazníkmi",
                    "c) čistota v kabíne vozidla",
                    "d) čistota vozidla a vystupovanie vodiča; na oblečení vodiča nezáleží"
                ],
                "correct": 0
            },
            {
                "q": "352. Čo sa vyžaduje pri nakládke alebo vykládke tovaru v podnikových areáloch zákazníkov?",
                "options": [
                    "a) odplachtovanie vozidla pred nakládkou a dodržiavanie maximálnej dovolenej rýchlosti 50 km/h",
                    "b) odplachtovanie vozidla pred nakládkou a dodržiavanie maximálnej dovolenej rýchlosti 30 km/h, ktorá je v podnikových areáloch v SR rovnaká",
                    "c) dodržiavanie prevádzkového poriadku zákazníka, bezpečnostných opatrení a dopravného značenia",
                    "d) v uzavretých areáloch neplatia dopravné predpisy a tak nie je potrebné ich dodržiavať, je potrebné mať však len obuv s pevnou špičkou"
                ],
                "correct": 2
            },
            {
                "q": "353. Čo znamená skratka ROLA?",
                "options": [
                    "a) preprava nákladných automobilov riečnou dopravou",
                    "b) preprava kontajnerov riečnou dopravou",
                    "c) preprava kontajnerov po železnici",
                    "d) preprava nákladných automobilov a návesových a jazdných súprav po železnici"
                ],
                "correct": 3
            },
            {
                "q": "354. Na akom vozidle je možné prepravovať štyridsať stopový kontajner (ISO 1A)?",
                "options": [
                    "a) prívesovou súpravou so špeciálnym prívesom na prepravu kontajnerov",
                    "b) návesovou súpravou so špeciálnym návesom na prepravu kontajnerov",
                    "c) valníkovým vozidlom",
                    "d) bežným plachtovým návesom"
                ],
                "correct": 1
            },
            {
                "q": "355. Čo znamená nesprevádzaná kombinovaná doprava?",
                "options": [
                    "a) preprava intermodálnych návesov alebo výmenných nadstavieb z miesta nakládky do miesta vykládky",
                    "b) preprava kontajnerov riečnou dopravou",
                    "c) preprava kontajnerov po železnici",
                    "d) preprava intermodálnych návesov alebo výmenných nadstavieb železničnou alebo vodnou dopravou, pričom cestná doprava zabezpečuje prepravu do a z intermodálnych terminálov"
                ],
                "correct": 3
            },
            {
                "q": "356. Aký doklad má vodič obdržať po nakládke intermodálnych nákladných jednotiek v Slovenskej republike od nakladajúcej organizácie?",
                "options": [
                    "a) vyhlásenie o hmotnosti, ktoré je potrebné len pri nakládke a preprave kontajnerov",
                    "b) vyhlásenie o hmotnosti a vonkajších rozmeroch, ktoré je súčasťou dokladov ustanovených na vedenie vozidla v cestnej premávke",
                    "c) nie je potrebný žiadny špeciálny doklad; postačuje nákladný list",
                    "d) vyhlásenie o hmotnosti, ktoré je súčasťou dokladov ustanovených na vedenie vozidla v cestnej premávke"
                ],
                "correct": 3
            },
            {
                "q": "357. Čo je intermodálnou nákladnou jednotkou podľa predpisov v Slovenskej republike?",
                "options": [
                    "a) kontajner",
                    "b) kontajner alebo výmenná nadstavba",
                    "c) kontajner, výmenná nadstavba, náves alebo podobná nákladná jednotka vhodná pre intermodálnu prepravu",
                    "d) kontajner, výmenná nadstavba, ťahač s návesom, náves alebo podobná nákladná jednotka vhodná pre intermodálnu prepravu"
                ],
                "correct": 2
            },
            {
                "q": "358. Vo všetkých štátoch Európy sa jazdí vpravo?",
                "options": [
                    "a) áno",
                    "b) nie, vľavo sa jazdí vo Fínsku",
                    "c) nie, vľavo sa jazdí vo Veľkej Británii a Malte",
                    "d) nie, len v štátoch Európskej únie"
                ],
                "correct": 2
            },
            {
                "q": "359. Akú infraštruktúru je potrebné použiť na prepravu do Veľkej Británie?",
                "options": [
                    "a) diaľničnú sieť Európy",
                    "b) okrem ciest je potrebné využiť trajekt alebo Eurotunel pod Lamanšským prieplavom, ktorý prepravuje nákladné automobily po železnici",
                    "c) okrem diaľnic je možné využiť trajekty z prístavu Hamburg",
                    "d) okrem diaľnic je možné využiť len podmorský tunel pre cestnú dopravu"
                ],
                "correct": 1
            },
            {
                "q": "360. Pri preprave kontajnerov v rámci kombinovanej dopravy v Slovenskej republike cesta-železnica je maximálna dovolená hmotnosť cestného vozidla so 40 stopovým kontajnerom ISO 1 A?",
                "options": [
                    "a) 40 ton",
                    "b) 38 ton",
                    "c) 44 ton",
                    "d) 50 ton"
                ],
                "correct": 2
            },
            {
                "q": "361. Aké činnosti môže vykonávať zasielateľ (špeditér)?",
                "options": [
                    "a) výroba",
                    "b) marketing a reklama",
                    "c) organizovanie expedície výrobkov pre výrobné firmy",
                    "d) recyklácia zásielok"
                ],
                "correct": 2
            },
            {
                "q": "362. Pre potreby pomocných činnosti pri rozvoze tovaru priamo k zákazníkom sa vyžaduje aby vozidlo bolo vybavené tzv. satelitným vysokozdvižným vozíkom. Aké sú požiadavky na vodiča ak ho má obsluhovať?",
                "options": [
                    "a) postačuje vodičský preukaz skupiny C a školenie vodiča",
                    "b) postačuje vodičský preukaz skupiny C a E a školenie vodiča na odbornú spôsobilosť",
                    "c) vyžaduje sa preukaz vodiča motorového vysokozdvižného vozíka, tiež po nakládke vodičom je potrebné dodržiavať predpísanú bezpečnostnú prestávku",
                    "d) vyžaduje sa preukaz vodiča motorového vysokozdvižného vozíka, prácu s vozíkom je možné zahrnúť do predpísanú bezpečnostnej prestávky"
                ],
                "correct": 2
            },
            {
                "q": "363. Čo sa nezapočítava do celkovej dĺžky vozidla (jazdnej súpravy)?",
                "options": [
                    "a) Nafúknutá plachta, na ktorú sa opiera prepravovaný náklad, ak nepresahuje vozidlo o viac ako 0,5 metra",
                    "b) dĺžka satelitného vozíka, ktorý je prepravnej polohe namontovaný vzadu na vozidle, ak nepresahuje vozidlo o viac ako 1,5 metra",
                    "c) dĺžka satelitného vozíka, ktorý je prepravnej polohe namontovaný vzadu na vozidle, ak nepresahuje vozidlo o viac ako 2 metre",
                    "d) dĺžka satelitného vozíka, ktorý je prepravnej polohe namontovaný vzadu na vozidle, ak nepresahuje vozidlo o viac ako 1,2 metra"
                ],
                "correct": 3
            },
            {
                "q": "364. Ktoré druhy tovarov sú prepravované cestnou nákladnou dopravou?",
                "options": [
                    "a) cestná doprava prepravuje takmer všetky tovarové skupiny",
                    "b) cestná doprava prepravuje len vybrané tovarové skupiny, najmä potraviny",
                    "c) vozidlá kategórie N1 prepravujú výhradne potraviny, vozidlá kategórií N2 a N3 sa používajú pre prepravu takmer všetkých tovarových skupín",
                    "d) cestná doprava prepravuje len tie tovarové skupiny, ktoré je možné prepravovať na paletách"
                ],
                "correct": 0
            },
            {
                "q": "365. Môže zasielateľ rozhodnúť o druhu dopravy, ktorý sa použiť pre vykonanie prepravy?",
                "options": [
                    "a) nie nemôže",
                    "b) môže v prípade, ak s tým súhlasí vodič",
                    "c) áno môže",
                    "d) môže, ak s tým súhlasí Zväz logistiky a zasielateľstva SR"
                ],
                "correct": 2
            },
            {
                "q": "366. Aký je vzájomný vzťah dopravných organizácií a zasielateľských firiem zameraných na obstarávanie prepráv?",
                "options": [
                    "a) ide o podniky vzájomne spolupracujúce",
                    "b) ide o podniky, ktoré pri ich podnikateľskej činnosti neprichádzajú do obchodného styku",
                    "c) ide o podniky vzájomne si konkurujúce",
                    "d) ide o podniky, ktoré pri ich podnikateľskej činnosti prichádzajú do obchodného styku len výnimočne, pretože zasielatelia pôsobia výhradne na medzinárodnej úrovni, kým dopravcovia len na vnútroštátnej úrovni"
                ],
                "correct": 0
            },
            {
                "q": "367. Ktoré podniky realizujú dopravu pre vlastné potreby?",
                "options": [
                    "a) tie, ktoré vznikli výhradne za účelom poskytovania prepravných služieb",
                    "b) len tie, ktoré vykonávajú medzinárodné prepravy",
                    "c) len tie, ktoré prevádzkujú vozidlá kategórie N3",
                    "d) tie, v ktorých výkony cestnej dopravy podporujú ich hlavnú podnikateľskú činnosť"
                ],
                "correct": 3
            },
            {
                "q": "368. Čo by mal vyžadovať zamestnávateľ od vodiča pri kontakte so zákazníkom?",
                "options": [
                    "a) okamžitý výber hotovosti ako odplatu za poskytnuté prepravné služby",
                    "b) správanie a vystupovanie v súlade s vnútropodnikovými predpismi a zásadami slušného správania a pokynmi zákazníka",
                    "c) používanie cudzích jazykov",
                    "d) používanie ochranných pracovných pomôcok"
                ],
                "correct": 1
            },
            {
                "q": "369. Aký prínos môže mať pre podnik vhodné správanie sa vodiča voči zákazníkom, resp. okoliu podniku?",
                "options": [
                    "a) vhodné správanie vodiča voči zákazníkom má pre podnik zanedbateľný prínos, avšak v zmysle Etického kódexu združenia ČESMAD Slovakia sa od vodiča očakáva",
                    "b) vhodné správanie vodiča voči zákazníkom nemá pre podnik žiadny prínos",
                    "c) vhodné správanie vodiča voči zákazníkom môže mať pre dopravcu prínos v možnosti zvýšenia ceny za prepravu zo strany dopravcu",
                    "d) vhodným správaním voči zákazníkom vodič reprezentuje podnik, buduje renomé (imidž) podniku a napomáha udržať si zákazníka"
                ],
                "correct": 3
            },
            {
                "q": "370. Ako sa nazýva osoba v dopravnej organizácii, ktorá má osvedčenie odbornej spôsobilosti pre cestnú nákladnú dopravu a prevádzkovateľ dopravy ju vymenoval, aby zabezpečil plnenie požiadavky na odbornú spôsobilosť?",
                "options": [
                    "a) dopravný riaditeľ",
                    "b) vedúci dopravy",
                    "c) vedúci logistiky",
                    "d) bezpečnostný poradca"
                ],
                "correct": 1
            },
            {
                "q": "371. Ktoré prepravy musí dopravca vykonávať podľa prepravného poriadku?",
                "options": [
                    "a) prepravy vykonávané iba v osobnej doprave, v nákladnej doprave sa prepravný poriadok nevyhotovuje",
                    "b) prepravy vykonávané iba v medzinárodnej doprave, vo vnútroštátnej doprave sa prepravný poriadok nevyhotovuje",
                    "c) prepravy vykonávané iba v osobnej doprave a v medzinárodnej nákladnej doprave, vo vnútroštátnej nákladnej doprave sa prepravný poriadok nevyhotovuje",
                    "d) všetky prepravy"
                ],
                "correct": 3
            },
            {
                "q": "372. Akým spôsobom môže byť vyhotovené označenie vozidiel obchodným menom dopravcu?",
                "options": [
                    "a) označenie sa vyhotoví podľa možnosti dopravcu",
                    "b) označenie sa vyhotoví len mechanicky pripevnenou tabuľkou",
                    "c) označenie sa vyhotoví nezmazateľne písmomaliarsky na karosériu iný spôsob označenia nie je dovolený",
                    "d) označenie sa vyhotoví nezmazateľne písmomaliarsky na karosériu alebo použitím samolepiacej nálepky, prípadne mechanicky pripevnenou tabuľkou"
                ],
                "correct": 3
            },
            {
                "q": "373. Čo je základnou povinnosťou dopravcu pri hromadnej preprave živých zvierat?",
                "options": [
                    "a) dopravca je povinný zabezpečiť napojenie prepravovaných živých a ochrániť ich pred týraním",
                    "b) dopravca je povinný mať schválené dopravné a prepravné prostriedky a musí mať vyškolené osádky a odborne spôsobilého vedúceho dopravy na prepravu príslušnej kategórie živých zvierat a musí byť zapísaný v elektronickom registri dopravcov, ktorý vedie Ministerstvo dopravy SR",
                    "c) dopravca je povinný mať schválené dopravné a prepravné prostriedky a musí mať vyškolené osádky a odborne spôsobilú osobu na prepravu príslušnej kategórie živých zvierat a musí byť zapísaný v elektronickom registri dopravcov, ktorý vedie Štátna veterinárna a potravinová správa SR",
                    "d) dopravca je povinný mať schválené dopravné a prepravné prostriedky a musí mať odborne spôsobilú osobu na prepravu príslušnej kategórie živých zvierat a musí byť zapísaný v elektronickom registri dopravcov, ktorý vedie Štátna veterinárna a potravinová správa SR"
                ],
                "correct": 2
            },
            {
                "q": "374. Ako musí byť označené vozidlo, ktoré prepravuje živé zvieratá?",
                "options": [
                    "a) oranžovou tabuľou s čiernym orámovaním",
                    "b) oranžovou tabuľou s čiernym orámovaním umiestnenou na prednom a zadnom čele vozidla",
                    "c) nápisom „Preprava živých zvierat\"",
                    "d) nemusí byť označené"
                ],
                "correct": 2
            },
            {
                "q": "375. Aká je maximálna doba platnosti licencie spoločenstva pre medzinárodnú cestnú dopravu v SR, ktoré platí pre všetky štáty Európskej únie?",
                "options": [
                    "a) neobmedzená",
                    "b) 1 rok",
                    "c) 10 rokov",
                    "d) 5 rokov"
                ],
                "correct": 2
            },
            {
                "q": "376. Ktoré z uvedených druhov tovarov sa musia prepravovať pod kontrolovanou teplotou?",
                "options": [
                    "a) všetok horľavý tovar",
                    "b) rádioaktívne látky",
                    "c) potraviny podliehajúce skaze",
                    "d) všetky poľnohospodárske výrobky"
                ],
                "correct": 2
            },
            {
                "q": "377. Aká musí byť teplota skaziteľných potravín v priebehu ich prepravy?",
                "options": [
                    "a) nesmie prekročiť teplotu 18 °C",
                    "b) smie len krátkodobo prestúpiť predpísanú teplotu podľa Dohody ATP a to najviac o 3 °C",
                    "c) smie len krátkodobo prestúpiť predpísanú teplotu podľa Dohody ATP a to najviac o 8 °C",
                    "d) smie len krátkodobo prestúpiť predpísanú teplotu podľa Dohody ATP a to najviac o 10 °C"
                ],
                "correct": 1
            },
            {
                "q": "378. Ako dlho po úspešnom vykonaní kontroly prepravnej skrine podľa Dohody ATP platí vydané osvedčenie o splnení podmienok?",
                "options": [
                    "a) šesť mesiacov",
                    "b) jedného roka",
                    "c) troch rokov",
                    "d) maximálne šesť rokov"
                ],
                "correct": 3
            },
            {
                "q": "379. Aké druhy dopravných a prepravných prostriedkov musia byť používané pre prepravu skaziteľných potravín?",
                "options": [
                    "a) len izotermické",
                    "b) len chladiarenské návesy",
                    "c) dopravné a prepravné prostriedky skriňové aj valníkové s plachtou",
                    "d) izotermické, chladené, chladiace a mraziace a vyhrievacie"
                ],
                "correct": 3
            },
            {
                "q": "380. Za akých podmienok je možno disponovať so skaziteľnými potravinami ak došlo v priebehu prepravy k nesplneniu predpísaných teplotných podmienok?",
                "options": [
                    "a) za žiadnych podmienok nie je možno disponovať so skaziteľnými potravinami,",
                    "b) za podmienky, že k prekročeniu teploty nad povolenú hranicu došlo len raz",
                    "c) za podmienky vydania povolenia príslušného orgánu zmluvného štátu k ďalšej dispozícii s tovarom v súlade s hygienickými požiadavkami",
                    "d) za podmienky, že k prekročeniu teploty nad povolenú hranicu došlo najviac dvakrát, pričom hodnota prekročenia teploty nedosiahla nikdy 20°C"
                ],
                "correct": 2
            },
            {
                "q": "381. Kto vykonáva schvaľovanie vozidiel podľa dohody ATP?",
                "options": [
                    "a) Stanice technickej kontroly vozidiel",
                    "b) Ministerstvo dopravy SR",
                    "c) Slovenská poľnohospodárska a potravinárska inšpekcia",
                    "d) autorizovaná skúšobňa, oprávnená členskou stranou Dohody ATP k vykonávaniu týchto kontrol,"
                ],
                "correct": 3
            },
            {
                "q": "382. Kde sa na vozidlo pre medzinárodnú cestnú prepravu skaziteľných potravín umiestni certifikačný štítok?",
                "options": [
                    "a) na dobré viditeľné miesto k ostatným úradne vydaným schvaľovacím štítkom",
                    "b) na zadné čelo vozidla",
                    "c) nie je to ustanovené",
                    "d) zásadne za čelné sklo vozidla"
                ],
                "correct": 0
            },
            {
                "q": "383. Čo znamená prvé písmeno v rozlišovacej značke vozidla (napr. FRC) pre prepravu skaziteľných potravín?",
                "options": [
                    "a) zosilnená izolácia",
                    "b) druh chladiacej jednotky",
                    "c) základnú kategóriu vozidla",
                    "d) normálna izolácia"
                ],
                "correct": 2
            },
            {
                "q": "384. Čo znamená druhé písmeno v rozlišovacej značke vozidla (napr. FRC) pre prepravu skaziteľných potravín?",
                "options": [
                    "a) druh chladiacej jednotky",
                    "b) základnú kategóriu vozidla",
                    "c) normálnu alebo zosilnenú tepelnú izoláciu skrine vozidla alebo návesu",
                    "d) základnú kategóriu návesu"
                ],
                "correct": 2
            },
            {
                "q": "385. Čo znamená tretie písmeno v rozlišovacej značke vozidla (napr. FRC) pre prepravu skaziteľných potravín?",
                "options": [
                    "a) základnú kategóriu návesu",
                    "b) druh chladiacej jednotky",
                    "c) základnú kategóriu vozidla",
                    "d) triedu určujúcu schopnosť udržania určitého stupňa vnútornej teploty"
                ],
                "correct": 3
            },
            {
                "q": "386. Sú predpísané teplotné podmienky pri preprave mrazených a hlboko zmrazených potravín v Slovenskej republike?",
                "options": [
                    "a) orientačne sú uvedené v Dohode medzinárodnej preprave skaziteľných potravín a o špecializovaných dopravných a prepravných prostriedkoch používaných na túto prepravu (ATP)",
                    "b) nie závisia od zákazníka, ktorý teplotu napíše do objednávky prepravy",
                    "c) sú predpísané a uvedené v Dohode medzinárodnej preprave skaziteľných potravín a o špecializovaných dopravných a prepravných prostriedkoch používaných na túto prepravu (ATP)",
                    "d) sú predpísané a uvedené v Dohode medzinárodnej preprave skaziteľných potravín a o špecializovaných dopravných a prepravných prostriedkoch používaných na túto prepravu (ADR)"
                ],
                "correct": 2
            },
            {
                "q": "387. Platí Dohoda o medzinárodnej preprave skaziteľných potravín a o špecializovaných dopravných a prepravných prostriedkoch používaných na túto prepravu (ATP) len na medzinárodnú prepravu?",
                "options": [
                    "a) Je to dohoda o medzinárodnej preprave skaziteľných potravín a o špecializovaných dopravných a prepravných prostriedkoch používaných na túto prepravu (ATP) a preto platí len na medzinárodnú prepravu",
                    "b) Dohoda ATP platí v Slovenskej republike na medzinárodnú prepravu do a cez členské štáty Dohody ATP a aj vnútroštátnu prepravu skaziteľných potravín",
                    "c) Dohoda ATP platí v Slovenskej republike na medzinárodnú prepravu do štátov EÚ aj vnútroštátnu prepravu skaziteľných potravín",
                    "d) Je to dohoda o medzinárodnej preprave skaziteľných potravín a o špecializovaných dopravných a prepravných prostriedkoch používaných na túto prepravu (ATP) a preto platí len na medzinárodnú prepravu všetkých potravín"
                ],
                "correct": 1
            },
            {
                "q": "388. Je potrebné zaznamenávať pravidelné čistenie a dezinfekciu ložného priestoru vozidla určeného na prepravu potravín?",
                "options": [
                    "a) len pri preprave mrazeného mäsa",
                    "b) áno, z dôvodu preukázania dodržiavania hygienických predpisov",
                    "c) nie je to potrebné",
                    "d) len ak to požaduje zákazník"
                ],
                "correct": 1
            },
            {
                "q": "389. Môžu zákazníci pred nakládkou požadovať dôkladne vymytie cisternového vozidla používaného na prepravu mlieka a ktorý doklad o vymytí a vyčistení cisterny vrátane jej príslušenstva, je hodnoverný pre zákazníkov v Európe?",
                "options": [
                    "a) stačí vyčistenie zo strany dopravcu a preukáže sa vlastným interným dokladom,",
                    "b) nemôžu to požadovať",
                    "c) môžu ak to uvedú do objednávky prepravy alebo zmluve o preprave a uznávaný je Európsky doklad o vyčistení (ECD), ktorý vydávajú schválené čističky",
                    "d) môžu ak to uvedú do objednávky prepravy alebo zmluve o preprave a uznávaný je každý doklad o vyčistení z čističiek cisterien"
                ],
                "correct": 2
            },
            {
                "q": "390. Pri preprave potravín aké môžu byť dodatočné požiadavky na vodiča?",
                "options": [
                    "a) dobrý zdravotný stav",
                    "b) predloženie platného Zdravotného preukazu pracovníka v potravinárstve",
                    "c) dobré fyzické predpoklady a psychická spôsobilosť",
                    "d) používanie špeciálnych rukavíc pri nakládke tovaru"
                ],
                "correct": 1
            },
            {
                "q": "391. Čo je to tarifa v doprave?",
                "options": [
                    "a) podmienky, za ktorých sa uskutoční preprava",
                    "b) je to cena za prepravu a podmienky za ktorých sa táto cena použije",
                    "c) sadzba za prepravu",
                    "d) mzda za realizovanú prepravu"
                ],
                "correct": 1
            },
            {
                "q": "392. Aký je význam kalkulácie vlastných nákladov a kalkulácia ceny v trhovej ekonomike?",
                "options": [
                    "a) kalkulácia slúži pre výpočet miezd vodiča",
                    "b) kalkulácia slúži pre stanovenie ceny a tiež kontrolu hospodárnosti dopravcu",
                    "c) kalkulácia slúži pre výpočet dane z príjmov",
                    "d) kalkulácia slúži pre správne vyplnenie účtovných výkazov a následný správny výpočet výšky dane z príjmov dopravcu"
                ],
                "correct": 1
            },
            {
                "q": "393. Ako sa stanovuje cena za konkrétnu prepravu?",
                "options": [
                    "a) podľa dohody medzi prepravcom a dopravcom",
                    "b) cena je stanovená záväznou tarifou",
                    "c) dopravca je povinný cenu stanoviť v závislosti od hodnoty prepravovaných vecí",
                    "d) cenu stanovuje okresný úrad v sídle kraja"
                ],
                "correct": 0
            },
            {
                "q": "394. Na ktorom faktore sú závislé variabilné náklady (napr. náklady na pohonné hmoty)?",
                "options": [
                    "a) na počte hodín prevádzkovania vozidla",
                    "b) na počte dní prevádzkovania vozidla",
                    "c) na čase trvania nakládky a vykládky vozidla",
                    "d) na ubehnutej vzdialenosti s vozidlom"
                ],
                "correct": 3
            },
            {
                "q": "395. Ako sa dohoduje cena v cestnej nákladnej doprave?",
                "options": [
                    "a) pri uzatvorení zmluvy o preprave na základe ponuky a dopytu a tiež v nadväznosti na náklady dopravcu",
                    "b) na základe pevných cien stanovených tarifou vydávanou združením dopravcov",
                    "c) na základe odporúčaných cien, ktoré pre každý týždeň zverejňuje Ministerstvo hospodárstva SR",
                    "d) na základe pevných cien, ktoré pre každý týždeň zverejňuje Ministerstvo hospodárstva SR"
                ],
                "correct": 0
            },
            {
                "q": "396. Ovplyvňuje emisná trieda (EURO 1 až EURO 6) vozidla výšku nákladov na mýto v ČR?",
                "options": [
                    "a) nie, všetky vozidlá platia rovnaké sadzby za kilometer",
                    "b) nie, sadzby mýta závisia iba od celkovej hmotnosti vozidla",
                    "c) áno, ale len pri autobusovej doprave",
                    "d) áno, sadzby mýta závisia aj od emisnej triedy vozidla"
                ],
                "correct": 3
            },
            {
                "q": "397. Medzi aké náklady sa zaraďujú mýtne poplatky?",
                "options": [
                    "a) náklady nezávislé od ubehnutej vzdialenosti",
                    "b) náklady závislé od ubehnutej vzdialenosti",
                    "c) mýtne poplatky nepatria medzi náklady v cestnej doprave",
                    "d) ide o fixné náklady v cestnej doprave"
                ],
                "correct": 1
            },
            {
                "q": "398. Od čoho závisí výška stravného pri zahraničných pracovných cestách vodičov medzinárodnej cestnej dopravy podľa zákona o cestovných náhradách?",
                "options": [
                    "a) len od počtu štátov cez ktoré je vykonávaná",
                    "b) od počtu hodín strávenej na pracovnej ceste z miesta nakládky po miesto vykládky",
                    "c) od počtu hodín strávenej na pracovnej ceste počítaných po prekročení štátnych hraníc od výstupu až po vstup na územie SR",
                    "d) od počtu nakládok a počtu ubehnutých kilometrov v priebehu celej prepravy"
                ],
                "correct": 2
            },
            {
                "q": "399. Od čoho závisí výška minimálnej mzdy v SR?",
                "options": [
                    "a) od počtu odpracovaných rokov",
                    "b) od praxe",
                    "c) v prípade vodiča od počtu odpracovaných hodín v mesiaci a počtu ubehnutých kilometrov zverených vozidlom",
                    "d) je stanovená zákonom o minimálnej mzde"
                ],
                "correct": 3
            },
            {
                "q": "400. Ako sa kráti stravné v prípade, ak zamestnávateľ vodičovi pri pracovnej ceste bezplatne poskytne večeru?",
                "options": [
                    "a) o 20 %",
                    "b) o 25 %",
                    "c) o 35 %",
                    "d) o 40 %"
                ],
                "correct": 2
            },
            {
                "q": "401. Aké je minimálne mzdové zvýhodnenie za nočnú prácu?",
                "options": [
                    "a) 40 % z priemernej mzdy",
                    "b) 30 % z priemernej mzdy",
                    "c) 20 % z priemernej mzdy",
                    "d) 10 % z priemernej mzdy"
                ],
                "correct": 0
            },
            {
                "q": "402. Ako sa kráti stravné v prípade, ak zamestnávateľ vodičovi pri pracovnej ceste bezplatne poskytne obed?",
                "options": [
                    "a) o 20 %",
                    "b) o 25 %",
                    "c) o 35 %",
                    "d) o 40 %"
                ],
                "correct": 3
            },
            {
                "q": "403. Čo by mala pokrývať cena za prepravu?",
                "options": [
                    "a) iba vlastné náklady dopravcu",
                    "b) iba ekonomicky oprávnené náklady dopravcu",
                    "c) vlastné náklady dopravcu a zisk dopravcu",
                    "d) zisk dopravcu"
                ],
                "correct": 2
            },
            {
                "q": "404. Ako vypočítame náklady na motorovú naftu spotrebovanú na jeden ubehnutý kilometer, ak vieme spotrebu vozidla v litroch/100 km a cenu pohonných hmôt €/liter?",
                "options": [
                    "a) to nevieme z týchto údajov vypočítať",
                    "b) ak vynásobíme spotrebu v litroch/100 km a cenou v €/liter a výsledok vydelíme 100",
                    "c) ak vydelíme spotrebu v litroch/100 km a cenu v €/liter",
                    "d) ak vynásobíme spotrebu v litroch/100 km s cenou v €/liter a výsledok vynásobíme 100"
                ],
                "correct": 1
            },
            {
                "q": "405. Akou dopravou je možné v SR uskutočniť prepravu tovaru z akejkoľvek adresy na akúkoľvek inú adresu?",
                "options": [
                    "a) cestnou nákladnou dopravou",
                    "b) železničnou nákladnou dopravou",
                    "c) vodnou nákladnou dopravou",
                    "d) leteckou nákladnou dopravou"
                ],
                "correct": 0
            },
            {
                "q": "406. Je vodič povinný kontrolovať počet kusov prepravovaného nákladu pri nakládke?",
                "options": [
                    "a) nie, povinnosťou vodiča je viesť vozidlo; počas nakládky a vykládky môže vodič čerpať prestávku v práci",
                    "b) nie, za správny počet kusov prepravovaného nákladu sa zodpovedá príjemcovi tovaru odosielateľ",
                    "c) áno, vodič musí skontrolovať počet kusov prepravovaného tovaru v každom prípade; ak ide o zaplombovaný kontajner, z dôvodu kontroly počtu kusov má právo otvoriť kontajner",
                    "d) áno, ak to nie je možné, napr. z dôvodu počtu kusov alebo poveternostných podmienok, je povinný uviesť dôvody, ktoré neumožnili kontrolu v nákladnom liste (napr. zaplombovaný kontajner)"
                ],
                "correct": 3
            },
            {
                "q": "407. Ako sa musí preukázať zamestnanec príjemcu tovaru na vykládke?",
                "options": [
                    "a) príjemca nie je povinný sa nijako preukazovať ani nič podpisovať pri prevzatí tovaru",
                    "b) príjemca nie je povinný sa nijako preukazovať, postačuje podpis nákladného listu CMR v kolónke príjemca, ktorým je príjemca povinný potvrdiť prevzatie tovaru",
                    "c) ak príjemca nemá firemnú pečiatku, je potrebné požadovať preukázanie sa preukazom zamestnávateľa alebo dokladom totožnosti, ktorého číslo sa uvedie do nákladného listu k podpisu zamestnanca príjemcu",
                    "d) zamestnanec príjemcu sa musí preukázať zamestnaneckým preukazom s fotografiou, na základe ktorého môže vodič vydať prepravovaný tovar"
                ],
                "correct": 2
            },
            {
                "q": "408. Dodržiavanie dodacej lehoty prepravnej zmluvy je dôležité z pohľadu kvality prepravnej služby?",
                "options": [
                    "a) nie pretože, za dodržanie kvality sa považuje nepoškodenie tovaru",
                    "b) v cestnej doprave nie je možné hodnotiť kvalitu, pretože ide o doplnkovú službu pre verejnosť a podniky",
                    "c) áno, ale ide o nepodstatné ukazovatele kvality",
                    "d) áno, ide o podstatné ukazovatele kvality prepravnej služby"
                ],
                "correct": 3
            },
            {
                "q": "409. Akým dokladom sa preukazuje technická spôsobilosť vozidla?",
                "options": [
                    "a) osvedčením o evidencii vozidla",
                    "b) osvedčením o technickej kontrole vozidla",
                    "c) osvedčením o emisnej kontrole",
                    "d) osvedčením o schválení vozidla na prepravu"
                ],
                "correct": 1
            },
            {
                "q": "410. Akým dokladom sa preukazuje emisná spôsobilosť vozidla?",
                "options": [
                    "a) osvedčením o evidencii vozidla",
                    "b) osvedčením o technickej kontrole vozidla",
                    "c) osvedčením o emisnej kontrole",
                    "d) osvedčením o schválení vozidla na prepravu"
                ],
                "correct": 2
            },
            {
                "q": "411. V akých intervaloch musia chodiť na pravidelné emisne kontroly nákladné vozidlá (N2 a N3) ?",
                "options": [
                    "a) autobusy 1 rok po prvom prihlásení do evidencie a potom periodicky v 1-ročných lehotách, nákladné vozidlá 2 roky po prvom prihlásení do evidencie a potom periodicky v 2-ročných lehotách,",
                    "b) 1 rok po prvom prihlásení do evidencie a potom periodicky v 1-ročných lehotách,",
                    "c) 2 roky po prvom prihlásení do evidencie a potom periodicky v 2-ročných lehotách,",
                    "d) 1 rok po prvom prihlásení do evidencie a potom periodicky v 1-ročných lehotách, autobusy staršie ako 4 roky jazdiace do zahraničia sa musia podrobiť kontrolám vždy po 6 mesiacoch."
                ],
                "correct": 1
            },
            {
                "q": "412. Ako často sa musia podrobiť nákladné vozidlá (N2, N3) technickej kontrole?",
                "options": [
                    "a) 1 rok po prvom prihlásení do evidencie a potom periodicky v 1-ročných lehotách,",
                    "b) 1 rok po prvom prihlásení do evidencie a potom periodicky v polročných lehotách,",
                    "c) 2 roky po prvom prihlásení do evidencie a potom periodicky v 1-ročných lehotách. Autobusy využívané na jazdy v zahraničí v polročných lehotách,",
                    "d) 1 rok po prvom prihlásení do evidencie a potom periodicky v 2-ročných lehotách."
                ],
                "correct": 0
            },
            {
                "q": "413. Ktoré nákladné vozidlá môžu byť podrobované v štátoch EÚ cestnej technickej kontrole?",
                "options": [
                    "a) vozidlá kategórie N2, N3, O3 a O4",
                    "b) vozidlá kategórie M2, M3, N2, N3, O3",
                    "c) vozidlá kategórie N1, N3, O3, O4",
                    "d) vozidlá kategórie N1, N2, N3"
                ],
                "correct": 0
            }
       ];