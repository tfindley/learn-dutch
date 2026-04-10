import { useState, useCallback } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const TESTS = [
  {
    id: "test_opening",
    title: "Hoe gaat het?",
    subtitle: "Opening & Greetings",
    leerpad: "Opening",
    difficulty: "easy",
    emoji: "👋",
    questions: [
      { q: "Someone greets you with 'Hoe gaat het?' What is the most natural Belgian reply?", options: ["Tot ziens!", "Goed, dank je! En met jou?", "Aangenaam!", "Prettige dag!"], answer: 1, explanation: "'Goed, dank je! En met jou?' is the standard 3-part Belgian ritual: answer + thank + ask back. Always asking back is important — skipping it can feel abrupt." },
      { q: "'Gaat wel.' — what does this mean?", options: ["It's going very well!", "Not good at all.", "Getting by / alright.", "I have no idea what you mean."], answer: 2, explanation: "'Gaat wel' is the quintessential Belgian modest answer — not over-enthusiastic, not negative. Belgians rarely say 'heel goed!' unprompted." },
      { q: "When do you use 'Goedemiddag'?", options: ["In the morning until noon", "From noon to roughly 6pm", "From 6pm onwards", "Only at formal events"], answer: 1, explanation: "'Goedemiddag' = good afternoon, used from roughly noon to 6pm. 'Goedemorgen' = morning. 'Goedenavond' = evening (from ~6pm)." },
      { q: "Which is the most casual goodbye in Belgian Dutch?", options: ["Tot ziens!", "Goedenacht!", "Doei!", "Aangenaam!"], answer: 2, explanation: "'Doei!' is the most casual — used among friends and in relaxed situations. 'Tot ziens' is also perfectly acceptable and very common — it's neutral rather than formal, so you'll hear it everywhere. 'Goedenacht' is only for parting at bedtime. 'Aangenaam' is for first meetings, not goodbyes." },
      { q: "'Alles goed met de familie?' is an example of:", options: ["A formal business greeting", "A casual Belgian smalltalk opener", "A way to say goodbye", "A question about someone's health"], answer: 1, explanation: "This is classic Belgian warm smalltalk — asking about family as a social nicety. Belgians are relationship-oriented and this kind of opener is very natural." },
      { q: "You've just replied 'Goed, dank je!' to a greeting. What should you always add?", options: ["Tot ziens!", "En met jou?", "Aangenaam!", "Prettige dag!"], answer: 1, explanation: "Always ask it back — 'En met jou?' (And with you?) is an expected part of the Belgian greeting ritual. Skipping it can feel abrupt or self-centred. In formal situations: 'En met u?'" },
    ],
  },
  {
    id: "test_lp1a",
    title: "Uit welk land kom jij?",
    subtitle: "Leerpad 1A · Introductions",
    leerpad: "1A",
    difficulty: "easy",
    emoji: "🌍",
    questions: [
      { q: "What does 'Uit welk land kom jij?' mean?", options: ["Where do you live?", "What language do you speak?", "Where are you from?", "What is your name?"], answer: 2, explanation: "'Uit welk land kom jij?' = 'What country are you from?' Don't confuse with 'Waar woon jij?' = 'Where do you live?'" },
      { q: "How do you say 'My name is [name]' in Dutch?", options: ["Ik woon in ___.", "Ik kom uit ___.", "Mijn naam is ___.", "Ik spreek ___."], answer: 2, explanation: "'Mijn naam is ___' = 'My name is ___'. You can also say 'Ik heet ___' — both are natural." },
      { q: "'Ik woon in Roeselare' means:", options: ["I come from Roeselare", "I work in Roeselare", "I live in Roeselare", "I speak in Roeselare"], answer: 2, explanation: "'wonen' = to live/reside. 'Ik woon' = I live. Different from 'Ik kom uit' (I come from)." },
      { q: "How do you say 'I speak a little Dutch'?", options: ["Ik leer Nederlands.", "Ik spreek een beetje Nederlands.", "Ik kom uit Nederland.", "Ik woon in Nederland."], answer: 1, explanation: "'een beetje' = a little. A very useful phrase for the first lesson!" },
      { q: "'Aangenaam!' is used when:", options: ["Saying goodbye", "Answering the phone", "Meeting someone for the first time", "Asking for directions"], answer: 2, explanation: "'Aangenaam!' = 'Pleased to meet you!' Said when being introduced to someone." },
      { q: "Which verb means 'to live/reside'?", options: ["komen", "spreken", "heten", "wonen"], answer: 3, explanation: "'wonen' = to live/reside. Ik woon, jij woont, hij woont, wij wonen. Not to be confused with 'leven' (to be alive)." },
      { q: "Which question do you ask to find out someone's name?", options: ["Tot ziens!", "Hoe heet jij?", "Doei!", "Goedenacht!"], answer: 1, explanation: "'Hoe heet jij?' = 'What is your name?' You can also say 'Wat is jouw naam?' — both are natural." },
      { q: "How do you formally ask someone's name?", options: ["Hoe heet jij?", "Wat is uw naam?", "Welke taal spreek jij?", "Waar woon jij?"], answer: 1, explanation: "'uw' is the formal 'your'. Used with strangers, elders, or in professional settings." },
    ],
  },
  {
    id: "test_lp1b",
    title: "Wat is jouw beroep?",
    subtitle: "Leerpad 1B · Professions",
    leerpad: "1B",
    difficulty: "easy",
    emoji: "💼",
    questions: [
      { q: "What does 'Wat is jouw beroep?' mean?", options: ["Where do you work?", "What is your profession?", "Are you married?", "Do you have children?"], answer: 1, explanation: "'beroep' = profession/job. 'jouw' = your (informal). You can also ask 'Wat doe jij voor werk?'" },
      { q: "How do you say 'I work at school'?", options: ["Ik werk bij school.", "Ik werk aan school.", "Ik werk op school.", "Ik werk in school."], answer: 2, explanation: "'op school' is the fixed expression. Hospitals use 'in': 'in het ziekenhuis'. Companies use 'bij': 'bij [bedrijf]'." },
      { q: "'Ik ben met pensioen' means:", options: ["I am unemployed", "I am on holiday", "I work part-time", "I am retired"], answer: 3, explanation: "'met pensioen' = retired (literally 'with pension'). 'Ik ben werkloos' = I am unemployed." },
      { q: "Which means 'single' (not in a relationship)?", options: ["getrouwd", "verloofd", "gescheiden", "alleenstaand"], answer: 3, explanation: "'alleenstaand' = alone-standing = single. Literally describes someone 'standing alone'." },
      { q: "'Mijn vrouw is lerares' — what does the -es ending tell you?", options: ["She is retired", "She teaches languages", "She is a female teacher", "She works part-time"], answer: 2, explanation: "'-es' is a feminine suffix. 'lerares' = female teacher. 'leraar' = male teacher." },
      { q: "'Ik ben gescheiden' means:", options: ["I am married", "I am engaged", "I am single", "I am divorced"], answer: 3, explanation: "'gescheiden' = divorced. From 'scheiden' (to separate). Soft 'g' at the start." },
      { q: "Which is correct for 'I work as an electrician'?", options: ["Ik doe elektricien.", "Ik werk als elektricien.", "Ik ga elektricien.", "Ik ben als elektricien."], answer: 1, explanation: "'Ik werk als [beroep]' = I work as a [profession]. You can also say 'Ik ben elektricien'." },
      { q: "How do you ask about someone's partner's job?", options: ["Wat doet jouw partner?", "Wie is jouw partner?", "Waar woont jouw partner?", "Hoeveel verdient jouw partner?"], answer: 0, explanation: "'Wat doet jouw partner?' = 'What does your partner do?' Using 'doen' for profession questions is very natural." },
    ],
  },
  {
    id: "test_lp2",
    title: "Kinderen & Kosten",
    subtitle: "Leerpad 2A+2B · Family & Prices",
    leerpad: "2",
    difficulty: "easy",
    emoji: "👨‍👩‍👧",
    questions: [
      { q: "'Hoeveel kinderen heb jij?' — why is it 'heb' and not 'hebt'?", options: ["'hebben' is irregular here", "Inversion: 'jij' after the verb drops the -t", "It's 1st person singular", "'hebt' is actually correct"], answer: 1, explanation: "When 'jij/je' comes AFTER the verb (inversion in questions), the -t drops. 'heb jij?' not 'hebt jij?'." },
      { q: "'Ik heb geen kinderen' means:", options: ["I have some children", "My children are not here", "I have no children", "I don't want children"], answer: 2, explanation: "'geen' negates nouns. 'Ik heb geen [noun]' = I have no [noun]." },
      { q: "How do you say 'My oldest is twelve years old'?", options: ["Mijn jongste is twaalf jaar.", "Mijn oudste is twaalf jaar.", "Mijn kind heeft twaalf jaar.", "Twaalf jaar heeft mijn oudste."], answer: 1, explanation: "'oudste' = oldest. Dutch uses 'zijn' for age: 'is twaalf jaar', not 'heeft twaalf jaar'." },
      { q: "You're in a shop. How do you ask 'How much does it cost?'", options: ["Wat kost het?", "Hoeveel kost het?", "Both are correct.", "Hoe duur is het?"], answer: 2, explanation: "'Hoeveel kost het?' and 'Wat kost het?' are both natural and common." },
      { q: "The price is too high. What do you say?", options: ["Dat is goedkoop!", "Dat is een koopje!", "Dat is redelijk.", "Dat is te duur!"], answer: 3, explanation: "'te duur' = too expensive. 'goedkoop' = cheap. 'een koopje' = a bargain." },
      { q: "'Hoeveel kosten die?' — when do you use 'kosten' instead of 'kost'?", options: ["When talking about expensive things", "When asking politely", "When the subject is plural", "When in a formal shop"], answer: 2, explanation: "'kost' = singular. 'kosten' = plural. Match the verb to the subject, not the price." },
      { q: "'één' vs 'een' — what is the difference?", options: ["'één' is formal, 'een' is informal", "'één' = the number one (with accent), 'een' = the article a/an", "They are the same word", "'een' is only used before het-words"], answer: 1, explanation: "The accent marks on 'één' distinguish the number from the article 'een' (a/an)." },
      { q: "'Ik heb één broer en twee zussen' — what does this mean?", options: ["I have two brothers and one sister", "I have one brother and two sisters", "I am an only child", "I have three siblings"], answer: 1, explanation: "'broer' = brother. 'zus' (pl. 'zussen') = sister." },
    ],
  },
  {
    id: "test_lp3ab",
    title: "Tijd & Leeftijd",
    subtitle: "Leerpad 3A+3B · Time & Ages",
    leerpad: "3A+B",
    difficulty: "medium",
    emoji: "⏰",
    questions: [
      { q: "'Het is half drie' — what time is it?", options: ["3:30", "3:15", "2:45", "2:30"], answer: 3, explanation: "This is the #1 Dutch time trap! 'half drie' = halfway TO three = 2:30. NOT half past two (that would be half twee = 1:30)." },
      { q: "How do you say 'quarter past ten'?", options: ["kwart voor tien", "half tien", "kwart over tien", "tien over kwart"], answer: 2, explanation: "'kwart over tien' = 10:15. 'kwart voor tien' = 9:45. Over = past. Voor = to/before." },
      { q: "'Het is kwart voor acht' — what time is it?", options: ["8:15", "8:45", "7:15", "7:45"], answer: 3, explanation: "'kwart voor acht' = quarter TO eight = 7:45. 'voor' means before — quarter before eight." },
      { q: "It's 2:25. How do you say this in Dutch?", options: ["vijf voor half drie", "vijf over half twee", "tien voor half drie", "kwart voor half drie"], answer: 0, explanation: "2:25 = five minutes before 2:30 (half drie). Think: half drie = 2:30, so 2:25 = vijf voor half drie." },
      { q: "Which verb is used for age in Dutch?", options: ["hebben", "komen", "zijn", "wonen"], answer: 2, explanation: "Dutch uses 'zijn' for age: 'Ik BEN vijfendertig jaar.' Never 'ik heb 35 jaar' — that's a very common mistake!" },
      { q: "How do you say 'I am thirty-five years old'?", options: ["Ik heb vijfendertig jaar.", "Ik ga vijfendertig jaar.", "Ik ben vijfendertig jaar.", "Ik woon vijfendertig jaar."], answer: 2, explanation: "'Ik ben [number] jaar (oud).' The word 'oud' is optional — 'Ik ben 35 jaar' is perfectly natural." },
      { q: "'Wanneer ben jij jarig?' means:", options: ["How old are you?", "In what year were you born?", "When is your birthday?", "Where were you born?"], answer: 2, explanation: "'jarig zijn' = to have your birthday. You can also say 'Wanneer is jouw verjaardag?'" },
      { q: "'Om hoe laat begint de les?' — what does 'om' signal?", options: ["It means 'about' (approximately)", "It introduces a specific time point", "It means 'until'", "It is a filler word"], answer: 1, explanation: "'Om + time' = at [specific time]. 'Om twee uur' = at two o'clock. Always use 'om' before clock times." },
    ],
  },
  {
    id: "test_om_op_in",
    title: "Om · Op · In",
    subtitle: "Leerpad 3A · Time Prepositions",
    leerpad: "3A",
    difficulty: "easy",
    emoji: "📅",
    questions: [
      { q: "Which preposition goes with a clock time?", options: ["in", "op", "om", "aan"], answer: 2, explanation: "'Om' is always used with clock times: 'om 9 uur', 'om half drie'. Memory trick: Om = O'clock — both start with O." },
      { q: "How do you say 'on Tuesday'?", options: ["in dinsdag", "om dinsdag", "op dinsdag", "aan dinsdag"], answer: 2, explanation: "'Op' is used for specific days, dates, and named occasions." },
      { q: "How do you say 'in summer'?", options: ["op de zomer", "om de zomer", "aan de zomer", "in de zomer"], answer: 3, explanation: "'In' is used for periods — seasons, months, years, holidays." },
      { q: "Which is correct: 'The lesson is ___ Tuesday ___ 9 o'clock'?", options: ["in dinsdag om 9 uur", "op dinsdag om 9 uur", "op dinsdag in 9 uur", "om dinsdag op 9 uur"], answer: 1, explanation: "Op + specific day, om + clock time. 'De les is op dinsdag om 9 uur.'" },
      { q: "'In het weekend' — why 'in' and not 'op'?", options: ["'het weekend' is a het-word", "The weekend is a period, not a single point", "'op weekend' doesn't exist", "Weekend always uses 'in' as an exception"], answer: 1, explanation: "'In' is for periods. The weekend is a stretch of time, not a single calendar point. Compare: 'op zaterdag' vs 'in het weekend'." },
      { q: "How do you say 'I was born in 1985'?", options: ["Ik ben geboren op 1985.", "Ik ben geboren om 1985.", "Ik ben geboren in 1985.", "Ik ben geboren aan 1985."], answer: 2, explanation: "Years always use 'in': 'in 1985', 'in 2021'. Think of a year as a container you were born inside." },
    ],
  },
  {
    id: "test_lp3c",
    title: "Graag, Ga je mee & Antwoorden",
    subtitle: "Leerpad 3C · Likes, Invitations & Replies",
    leerpad: "3C",
    difficulty: "easy",
    emoji: "🚴",
    questions: [
      { q: "'Ik wandel graag' — where does 'graag' go?", options: ["Before the subject: 'Graag ik wandel.'", "Before the verb: 'Ik graag wandel.'", "After the verb: 'Ik wandel graag.'", "At the end with negation only"], answer: 2, explanation: "Structure: [subject] + [verb] + graag. For negation: 'Ik wandel niet graag.' The 'niet' goes before 'graag'." },
      { q: "'Je zwemt graag' — what happens in the yes/no question form?", options: ["Je zwemt graag? (no change)", "Zwem je graag? (-t drops in inversion)", "Graag zwem je? (graag moves first)", "Zwemt graag je? (subject moves last)"], answer: 1, explanation: "Inversion rule: when 'je/jij' comes AFTER the verb, the -t drops. 'zwem je' not 'zwemt je'." },
      { q: "How do you say 'She likes cycling'?", options: ["Zij fiets graag.", "Zij fietsen graag.", "Zij fietst graag.", "Zij niet fietst graag."], answer: 2, explanation: "3rd person singular = verb stem + t. 'fietsen' → stem 'fiets' + t = 'fietst'. Zij fietst graag." },
      { q: "'Ga je mee fietsen?' — what does 'mee' add here?", options: ["It makes it a question", "It means 'also'", "It means 'along/with' — you're inviting them to join", "It is the separable verb prefix meaning 'away'"], answer: 2, explanation: "'meegaan' (to go along) is a separable verb. 'mee' flies to the end in main clauses." },
      { q: "What is the most natural way to accept an invitation in Belgian Dutch?", options: ["Nee, dank je.", "Ja, dat is goed.", "Ja, graag!", "Ja, ik wil."], answer: 2, explanation: "'Ja, graag!' is the most natural and versatile acceptance. It literally means 'Yes, gladly!' Very Belgian!" },
      { q: "'Ik heb geen zin' — when would you use this?", options: ["When you are too tired", "When you have no time", "When you don't feel like it", "When you are sick"], answer: 2, explanation: "'geen zin hebben' = to not feel like it / to not be in the mood." },
      { q: "You're declining an invitation. Which response sounds most Belgian?", options: ["Nee.", "Ik kan niet.", "Ik heb geen tijd. Volgende keer!", "Ik wil niet komen."], answer: 2, explanation: "Belgians always soften a refusal: reason + softener ('Volgende keer!' / 'Misschien een andere keer?'). A bare 'nee' sounds rude." },
      { q: "'Ga je met mij mee wandelen?' — what does 'mij' add?", options: ["It makes the sentence past tense", "It specifies you're going WITH a particular person (me)", "It makes it more formal", "It changes the verb from 'gaan' to 'meegaan'"], answer: 1, explanation: "'Ga je mee?' = Are you coming? 'Ga je met mij mee?' = Are you coming WITH ME? 'met + pronoun + mee' sandwiches the companion." },
    ],
  },
  {
    id: "test_uitspraak",
    title: "Uitspraak",
    subtitle: "Pronunciation Rules",
    leerpad: "Uitspraak",
    difficulty: "medium",
    emoji: "🔊",
    questions: [
      { q: "How does 'IJ' sound in Belgian Dutch?", options: ["Like English 'ee' (as in see)", "Like English 'eye'", "Like French 'eu'", "Like English 'oy'"], answer: 1, explanation: "'IJ' and 'EI' both sound like English 'eye'. Examples: zijn [zayn], tijd [tayd], klein [klayn]. IJ and EI are pronounced identically." },
      { q: "'boom' vs 'bomen' — is the 'o' sound different?", options: ["Yes — 'boom' is long, 'bomen' is short", "No — both have a long 'o' sound", "Yes — 'bomen' has a short 'o'", "It depends on the region"], answer: 1, explanation: "The sound is IDENTICAL. 'Boom' uses 'oo' in a closed syllable. 'Bomen' uses one 'o' in an open syllable (bo-men) — also long. Spelling changes, not sound." },
      { q: "How do you pronounce 'kamer' in natural Belgian Dutch?", options: ["[KAH-mehr] — full R at the end", "[KAH-muh] — R reduces to soft 'uh'", "[kah-MER] — stress on second syllable", "[KAY-muh] — long aa sound"], answer: 1, explanation: "Unstressed -er endings reduce to a schwa ('uh'). The R is nearly silent. 'kamer' = [KAH-muh], 'water' = [VAH-tuh], 'lekker' = [LEK-uh]." },
      { q: "What is the 'schwa'?", options: ["The Dutch word for 'ch' sound", "The neutral 'uh' sound that replaces unstressed 'e'", "The soft Belgian g sound", "A silent letter in Dutch"], answer: 1, explanation: "The schwa [ə] is the neutral 'uh' sound. Every unstressed 'e' in Dutch becomes a schwa — 'de' = [duh], 'goedemorgen' = [khoo-duh-MOR-khun]." },
      { q: "How do you pronounce the Belgian 'g' in 'goed'?", options: ["Like English 'g' in 'go'", "Like French 'g' in 'garage' (zh)", "A soft, breathy rasp at the back of the throat", "Silent — the g is not pronounced"], answer: 2, explanation: "The Belgian 'g' is a soft, gentle rasp at the back of the throat — like fogging a mirror. Much softer than Dutch Netherlands." },
      { q: "'bom' vs 'bommen' — what does doubling the 'm' signal?", options: ["The word has changed meaning", "The vowel is long in the plural", "The vowel stays short — doubling prevents the open syllable from making it long", "It is a spelling error"], answer: 2, explanation: "Without doubling, 'bomen' reads as long o. 'Bommen' keeps the syllable closed (bom-men), preserving the short 'o'. Spelling protects the sound." },
    ],
  },
  {
    id: "test_lp4",
    title: "Weer, Winkels & Fruit",
    subtitle: "Leerpad 4 · Weather, Shops & Food",
    leerpad: "4",
    difficulty: "easy",
    emoji: "🌤️",
    questions: [
      { q: "How do you say 'It is raining' in Dutch?", options: ["Het is regen.", "De regen valt.", "Het regent.", "Het is regenachtig."], answer: 2, explanation: "Weather actions use 'het + verb': het regent, het sneeuwt, het waait, het vriest. 'De zon schijnt' is different — the sun is the subject." },
      { q: "'De zon schijnt' — why is the subject 'de zon' and not 'het'?", options: ["'Schijnen' is irregular", "'De zon' is the actual subject doing the shining", "It is a mistake — it should be 'het schijnt'", "Only in Belgian Dutch"], answer: 1, explanation: "Most weather verbs use 'het' as a dummy subject. But 'de zon schijnt' uses the sun (de zon) as the real subject." },
      { q: "What does 'bewolkt' mean?", options: ["windy", "freezing", "cloudy", "foggy"], answer: 2, explanation: "'Bewolkt' = cloudy. From 'wolk' (cloud). Other states: zonnig (sunny), mistig (foggy)." },
      { q: "What is the Dutch word for 'the checkout' (in a shop)?", options: ["de boodschappen", "de kassa", "de winkel", "de boodschappentas"], answer: 1, explanation: "'De kassa' = the checkout / till. 'Ik betaal aan de kassa.' 'De boodschappen' = the groceries." },
      { q: "'Ik wacht op de trein' — what does 'op' mean here?", options: ["on (physically on top of)", "for", "at", "until"], answer: 1, explanation: "'Wachten op' = to wait FOR. English speakers often expect 'voor' here, but Dutch uses 'op'." },
      { q: "What is the plural of 'druif'?", options: ["druifs", "druiven", "druyven", "druifen"], answer: 1, explanation: "'druif → druiven' follows the f→v voicing rule before -en. Same pattern: brief→brieven, wolf→wolven." },
      { q: "How do you say 'a bunch of bananas'?", options: ["een kilo bananen", "een tros bananen", "een pak bananen", "een bos bananen"], answer: 1, explanation: "'Een tros bananen' = a bunch of bananas. 'Tros' is used for things that grow in clusters — also 'een tros druiven'." },
      { q: "'Op welk spoor vertrekt de trein?' — what does 'spoor' mean?", options: ["time", "direction", "(railway) platform / track", "ticket"], answer: 2, explanation: "'Het spoor' = the railway track / platform. 'De trein vertrekt op spoor 7' = the train departs from platform 7." },
    ],
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const LABELS = ["A", "B", "C", "D"];
const DIFF_LABEL = { easy: "Beginners", medium: "Intermediate" };
const DIFF_COLOR = { easy: "#1a6b3a", medium: "#b85c00" };
const DIFF_BG   = { easy: "#e6f4ec", medium: "#fff3e0" };

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function gradeResult(pct) {
  if (pct === 100) return { label: "Perfecte score!", sub: "Outstanding — full marks!", emoji: "🏅", color: "#1b6b3a" };
  if (pct >= 85)  return { label: "Uitstekend!", sub: "Excellent work!", emoji: "🏆", color: "#1b6b3a" };
  if (pct >= 70)  return { label: "Goed gedaan!", sub: "Well done — keep it up!", emoji: "✅", color: "#2a7a4b" };
  if (pct >= 55)  return { label: "Bijna!", sub: "Almost there — review the module.", emoji: "📖", color: "#b85c00" };
  return           { label: "Blijf oefenen!", sub: "Keep practising — you'll get there!", emoji: "💪", color: "#c0392b" };
}

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

function BelgianStripe() {
  return (
    <div style={{ display: "flex", height: "5px" }}>
      <div style={{ flex: 1, background: "#1a1a1a" }} />
      <div style={{ flex: 1, background: "#c8a84b" }} />
      <div style={{ flex: 1, background: "#c0392b" }} />
    </div>
  );
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────

function HomeScreen({ scores, onStart, onMarathon }) {
  const totalQ = TESTS.reduce((s, t) => s + t.questions.length, 0);
  const completedCount = TESTS.filter(t => scores[t.id]?.completed).length;

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f8f6f0", minHeight: "100vh" }}>
      <div style={{ background: "#1c2340" }}>
        <BelgianStripe />
        <div style={{ padding: "28px 32px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#c8a84b", textTransform: "uppercase", marginBottom: "8px" }}>
              🇧🇪 Belgisch Nederlands
            </div>
            <h1 style={{ color: "#ffffff", fontSize: "clamp(22px, 4vw, 34px)", fontWeight: "normal", margin: "0 0 6px", letterSpacing: "1px" }}>
              Kennistoets
            </h1>
            <p style={{ color: "#8a9ab5", fontSize: "13px", margin: 0, fontStyle: "italic" }}>
              {TESTS.length} modules · {totalQ} questions
            </p>
          </div>
          {completedCount > 0 && (
            <div style={{ textAlign: "right", paddingTop: "4px" }}>
              <div style={{ fontSize: "28px", fontWeight: "bold", color: "#c8a84b", lineHeight: 1 }}>
                {completedCount}<span style={{ fontSize: "16px", color: "#8a9ab5" }}>/{TESTS.length}</span>
              </div>
              <div style={{ fontSize: "10px", color: "#8a9ab5", letterSpacing: "1px", marginTop: "3px" }}>TESTS COMPLETED</div>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: "880px", margin: "0 auto", padding: "32px 24px 60px" }}>
        <p style={{ color: "#7a6a5a", fontSize: "13px", marginBottom: "28px", fontStyle: "italic" }}>
          Choose a module to begin. Each test covers one Leerpad section from your course.
        </p>

        {/* Test cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {TESTS.map(test => {
            const sc = scores[test.id];
            const pct = sc ? Math.round((sc.score / sc.total) * 100) : null;
            const g = pct !== null ? gradeResult(pct) : null;
            return (
              <div
                key={test.id}
                onClick={() => onStart(test)}
                style={{ background: "#fff", border: "2px solid #e8e0d0", borderRadius: "8px", cursor: "pointer", transition: "all 0.15s ease", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,0.06)", position: "relative" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1c2340"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(28,35,64,0.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e8e0d0"; e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"; }}
              >
                <div style={{ height: "4px", background: "#1c2340" }} />
                <div style={{ position: "absolute", top: "4px", right: 0, background: "#1c2340", color: "#c8a84b", fontSize: "9px", padding: "4px 10px", letterSpacing: "2px", borderBottomLeftRadius: "6px", fontFamily: "monospace" }}>
                  LP {test.leerpad}
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <div style={{ fontSize: "26px", marginBottom: "10px" }}>{test.emoji}</div>
                  <div style={{ fontSize: "15px", fontWeight: "bold", color: "#1c2340", marginBottom: "3px", paddingRight: "40px", lineHeight: "1.3" }}>{test.title}</div>
                  <div style={{ fontSize: "12px", color: "#8a7a6a", fontStyle: "italic", marginBottom: "14px" }}>{test.subtitle}</div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ background: DIFF_BG[test.difficulty], color: DIFF_COLOR[test.difficulty], fontSize: "10px", padding: "3px 9px", borderRadius: "20px", fontWeight: "bold" }}>
                        {DIFF_LABEL[test.difficulty]}
                      </span>
                      <span style={{ fontSize: "11px", color: "#aaa" }}>{test.questions.length} vragen</span>
                    </div>
                    {pct !== null ? (
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "17px", fontWeight: "bold", color: g.color }}>{pct}%</div>
                        <div style={{ fontSize: "10px", color: g.color }}>{g.emoji} {g.label}</div>
                      </div>
                    ) : (
                      <span style={{ fontSize: "11px", color: "#bbb", fontStyle: "italic" }}>Not taken yet</span>
                    )}
                  </div>
                  {pct !== null && (
                    <div style={{ marginTop: "12px", height: "3px", background: "#e8e0d0", borderRadius: "2px" }}>
                      <div style={{ width: `${pct}%`, height: "100%", background: g.color, borderRadius: "2px", transition: "width 0.5s ease" }} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Marathon — at the bottom */}
        <div style={{ background: "#1c2340", borderRadius: "8px", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", boxShadow: "0 4px 20px rgba(28,35,64,0.2)" }}>
          <div>
            <div style={{ fontSize: "10px", color: "#c8a84b", letterSpacing: "3px", fontFamily: "monospace", marginBottom: "6px" }}>SPECIAL MODE</div>
            <div style={{ fontSize: "20px", color: "#fff", marginBottom: "4px" }}>🎯 Marathon Mode</div>
            <div style={{ fontSize: "13px", color: "#8a9ab5" }}>All {totalQ} questions · shuffled · one sitting</div>
          </div>
          <button
            onClick={onMarathon}
            style={{ background: "#c8a84b", color: "#1c2340", border: "none", padding: "13px 28px", cursor: "pointer", fontFamily: "'Georgia', serif", fontSize: "15px", borderRadius: "6px", fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            Begin Marathon →
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: "32px", fontSize: "11px", color: "#c0b8a8", letterSpacing: "2px" }}>
          🇧🇪 BELGISCH NEDERLANDS · VOOR DAGELIJKS GEBRUIK
        </div>
      </div>
    </div>
  );
}

// ─── QUIZ SCREEN ─────────────────────────────────────────────────────────────

function QuizScreen({ test, questions, onComplete, onBack, isMarathon }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [done, setDone] = useState(false);

  const total = questions.length;
  const q = questions[index];
  const progress = (index / total) * 100;

  const handleSelect = (i) => { if (!submitted) setSelected(i); };

  const handleCheck = () => {
    if (selected === null) return;
    const correct = selected === q.answer;
    const newCount = correct ? correctCount + 1 : correctCount;
    if (correct) setCorrectCount(newCount);
    setHistory(h => [...h, { q: q.q, answer: q.answer, selected, correct, options: q.options, explanation: q.explanation }]);
    setSubmitted(true);
    // If last question, trigger completion
    if (index + 1 >= total) {
      onComplete(newCount, total);
    }
  };

  const handleNext = () => {
    if (index + 1 >= total) {
      setDone(true);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };

  const handleRetake = () => {
    setIndex(0); setSelected(null); setSubmitted(false);
    setCorrectCount(0); setHistory([]); setDone(false);
  };

  if (done) {
    const pct = Math.round((correctCount / total) * 100);
    return <ResultScreen test={test} score={correctCount} total={total} history={history} pct={pct} g={gradeResult(pct)} isMarathon={isMarathon} onHome={onBack} onRetake={handleRetake} />;
  }

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f8f6f0", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#1c2340" }}>
        <BelgianStripe />
        <div style={{ padding: "10px 20px", display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={onBack} style={{ background: "none", border: "1px solid #3a4a6a", color: "#8a9ab5", padding: "5px 12px", cursor: "pointer", fontFamily: "inherit", fontSize: "11px", borderRadius: "3px", letterSpacing: "1px" }}>
            ← {isMarathon ? "Exit" : "Home"}
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "10px", color: "#c8a84b", letterSpacing: "2px", fontFamily: "monospace", marginBottom: "4px" }}>
              {isMarathon ? "🎯 MARATHON" : `${test.emoji} ${test.subtitle.toUpperCase()}`}
            </div>
            <div style={{ height: "3px", background: "#2a3a5a", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: "#c8a84b", transition: "width 0.3s ease" }} />
            </div>
          </div>
          <div style={{ color: "#8a9ab5", fontSize: "13px", fontFamily: "monospace", minWidth: "52px", textAlign: "right" }}>
            {index + 1}/{total}
            {correctCount > 0 && <div style={{ fontSize: "11px", color: "#2ecc71" }}>✓ {correctCount}</div>}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: "640px", margin: "0 auto", padding: "32px 20px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ background: "#fff", border: "2px solid #1c2340", borderRadius: "8px", padding: "26px", marginBottom: "18px", boxShadow: "0 4px 16px rgba(28,35,64,0.1)" }}>
          <div style={{ fontSize: "10px", color: "#1c2340", letterSpacing: "3px", fontFamily: "monospace", marginBottom: "10px", opacity: 0.5 }}>VRAAG {index + 1}</div>
          <p style={{ fontSize: "clamp(14px, 2.5vw, 17px)", color: "#1c2340", margin: 0, lineHeight: "1.65" }}>{q.q}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" }}>
          {q.options.map((opt, i) => {
            const isCorrect = i === q.answer;
            const isChosen = i === selected;
            let bg = "#fff", border = "1.5px solid #ddd8cc", color = "#1c2340", labelBg = "#f0ece4", labelColor = "#7a6a5a";
            if (submitted) {
              if (isCorrect) { bg = "#e6f4ec"; border = "2px solid #1a6b3a"; color = "#1a4020"; labelBg = "#1a6b3a"; labelColor = "#fff"; }
              else if (isChosen) { bg = "#fdecea"; border = "2px solid #c0392b"; color = "#7f0000"; labelBg = "#c0392b"; labelColor = "#fff"; }
              else { color = "#ccc"; border = "1.5px solid #ede8e0"; }
            } else if (isChosen) {
              bg = "#eef0fa"; border = "2px solid #1c2340"; labelBg = "#1c2340"; labelColor = "#c8a84b";
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} style={{ display: "flex", alignItems: "center", gap: "14px", background: bg, border, borderRadius: "6px", padding: "13px 16px", cursor: submitted ? "default" : "pointer", fontFamily: "inherit", fontSize: "14px", textAlign: "left", color, transition: "all 0.12s ease" }}>
                <span style={{ minWidth: "26px", height: "26px", borderRadius: "50%", background: labelBg, color: labelColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "bold", flexShrink: 0, fontFamily: "monospace" }}>
                  {LABELS[i]}
                </span>
                <span style={{ flex: 1 }}>{opt}</span>
                {submitted && isCorrect && <span>✓</span>}
                {submitted && isChosen && !isCorrect && <span>✗</span>}
              </button>
            );
          })}
        </div>

        {!submitted ? (
          <button onClick={handleCheck} disabled={selected === null} style={{ width: "100%", background: selected !== null ? "#1c2340" : "#e8e0d0", border: "none", color: selected !== null ? "#fff" : "#aaa", padding: "14px", cursor: selected !== null ? "pointer" : "default", fontFamily: "inherit", fontSize: "15px", borderRadius: "6px", transition: "all 0.15s ease" }}>
            Controleer antwoord
          </button>
        ) : (
          <div>
            <div style={{ background: selected === q.answer ? "#e6f4ec" : "#fdecea", border: `1px solid ${selected === q.answer ? "#1a6b3a" : "#c0392b"}`, borderLeft: `4px solid ${selected === q.answer ? "#1a6b3a" : "#c0392b"}`, borderRadius: "6px", padding: "16px 18px", marginBottom: "14px" }}>
              <div style={{ fontSize: "10px", letterSpacing: "2px", fontFamily: "monospace", color: selected === q.answer ? "#1a6b3a" : "#c0392b", marginBottom: "6px" }}>
                {selected === q.answer ? "✓ CORRECT" : "✗ NIET HELEMAAL"}
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "#3a3020", lineHeight: "1.6" }}>{q.explanation}</p>
            </div>
            <button onClick={handleNext} style={{ width: "100%", background: "#1c2340", border: "none", color: "#fff", padding: "14px", cursor: "pointer", fontFamily: "inherit", fontSize: "15px", borderRadius: "6px" }}>
              {index + 1 >= total ? "Bekijk resultaten →" : "Volgende vraag →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── RESULTS SCREEN ───────────────────────────────────────────────────────────

function ResultScreen({ test, score, total, history, pct, g, isMarathon, onHome, onRetake }) {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#f8f6f0", minHeight: "100vh" }}>
      <div style={{ background: "#1c2340" }}>
        <BelgianStripe />
        <div style={{ padding: "14px 24px" }}>
          <div style={{ fontSize: "10px", color: "#c8a84b", letterSpacing: "3px", fontFamily: "monospace" }}>
            {isMarathon ? "🎯 MARATHON RESULTATEN" : `RESULTATEN · ${test?.subtitle?.toUpperCase()}`}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "32px 20px" }}>
        <div style={{ background: "#fff", border: "1px solid #e8e0d0", borderRadius: "10px", padding: "32px", textAlign: "center", marginBottom: "24px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: "52px", marginBottom: "8px" }}>{g.emoji}</div>
          <div style={{ fontSize: "clamp(48px, 10vw, 72px)", fontWeight: "bold", color: g.color, lineHeight: 1 }}>
            {pct}<span style={{ fontSize: "28px" }}>%</span>
          </div>
          <div style={{ fontSize: "20px", color: g.color, margin: "8px 0 4px" }}>{g.label}</div>
          <div style={{ fontSize: "14px", color: "#8a7a6a", fontStyle: "italic", marginBottom: "20px" }}>{score} correct van {total} · {g.sub}</div>
          <div style={{ height: "8px", background: "#e8e0d0", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${pct}%`, height: "100%", background: g.color, borderRadius: "4px" }} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
          <button onClick={onHome} style={{ flex: 1, background: "#fff", border: "2px solid #1c2340", color: "#1c2340", padding: "13px", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", borderRadius: "6px" }}>← Alle testen</button>
          <button onClick={onRetake} style={{ flex: 1, background: "#1c2340", border: "none", color: "#fff", padding: "13px", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", borderRadius: "6px" }}>↺ Opnieuw</button>
        </div>
        <div style={{ fontSize: "11px", color: "#8a7a6a", letterSpacing: "2px", fontFamily: "monospace", marginBottom: "14px" }}>ALLE VRAGEN — OVERZICHT</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {history.map((h, i) => (
            <div key={i} style={{ background: "#fff", border: `1px solid ${h.correct ? "#c8e6d4" : "#f5cdc8"}`, borderLeft: `4px solid ${h.correct ? "#1a6b3a" : "#c0392b"}`, borderRadius: "6px", padding: "14px 16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
                <div style={{ fontSize: "13px", color: "#1c2340", lineHeight: 1.4, flex: 1 }}>{h.q}</div>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{h.correct ? "✅" : "❌"}</span>
              </div>
              <div style={{ fontSize: "12px", fontFamily: "monospace" }}>
                <span style={{ color: "#1a6b3a" }}>✓ {h.options[h.answer]}</span>
                {!h.correct && <span style={{ color: "#c0392b", marginLeft: "12px" }}>✗ {h.options[h.selected]}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function DutchTests() {
  const [screen, setScreen] = useState("home");
  const [activeTest, setActiveTest] = useState(null);
  const [marathonQuestions, setMarathonQuestions] = useState([]);
  const [scores, setScores] = useState({});

  const handleComplete = useCallback((testId, score, total) => {
    if (testId) {
      setScores(s => ({ ...s, [testId]: { score, total, completed: true } }));
    }
  }, []);

  const handleStart = (test) => { setActiveTest(test); setScreen("quiz"); };

  const handleMarathon = () => {
    const all = TESTS.flatMap(t => t.questions.map(q => ({ ...q })));
    setMarathonQuestions(shuffle(all));
    setActiveTest(null);
    setScreen("marathon");
  };

  const handleBack = () => { setScreen("home"); setActiveTest(null); };

  if (screen === "home") {
    return <HomeScreen scores={scores} onStart={handleStart} onMarathon={handleMarathon} />;
  }
  if (screen === "quiz" && activeTest) {
    return (
      <QuizScreen
        key={activeTest.id}
        test={activeTest}
        questions={activeTest.questions}
        isMarathon={false}
        onComplete={(score, total) => handleComplete(activeTest.id, score, total)}
        onBack={handleBack}
      />
    );
  }
  if (screen === "marathon") {
    return (
      <QuizScreen
        key="marathon"
        test={null}
        questions={marathonQuestions}
        isMarathon={true}
        onComplete={() => {}}
        onBack={handleBack}
      />
    );
  }
  return null;
}