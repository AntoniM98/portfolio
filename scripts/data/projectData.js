export function getProject(projectId) {
  let currentProject;

  projectData.forEach((proj) => {
    if(proj.id === projectId)
      currentProject = proj;
  });

  return currentProject;
}

export const projectData = [
  {
    id: 0,
    data: {
      name: 'VR Agressietraining',
      client: 'The Simulation Crew',
      type: 'VR design',
      year: '2023'
    },
    video: "https://www.youtube.com/embed/3-AlRaGL7fU?si=RuERGYEbTgKRksi2",
    context: `<p>Voor mijn afstudeerproject heb ik in opdracht van <strong>The Simulation Crew</strong> gewerkt aan het ontwerpen van een VR simulatietraining. Dit project betrof het een VR agressietraining voor zorgverleners en &#45;studentens. In de zorg wordt gemerkt dat agressie tegen zorgverleners door cliënten en/of verwanten steeds meer toeneemt. Om professionals hiermee om te leren gaan worden agressietrainingen gegeven. Echter, dergelijke trainingen met echte acteurs zijn vaak duur, niet flexibel en zouden niet altijd als veilig worden ervaren.</p>
    <p>Om dit probleem aan te pakken, wilde The Simulation Crew inzicht krijgen in hoe de interactie tussen speler en agressor moet verlopen en hoe welke handelingen van de speler het verloop van de situatie kunnen beïnvloeden. Aan mij was daarom de taak om op basis om te onderzoeken wat er komt kijken bij het omgaan met agressie op het gebied van verbale en non-verbale communicatie en hoe dit getraind wordt. Op basis van mijn bevindingen moest ik een concept creëren van een voorbeeldscenario voor een VR agressietraining die zorgverleners en &#45;studenten traint in het effectief omgaan met agressie vanuit cliënten en/of verwanten.</p>`,
    result: `<p>Om invulling te geven aan een passende agressietraining heb ik een iteratief ontwerpproces doorlopen, waarin herhaaldelijk onderzoek is gedaan, ontworpen, geprototypet en getest is. Hieruit is het concept ontstaan waarin de training wordt opgedeeld in <strong>twee fases</strong>. De eerste fase richt zich op het leren controleren van de primaire schrikreactie door de speler bewust te laten zijn van de ademhaling. Dit zodat het stressniveau daalt en weloverwogen gehandeld kan worden.</p>
    <p>De volgende fase is gericht op het leren van de correcte aanpak. Deze is afhankelijk van de soort agressie in het scenario: frustratieagressie of instrumentele agressie. De speler gaat hier interactie aan met de avatar. De verbale en non-verbale acties van de speler hebben een escalerend of de-escalerend effect op het verloop van het scenario en de reactie van de agressor.</p>
    <p>Ter ondersteuning van de speler kunnen scenario's worden doorlopen op verschillende moeilijkheidsgraden voor een geleidelijke opbouw. Bij een lagere moeilijkheidsgraad zal de speler bijvoorbeeld met minder acties rekening hoeven te houden dan bij een hoger niveau. Daarnaast kan het scenario te allen tijde worden onderbroken als het te heftig wordt en krijgt de speler tips als hij of zij vastloopt.</p>`,
    images: [
      "../../images/VR_Agressietraining_Concept.png"
    ],
    imageDescriptions: [
      'Concept beschrijving'
    ]
  }, {
    id: 1,
    data: {
      name: 'Meat Your Body',
      client: 'Fictieve casus',
      type: 'App design',
      year: '2020'
    },
    video: "https://www.youtube.com/embed/lnMT_ocdjHM?si=KDNIPmzEEJnLoRfJ",
    context: `<p>Als onderdeel van het semester <strong>Design for Behavioural Change (DBC)</strong> van mijn opleiding heb ik gewerkt aan een project voor het creëren van een gedragsveranderend ontwerp dat een bijdrage levert aan een maatschappelijk probleem. Het gegeven probleem voor deze opdacht was de overmaat aan vleesproducten die wordt gekocht en gegeten. Hierbij was het specifieke doel om een toepassing te ontwerpen die bij zou dragen aan de <strong>vermindering van vleesconsumptie</strong> onder zogenoemde <strong>'hardcore vleeseters'</strong>. 
    Dit zijn mensen die vrijwel dagelijks veel vlees eten en hier eigenlijk ook niet van af willen stappen. Ook eiste de opdracht dat de oplossing gebruik maakte van virtual reality (VR), augmented reality (AR) of Touch Designer.</p>`,
    result: `<p>De toepassing die ik heb ontworpen is <strong>Meat Your Body</strong>, een mobiele app die gebruikers informeert over de gevolgen van een overmaat aan vleesconsumptie voor het lichaam en de gezondheid. Uit het verrichte doelgroeponderzoek kwam naar voren dat de hardcore vleeseter niet gevoelig is voor veel argumenten om de hoeveelheid vlees die zij consumeren te verminderen. De hoofdreden om dit eventueel wel te doen was vanwege hun gezondheid. Bevordering van de gezondheid door een verminderde vleesconsumptie was om deze reden het uitgangspunt van waaruit Meat Your Body is ontworpen.</p>
    <p>Met Meat Your Body kan de gebruiker bijhouden hoeveel vlees er in zijn maaltijd zit. Afhankelijk van het aantal krijgen zij of verliezen zij punten. Als een gebruiker bijvoorbeeld gemiddeld twee stukken vlees per maaltijd eet, zal zijn score toenemen als hij minder vlees dan dit aantal eet. Om gebruikers aan te moedigen om dit dagelijks vol te houden, maakt de app gebruik een dagelijkse streak die wordt verbroken als je een dag mist.</p>
    <p>De app maakt ook gebruik van mobile-based VR. Met een VR bril als de Google Cardboard bevinden gebruikers zich in een 3D omgeving van een bepaald orgaan. Hier ervaren zij de visuele gevolgen die teveel vlees kan hebben op het lichaam, zoals de vernauwing van aderen. Dit wordt aan de gebruiker gecommuniceerd als een probleem dat zij moeten oplossen voor een bepaald personage. In het geval van de ontwikkelde demo is dit een rode bloedcel. In korte stripvorm gepaard met audio wordt tevens uitgelegd teveel vlees dit probleem heeft veroorzaakt.</p>
    <p>Een dergelijk probleem kan worden opgelost door de punten te spenderen die gebruikers hebben verdiend door het eten van minder vlees wat een progressiebalk vult. Als er genoeg punten zij uitgegeven, krijgt de gebruiker toegang tot een nieuw gebied/orgaan. Ook krijgt hij hierbij tips die kunnen helpen bij het verminderen van hun vleesconsumptie. Hiermee wordt de gebruiker ook beloond voor hun eetgedrag. Naarmate de tijd verstrijkt zullen progressiebalken geleidelijk leeglopen, waardoor het lichamelijk probleem ook geleidelijk terugkeert. Gebruikers worden dus aangemoedigd om hun vleesconsumptie minimaal te blijven houden om de gezonde staat van elk orgaan te behouden.</p>`,
    images: [
      "../../images/Meat_Your_Body_Concept.png",
      "../../images/Meat_Your_Body_1.png",
      "../../images/Meat_Your_Body_2.png",
      "../../images/Meat_Your_Body_3.png",
      "../../images/Meat_Your_Body_4.png",
      "../../images/Meat_Your_Body_Ideeën.png",
      "../../images/Meat_Your_Body_Ontwikkeling.png"
    ],
    imageDescriptions: [
      'Concept beschrijving',
      'Homescreen',
      'VR omgeving',
      'Strip met uitleg probleem',
      'Tips na verhelpen probleem',
      'Eerste ideeën concept',
      'Ontwikkeling app'
    ]
  }, {
    id: 2,
    data: {
      name: 'Stellar Express: The Last Stop',
      client: 'Persoonlijk project',
      type: 'Game design',
      year: '2021'
    },
    video: "https://www.youtube.com/embed/datRL-W3GM0?si=fJULXfoObhjWWHTk",
    context: `<p>In 2021 heb ik de minor <strong>Digital Media Productions (DMP)</strong> gevolgt. Dit was een vrije minor waarin je een volledig semester werkte aan een eigen project naar keuze. Al enige tijd had ik een eigen game willen bedenken en willen maken. Deze minor bood daarom de ideale mogelijkheid om deze wens te vervullen en mij verder op dit vlak te ontwikkelen.</p>
    <p>Samen met een klasgenoot heb ik gedurende deze periode gewerkt aan het ontwerpen en ontwikkelen van onze eigen game. Het doel van het project was om op basis van doelgroeponderzoek, game-analyses en verschillende ontwerp experimenten met experts op het gebied van games de gehele loop van onze game te ontwerpen en een speelbare demo te realiseren.</p>`,
    result: `<p>De game die wij hebben ontwikkeld is de turn-based role-playing game, <strong>Stellar Express: The Last Stop</strong>. 
    In deze game volg je het verhaal van Caine, een jonge boer die woont in de achterste wagon van de Stellar Express, een trein die door de ruimte reist. 
    Op een dag wordt de trein gekaapt door een mysterieuze groep bandieten. 
    Het is nu aan Caine om zich een weg te banen door de diverse wagons van de trein en de geheime 'artifacts' te verzamelen om de bandieten te stoppen.</p>
    <p>Stellar Express is een <strong>turn-based role-playing game (RPG)</strong>. 
    De gameplay bestaat voornamelijk twee onderdelen, het ontdekken van gebieden en het doen van gevechten. 
    In de wereld kun interactie aangegaan worden met karakters en verschillende wapens/voorwerpen gevonden worden. 
    Deze kunnen gebruikt worden in gevechten. Zo kunnen wapens en armor gedragen worden door karakters om hen sterker te maken. 
    Deze hebben tevens een bepaald element die voordelig of nadelig kan werken op andere elementen. Ook karakters hebben een van deze elementen, waardoor spelers moeten overwegen welke voorwerpen goed werken met welke karakters en wanneer zij geschikt zijn.</p>
    <p>Zoals kenmerkend is aan het genre 'turn-based RPG' werken gevechten in beurten. 
    Hierin hebben spelers de keuze om aan te vallen of voorwerpen als 'healing items' te gebruiken. 
    Aanvallen zijn afhankelijk van het karakter en hebben net zoals voorwerpen en de karakters zelf een element. 
    Het kiezen van de meest effectieve aanval tegen de huidige tegenstander is nog een aspect waar spelers rekening mee moeten houden. 
    In gevechten met meerdere tegenstanders dient de speler voor elk van zijn karakters te kiezen welke tegenstander hij/zij wil aanvallen. 
    In het verloop van het spel zal de speler ook nieuwe karakters vrij kunnen spelen die hij/zij kan gebruiken, waardoor het samenstellen van het beste team ook een taak wordt.
    Het geven van zoveel mogelijk <strong>keuzevrijheid</strong> aan de speler is het voornaamste uitgangspunt geweest in het ontwerpproces.</p>
    <p>Met dit project hebben wij de <strong>DMP Creativity Award</strong> gewonnen. 
    Dit is een prijs die aan het eind van de minor wordt toegekend aan het project met het meest creatieve concept. 
    Ook hebben wij een speelbare demo uitgebracht op itch.io. Deze is te vinden door te klikken op de onderstaande knop.</p>
    <div class="play-button"><a href="https://nicoalupin.itch.io/stellar-express-the-last-stop" target="_blank">Speel de demo!</a></div>`,
    images: [
      "../../images/Stellar_Express_Game_Design_Document.png",
      "../../images/Stellar_Express_1.png",
      "../../images/Stellar_Express_2.png",
      "../../images/Stellar_Express_3.png",
      "../../images/Stellar_Express_4.png",
      "../../images/DMP_Award.jpg"
    ],
    imageDescriptions: [
      'Game Design Document',
      'Area 1',
      'Menu',
      'Gevechtsscène',
      'Inventory',
      'DMP Creativity Award'
    ]
  }, {
    id: 3,
    data: {
      name: 'PassPress',
      client: 'RSG Lingecollege',
      type: 'App design',
      year: '2019'
    },
    video: "https://www.youtube.com/embed/MJzoRc7Ywqk?si=9KWsfy6wlTxHJ4gn",
    context: `<p>Gedurende een periode van acht weken heb ik in een groep van zes studenten gewerkt aan een project voor het <strong>RSG Lingecollege</strong>, een middelbare scholengemeenschap met drie verschillende locaties in Tiel. 
    Het Lingecollege ervaarde dat de overstap van basisschool naar middelbare school voor nieuwe scholieren vaak moeilijk is. 
    Ook waren zij begonnen met de bouw van een nieuw gebouw voor hun MAVO klassen.</p>
    <p>Voor het Lingecollege waren dit de hoofdredenen om op zoek te gaan naar een <strong>interactieve multimedia applicatie</strong> waarmee <strong>groep 8 leerlingen</strong> zich thuis voor konden bereiden op het voortgezet onderwijs en verder kennis konden maken met het Lingecollege. Daarnaast moet de oplossing de doelgroep stimuleren om de keuze te maken voor het Lingecollege.</p>`,
    result: `<p>Het concept dat wij bedacht hebben, is de mobiele app <strong>PassPress</strong>. PassPress geeft scholieren de mogelijkheid om de achterkant van hun eigen schoolpas te ontwerpen. Deze is normaal gesproken geheel wit. De insteek hierbij is om de doelgroep een connectie met de school te geven door iets wat gerelateerd is aan school persoonlijk te maken. Gebruikers kunnen hun pasje bewerken in de 'werkplaats' van de app. Deze is te vergelijken met een simpelere versie van Paint of Photoshop met vergelijkbare tools als vormen, kleuren en kwasten. Deze tools moeten echter eerst vrijgespeeld worden door zes verschillende minigames te spelen.</p>
    <p>Deze minigames vormen het educatieve aspect van de app. Het onderwerp van elke minigame is gerelateerd aan de middelbare school en/of het Lingecollege. Op deze manier leert de doelgroep spelenderwijs meer over de school en het voortgezet onderwijs. Wanneer een minigame geklaard is, wordt de bijbehorende tool vrijgespeeld en kan deze gebruikt worden om de schoolpas mooier te maken. De minigame kan altijd weer opnieuw gespeeld worden. Ook kunnen gebruikers hun creatie uploaden op een 'social-wall'. Hier kunnen zij de pasjes van andere scholieren zien en beoordelen op een leaderboard.</p>`,
    images: [
      "../../images/PassPress.png",
      "../../images/PassPress_1.png",
      "../../images/PassPress_2.png",
      "../../images/PassPress_3.png",
      "../../images/PassPress_4.png",
      "../../images/PassPress_5.png",
      "../../images/PassPress_6.png",
      "../../images/PassPress_7.png",
      "../../images/PassPress_8.png",
      "../../images/PassPress_9.png",
    ],
    imageDescriptions: [
      'Startscherm',
      'Hoofdmenu',
      'Werkplaats',
      'Minigame: Vakken-quiz',
      'Minigame: Wake-up',
      'Minigame: Pack your bag',
      'Minigame: Foto Quiz',
      'Minigame: True or False',
      'Minigame: Schuifspel',
      'Social Wall',
    ]
  }, {
    id: 4,
    data: {
      name: 'The Library',
      client: 'Fictieve casus',
      type: 'VR design',
      year: '2021'
    },
    video: "https://www.youtube.com/embed/IemijkIWeB0?si=YbVjfQLiPWIP8sjT",
    context: `<p>In de projectfase van het semester <strong>Design for Behavioural Change (DBC)</strong> van mijn opleiding kreeg ik de opdracht om een gedragsveranderend ontwerp neer te zetten dat een bijdrage moest leveren aan een maatschappelijk probleem. Het probleem dat aangepakt moest worden was de toename van laaggeletterdheid onder <strong>jongeren tussen de 10 en 15 jaar</strong>. De hoofdreden die hiervoor werd gegeven was dat deze groep te weinig leest. De oplossing die ontworpen moest worden had daarom ook het doel om deze doelgroep aan te sporen meer te gaan lezen. Tevens diende er gebruik gemaakt te worden van een van de volgende technieken: virtual reality (VR), augmented reality (AR) of Touch Designer.</p>`,
    result: `<p>De toepassing die wij hebben ontworpen is de VR applicatie, <strong>The Library</strong>. In deze serious game volgen spelers een verhaallijn waarin zij beschuldigd worden van de moord door de bewaarder van de bibliotheek. Om hun onschuld te bewijzen moeten spelers deze moordzaak oplossen. Door te praten met verschillende karakters kunnen spelers clues te verzamelen die hen helpen om het mysterie op te lossen.</p>
    <p>Na een uitgebreid doelgroeponderzoek is geconcludeerd dat jongeren vaak niet tot weinig lezen, omdat zij niet weten welke boeken zij leuk zouden vinden. The Library is daarom ontworpen vanuit het uitgangspunt om de doelgroep specifiek te ondersteunen in het vinden van het juiste boek.</p>
    <p>De gameplay van The Library bestaat voornamelijk uit het ontdekken van de digitale bibliotheek. Spelers lopen door deze VR omgeving en kunnen hier praten met de eerdergenoemde karakters die deze bibliotheek bewonen. Dit zijn personages uit verschillende boeken. Door hen te spreken <strong>leren</strong> spelers meer over de <strong>karakters en hun boeken</strong>, waardoor er interesse gewekt wordt om hun boeken te gaan lezen. Aan het eind gaat de speler een laatste confrontatie aan om zijn onschuld te bewijzen door de beschuldigingen te weerleggen met de verzamelde clues. Dit dient tevens als een soort test voor de speler om te zien wat hij heeft onthouden over de personages/verhalen.</p>
    <p>Als het verhaal uitgespeeld is, krijgt de speler een <strong>lijst met aanbevelingen voor boeken</strong> op basis van de keuzes die hij heeft gemaakt gedurende het spel. Ook krijgen spelers een persoonlijke ruimte in de bibliotheek waar zij hun favoriete boeken en karakters op kunnen slaan. De speler kan ten alle tijden praten met alle personages om meer te leren over hun boeken.</p>`,
    images: [
      "../../images/The_Library_Game_Design_Document_1.png",
      "../../images/The_Library_Game_Design_Document_2.png"
    ],
    imageDescriptions: [
      'Game Design Document',
      'Game Design Document'
    ]
  }, {
    id: 5,
    data: {
      name: 'HealthChar',
      client: 'iXperium Health en BrabantZorg',
      type: 'Game design',
      year: '2020'
    },
    video: "https://www.youtube.com/embed/FgilQ_6yPOQ?si=-FPaXexqnj_7d93X",
    context: `<p>Als onderdeel van het semester <strong>Serious Game</strong> van mijn opleiding heb ik gewerkt in een team van vijf studenten aan een project voor zorginstelling <strong>BrabantZorg</strong> en <strong>iXperium Health</strong>, een innovatief lab gericht op technologie in de zorg. Dit project betrof het ontwerpen van een serious game die zorgverleners beter met technologie om leert gaan.</p>
    <p>BrabantZorg ervaarde dat zorgverleners vaak problemen hebben met de digitalisering binnen hun vakgebied. Met name het digitale zorgdossier werd als pijnpunt ervaren door zorgverleners. Namens BrabantZorg as iXperium Health daarom op zoek naar een oplossing voor dit probleem.</p>`,
    result: `<p>Voor dit project hebben wij ons beziggehouden met het ontwerpen van een oplossing voor de problemen rondom het gebruik van <strong>elektronisch cliëntendossier (ECD)</strong>. Hierbij richtten wij ons specifiek op zorgstudenten. Door toekomstige zorgverleners te leren omgaan met het digitale zorgdossier willen wij het probleem niet alleen oplossen, maar vooral voorkomen.</p>
    <p>Dit heeft geleid tot de serious game <strong>HealthChar</strong>. In deze game speel je de rol van een zorgverlener die een speciale tablet vindt. Met deze tablet kun je door de tijd reizen en moet je zorg verlenen aan verschillende historische karakters door interactieve dialogen met en aan te gaan. Hierin heb je de taak om aandachtig te luisteren naar hun problemen om vervolgens hun ECD correct in te vullen. Na ieder level worden meer onderdelen van het ECD vrijgespeeld om in te kunnen vullen, waardoor de moeilijkheidsgraad toeneemt. Op deze manier leren spelers stapsgewijs meer over het ECD en hoe deze ingevuld dient te worden.</p>
    <p>Elk level bevat tevens een mentor figuur. Dit is een historisch figuur die een belangrijke rol in de zorg heeft gehad. Van de mentor leren studenten meer over de geschiedenis van hun vakgebied. Na ieder level ontvangt de speler een verzamelvoorwerp gerelateerd aan de respectievelijke mentor en patiënt die hij heeft geholpen. Het verzamelen van al deze voorwerpen vormt een extra motivatie om de game te voltooien en dus ook meer te leren.</p>
    <p>iXperium Health en BrabantZorg waren beiden zeer enthousiast over het concept. HealthChar was zelfs genoemd in een artikel van iXperium Health over serious games.</p>
    <div class="play-button"><a href="https://www.ixperium.nl/serious-games-voor-ixperium-health/" target="_blank">Bekijk het artikel</a></div>`,
    images: [
      "../../images/HealthChar_Game_Design_Document.png"
    ],
    imageDescriptions: [
      'Game Design Document'
    ]
  }, {
    id: 6,
    data: {
      name: 'FoodOnTrack',
      client: 'Fictieve casus',
      type: 'Web design',
      year: '2019'
    },
    video: "https://www.youtube.com/embed/FZWmvMJ_WQo?si=owan8bdECGovsmm_",
    context: `<p>In het propedeuse jaar van mijn CMD-opleiding heb ik als onderdeel van de course <strong>webdesign</strong> een prototype van een website ontworpen voor een fictieve opdrachtgever. De casus betrof een restaurantketen die <strong>afhaalrestaurants</strong> wilde openen op treinstations. Deze restaurants richtten zich op mensen die snel een gezonde maaltijd willen afhalen. De website diende gebruikers de mogelijkheid te geven om hun eigen maaltijden samen te stellen. Ook moesten gebruikers hun bestelling vooraf kunnen bestellen en deze moest klaar zijn zodra de klant hem komt afhalen, zelfs als hun trein vertraging zou hebben. Ook wil de keten graag een groen imago uitdragen.</p>`,
    result: `<p>De website die ik heb ontworpen is <strong>Food On Track</strong>. De belangrijkste functie van de site is om snel en gemakkelijk eten bestellen in de trein. Gebruikers kunnen hun bestelling op het station meteen na aankomst afhalen, ook bij eventuele vertraging van de trein, met zekerheid over de kwaliteit van het gerecht. De website moet simpel en makkelijker te begrijpen zijn en een moderne frisse uitstraling hebben om de jongere doelgroep aan te spreken. Ook het taalgebruik speelt hier op in door de gebruiker te tutoyeren. </p>
    <p>Een selling-point van Food On Track de mogelijkheid om gerechten van verschillende hoeken te kunnen bekijken door middel van meerdere afbeeldingen. Dit kan op de productinformatiepagina. Deze ontwerpkeuze is gemaakt op basis van interviews met de doelgroep die aangaf dat hun bestelling vaak tegenvalt als deze wordt vergeleken met de afbeelding op het internet. Op deze manier zijn gebruikers er zeker van hoe hun gerecht eruit zal komen te zien en staan ze niet voor verrassingen. Op deze pagina kan de gebruiker tevens de maaltijd zelf samenstellen door ingrediënten toe te voegen of weg te halen.</p>
    <p>Om gerechten op tijd klaar te hebben voor afhaal kan de gebruiker zelf aangeven waar en wanneer hij zijn bestelling wil afhalen. Dit kan op de afrekenpagina, maar ook meteen al op de homepage. Hier kan de gebruiker zijn reisgegevens invullen, zoals het vertrek- en aankomststation en de tijd van vertrek. Hierdoor kan worden bepaald in welke trein de reiziger zich bevindt, waardoor de bestelling bij aankomst van de trein precies op tijd klaar is om afgehaald te worden, ook bij eventuele vertraging.</p>`,
    images: [
      "../../images/FoodOnTrack_Homepage_Wireframe.png",
      "../../images/FoodOnTrack_Homepage.png",
      "../../images/FoodOnTrack_Productinformatie_Wireframe.png",
      "../../images/FoodOnTrack_Productinformatie.png",
      "../../images/FoodOnTrack_Afreken_Wireframe.png",
      "../../images/FoodOnTrack_Afreken.png"
    ],
    imageDescriptions: [
      'Wireframe homepage',
      'Homepage',
      'Wireframe productpagina',
      'Productpagina',
      'Wireframe afrekenpagina',
      'Afrekenpagina',
    ]
  }];