import { useState } from "react";

const PRONUNCIATION_TIPS = [
  { sound: "g / ch", rule: "In Belgian Dutch, much softer than Dutch NL — like a gentle rasp at the back of the throat, almost a breathy 'h'. e.g. goed ≈ 'khoot' (soft)." },
  { sound: "ij / ei", rule: "Sounds like English 'eye'. e.g. zijn ≈ 'zayn', tijd ≈ 'tayd'." },
  { sound: "ui", rule: "Tricky! Round your lips for 'oo', then say 'ee'. e.g. huis ≈ 'howss' (but rounder)." },
  { sound: "oe", rule: "Like English 'oo' in 'food'. e.g. doen ≈ 'doon', goed ≈ 'khoot'." },
  { sound: "eu", rule: "Like French 'eu' or German 'ö'. Lips rounded, tongue forward. e.g. neus ≈ 'nöss'." },
  { sound: "aa / ee / oo", rule: "Long vowels — held slightly longer. aa='ah', ee='ay', oo='oh'." },
  { sound: "w", rule: "Softer than English 'w' — almost between 'v' and 'w'. e.g. wij ≈ 'vay'." },
  { sound: "v", rule: "In Belgian Dutch often pronounced as 'f' at the start of words. e.g. van ≈ 'fan'." },
  { sound: "r", rule: "Rolled slightly at the back of throat (uvular). Softer than Spanish but more pronounced than English." },
  { sound: "n (final)", rule: "Final -n in words like 'maken' is often dropped in spoken Belgian Dutch: 'make' is how it sounds." },
];

const CATEGORIES = [
  {
    id: "greetings",
    label: "Greetings",
    emoji: "👋",
    color: "#c8a84b",
    words: [
      { nl: "Hallo", phonetic: "hah-LOH", en: "Hello", tip: "Universal, works any time of day." },
      { nl: "Dag", phonetic: "dahkh", en: "Hi / Bye", tip: "Soft 'g'. Used for both hello AND goodbye." },
      { nl: "Welkom", phonetic: "VEL-kom", en: "Welcome", tip: "Welkom in België! = Welcome to Belgium!" },
      { nl: "Goedemorgen", phonetic: "khoo-duh-MOR-khun", en: "Good morning", tip: "Until about noon. Often shortened to 'morgen'." },
      { nl: "Goedemiddag", phonetic: "khoo-duh-MID-dahkh", en: "Good afternoon", tip: "Noon to ~6pm." },
      { nl: "Goedenavond", phonetic: "khoo-duh-NAH-font", en: "Good evening", tip: "From ~6pm onwards." },
      { nl: "Goedenacht", phonetic: "khoo-duh-NAKHT", en: "Good night", tip: "Only when parting for the night." },
      { nl: "Tot ziens", phonetic: "tot ZEENS", en: "Goodbye", tip: "Literally 'until seen'." },
      { nl: "Doei", phonetic: "DOO-ee", en: "Bye (informal)", tip: "Very casual, among friends." },
      { nl: "Aangenaam", phonetic: "aan-khuh-NAAM", en: "Pleased to meet you", tip: "Lit. 'pleasant'. Said when introduced. Often: 'Aangenaam kennis te maken.'" },
      { nl: "Groeten", phonetic: "KHROO-tun", en: "Greetings", tip: "Formal. Also used in letters/emails: 'Met vriendelijke groeten' = Kind regards." },
      { nl: "Groetjes", phonetic: "KHROOT-yuhs", en: "Greetings / Cheers (warm)", tip: "The -je diminutive makes it warmer and more casual. Used at end of messages." },
      { nl: "Hoe gaat het?", phonetic: "hoo khaat huht", en: "How are you?", tip: "Standard greeting. Reply: 'Goed, dank je!' or 'Het gaat wel.'" },
      { nl: "Het gaat wel", phonetic: "huht khaat vel", en: "It's okay / Not bad", tip: "Very Belgian answer — modest, never too enthusiastic!" },
    ],
  },
  {
    id: "pronouns",
    label: "Pronouns",
    emoji: "🙋",
    color: "#b03a2e",
    words: [
      { nl: "ik", phonetic: "ick", en: "I", tip: "Never capitalized mid-sentence (unlike English 'I')." },
      { nl: "jij / je", phonetic: "yay / yuh", en: "you (informal)", tip: "'jij' is stressed, 'je' is unstressed. After verb: drop the -t: 'Ga je mee?' not 'Gaat je'." },
      { nl: "hij", phonetic: "hay", en: "he", tip: "'ij' = 'eye' sound." },
      { nl: "zij / ze", phonetic: "zay / zuh", en: "she / they", tip: "Dual meaning — context clarifies. 'ze' is unstressed." },
      { nl: "het", phonetic: "huht", en: "it", tip: "Also the neuter article ('het huis' = the house)." },
      { nl: "wij / we", phonetic: "vay / wuh", en: "we", tip: "'wij' is the emphasized form." },
      { nl: "jullie", phonetic: "YUL-ee", en: "you (plural)", tip: "Use when addressing a group of people." },
      { nl: "u", phonetic: "ew", en: "you (formal)", tip: "For strangers, elders, professional settings. Always polite in Belgium." },
    ],
  },
  {
    id: "people",
    label: "People",
    emoji: "👨‍👩‍👧",
    color: "#884ea0",
    words: [
      { nl: "de man", phonetic: "duh man", en: "the man", tip: "Plural: de mannen." },
      { nl: "de vrouw", phonetic: "duh frow", en: "the woman / wife", tip: "Context tells you which. 'Mijn vrouw' = my wife." },
      { nl: "het kind", phonetic: "huht kint", en: "the child", tip: "Final 'd' → 't'. Plural: de kinderen." },
      { nl: "de kinderen", phonetic: "duh KIN-duh-run", en: "the children", tip: "Irregular plural — must memorise." },
      { nl: "het meisje", phonetic: "huht MAY-shuh", en: "the girl", tip: "Diminutive of 'meid' → always het-word." },
      { nl: "de jongen", phonetic: "duh YONG-un", en: "the boy", tip: "Plural: de jongens." },
      { nl: "de vriend", phonetic: "duh freent", en: "the friend / boyfriend", tip: "'Mijn vriend' can mean boyfriend. 'Een vriend' = a (male) friend." },
      { nl: "de vriendin", phonetic: "duh freen-DIN", en: "the female friend / girlfriend", tip: "'Mijn vriendin' can mean girlfriend." },
      { nl: "de familie", phonetic: "duh fah-MEE-lee", en: "the family", tip: "'ie' at end = long 'ee'." },
      { nl: "de mensen", phonetic: "duh MEN-sun", en: "the people", tip: "Plural of 'mens' (person/human)." },
    ],
  },
  {
    id: "verbs",
    label: "Core Verbs",
    emoji: "⚡",
    color: "#1a5276",
    words: [
      { nl: "zijn", phonetic: "zayn", en: "to be", tip: "Irregular: ik ben, jij bent, hij is, wij zijn." },
      { nl: "hebben", phonetic: "HEH-bun", en: "to have", tip: "Final -n dropped in speech: 'hebbe'. Ik heb, jij hebt." },
      { nl: "doen", phonetic: "doon", en: "to do / make", tip: "'oe' = long 'oo'. Ik doe, jij doet." },
      { nl: "gaan", phonetic: "khaan", en: "to go", tip: "Ik ga, jij gaat, wij gaan." },
      { nl: "komen", phonetic: "KOH-mun", en: "to come", tip: "Ik kom, jij komt." },
      { nl: "zien", phonetic: "zeen", en: "to see", tip: "'ie' = long 'ee'. Ik zie, jij ziet." },
      { nl: "weten", phonetic: "VAY-tun", en: "to know (a fact)", tip: "For knowing facts. 'Kennen' = to know a person." },
      { nl: "willen", phonetic: "VIL-un", en: "to want", tip: "Ik wil, jij wilt. Modal verb — infinitive follows." },
      { nl: "kunnen", phonetic: "KUN-un", en: "can / to be able", tip: "Ik kan, jij kunt/kan." },
      { nl: "moeten", phonetic: "MOO-tun", en: "must / have to", tip: "Ik moet — no -t added for any person." },
      { nl: "mogen", phonetic: "MOH-khun", en: "may / to be allowed", tip: "Ik mag, jij mag. 'Mag ik?' = May I?" },
      { nl: "zeggen", phonetic: "ZEK-khun", en: "to say", tip: "Ik zeg, jij zegt." },
      { nl: "denken", phonetic: "DEN-kun", en: "to think", tip: "Ik denk dat... = I think that..." },
      { nl: "maken", phonetic: "MAH-kun", en: "to make", tip: "Very versatile verb." },
      { nl: "werken", phonetic: "VER-kun", en: "to work", tip: "Ik werk, jij werkt. Op het werk = at work." },
      { nl: "spreken", phonetic: "SPRAY-kun", en: "to speak", tip: "Ik spreek Nederlands. 'sp' = sharp 's'+'p'." },
      { nl: "wonen", phonetic: "VOH-nun", en: "to live (reside)", tip: "Ik woon in Roeselare. Not 'leven' (to be alive)." },
      { nl: "herhalen", phonetic: "her-HAH-lun", en: "to repeat", tip: "Separable? No. Ik herhaal, jij herhaalt. 'Kan je dat herhalen?' = Can you repeat that?" },
      { nl: "betekenen", phonetic: "buh-TAY-kun-un", en: "to mean", tip: "Wat betekent dit? = What does this mean? Betekent (present) / betekend (past participle)." },
      { nl: "vragen", phonetic: "FRAH-khun", en: "to ask", tip: "'v' → 'f' at start, soft 'g'. Ik vraag, jij vraagt." },
    ],
  },
  {
    id: "questions",
    label: "Questions",
    emoji: "❓",
    color: "#117a65",
    words: [
      { nl: "wat", phonetic: "vat", en: "what", tip: "'w' sounds close to 'v' in Belgian Dutch." },
      { nl: "wie", phonetic: "vee", en: "who", tip: "'ie' = long 'ee'." },
      { nl: "waar", phonetic: "vaar", en: "where", tip: "Waar is...? = Where is...?" },
      { nl: "wanneer", phonetic: "vah-NAYR", en: "when", tip: "Double vowel = long sound." },
      { nl: "waarom", phonetic: "VAH-rom", en: "why", tip: "Literally 'where-around'." },
      { nl: "hoe", phonetic: "hoo", en: "how", tip: "Hoe gaat het? = How are you?" },
      { nl: "welk / welke", phonetic: "velk / VEL-kuh", en: "which", tip: "'welk' for het-words, 'welke' for de-words." },
      { nl: "hoeveel", phonetic: "hoo-FAYL", en: "how much / how many", tip: "Hoeveel kost dat? = How much does that cost?" },
      { nl: "Wat zeg je?", phonetic: "vat zekh yuh", en: "What did you say? / Pardon?", tip: "Casual way to ask someone to repeat. More polite: 'Kan je dat herhalen?'" },
      { nl: "Zeg eens", phonetic: "zekh ayns", en: "Tell me / Say, ...", tip: "Conversation opener. 'Zeg eens, wat vind jij?' = Tell me, what do you think?" },
    ],
  },
  {
    id: "numbers1",
    label: "Numbers 1–20",
    emoji: "🔢",
    color: "#6c3483",
    words: [
      { nl: "één", phonetic: "ayn", en: "1 — one", tip: "Accent distinguishes it from 'een' (a/an)." },
      { nl: "twee", phonetic: "tvay", en: "2 — two", tip: "'tw' with a soft 'v' sound." },
      { nl: "drie", phonetic: "dree", en: "3 — three", tip: "'ie' = long 'ee'." },
      { nl: "vier", phonetic: "feer", en: "4 — four", tip: "'v' → 'f', long 'ee'." },
      { nl: "vijf", phonetic: "fayf", en: "5 — five", tip: "'ij' = 'eye'. Final 'v' → 'f'." },
      { nl: "zes", phonetic: "zes", en: "6 — six", tip: "Short and sharp." },
      { nl: "zeven", phonetic: "ZAY-fun", en: "7 — seven", tip: "'v' → 'f' sound in the middle." },
      { nl: "acht", phonetic: "akht", en: "8 — eight", tip: "'ch' = soft guttural." },
      { nl: "negen", phonetic: "NAY-khun", en: "9 — nine", tip: "Soft 'g' in the middle." },
      { nl: "tien", phonetic: "teen", en: "10 — ten", tip: "'ie' = long 'ee'." },
      { nl: "elf", phonetic: "elf", en: "11 — eleven", tip: "Short and clean. Same as English 'elf'!" },
      { nl: "twaalf", phonetic: "tvaalff", en: "12 — twelve", tip: "'tw' + long 'aa'. Double 'f' sound at end." },
      { nl: "dertien", phonetic: "DER-teen", en: "13 — thirteen", tip: "Drie → der- in compounds." },
      { nl: "veertien", phonetic: "FAYR-teen", en: "14 — fourteen", tip: "Vier → veer- in compounds. Long 'ee'." },
      { nl: "vijftien", phonetic: "FAYF-teen", en: "15 — fifteen", tip: "Vijf + tien." },
      { nl: "zestien", phonetic: "ZES-teen", en: "16 — sixteen", tip: "Zes + tien." },
      { nl: "zeventien", phonetic: "ZAY-fun-teen", en: "17 — seventeen", tip: "Zeven + tien." },
      { nl: "achttien", phonetic: "AKH-teen", en: "18 — eighteen", tip: "Acht + tien. One 't' dropped in writing." },
      { nl: "negentien", phonetic: "NAY-khun-teen", en: "19 — nineteen", tip: "Negen + tien." },
      { nl: "twintig", phonetic: "TVIN-tikh", en: "20 — twenty", tip: "Soft 'g' at end. Base for 21–29." },
    ],
  },
  {
    id: "numbers2",
    label: "Numbers 20+",
    emoji: "💯",
    color: "#4a235a",
    words: [
      { nl: "dertig", phonetic: "DER-tikh", en: "30 — thirty", tip: "Pattern: -tig suffix for all tens. Soft 'g'." },
      { nl: "veertig", phonetic: "FAYR-tikh", en: "40 — forty", tip: "Vier → veer- in compounds." },
      { nl: "vijftig", phonetic: "FAYF-tikh", en: "50 — fifty", tip: "Vijf + tig." },
      { nl: "zestig", phonetic: "ZES-tikh", en: "60 — sixty", tip: "Zes + tig." },
      { nl: "zeventig", phonetic: "ZAY-fun-tikh", en: "70 — seventy", tip: "Zeven + tig." },
      { nl: "tachtig", phonetic: "TAKH-tikh", en: "80 — eighty", tip: "Irregular! Not 'achtig'. Must memorise." },
      { nl: "vijfentachtig", phonetic: "fayf-un-TAKH-tikh", en: "85 — eighty-five", tip: "Units BEFORE tens + 'en': vijf(5)+en+tachtig(80). Dutch counts backwards!" },
      { nl: "achtentachtig", phonetic: "akh-tun-TAKH-tikh", en: "88 — eighty-eight", tip: "acht(8)+en+tachtig(80). Pattern: [units]+en+[tens]." },
      { nl: "negentig", phonetic: "NAY-khun-tikh", en: "90 — ninety", tip: "Negen + tig." },
      { nl: "negenennegentig", phonetic: "NAY-khun-un-NAY-khun-tikh", en: "99 — ninety-nine", tip: "negen+en+negentig. Yes, it's a mouthful!" },
      { nl: "honderd", phonetic: "HON-dert", en: "100 — one hundred", tip: "No 'één' before it: just 'honderd', not 'één honderd'." },
      { nl: "honderd één", phonetic: "HON-dert ayn", en: "101", tip: "Honderd + één. 'En' is optional: 'honderd en één' also correct." },
      { nl: "honderd twee", phonetic: "HON-dert tvay", en: "102", tip: "Simply honderd + the number." },
      { nl: "honderd drie", phonetic: "HON-dert dree", en: "103", tip: "Honderd + drie." },
      { nl: "honderd tien", phonetic: "HON-dert teen", en: "110", tip: "Honderd + tien." },
      { nl: "honderd elf", phonetic: "HON-dert elf", en: "111", tip: "Honderd + elf." },
      { nl: "honderd twaalf", phonetic: "HON-dert tvaalff", en: "112", tip: "Honderd + twaalf. 🚑 Emergency number in Belgium!" },
      { nl: "tweehonderd", phonetic: "TVAY-hon-dert", en: "200", tip: "Twee+honderd. No spaces in writing." },
      { nl: "driehonderd", phonetic: "DREE-hon-dert", en: "300", tip: "Drie+honderd." },
      { nl: "vijfhonderd", phonetic: "FAYF-hon-dert", en: "500", tip: "Vijf+honderd." },
      { nl: "achthonderd", phonetic: "AKHT-hon-dert", en: "800", tip: "Acht+honderd." },
      { nl: "achthonderd achtentachtig", phonetic: "AKHT-hon-dert akh-tun-TAKH-tikh", en: "888", tip: "achthonderd(800) + achtentachtig(88). Stack the patterns!" },
      { nl: "duizend", phonetic: "DOW-zunt", en: "1000 — one thousand", tip: "'ui' vowel. No 'één' before: just 'duizend'." },
      { nl: "elfhonderd", phonetic: "ELF-hon-dert", en: "1100", tip: "In Belgian Dutch, 1100 is often said as 'elfhonderd' (eleven hundred), not 'duizend honderd'." },
      { nl: "duizend tweehonderd vierendertig", phonetic: "DOW-zunt TVAY-hon-dert FEER-un-DER-tikh", en: "1234", tip: "34 = vierendertig (vier+en+dertig). Full number: duizend + tweehonderd + vierendertig." },
      { nl: "tweeduizend", phonetic: "TVAY-dow-zunt", en: "2000", tip: "Twee+duizend. The pattern scales." },
      { nl: "tweeëntwintigduizend tweehonderd tweeëntwintig", phonetic: "tvay-un-TVIN-tikh-dow-zunt TVAY-hon-dert tvay-un-TVIN-tikh", en: "22,222", tip: "22=tweeëntwintig (twee+en+twintig). The ë shows the 'e' is separate. Yes, this is one sentence in Dutch!" },
    ],
  },
  {
    id: "numwords",
    label: "Numbers (extra)",
    emoji: "🔣",
    color: "#2e4057",
    words: [
      { nl: "ongeveer", phonetic: "on-khuh-FAYR", en: "approximately", tip: "'Ongeveer tien minuten' = about ten minutes. Very common in everyday speech." },
      { nl: "precies", phonetic: "pruh-SEES", en: "precisely / exactly", tip: "Also used as a reaction: 'Precies!' = Exactly! / That's right!" },
      { nl: "gemiddeld", phonetic: "khuh-MID-dult", en: "average / on average", tip: "Soft 'g'. 'Gemiddeld genomen' = on average." },
      { nl: "stijgend", phonetic: "STAY-khunt", en: "ascending / rising", tip: "From 'stijgen' (to rise). 'Stijgende lijn' = ascending line. Opposite: dalend." },
      { nl: "dalend", phonetic: "DAH-lunt", en: "descending / falling", tip: "From 'dalen' (to descend). 'Dalende trend' = falling trend. Opposite: stijgend." },
      { nl: "het cijfer", phonetic: "huht SAY-fur", en: "the digit / figure / grade", tip: "Also means a school grade. 'Een goed cijfer' = a good mark." },
      { nl: "het telefoonnummer", phonetic: "huht tay-luh-FOHN-num-ur", en: "the phone number", tip: "A great example of Dutch compound stacking. Telefoon + nummer, no spaces." },
      { nl: "het getal", phonetic: "huht khuh-TAL", en: "the number (mathematical)", tip: "Soft 'g'. 'Getal' = a number as a concept (vs. 'nummer' = a label/identifier)." },
      { nl: "het nummer", phonetic: "huht NUM-ur", en: "the number (identifier)", tip: "Used for phone numbers, house numbers, seat numbers — things with labels." },
      { nl: "de helft", phonetic: "duh helft", en: "the half", tip: "'De helft van tien is vijf' = Half of ten is five." },
      { nl: "het kwart", phonetic: "huht kvart", en: "the quarter", tip: "Een kwart = one quarter. Also used in telling time: 'kwart over drie'." },
      { nl: "dubbel", phonetic: "DUB-ul", en: "double", tip: "'Dubbel zoveel' = twice as much." },
    ],
  },
  {
    id: "months",
    label: "Months",
    emoji: "📅",
    color: "#1a6b3c",
    words: [
      { nl: "januari", phonetic: "yah-new-AH-ree", en: "January", tip: "Starts with 'y' sound. De maanden (the months) are all de-words." },
      { nl: "februari", phonetic: "fay-brew-AH-ree", en: "February", tip: "The 'r' before 'u' can be tricky — take it slowly." },
      { nl: "maart", phonetic: "maart", en: "March", tip: "Long 'aa'. Rhymes with 'cart'." },
      { nl: "april", phonetic: "ah-PRIL", en: "April", tip: "Same as English, stress on second syllable." },
      { nl: "mei", phonetic: "may", en: "May", tip: "'ei' = 'eye' sound. Very short word." },
      { nl: "juni", phonetic: "YEW-nee", en: "June", tip: "'j' = 'y' sound always in Dutch." },
      { nl: "juli", phonetic: "YEW-lee", en: "July", tip: "'j' = 'y'. Similar to German 'Juli'." },
      { nl: "augustus", phonetic: "ow-KHUS-tus", en: "August", tip: "Soft 'g'. 'ow' as in 'cow'." },
      { nl: "september", phonetic: "sep-TEM-ber", en: "September", tip: "Same as English. Stress on 2nd syllable." },
      { nl: "oktober", phonetic: "ok-TOH-ber", en: "October", tip: "Long 'oh'. Stress on 2nd syllable." },
      { nl: "november", phonetic: "noh-VEM-ber", en: "November", tip: "'v' may be pronounced as 'f' in Belgian Dutch." },
      { nl: "december", phonetic: "day-SEM-ber", en: "December", tip: "First 'e' is long: 'day'. Stress on 2nd syllable." },
      { nl: "de maand", phonetic: "duh maant", en: "the month", tip: "Final 'd' → 't' in pronunciation. Plural: de maanden." },
      { nl: "het jaar", phonetic: "huht yaar", en: "the year", tip: "'j' = 'y'. In welk jaar? = In which year?" },
      { nl: "Ik verjaar op...", phonetic: "ick fur-YAAR op", en: "My birthday is on...", tip: "'Ik verjaar op 5 maart' = My birthday is on March 5th. 'Verjaren' = to have a birthday." },
    ],
  },
  {
    id: "time",
    label: "Time",
    emoji: "⏰",
    color: "#784212",
    words: [
      { nl: "nu", phonetic: "new", en: "now", tip: "Short and punchy." },
      { nl: "dan", phonetic: "dan", en: "then / so", tip: "Also logical connector: 'als... dan...' = if... then..." },
      { nl: "vandaag", phonetic: "fan-DAHKH", en: "today", tip: "Van + dag (of + day). Soft 'g' at end." },
      { nl: "morgen", phonetic: "MOR-khun", en: "tomorrow / morning", tip: "Context tells you which. 'Morgenochtend' = tomorrow morning." },
      { nl: "gisteren", phonetic: "KHIS-tuh-run", en: "yesterday", tip: "Soft 'g' at start." },
      { nl: "altijd", phonetic: "AL-tayd", en: "always", tip: "'ijd' = 'ayd' sound." },
      { nl: "nooit", phonetic: "noyt", en: "never", tip: "'ooi' = 'oy' sound." },
      { nl: "soms", phonetic: "soms", en: "sometimes", tip: "Very commonly used." },
      { nl: "de minuut", phonetic: "duh mee-NEWT", en: "the minute", tip: "Plural: de minuten. 'Vijf minuten' = five minutes." },
      { nl: "het uur", phonetic: "huht uur", en: "the hour", tip: "Long 'uu'. 'Twee uur' = two o'clock / two hours." },
      { nl: "het kwartier", phonetic: "huht kvar-TEER", en: "the quarter hour", tip: "Een kwartier = 15 minutes. 'Kwart over twee' = quarter past two." },
      { nl: "de dag", phonetic: "duh dahkh", en: "the day", tip: "Elke dag = every day. Plural: de dagen." },
      { nl: "de week", phonetic: "duh vayk", en: "the week", tip: "Deze week = this week. Plural: de weken." },
      { nl: "de maand", phonetic: "duh maant", en: "the month", tip: "Final 'd' → 't'. Plural: de maanden." },
      { nl: "het jaar", phonetic: "huht yaar", en: "the year", tip: "Plural: de jaren." },
      { nl: "de ochtend", phonetic: "duh OKH-tunt", en: "the morning", tip: "'s Ochtends = in the morning (adverb form)." },
      { nl: "de middag", phonetic: "duh MID-dahkh", en: "the afternoon", tip: "'s Middags = in the afternoon. 'Goedemiddag' uses this." },
      { nl: "de avond", phonetic: "duh AH-font", en: "the evening", tip: "'s Avonds = in the evening. 'v' → 'f' sound." },
      { nl: "de nacht", phonetic: "duh nakht", en: "the night", tip: "Soft 'ch' at end. 's Nachts = at night." },
      { nl: "de klok", phonetic: "duh klok", en: "the clock", tip: "Hoe laat is het? = What time is it? Op de klok = on the clock." },
      { nl: "het horloge", phonetic: "huht hor-LOH-zhuh", en: "the wristwatch", tip: "French origin — 'zh' sound like in 'measure'." },
      { nl: "het seizoen", phonetic: "huht say-ZOON", en: "the season", tip: "French origin. Plural: de seizoenen." },
      { nl: "het begin", phonetic: "huht buh-KHIN", en: "the beginning", tip: "Soft 'g'. 'In het begin' = in the beginning." },
    ],
  },
  {
    id: "weather",
    label: "Weather & Seasons",
    emoji: "🌤️",
    color: "#2471a3",
    words: [
      { nl: "de lente", phonetic: "duh LEN-tuh", en: "Spring", tip: "Lente = Spring. Mild and wet in Belgium." },
      { nl: "de zomer", phonetic: "duh ZOH-mer", en: "Summer", tip: "Long 'oh'. Belgium summers are warm but short!" },
      { nl: "de herfst", phonetic: "duh herfst", en: "Autumn / Fall", tip: "The 'rf' cluster — say it clearly. Herfst = harvest time." },
      { nl: "de winter", phonetic: "duh VIN-ter", en: "Winter", tip: "'w' → soft 'v'. Koude winter = cold winter." },
      { nl: "het is warm", phonetic: "huht is varm", en: "It is warm", tip: "'w' → 'v'. The standard weather phrase." },
      { nl: "het is koud", phonetic: "huht is kowt", en: "It is cold", tip: "Final 'd' → 't'. 'Ik heb koud' = I am cold (Belgian Dutch!)." },
      { nl: "de regen", phonetic: "duh RAY-khun", en: "the rain", tip: "Soft 'g'. Het regent = it is raining." },
      { nl: "de sneeuw", phonetic: "duh snayw", en: "the snow", tip: "'eeuw' = 'ayw' sound. Het sneeuwt = it is snowing." },
      { nl: "de wind", phonetic: "duh vint", en: "the wind", tip: "Final 'd' → 't'. Het waait = it is windy." },
      { nl: "het waait", phonetic: "huht vayt", en: "it is windy / blowing", tip: "From 'waaien' [WAY-yun]. The verb used for wind action." },
      { nl: "het regent", phonetic: "huht RAY-khunt", en: "it is raining", tip: "Soft 'g'. Het + 3rd person verb = standard weather pattern." },
      { nl: "het vriest", phonetic: "huht freest", en: "it is freezing", tip: "From 'vriezen'. Irregular — vriezen → vriest. No soft 'g' here." },
      { nl: "het hagelt", phonetic: "huht HAH-khult", en: "it is hailing", tip: "Soft 'g'. From 'hagelen'. Hail is called 'de hagel'." },
      { nl: "het bliksemt", phonetic: "huht BLIK-suhmt", en: "it is lightning", tip: "From 'bliksemen'. 'De bliksem' = the lightning (noun)." },
      { nl: "de zon schijnt", phonetic: "duh zon skhayntt", en: "the sun is shining", tip: "Unlike other weather, 'de zon' is the subject — not 'het'. 'Schijnen' = to shine." },
      { nl: "het is bewolkt", phonetic: "huht is buh-VOLKT", en: "it is cloudy", tip: "From 'wolk' (cloud). 'Het is bewolkt' = overcast/cloudy sky." },
      { nl: "het is zonnig", phonetic: "huht is ZON-ikh", en: "it is sunny", tip: "Adjective from 'zon' (sun). Soft 'g' at end." },
      { nl: "de bloem", phonetic: "duh bloom", en: "the flower", tip: "'oe' = long 'oo'. De bloemen = the flowers." },
      { nl: "de boom", phonetic: "duh bohm", en: "the tree", tip: "Long 'oh'. De bomen = the trees." },
      { nl: "de zee", phonetic: "duh zay", en: "the sea", tip: "Aan zee = at the seaside. De Noordzee = the North Sea." },
      { nl: "de kust", phonetic: "duh kust", en: "the coast", tip: "De Belgische kust = the Belgian coast." },
      { nl: "de grens", phonetic: "duh khrens", en: "the border", tip: "Soft 'g'. Aan de grens = at the border. De grens met Frankrijk." },
      { nl: "het noorden", phonetic: "huht NOH-dun", en: "the north", tip: "In het noorden van België. Noordelijk = northern." },
      { nl: "het zuiden", phonetic: "huht ZOW-dun", en: "the south", tip: "In het zuiden. Zuidelijk = southern." },
      { nl: "het oosten", phonetic: "huht OHS-tun", en: "the east", tip: "Oostelijk = eastern. Oost-België = East Belgium." },
      { nl: "het westen", phonetic: "huht VES-tun", en: "the west", tip: "Westelijk = western. 'w' → 'v' sound." },
    ],
  },
  {
    id: "adjectives",
    label: "Adjectives",
    emoji: "🎨",
    color: "#1a5276",
    words: [
      { nl: "goed", phonetic: "khoot", en: "good", tip: "Soft 'g', final 'd' → 't'. Predicate: 'het is goed' (no -e)." },
      { nl: "slecht", phonetic: "slekht", en: "bad", tip: "'ch' = soft guttural." },
      { nl: "groot", phonetic: "khroht", en: "big / great", tip: "'oo' = long 'oh'." },
      { nl: "klein", phonetic: "klayn", en: "small", tip: "'ei' = 'eye' sound." },
      { nl: "nieuw", phonetic: "neew", en: "new", tip: "'ieuw' glides from 'ee' to 'w'." },
      { nl: "oud", phonetic: "owt", en: "old", tip: "'ou' = 'ow', final 'd' → 't'." },
      { nl: "mooi", phonetic: "moy", en: "beautiful / nice", tip: "Very versatile compliment word." },
      { nl: "lekker", phonetic: "LEK-ur", en: "tasty / nice / good", tip: "Quintessentially Belgian! Used for food, weather, feelings." },
      { nl: "leuk", phonetic: "löök", en: "fun / nice / cool", tip: "'eu' = French-style rounded vowel. 'Dat is leuk!' = That's fun/nice!" },
      { nl: "veel", phonetic: "fayl", en: "much / many", tip: "Veel mensen = many people." },
      { nl: "weinig", phonetic: "VAY-nikh", en: "few / little", tip: "Opposite of veel." },
      { nl: "belangrijk", phonetic: "buh-LANG-rayk", en: "important", tip: "'ij' = 'eye'. 'Dat is belangrijk' = That is important." },
      { nl: "fout", phonetic: "fowt", en: "wrong / incorrect", tip: "'ou' = 'ow'. 'Fout!' = Wrong! Used in exercises." },
      { nl: "juist", phonetic: "yowst", en: "correct / right / just", tip: "'ui' vowel. 'Juist!' = Correct! Opposite of fout." },
      { nl: "moe", phonetic: "moo", en: "tired", tip: "'oe' = 'oo'. 'Ik ben moe' = I am tired." },
      { nl: "klaar", phonetic: "klaar", en: "ready / done / clear", tip: "Long 'aa'. 'Ben je klaar?' = Are you ready/done?" },
      { nl: "ziek", phonetic: "zeek", en: "sick / ill", tip: "Long 'ie'. 'Ik ben ziek' = I am sick." },
    ],
  },
  {
    id: "connectors",
    label: "Connectors & Adverbs",
    emoji: "🔗",
    color: "#b03a2e",
    words: [
      { nl: "en", phonetic: "en", en: "and", tip: "Short 'e' sound." },
      { nl: "maar", phonetic: "maar", en: "but", tip: "Long 'aa' vowel." },
      { nl: "of", phonetic: "of", en: "or / whether", tip: "Dual meaning — context tells you which." },
      { nl: "want", phonetic: "vant", en: "because / for", tip: "Word order stays normal after 'want' (unlike 'omdat')." },
      { nl: "omdat", phonetic: "OM-dat", en: "because", tip: "Verb goes to end: 'omdat ik moe ben'." },
      { nl: "dus", phonetic: "dus", en: "so / therefore", tip: "'Dus jij bent klaar' = So you're done." },
      { nl: "ook", phonetic: "ohk", en: "also / too", tip: "'oo' = long 'oh'." },
      { nl: "nog", phonetic: "nokh", en: "still / yet / another", tip: "Very versatile. 'Nog een?' = Another one?" },
      { nl: "al", phonetic: "al", en: "already", tip: "'Ik ben al klaar' = I'm already done. Also 'al' = although." },
      { nl: "bijna", phonetic: "BAY-nah", en: "almost / nearly", tip: "'Ik ben er bijna' = I'm almost there." },
      { nl: "onmiddellijk", phonetic: "on-MID-duh-luk", en: "immediately", tip: "Stressing the 'mid' syllable. 'Kom onmiddellijk!' = Come immediately!" },
      { nl: "binnenkort", phonetic: "BIN-un-kort", en: "soon / shortly", tip: "Lit. 'within short'. 'Tot binnenkort' = See you soon." },
      { nl: "gelukkig", phonetic: "khuh-LUK-ikh", en: "fortunately / luckily", tip: "Soft 'g' both times. Also means 'happy': 'Ik ben gelukkig'." },
      { nl: "helaas", phonetic: "huh-LAAS", en: "unfortunately", tip: "Long 'aa'. 'Helaas kan ik niet.' = Unfortunately I can't." },
      { nl: "spijtig", phonetic: "SPAY-tikh", en: "regrettably / what a pity", tip: "Typically Belgian! 'Spijtig genoeg' = Unfortunately (lit. pityingly enough)." },
      { nl: "zelf", phonetic: "zelf", en: "self / myself / yourself", tip: "'Doe het zelf' = Do it yourself. Adds emphasis." },
      { nl: "even", phonetic: "AY-fun", en: "just a moment / just", tip: "'Even wachten' = just wait. 'Kan ik even...?' = Can I just...?" },
      { nl: "gewoon", phonetic: "khuh-VOHN", en: "just / simply / normally", tip: "'Dat is gewoon zo' = That's just how it is. Very Belgian filler word." },
      { nl: "vooral", phonetic: "for-AL", en: "especially / above all", tip: "'Vooral in de zomer' = especially in summer." },
      { nl: "echt", phonetic: "ekht", en: "really / truly / genuine", tip: "'Echt?' = Really? Great as a reaction. 'Dat is echt leuk' = That's really fun." },
      { nl: "zal", phonetic: "zal", en: "shall / will", tip: "Modal verb form of 'zullen'. 'Ik zal het doen' = I will do it." },
    ],
  },
  {
    id: "prepositions",
    label: "Prepositions",
    emoji: "📍",
    color: "#117a65",
    words: [
      { nl: "in", phonetic: "in", en: "in / into", tip: "Short 'i' sound." },
      { nl: "op", phonetic: "op", en: "on / at", tip: "Op tafel = on the table. Op school = at school." },
      { nl: "met", phonetic: "met", en: "with", tip: "Met plezier = with pleasure." },
      { nl: "van", phonetic: "fan", en: "of / from", tip: "'v' → 'f'. Van Brussel = from Brussels." },
      { nl: "naar", phonetic: "naar", en: "to (direction)", tip: "Naar huis gaan = go home." },
      { nl: "voor", phonetic: "fohr", en: "for / before / in front of", tip: "'oo' = long 'oh'. Many meanings." },
      { nl: "aan", phonetic: "aan", en: "at / on / to", tip: "Long 'aa'. Aan de kust = at the coast." },
      { nl: "uit", phonetic: "owt", en: "out of / from", tip: "'ui' is the tricky Dutch vowel." },
      { nl: "bij", phonetic: "bay", en: "at / near / with", tip: "'Bij mij thuis' = at my place. Very versatile." },
      { nl: "over", phonetic: "OH-fur", en: "about / over / in (time)", tip: "'Over een uur' = in an hour. 'Praten over' = talk about." },
      { nl: "tussen", phonetic: "TUS-sun", en: "between", tip: "Tussen twee en drie uur = between two and three o'clock." },
    ],
  },
  {
    id: "nouns",
    label: "Key Nouns",
    emoji: "📦",
    color: "#5d6d7e",
    words: [
      { nl: "de taal", phonetic: "duh taal", en: "the language", tip: "Long 'aa'. Welke taal spreek je? = What language do you speak?" },
      { nl: "het land", phonetic: "huht lant", en: "the country / land", tip: "Final 'd' → 't'. Uit welk land kom je? = What country are you from?" },
      { nl: "het huis", phonetic: "huht howss", en: "the house / home", tip: "'ui' vowel — the tricky one! Naar huis = home (direction)." },
      { nl: "de woonkamer", phonetic: "duh VOHN-kah-mer", en: "the living room", tip: "Wonen (to live) + kamer (room). Compound nouns stack in Dutch." },
      { nl: "het werk", phonetic: "huht verk", en: "the work / job", tip: "Op het werk = at work. 'werk' also means it works." },
      { nl: "het begin", phonetic: "huht buh-KHIN", en: "the beginning", tip: "Soft 'g'. In het begin = in the beginning." },
      { nl: "de volgorde", phonetic: "duh FOL-khor-duh", en: "the order / sequence", tip: "Vol (full) + orde (order). 'In de juiste volgorde' = in the right order." },
      { nl: "het formulier", phonetic: "huht for-mew-LEER", en: "the form (document)", tip: "French origin. 'Een formulier invullen' = to fill in a form." },
      { nl: "het potlood", phonetic: "huht POT-loht", en: "the pencil", tip: "Lit. 'pot lead'. Final 'd' → 't'." },
      { nl: "de pen", phonetic: "duh pen", en: "the pen", tip: "Short 'e'. Same as English." },
      { nl: "het water", phonetic: "huht VAH-tur", en: "the water", tip: "Een glas water, alsjeblieft!" },
      { nl: "het eten", phonetic: "huht AY-tun", en: "the food / eating", tip: "Both noun (food) and infinitive (to eat)." },
      { nl: "de uitgang", phonetic: "duh OWT-khang", en: "the exit", tip: "Uit (out) + gang (corridor/way). Compound word." },
      { nl: "de schilderijen", phonetic: "duh skhil-duh-RAY-yun", en: "the paintings", tip: "Plural of 'het schilderij'. Soft 'g' at start." },
      { nl: "de uitnodiging", phonetic: "duh owt-NOH-dih-khink", en: "the invitation", tip: "Uitnodigen (to invite) + -ing. 'Een uitnodiging sturen' = to send an invitation." },
    ],
  },
  {
    id: "essentials",
    label: "Essentials",
    emoji: "✅",
    color: "#c8a84b",
    words: [
      { nl: "ja", phonetic: "yah", en: "yes", tip: "Short and clear." },
      { nl: "nee", phonetic: "nay", en: "no", tip: "Long 'ee' sound." },
      { nl: "alsjeblieft", phonetic: "als-yuh-BLEEFT", en: "please / here you go", tip: "Also used when handing something over. Formal: 'alstublieft'." },
      { nl: "dank je (wel)", phonetic: "dank yuh vel", en: "thank you (informal)", tip: "Add 'wel' for emphasis. Reply: 'Graag gedaan' = You're welcome." },
      { nl: "dank u wel", phonetic: "dank ew vel", en: "thank you (formal)", tip: "Use 'u' form with strangers and elders." },
      { nl: "sorry", phonetic: "SO-ree", en: "sorry / excuse me", tip: "Same as English. Used widely for bumping into people too." },
      { nl: "graag", phonetic: "khraakh", en: "gladly / please", tip: "Ja, graag = Yes, please. Quintessentially Belgian. Graag gedaan = You're welcome." },
      { nl: "niet", phonetic: "neet", en: "not", tip: "Negation. 'Ik wil niet' = I don't want to." },
      { nl: "geen", phonetic: "khayn", en: "no (before nouns)", tip: "'Ik heb geen tijd' = I have no time. Replaces 'een' in negation." },
      { nl: "met plezier", phonetic: "met pluh-ZEER", en: "with pleasure", tip: "Used to accept requests warmly. 'Ja, met plezier!' = Yes, with pleasure!" },
      { nl: "Ja, dat gaat", phonetic: "yah dat khaat", en: "Yes, that works / that's fine", tip: "Very Belgian expression for agreeing to something. Soft 'g' in 'gaat'." },
      { nl: "Natuurlijk", phonetic: "nah-TUUR-luk", en: "of course / naturally", tip: "Strong agreement. 'Natuurlijk!' = Of course!" },
    ],
  },
  {
    id: "professions",
    label: "Professions",
    emoji: "💼",
    color: "#b7950b",
    words: [
      { nl: "het beroep", phonetic: "huht buh-ROOP", en: "the profession", tip: "Long 'oo'. 'Wat is uw beroep?' = What is your profession?" },
      { nl: "de garagist", phonetic: "duh khah-rah-ZHIST", en: "the mechanic", tip: "French-origin word. 'zh' = like 's' in 'measure'." },
      { nl: "de student", phonetic: "duh stew-DENT", en: "the student", tip: "Same as English. Stress on 2nd syllable." },
      { nl: "de verkoper / verkoopster", phonetic: "fur-KOH-pur / fur-KOHP-ster", en: "salesman / saleswoman", tip: "-er = male, -ster = female. Pattern used in many professions." },
      { nl: "de bediende", phonetic: "duh buh-DEEN-duh", en: "the employee / clerk", tip: "White-collar worker. 'bediend' = served/employed." },
      { nl: "de chauffeur", phonetic: "duh shoh-FÖR", en: "the driver / chauffeur", tip: "French origin. 'ch' = 'sh' sound here." },
      { nl: "de dokter", phonetic: "duh DOK-ter", en: "the doctor", tip: "Werkt in een ziekenhuis (works in a hospital)." },
      { nl: "de verpleegster / verpleger", phonetic: "fur-PLAYGH-ster / fur-PLAY-kher", en: "nurse (f) / nurse (m)", tip: "Werken in een ziekenhuis. Soft 'g'." },
      { nl: "de advocaat", phonetic: "duh ahd-foh-KAAT", en: "the lawyer", tip: "Long 'aa' at end. 'v' → 'f'. Also means avocado — context needed!" },
      { nl: "de elektricien", phonetic: "duh ay-lek-tree-SEEN", en: "the electrician", tip: "French-style ending '-ien' = '-see-en'." },
      { nl: "de arbeider", phonetic: "duh AR-bay-der", en: "the worker / labourer", tip: "Blue-collar worker. 'Fabrieksarbeider' = factory worker." },
      { nl: "de leraar / lerares", phonetic: "duh LAY-raar / lay-RAH-res", en: "teacher (m) / teacher (f)", tip: "Werkt op de school. -es = feminine ending." },
      { nl: "de lasser", phonetic: "duh LAS-ser", en: "the welder", tip: "From 'lassen' (to weld). Doubled 's' = short vowel." },
      { nl: "de schrijnwerker", phonetic: "duh SKRAYN-ver-ker", en: "the carpenter / joiner", tip: "Schrijn (cabinet/shrine) + werker (worker). Works with wood (hout)." },
      { nl: "de huisvrouw", phonetic: "duh HOWSS-frow", en: "the housewife", tip: "Huis (house) + vrouw (woman). 'ui' vowel." },
      { nl: "werkloos", phonetic: "VERK-lohs", en: "unemployed", tip: "Werk (work) + loos (without). 'Ik ben werkloos' = I'm unemployed." },
      { nl: "met pensioen", phonetic: "met pen-SEEOON", en: "retired (with pension)", tip: "'Ik ben met pensioen' = I'm retired. French-origin 'pensioen'." },
    ],
  },
  {
    id: "relationships",
    label: "Relationships",
    emoji: "💑",
    color: "#c0392b",
    words: [
      { nl: "getrouwd", phonetic: "khuh-TROWT", en: "married", tip: "Soft 'g'. 'Ik ben getrouwd' = I'm married. 'trouwen' = to marry." },
      { nl: "verloofd", phonetic: "fur-LOHFT", en: "engaged", tip: "'Wij zijn verloofd' = We are engaged. From 'verloven'." },
      { nl: "gescheiden", phonetic: "khuh-SKHAYD-un", en: "divorced", tip: "Soft 'g'. From 'scheiden' (to separate). 'ij' = 'eye'." },
      { nl: "alleenstaand", phonetic: "ah-LAYN-staant", en: "single", tip: "Alleen (alone) + staand (standing). Literally 'standing alone'. Very descriptive!" },
      { nl: "samenwonend", phonetic: "SAH-mun-voh-nunt", en: "cohabiting / living together", tip: "Samen (together) + wonend (living). Common in Belgium before or instead of marriage." },
      { nl: "weduwe / weduwnaar", phonetic: "VAY-dew-uh / VAY-dew-naar", en: "widow / widower", tip: "'weduwe' = female, 'weduwnaar' = male. Long 'uu'." },
    ],
  },
  {
    id: "transport",
    label: "Transport",
    emoji: "🚌",
    color: "#1a6b4a",
    words: [
      { nl: "het vliegtuig", phonetic: "huht FLEEKH-towkh", en: "the aeroplane", tip: "Vlieg (fly) + tuig (craft). Soft 'g' twice. 'ui' vowel." },
      { nl: "de trein", phonetic: "duh trayn", en: "the train", tip: "'ei' = 'eye'. 'Met de trein' = by train." },
      { nl: "de bus", phonetic: "duh bus", en: "the bus", tip: "Short 'u'. 'Met de bus' = by bus." },
      { nl: "de tram", phonetic: "duh tram", en: "the tram", tip: "Belgium has an extensive tram network along the coast!" },
      { nl: "de bushalte", phonetic: "duh BUS-hal-tuh", en: "the bus stop", tip: "Bus + halte (stop/halt). 'Waar is de bushalte?' = Where is the bus stop?" },
      { nl: "de fiets", phonetic: "duh feets", en: "the bicycle", tip: "'ie' = long 'ee'. Belgium is very cycling-friendly!" },
      { nl: "de auto", phonetic: "duh OW-toh", en: "the car", tip: "'au' = 'ow'. 'Met de auto' = by car." },
      { nl: "het station", phonetic: "huht stah-SEEOHN", en: "the (train) station", tip: "French-origin. 'Waar is het station?' = Where is the station?" },
    ],
  },
  {
    id: "places",
    label: "Places & Events",
    emoji: "🎉",
    color: "#8e44ad",
    words: [
      { nl: "het feest", phonetic: "huht fayst", en: "the party / celebration", tip: "'ee' = long 'ay'. 'Feestje!' = Party! (diminutive makes it festive)." },
      { nl: "de verjaardag", phonetic: "duh fur-YAAR-dahkh", en: "the birthday", tip: "Soft 'g' at end. 'Gelukkige verjaardag!' = Happy birthday! 'Ik verjaar op 5 mei' = My birthday is May 5th." },
      { nl: "de geboorte", phonetic: "duh khuh-BOHR-tuh", en: "the birth", tip: "Soft 'g'. 'Bij de geboorte' = at birth. Related: 'de geboortedag' = birthday (lit. birth day)." },
      { nl: "de babyborrel", phonetic: "duh BAY-bee-bor-ul", en: "post-birth drinks party", tip: "Uniquely Belgian/Dutch! A casual drinks gathering held AFTER the baby is born, to welcome the newborn. Not a pre-birth gift party — that's an English/American tradition." },
      { nl: "het trouwfeest", phonetic: "huht TROW-fayst", en: "the wedding party", tip: "Trouwen (to marry) + feest (party). 'Het trouwfeest was super leuk!'" },
      { nl: "de zoo", phonetic: "duh zoh", en: "the zoo", tip: "Long 'oh'. 'Naar de zoo gaan' = going to the zoo." },
      { nl: "de cinema", phonetic: "duh SEE-nuh-mah", en: "the cinema", tip: "Also 'de bioscoop'. 'Naar de cinema gaan' = going to the cinema." },
      { nl: "het café", phonetic: "huht kah-FAY", en: "the café / pub", tip: "Stress on second syllable. In Belgium, cafés are often brown-pub style." },
      { nl: "het museum", phonetic: "huht mew-ZAY-um", en: "the museum", tip: "Stress on 2nd syllable. Belgium has world-class museums!" },
      { nl: "het restaurant", phonetic: "huht res-toh-RANT", en: "the restaurant", tip: "French origin. 'Uit eten gaan naar het restaurant' = going out to eat." },
      { nl: "de markt", phonetic: "duh markt", en: "the market", tip: "'De Grote Markt' is the main square in most Belgian cities." },
      { nl: "de school", phonetic: "duh skhohl", en: "the school", tip: "Soft 'sch' = 'skh'. 'Op school' = at school." },
      { nl: "het ziekenhuis", phonetic: "huht ZEEK-un-howss", en: "the hospital", tip: "Ziek (sick) + huis (house). 'ui' vowel." },
    ],
  },
  {
    id: "activities",
    label: "Activities",
    emoji: "🏃",
    color: "#117a65",
    words: [
      { nl: "wandelen", phonetic: "VAN-duh-lun", en: "walking / hiking", tip: "Ik ga graag wandelen = I like going for walks." },
      { nl: "fietsen", phonetic: "FEET-sun", en: "cycling", tip: "'ie' = long 'ee'. Ik ga graag fietsen = I like cycling." },
      { nl: "zwemmen", phonetic: "ZVEM-un", en: "swimming", tip: "Ik zwem graag = I like swimming. Double 'm' = short vowel." },
      { nl: "skiën", phonetic: "SKEE-un", en: "skiing", tip: "The 'ë' shows two separate syllables: ski-en. Ik ga graag skiën." },
      { nl: "lezen", phonetic: "LAY-zun", en: "reading", tip: "Ik lees graag = I like reading. Irregular: lezen → lees." },
      { nl: "koken", phonetic: "KOH-kun", en: "cooking", tip: "Ik kook graag = I like cooking. Long 'oh'." },
      { nl: "gamen", phonetic: "KHAY-mun", en: "gaming", tip: "Ik game graag op de computer. English loanword used naturally." },
      { nl: "foto's nemen", phonetic: "FOH-tohs NAY-mun", en: "taking photos", tip: "Ik neem graag foto's van de natuur. 'foto's' — apostrophe for plural of foreign words." },
      { nl: "uit eten gaan", phonetic: "owt AY-tun khaan", en: "going out to eat", tip: "'uit' = separable prefix of 'uitgaan'. 'Ga je mee uit eten?' = Coming out to eat?" },
      { nl: "sporten", phonetic: "SPOR-tun", en: "doing sport / exercising", tip: "Ik sport graag = I like sport." },
    ],
  },
  {
    id: "learning",
    label: "School & Learning",
    emoji: "📚",
    color: "#1a3a6b",
    words: [
      { nl: "de les", phonetic: "duh les", en: "the lesson", tip: "Short 'e'. Plural: de lessen. 'In de les' = in class." },
      { nl: "de cursus", phonetic: "duh KUR-sus", en: "the course", tip: "Stress on first syllable. 'Een cursus volgen' = to follow a course." },
      { nl: "de cursist", phonetic: "duh kur-SIST", en: "the course participant", tip: "The person taking a course. '-ist' = person who does something." },
      { nl: "de oefening", phonetic: "duh OO-fuh-ning", en: "the exercise", tip: "'oe' = long 'oo'. 'Een oefening maken' = to do an exercise." },
      { nl: "de zin", phonetic: "duh zin", en: "the sentence / the desire", tip: "Dual meaning! 'Een zin schrijven' = write a sentence. 'Ik heb geen zin' = I don't feel like it." },
      { nl: "de zinnen", phonetic: "duh ZIN-un", en: "the sentences", tip: "Plural of 'zin' (in the sentence meaning)." },
      { nl: "herhalen", phonetic: "her-HAH-lun", en: "to repeat", tip: "'Kan je dat herhalen?' = Can you repeat that?" },
      { nl: "keer", phonetic: "kayr", en: "time(s) / turn", tip: "Één keer = once. Twee keer = twice. 'Nog een keer' = one more time." },
      { nl: "al", phonetic: "al", en: "already", tip: "'Ik begrijp het al' = I already understand it." },
      { nl: "bijna", phonetic: "BAY-nah", en: "almost", tip: "'Ik ben er bijna' = I'm almost there / getting it." },
      { nl: "betekenen", phonetic: "buh-TAY-kuh-nun", en: "to mean", tip: "'Wat betekent dit?' = What does this mean? Present: betekent. Past: betekend." },
      { nl: "belangrijk", phonetic: "buh-LANG-rayk", en: "important", tip: "'Dit is belangrijk' = This is important." },
    ],
  },
  {
    id: "clothing",
    label: "Clothing",
    emoji: "👗",
    color: "#6e2f8a",
    words: [
      { nl: "de handschoen", phonetic: "duh HANT-skhoon", en: "the glove", tip: "Hand (hand) + schoen (shoe). Lit. 'hand shoe'! Plural: de handschoenen." },
      { nl: "de muts", phonetic: "duh muts", en: "the hat / beanie", tip: "Specifically a knitted hat/beanie. 'Een muts opzetten' = to put on a hat." },
      { nl: "de regenjas", phonetic: "duh RAY-khun-yas", en: "the raincoat", tip: "Regen (rain) + jas (coat/jacket). Essential in Belgium!" },
      { nl: "de jas", phonetic: "duh yas", en: "the jacket / coat", tip: "General outerwear. 'Doe je jas aan' = put on your coat." },
      { nl: "de schoenen", phonetic: "duh SKHOO-nun", en: "the shoes", tip: "'oe' = long 'oo'. Singular: de schoen." },
      { nl: "de trui", phonetic: "duh troy", en: "the sweater / jumper", tip: "'ui' vowel. 'Een warme trui' = a warm sweater." },
    ],
  },
  {
    id: "shopping",
    label: "Shopping",
    emoji: "🛒",
    color: "#1a6b4a",
    words: [
      { nl: "de winkel", phonetic: "duh VIN-kul", en: "the shop", tip: "Plural: de winkels. 'Winkelen' = to go shopping." },
      { nl: "de supermarkt", phonetic: "duh SOO-per-markt", en: "the supermarket", tip: "Stress on first syllable. 'Ik doe mijn boodschappen in de supermarkt.'" },
      { nl: "de bibliotheek", phonetic: "duh bib-lee-oh-TAYK", en: "the library", tip: "French origin. Long 'ee' at end. 'Ik ga naar de bibliotheek.'" },
      { nl: "de openingsuren", phonetic: "duh OH-puh-nings-uu-run", en: "the opening hours", tip: "Openings (opening) + uren (hours). 'Wat zijn de openingsuren?' = What are the opening hours?" },
      { nl: "de dienstregeling", phonetic: "duh DEENST-ray-khuh-ling", en: "the timetable / schedule", tip: "Dienst (service) + regeling (arrangement). Used for bus/train schedules." },
      { nl: "open", phonetic: "OH-pun", en: "open", tip: "'De winkel is open.' Opposite: gesloten." },
      { nl: "gesloten", phonetic: "khuh-SLOH-tun", en: "closed", tip: "Soft 'g'. 'De winkel is gesloten op zondag' = closed on Sunday." },
      { nl: "de boodschappen", phonetic: "duh BOHT-skhap-pun", en: "the groceries", tip: "Always plural. 'Boodschappen doen' = to do the grocery shopping." },
      { nl: "de boodschappentas", phonetic: "duh BOHT-skhap-pun-tas", en: "the grocery bag", tip: "Boodschappen + tas (bag). 'Heb je een boodschappentas mee?' = Did you bring a bag?" },
      { nl: "de kassa", phonetic: "duh KAS-sah", en: "the checkout / till", tip: "'Ik betaal aan de kassa.' Double 's' = short vowel before it." },
      { nl: "betalen", phonetic: "buh-TAH-lun", en: "to pay", tip: "Ik betaal, jij betaalt. 'Hoe wil je betalen?' = How do you want to pay?" },
      { nl: "wachten", phonetic: "VAKH-tun", en: "to wait", tip: "Soft 'g'. 'Wachten op' = to wait FOR (not on!). Ik wacht op de bus." },
      { nl: "de afspraak", phonetic: "duh AF-spraak", en: "the appointment", tip: "Af + spraak (speech/arrangement). 'Een afspraak maken' = to make an appointment." },
      { nl: "het spoor", phonetic: "huht spohr", en: "the railway track / platform", tip: "Long 'oo'. 'Op welk spoor?' = On which platform? 'Op spoor 7' = on platform 7." },
      { nl: "de vacature", phonetic: "duh fah-kah-TUU-ruh", en: "the job vacancy", tip: "French origin. 'Er is een vacature' = there is a vacancy." },
    ],
  },
  {
    id: "fruit_veg",
    label: "Fruit & Veg",
    emoji: "🍎",
    color: "#27ae60",
    words: [
      { nl: "de sinaasappel", phonetic: "duh sin-aas-AP-pul", en: "the orange", tip: "Sinaas (from China) + appel (apple). Lit. 'China apple'! Plural: de sinaasappels." },
      { nl: "de appel", phonetic: "duh AP-pul", en: "the apple", tip: "Short 'a'. Plural: de appels. 'Een appel per dag...' = An apple a day..." },
      { nl: "de peer", phonetic: "duh payr", en: "the pear", tip: "Long 'ee'. Plural: de peren — long e stays long in open syllable: pe-ren." },
      { nl: "de kers", phonetic: "duh kers", en: "the cherry", tip: "Short 'e'. Plural: de kersen. Kersen on a taart = cherries on a cake." },
      { nl: "de aardbei", phonetic: "duh AART-bay", en: "the strawberry", tip: "Aard (earth) + bei (berry). Lit. 'earth berry'. Plural: de aardbeien." },
      { nl: "de banaan", phonetic: "duh bah-NAAN", en: "the banana", tip: "Long 'aa'. Plural: de bananen. Een tros bananen = a bunch of bananas." },
      { nl: "de druif", phonetic: "duh drowf", en: "the grape", tip: "'ui' vowel. Plural: de druiven — f→v rule! Een tros druiven = a bunch of grapes." },
      { nl: "de ananas", phonetic: "duh AH-nah-nas", en: "the pineapple", tip: "Stress on first syllable. Plural: de ananassen — double s keeps vowel short." },
      { nl: "de watermeloen", phonetic: "duh VAH-ter-muh-loon", en: "the watermelon", tip: "Water + meloen. 'oe' = long 'oo'. Plural: de watermeloenen." },
      { nl: "de wortel", phonetic: "duh VOR-tul", en: "the carrot", tip: "'w' → 'v'. Plural: de wortels. 'Ik eet graag wortels.' — very healthy!" },
      { nl: "de aardappel", phonetic: "duh AART-ap-pul", en: "the potato", tip: "Aard (earth) + appel (apple). Lit. 'earth apple'! Plural: de aardappels." },
      { nl: "de tomaat", phonetic: "duh toh-MAAT", en: "the tomato", tip: "Long 'aa'. Plural: de tomaten — aa becomes a in open syllable: to-ma-ten." },
      { nl: "de tros", phonetic: "duh tros", en: "the bunch / cluster", tip: "Used for bananas and grapes: een tros bananen, een tros druiven." },
    ],
  },
];

export default function DutchTutor() {
  const [activeCategory, setActiveCategory] = useState("greetings");
  const [search, setSearch] = useState("");
  const [flipped, setFlipped] = useState({});
  const [showTips, setShowTips] = useState(false);

  const current = CATEGORIES.find((c) => c.id === activeCategory);

  const filtered = search.trim()
    ? CATEGORIES.flatMap((c) =>
        c.words
          .filter(
            (w) =>
              w.nl.toLowerCase().includes(search.toLowerCase()) ||
              w.en.toLowerCase().includes(search.toLowerCase())
          )
          .map((w) => ({ ...w, cat: c.label, color: c.color }))
      )
    : null;

  const toggleFlip = (key) =>
    setFlipped((prev) => ({ ...prev, [key]: !prev[key] }));

  const totalWords = CATEGORIES.reduce((s, c) => s + c.words.length, 0);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "linear-gradient(135deg, #0d0d0d 0%, #1a1208 50%, #0d0d0d 100%)",
      minHeight: "100vh",
      color: "#f0e6c8",
      padding: "0 0 60px 0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(180deg, #1c1405 0%, #0d0d0d 100%)",
        borderBottom: "3px solid #c8a84b",
        padding: "32px 24px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Belgian flag stripes - decorative */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "8px", height: "100%", background: "#1a1a1a" }} />
        <div style={{ position: "absolute", top: 0, left: "8px", width: "8px", height: "100%", background: "#c8a84b" }} />
        <div style={{ position: "absolute", top: 0, left: "16px", width: "8px", height: "100%", background: "#b03a2e" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "8px", height: "100%", background: "#1a1a1a" }} />
        <div style={{ position: "absolute", top: 0, right: "8px", width: "8px", height: "100%", background: "#c8a84b" }} />
        <div style={{ position: "absolute", top: 0, right: "16px", width: "8px", height: "100%", background: "#b03a2e" }} />

        <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#c8a84b", textTransform: "uppercase", marginBottom: "8px", fontFamily: "'Georgia', serif" }}>
          🇧🇪 Belgian Dutch · Vlaams
        </div>
        <h1 style={{
          fontSize: "clamp(22px, 5vw, 36px)",
          fontWeight: "normal",
          color: "#f0e6c8",
          margin: "0 0 8px",
          letterSpacing: "2px",
        }}>
          De 100 Meest Gebruikte Woorden
        </h1>
        <p style={{ color: "#8a7a5a", fontSize: "14px", margin: "0 0 20px", fontStyle: "italic" }}>
          The 100 most used words in everyday conversation
        </p>

        {/* Search */}
        <div style={{ maxWidth: "360px", margin: "0 auto 16px", position: "relative" }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Dutch or English..."
            style={{
              width: "100%",
              padding: "10px 16px",
              background: "rgba(200,168,75,0.1)",
              border: "1px solid rgba(200,168,75,0.4)",
              borderRadius: "4px",
              color: "#f0e6c8",
              fontSize: "14px",
              fontFamily: "inherit",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: "#8a7a5a" }}>
            {totalWords} words · {CATEGORIES.length} categories
          </span>
          <button
            onClick={() => setShowTips(!showTips)}
            style={{
              background: showTips ? "#c8a84b" : "transparent",
              border: "1px solid #c8a84b",
              color: showTips ? "#0d0d0d" : "#c8a84b",
              padding: "3px 12px",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "12px",
              fontFamily: "inherit",
              letterSpacing: "1px",
            }}
          >
            {showTips ? "▲ Hide Pronunciation Guide" : "▼ Pronunciation Guide"}
          </button>
        </div>
      </div>

      {/* Pronunciation Tips Panel */}
      {showTips && (
        <div style={{
          background: "rgba(200,168,75,0.08)",
          borderBottom: "1px solid rgba(200,168,75,0.3)",
          padding: "20px 24px",
        }}>
          <h3 style={{ color: "#c8a84b", margin: "0 0 16px", fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase" }}>
            🔊 Belgian Dutch Pronunciation Guide
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "10px" }}>
            {PRONUNCIATION_TIPS.map((tip, i) => (
              <div key={i} style={{
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(200,168,75,0.2)",
                borderRadius: "4px",
                padding: "10px 14px",
              }}>
                <span style={{ color: "#c8a84b", fontWeight: "bold", fontSize: "14px" }}>{tip.sound}</span>
                <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#b0a080", lineHeight: "1.5" }}>{tip.rule}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px" }}>

        {/* Search Results */}
        {filtered ? (
          <div style={{ paddingTop: "28px" }}>
            <p style={{ color: "#8a7a5a", fontSize: "13px", marginBottom: "16px" }}>
              Found {filtered.length} word{filtered.length !== 1 ? "s" : ""}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
              {filtered.map((w, i) => (
                <WordCard key={i} word={w} cardKey={`search-${i}`} flipped={flipped} onFlip={toggleFlip} accent={w.color} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Category Tabs */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              padding: "24px 0 20px",
            }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    background: activeCategory === cat.id
                      ? cat.color
                      : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activeCategory === cat.id ? cat.color : "rgba(255,255,255,0.12)"}`,
                    color: activeCategory === cat.id ? "#0d0d0d" : "#b0a080",
                    padding: "6px 14px",
                    borderRadius: "3px",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontFamily: "inherit",
                    letterSpacing: "0.5px",
                    transition: "all 0.15s ease",
                    fontWeight: activeCategory === cat.id ? "bold" : "normal",
                  }}
                >
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>

            {/* Category Header */}
            {current && (
              <div style={{ marginBottom: "20px" }}>
                <h2 style={{
                  fontSize: "20px",
                  color: current.color,
                  fontWeight: "normal",
                  letterSpacing: "2px",
                  margin: "0 0 4px",
                  textTransform: "uppercase",
                }}>
                  {current.emoji} {current.label}
                </h2>
                <div style={{ height: "2px", width: "60px", background: current.color, borderRadius: "1px" }} />
                <p style={{ color: "#6a5a3a", fontSize: "11px", margin: "8px 0 0", letterSpacing: "1px" }}>
                  TAP A CARD TO SEE THE PRONUNCIATION TIP
                </p>
              </div>
            )}

            {/* Word Cards */}
            {current && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "12px",
              }}>
                {current.words.map((word, i) => (
                  <WordCard
                    key={i}
                    word={word}
                    cardKey={`${activeCategory}-${i}`}
                    flipped={flipped}
                    onFlip={toggleFlip}
                    accent={current.color}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "48px", color: "#4a3a1a", fontSize: "11px", letterSpacing: "2px" }}>
        BELGISCH NEDERLANDS · VOOR DAGELIJKS GEBRUIK
      </div>
    </div>
  );
}

function WordCard({ word, cardKey, flipped, onFlip, accent }) {
  const isFlipped = flipped[cardKey];
  return (
    <div
      onClick={() => onFlip(cardKey)}
      style={{
        background: isFlipped
          ? `linear-gradient(135deg, ${accent}18, ${accent}08)`
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${isFlipped ? accent : "rgba(255,255,255,0.1)"}`,
        borderRadius: "6px",
        padding: "18px 16px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        minHeight: "110px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: isFlipped ? `0 0 16px ${accent}22` : "none",
      }}
    >
      <div>
        <div style={{
          fontSize: "22px",
          color: "#f0e6c8",
          fontWeight: "bold",
          letterSpacing: "0.5px",
          marginBottom: "4px",
        }}>
          {word.nl}
        </div>
        <div style={{
          fontSize: "13px",
          color: accent,
          fontStyle: "italic",
          marginBottom: "6px",
          letterSpacing: "0.5px",
        }}>
          [{word.phonetic}]
        </div>
        <div style={{ fontSize: "13px", color: "#9a8a6a" }}>
          {word.en}
        </div>
        {word.cat && (
          <div style={{ fontSize: "10px", color: "#5a4a2a", marginTop: "4px", letterSpacing: "1px" }}>
            {word.cat.toUpperCase()}
          </div>
        )}
      </div>

      {isFlipped && (
        <div style={{
          marginTop: "12px",
          paddingTop: "10px",
          borderTop: `1px solid ${accent}44`,
          fontSize: "12px",
          color: "#b0a070",
          lineHeight: "1.5",
        }}>
          💡 {word.tip}
        </div>
      )}

      {!isFlipped && (
        <div style={{ fontSize: "10px", color: "#4a3a1a", marginTop: "10px", letterSpacing: "1px" }}>
          TAP FOR TIP →
        </div>
      )}
    </div>
  );
}
