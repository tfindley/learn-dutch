import { useState } from "react";

const RULES = [

  // ─── LEERPAD 1A · OPENING ──────────────────────────────────────────────────
  {
    id: "hoegaathet",
    tag: "LEERPAD 1A · OPENING",
    title: "Hoe gaat het? — Starting a Conversation",
    difficulty: "easy",
    shortcut: "Hoe gaat het? → Goed, dank je. En met jou? — Three seconds, sounds native. Always ask it back.",
    explanation: "Before you introduce yourself, you need to open the conversation. Belgian Dutch has a set of warm, predictable openers that follow a fixed social ritual. Learn these as frozen phrases rather than individual words — they're said the same way every time.",
    patterns: [
      { rule: "Greeting someone — the openers", examples: [
        "Hallo! (Hello!) — universal, any time of day",
        "Dag! (Hi! / Bye!) — casual, works for both greeting and leaving",
        "Goedemorgen! (Good morning!) — until about noon",
        "Goedemiddag! (Good afternoon!) — noon to ~6pm",
        "Goedenavond! (Good evening!) — from ~6pm",
        "Hoe gaat het? (How are you?) — follows the greeting naturally",
        "Hoe gaat het met jou? (How are you doing?) ← slightly more personal",
      ]},
      { rule: "Answering — Goed, dank je. En met jou?", examples: [
        "Goed, dank je! (Good, thank you!) ← the standard reply",
        "Heel goed, dank je! (Very good, thank you!)",
        "Het gaat wel. (It's okay / not bad.) ← very Belgian — modest, never over-enthusiastic",
        "Niet zo goed. (Not so good.) ← honest answer if things aren't great",
        "Gaat wel. (Getting by / alright.) ← the most Belgian answer of all",
        "En met jou? (And with you?) ← always ask it back!",
        "En met u? (And with you?) ← formal version",
      ]},
      { rule: "The social ritual — don't skip steps", examples: [
        "A: Hallo! Hoe gaat het?",
        "B: Goed, dank je! En met jou?",
        "A: Ook goed, dank je!",
        "↳ This exchange is expected. Skipping 'En met jou?' can feel abrupt.",
        "↳ Belgians are warm — always ask back, even if briefly.",
      ]},
      { rule: "After the greeting — transitioning to introductions", examples: [
        "Ik ben [naam]. (I am [name].) ← simplest self-introduction",
        "Mijn naam is [naam]. (My name is [name].)",
        "En jij? Hoe heet jij? (And you? What's your name?)",
        "Aangenaam! (Pleased to meet you!)",
        "Aangenaam kennis te maken. (Pleased to make your acquaintance. — formal)",
      ]},
      { rule: "Polite smalltalk fillers — very Belgian", examples: [
        "Alles goed? (Everything good?) ← casual version of Hoe gaat het?",
        "Alles goed met de familie? (Everything good with the family?)",
        "Wat een weer, hè? (What weather, eh?) ← Belgians love talking about weather!",
        "Het is koud vandaag, hè? (It's cold today, isn't it?)",
        "Druk gehad? (Been busy?) ← common opener at work",
      ]},
      { rule: "Taking leave — ending the conversation", examples: [
        "Tot ziens! (Goodbye! — 'until we see each other')",
        "Doei! (Bye! — very casual)",
        "Tot later! (See you later!)",
        "Tot morgen! (See you tomorrow!)",
        "Tot volgende week! (See you next week!)",
        "Prettige dag! (Have a nice day!)",
        "Prettig weekend! (Have a nice weekend!)",
      ]},
    ],
    memory: "🧠 The Belgian greeting ritual is a 3-step handshake: [greet] → Hoe gaat het? → Goed, dank je. En met jou? Memorise it as one block, not individual words.",
    examples: [
      { nl: "Hallo! Hoe gaat het?", en: "Hello! How are you?" },
      { nl: "Goed, dank je! En met jou?", en: "Good, thank you! And with you?" },
      { nl: "Ook goed! Ik ben [naam]. En jij?", en: "Also good! I am [name]. And you?" },
      { nl: "Aangenaam! Mijn naam is [naam].", en: "Pleased to meet you! My name is [name]." },
      { nl: "Tot ziens! Prettige dag!", en: "Goodbye! Have a nice day!" },
    ],
    practice: [
      { role: "A", dutch: "Goedemorgen!", english: "Good morning!" },
      { role: "B", dutch: "Goedemorgen! Hoe gaat het?", english: "Good morning! How are you?" },
      { role: "A", dutch: "Goed, dank je! En met jou?", english: "Good, thank you! And with you?" },
      { role: "B", dutch: "Ook goed, dank je!", english: "Also good, thank you!" },
      { role: "A", dutch: "Ik ben ___. En jij? Hoe heet jij?", english: "I am ___. And you? What's your name?" },
      { role: "B", dutch: "Mijn naam is ___. Aangenaam!", english: "My name is ___. Pleased to meet you!" },
      { role: "A", dutch: "Aangenaam!", english: "Pleased to meet you!" },
      { role: "A", dutch: "Alles goed?", english: "Everything good?" },
      { role: "B", dutch: "Gaat wel! / Heel goed! / Niet zo goed vandaag.", english: "Getting by! / Very good! / Not so good today." },
      { role: "A", dutch: "Tot ziens! Prettige dag!", english: "Goodbye! Have a nice day!" },
      { role: "B", dutch: "Tot ziens! Jij ook!", english: "Goodbye! You too!" },
    ],
  },

  // ─── LEERPAD 1A ────────────────────────────────────────────────────────────
  {
    id: "lp1a",
    tag: "LEERPAD 1A",
    title: "Uit welk land kom jij? — Where are you from?",
    difficulty: "easy",
    shortcut: "Ik kom uit [land]. Ik woon in [stad]. Ik spreek [taal]. — Three sentences that introduce you completely.",
    explanation: "The first lesson is always about introducing yourself. You need to say where you're from, where you live, what language you speak, and your name. These are the questions your teacher will ask on day one.",
    patterns: [
      { rule: "Naam — Name", examples: [
        "Hoe heet jij? / Wat is jouw naam? (What is your name?)",
        "Ik heet [naam]. (My name is [name].)",
        "Mijn naam is [naam]. (My name is [name].)",
        "Aangenaam! (Pleased to meet you!)",
        "Aangenaam kennis te maken. (Pleased to make your acquaintance. — formal)",
      ]},
      { rule: "Land — Country", examples: [
        "Uit welk land kom jij? / Waar kom jij vandaan? (Where are you from?)",
        "Ik kom uit België / Nederland / Engeland / Duitsland / Frankrijk.",
        "Ik kom uit [land]. En jij? (I'm from [country]. And you?)",
        "Ik ben Belg / Belgisch. (I am Belgian.) ← nationality",
      ]},
      { rule: "Wonen — Living", examples: [
        "Waar woon jij? (Where do you live?)",
        "Ik woon in Roeselare / Brussel / Gent / Antwerpen.",
        "Ik woon in [stad], in [land]. (I live in [city], in [country].)",
      ]},
      { rule: "Taal — Language", examples: [
        "Welke taal spreek jij? (What language do you speak?)",
        "Welke taal spreek jij thuis? (What language do you speak at home?)",
        "Ik spreek Nederlands / Engels / Frans / Duits / Spaans.",
        "Ik spreek een beetje Nederlands. (I speak a little Dutch.)",
        "Ik leer Nederlands. (I am learning Dutch.)",
      ]},
      { rule: "Key verbs: komen / wonen / spreken / heten", examples: [
        "komen: ik kom, jij komt, hij/zij komt, wij komen",
        "wonen: ik woon, jij woont, hij/zij woont, wij wonen",
        "spreken: ik spreek, jij spreekt, hij/zij spreekt, wij spreken",
        "heten: ik heet, jij heet, hij/zij heet, wij heten",
      ]},
    ],
    memory: "🧠 Three verbs, three facts: kom (country) → woon (city) → spreek (language). Fire them in that order and you've introduced yourself completely.",
    examples: [
      { nl: "Hoe heet jij?", en: "What is your name?" },
      { nl: "Ik heet [naam]. Ik kom uit België en ik woon in Roeselare.", en: "My name is [name]. I'm from Belgium and I live in Roeselare." },
      { nl: "Welke taal spreek jij thuis?", en: "What language do you speak at home?" },
      { nl: "Ik spreek Nederlands en een beetje Engels.", en: "I speak Dutch and a little English." },
    ],
    practice: [
      { role: "A", dutch: "Hoe heet jij?", english: "What is your name?" },
      { role: "B", dutch: "Ik heet ___. En jij?", english: "My name is ___. And you?" },
      { role: "A", dutch: "Ik heet ___. Aangenaam!", english: "My name is ___. Pleased to meet you!" },
      { role: "B", dutch: "Aangenaam!", english: "Pleased to meet you!" },
      { role: "A", dutch: "Uit welk land kom jij?", english: "What country are you from?" },
      { role: "B", dutch: "Ik kom uit ___. En jij?", english: "I'm from ___. And you?" },
      { role: "A", dutch: "Ik kom ook uit ___. / Ik kom uit ___.", english: "I'm also from ___. / I'm from ___." },
      { role: "A", dutch: "Waar woon jij?", english: "Where do you live?" },
      { role: "B", dutch: "Ik woon in ___. En jij?", english: "I live in ___. And you?" },
      { role: "A", dutch: "Ik woon in ___.", english: "I live in ___." },
      { role: "A", dutch: "Welke taal spreek jij thuis?", english: "What language do you speak at home?" },
      { role: "B", dutch: "Ik spreek ___ thuis.", english: "I speak ___ at home." },
    ],
  },

  // ─── LEERPAD 1B ────────────────────────────────────────────────────────────
  {
    id: "lp1b",
    tag: "LEERPAD 1B",
    title: "Wat is jouw beroep? — What is your profession?",
    difficulty: "easy",
    shortcut: "Ik ben [beroep]. / Ik werk als [beroep] bij/in/op [place]. Two structures, both useful.",
    explanation: "After introductions, the teacher moves to profession and personal situation. You need to say what you do, where you work, and your relationship status. Short, factual answers work perfectly here.",
    patterns: [
      { rule: "Asking and stating your profession", examples: [
        "Wat is jouw beroep? (What is your profession?)",
        "Wat doe jij voor werk? (What do you do for work?)",
        "Ik ben [beroep]. (I am a [profession].)",
        "Ik werk als [beroep]. (I work as a [profession].)",
        "Ik werk bij [bedrijf]. (I work at [company].)",
        "Ik werk in een ziekenhuis / op school / op kantoor. (I work in a hospital / at school / in an office.)",
      ]},
      { rule: "Special work situations", examples: [
        "Ik ben werkloos. (I am unemployed.)",
        "Ik ben met pensioen. (I am retired.)",
        "Ik ben huisvrouw / huisman. (I am a housewife / househusband.)",
        "Ik studeer. / Ik ben student. (I am studying. / I am a student.)",
        "Ik werk voltijds / deeltijds. (I work full-time / part-time.)",
      ]},
      { rule: "Relationship status — Ben jij...?", examples: [
        "Ben jij getrouwd? (Are you married?)",
        "Ja, ik ben getrouwd. / Nee, ik ben niet getrouwd.",
        "Ik ben alleenstaand. (I am single.)",
        "Ik ben gescheiden. (I am divorced.)",
        "Ik ben verloofd. (I am engaged.)",
        "Ik woon samen met mijn partner. (I live together with my partner.)",
      ]},
      { rule: "Asking about a partner's profession", examples: [
        "Wat doet jouw partner? (What does your partner do?)",
        "Mijn man / vrouw / partner is [beroep]. (My husband / wife / partner is a [profession].)",
        "Hij / Zij werkt als [beroep]. (He / She works as a [profession].)",
      ]},
    ],
    memory: "🧠 Three questions, three answers: Wat ben je? → Ik ben ___. Waar werk je? → Ik werk ___. Ben je getrouwd? → Ik ben ___. Have all three ready before the lesson.",
    examples: [
      { nl: "Wat is jouw beroep?", en: "What is your profession?" },
      { nl: "Ik ben elektricien. Ik werk bij [bedrijf].", en: "I am an electrician. I work at [company]." },
      { nl: "Wat doet jouw partner?", en: "What does your partner do?" },
      { nl: "Mijn vrouw is lerares. Ze werkt op school.", en: "My wife is a teacher. She works at school." },
      { nl: "Ben jij getrouwd?", en: "Are you married?" },
      { nl: "Ja, ik ben getrouwd. Wij wonen in Roeselare.", en: "Yes, I am married. We live in Roeselare." },
    ],
    practice: [
      { role: "A", dutch: "Wat is jouw beroep?", english: "What is your profession?" },
      { role: "B", dutch: "Ik ben ___. En jij?", english: "I am a ___. And you?" },
      { role: "A", dutch: "Ik ben ___. Ik werk bij / in / op ___.", english: "I am a ___. I work at / in ___." },
      { role: "A", dutch: "Waar werk jij?", english: "Where do you work?" },
      { role: "B", dutch: "Ik werk in / bij / op ___.", english: "I work in / at ___." },
      { role: "A", dutch: "Ben jij getrouwd?", english: "Are you married?" },
      { role: "B", dutch: "Ja, ik ben getrouwd. / Nee, ik ben alleenstaand. / Nee, ik ben gescheiden.", english: "Yes, I am married. / No, I am single. / No, I am divorced." },
      { role: "A", dutch: "Wat doet jouw partner?", english: "What does your partner do?" },
      { role: "B", dutch: "Mijn man / vrouw / partner is ___. Hij / Zij werkt ___.", english: "My husband / wife / partner is ___. He / She works ___." },
    ],
  },

  // ─── LEERPAD 2A ────────────────────────────────────────────────────────────
  {
    id: "lp2a",
    tag: "LEERPAD 2A",
    title: "Hoeveel kinderen heb jij? — How many children do you have?",
    difficulty: "easy",
    shortcut: "Ik heb [number] kinderen. / Ik heb geen kinderen. — Know your number + a follow-up about their ages.",
    explanation: "Lesson 2A introduces 'hebben' (to have) in a personal context. You talk about children, family, and possessions. The key is combining numbers with 'hebben' and being able to say ages.",
    patterns: [
      { rule: "Hebben — to have (conjugation)", examples: [
        "ik heb (I have)",
        "jij / je hebt (you have) — but: heb jij? in questions (drops the -t)",
        "hij / zij / ze heeft (he / she has)",
        "wij / we hebben (we have)",
        "jullie hebben (you all have)",
        "zij / ze hebben (they have)",
      ]},
      { rule: "Hoeveel kinderen heb jij?", examples: [
        "Ik heb één kind. (I have one child.)",
        "Ik heb twee / drie / vier kinderen. (I have 2/3/4 children.)",
        "Ik heb geen kinderen. (I have no children.)",
        "Wij hebben drie kinderen samen. (We have three children together.)",
      ]},
      { rule: "Ages — Hoe oud zijn jouw kinderen?", examples: [
        "Hoe oud zijn jouw kinderen? (How old are your children?)",
        "Mijn oudste is ___ jaar. (My oldest is ___ years old.)",
        "Mijn jongste is ___ jaar. (My youngest is ___ years old.)",
        "Ik heb een dochter van ___ en een zoon van ___. (I have a daughter of ___ and a son of ___.) ",
      ]},
      { rule: "Broader family — heb jij...?", examples: [
        "Heb jij broers of zussen? (Do you have brothers or sisters?)",
        "Ik heb één broer en twee zussen. (I have one brother and two sisters.)",
        "Ik heb geen broers of zussen. Ik ben enig kind. (I have no siblings. I'm an only child.)",
        "Heb jij een hond / kat? (Do you have a dog / cat?)",
      ]},
    ],
    memory: "🧠 'hebben' is your Swiss army knife verb. Ik heb [number] [noun]. Swap the noun and you can talk about anything you possess.",
    examples: [
      { nl: "Hoeveel kinderen heb jij?", en: "How many children do you have?" },
      { nl: "Ik heb twee kinderen — een zoon en een dochter.", en: "I have two children — a son and a daughter." },
      { nl: "Hoe oud zijn jouw kinderen?", en: "How old are your children?" },
      { nl: "Mijn oudste is twaalf jaar en mijn jongste is acht jaar.", en: "My oldest is twelve and my youngest is eight." },
      { nl: "Heb jij broers of zussen?", en: "Do you have brothers or sisters?" },
      { nl: "Ik heb één zus. Zij woont in Gent.", en: "I have one sister. She lives in Ghent." },
    ],
    practice: [
      { role: "A", dutch: "Hoeveel kinderen heb jij?", english: "How many children do you have?" },
      { role: "B", dutch: "Ik heb ___ kinderen. / Ik heb geen kinderen. En jij?", english: "I have ___ children. / I have no children. And you?" },
      { role: "A", dutch: "Ik heb ___.", english: "I have ___." },
      { role: "A", dutch: "Hoe oud zijn jouw kinderen?", english: "How old are your children?" },
      { role: "B", dutch: "Mijn oudste is ___ jaar en mijn jongste is ___ jaar.", english: "My oldest is ___ and my youngest is ___." },
      { role: "A", dutch: "Heb jij een zoon of een dochter?", english: "Do you have a son or a daughter?" },
      { role: "B", dutch: "Ik heb een ___ van ___ jaar en een ___ van ___ jaar.", english: "I have a ___ of ___ and a ___ of ___." },
      { role: "A", dutch: "Heb jij broers of zussen?", english: "Do you have brothers or sisters?" },
      { role: "B", dutch: "Ja, ik heb ___. / Nee, ik heb geen broers of zussen. Ik ben enig kind.", english: "Yes, I have ___. / No, I have no siblings. I'm an only child." },
    ],
  },

  // ─── LEERPAD 2B ────────────────────────────────────────────────────────────
  {
    id: "lp2b",
    tag: "LEERPAD 2B",
    title: "Hoeveel kost het boek? — How much does it cost?",
    difficulty: "easy",
    shortcut: "Hoeveel kost het? → Het kost ___ euro. Learn the numbers cold — prices require them instantly.",
    explanation: "Leerpad 2B puts numbers into real-world context: prices. You need to ask how much something costs, understand the answer, and react to it. This is also where you practice numbers in the 1–100 range at natural speed.",
    patterns: [
      { rule: "Asking the price", examples: [
        "Hoeveel kost het / dat? (How much does it / that cost?)",
        "Hoeveel kost het boek / de cursus / het ticket? (How much does the book / course / ticket cost?)",
        "Hoeveel kosten die? (How much do those cost?) ← plural: kosten",
        "Wat kost het? (What does it cost?) ← informal alternative",
      ]},
      { rule: "Stating the price", examples: [
        "Het kost ___ euro. (It costs ___ euro.)",
        "Dat kost ___ euro en ___ cent.",
        "↳ In spoken Belgian Dutch: 'twee euro vijftig' — the 'en' and 'cent' are usually dropped",
        "Ze kosten ___ euro (per stuk). (They cost ___ euro each.)",
        "Het is gratis. (It's free.)",
      ]},
      { rule: "Reacting to a price", examples: [
        "Dat is (te) duur! (That is (too) expensive!)",
        "Dat is goedkoop. (That is cheap.)",
        "Dat is een koopje! (That's a bargain!)",
        "Dat is redelijk. (That is reasonable.)",
        "Dat is normaal. (That's a normal price.)",
      ]},
      { rule: "Shopping expressions", examples: [
        "Ik wil graag ___. (I would like ___.) ← polite way to order/buy",
        "Hebt u ___? (Do you have ___?) ← formal, in a shop",
        "Mag ik de rekening? (Can I have the bill?)",
        "Hoeveel is dat in totaal? (How much is that in total?)",
      ]},
    ],
    memory: "🧠 kosten = costs (plural). kost = costs (singular). Flip between them based on whether the thing is one or many. Like singular/plural in any Unix command.",
    examples: [
      { nl: "Hoeveel kost het boek?", en: "How much does the book cost?" },
      { nl: "Het kost vijftien euro.", en: "It costs fifteen euro." },
      { nl: "Dat is te duur! Hoeveel kosten de andere boeken?", en: "That's too expensive! How much do the other books cost?" },
      { nl: "Ze kosten tien euro per stuk.", en: "They cost ten euro each." },
      { nl: "Dat is een koopje!", en: "That's a bargain!" },
    ],
    practice: [
      { role: "A", dutch: "Hoeveel kost het boek?", english: "How much does the book cost?" },
      { role: "B", dutch: "Het kost ___ euro.", english: "It costs ___ euro." },
      { role: "A", dutch: "Is dat duur?", english: "Is that expensive?" },
      { role: "B", dutch: "Ja, dat is (te) duur. / Nee, dat is goedkoop. / Dat is redelijk.", english: "Yes, that's (too) expensive. / No, that's cheap. / That's reasonable." },
      { role: "A", dutch: "Hoeveel kosten twee tickets voor het museum?", english: "How much do two tickets for the museum cost?" },
      { role: "B", dutch: "Twee tickets kosten ___ euro in totaal.", english: "Two tickets cost ___ euro in total." },
      { role: "A", dutch: "Ik wil graag een koffie. Hoeveel kost dat?", english: "I'd like a coffee. How much does that cost?" },
      { role: "B", dutch: "Een koffie kost ___ euro.", english: "A coffee costs ___ euro." },
    ],
  },

  // ─── LEERPAD 3A ────────────────────────────────────────────────────────────
  {
    id: "lp3a",
    tag: "LEERPAD 3A",
    title: "Hoe laat is het? — What time is it?",
    difficulty: "medium",
    shortcut: "The BIG trap: 'half drie' = 2:30, NOT 3:30. Dutch 'half' means halfway TO the next hour.",
    explanation: "Telling time in Dutch looks simple but has one major trap: 'half' works differently. Dutch counts forward TO the next hour, not backward from the current one. Master that and the rest follows logically.",
    patterns: [
      { rule: "Full hours — het is ___ uur", examples: [
        "Het is twee uur. (It is two o'clock.)",
        "Het is twaalf uur. (It is twelve o'clock.)",
        "Het is middernacht. (It is midnight.)",
        "'s ochtends / 's middags / 's avonds = in the morning / afternoon / evening",
        "Het is drie uur 's middags. (It is 3pm.)",
      ]},
      { rule: "Quarter past — kwart over", examples: [
        "Het is kwart over twee. (It is quarter past two.) = 2:15",
        "Het is kwart over tien. (It is quarter past ten.) = 10:15",
      ]},
      { rule: "Half — WARNING: counts TO the next hour!", examples: [
        "Het is half drie. = 2:30 ← halfway TO three, NOT half past two!",
        "Het is half twaalf. = 11:30",
        "Het is half één. = 12:30",
        "🚫 NEVER say 'half twee' for 2:30 — that is 1:30!",
      ]},
      { rule: "Quarter to — kwart voor", examples: [
        "Het is kwart voor drie. (It is quarter to three.) = 2:45",
        "Het is kwart voor twaalf. (It is quarter to twelve.) = 11:45",
      ]},
      { rule: "Minutes past / to — over / voor", examples: [
        "Het is vijf over twee. = 2:05",
        "Het is tien over twee. = 2:10",
        "Het is tien voor half drie. = 2:20 (ten to half three)",
        "Het is vijf voor half drie. = 2:25 (five to half three)",
        "Het is vijf over half drie. = 2:35 (five past half three)",
        "Het is tien voor drie. = 2:50",
        "Het is vijf voor drie. = 2:55",
      ]},
      { rule: "Om hoe laat? — At what time?", examples: [
        "Om hoe laat begint de les? (At what time does the lesson start?)",
        "De les begint om negen uur. (The lesson starts at nine o'clock.)",
        "Om hoe laat eindigt de les? (At what time does the lesson end?)",
        "Om hoe laat vertrekt de trein? (At what time does the train leave?)",
      ]},
    ],
    memory: "🧠 'half [X]' = halfway TO [X]. So half drie = halfway to three = 2:30. Think of it as a progress bar: ▓▓▓▓▓░░░░░ toward the next hour.",
    examples: [
      { nl: "Hoe laat is het?", en: "What time is it?" },
      { nl: "Het is half drie.", en: "It is 2:30. (halfway to three)" },
      { nl: "Het is kwart over tien.", en: "It is 10:15." },
      { nl: "Het is kwart voor acht.", en: "It is 7:45." },
      { nl: "Om hoe laat begint de les?", en: "At what time does the lesson start?" },
      { nl: "De les begint om half negen.", en: "The lesson starts at 8:30." },
    ],
    practice: [
      { role: "A", dutch: "Hoe laat is het?", english: "What time is it?" },
      { role: "B", dutch: "Het is ___ uur.", english: "It is ___ o'clock." },
      { role: "A", dutch: "Hoe laat is het? [shows 2:15]", english: "What time is it?" },
      { role: "B", dutch: "Het is kwart over twee.", english: "It is quarter past two." },
      { role: "A", dutch: "Hoe laat is het? [shows 2:30]", english: "What time is it?" },
      { role: "B", dutch: "Het is half drie. (NOT half twee!)", english: "It is 2:30." },
      { role: "A", dutch: "Hoe laat is het? [shows 2:45]", english: "What time is it?" },
      { role: "B", dutch: "Het is kwart voor drie.", english: "It is quarter to three." },
      { role: "A", dutch: "Om hoe laat begint de les?", english: "At what time does the lesson start?" },
      { role: "B", dutch: "De les begint om ___ uur.", english: "The lesson starts at ___ o'clock." },
      { role: "A", dutch: "Om hoe laat eindigt de les?", english: "At what time does the lesson end?" },
      { role: "B", dutch: "De les eindigt om ___.", english: "The lesson ends at ___." },
    ],
  },

  // ─── LEERPAD 3A · TIME PREPOSITIONS ────────────────────────────────────────
  {
    id: "lp3a_prep",
    tag: "LEERPAD 3A · OM / OP / IN",
    title: "Om · Op · In — Time Prepositions",
    difficulty: "easy",
    shortcut: "Om = clock time. Op = specific day or date. In = period, month, season, year.",
    explanation: "Dutch uses three different prepositions for time, each with a specific job. Getting them mixed up is one of the most common errors at this level. The good news: each one has a clear rule that covers almost all cases.",
    patterns: [
      { rule: "OM — clock times (always om + uur)", examples: [
        "Om 7 uur. (At 7 o'clock.)",
        "Om half 8. (At 7:30.) ← 'op half 8' is also heard but om is standard",
        "Om kwart over tien. (At quarter past ten.)",
        "Om middernacht. (At midnight.)",
        "De les begint om 9 uur. (The lesson starts at 9 o'clock.)",
        "Ik sta op om 7 uur 's morgens. (I get up at 7 o'clock in the morning.)",
        "↳ Rule: if you can put a clock face next to it → use OM",
      ]},
      { rule: "OP — specific days, dates, and named moments", examples: [
        "Op maandag. (On Monday.)",
        "Op dinsdag. (On Tuesday.)",
        "Op maandagavond. (On Monday evening.)",
        "Op 8 september. (On 8 September.)",
        "Op 8 september 2021. (On 8 September 2021.)",
        "Op mijn verjaardag. (On my birthday.)",
        "Op Kerstmis. (On Christmas.)",
        "↳ Rule: specific calendar point — a named day, date, or occasion → use OP",
      ]},
      { rule: "IN — periods, months, seasons, years", examples: [
        "In het weekend. (At/in the weekend.)",
        "In de vakantie. (During the holidays.)",
        "In de zomer. (In summer.)",
        "In de herfst. (In autumn.)",
        "In maart. (In March.)",
        "In 1999. (In 1999.)",
        "In de ochtend. (In the morning.) ← note: 's ochtends is also common",
        "↳ Rule: stretched period of time, not a single point → use IN",
      ]},
      { rule: "Side-by-side comparison — the same idea, different prepositions", examples: [
        "OP maandag (on Monday — specific day) vs IN de week (in the week — period)",
        "OP 8 september (on 8th September — specific date) vs IN september (in September — the whole month)",
        "OM 7 uur (at 7 o'clock — precise time) vs IN de ochtend (in the morning — period)",
        "OP maandagochtend (on Monday morning — named specific time) vs IN de ochtend (in general)",
      ]},
      { rule: "Common combinations to memorise", examples: [
        "om ___ uur 's morgens / 's ochtends (at ___ o'clock in the morning)",
        "op ___ avond (on ___ evening) — op vrijdagavond (on Friday evening)",
        "in het weekend (at the weekend)",
        "in de vakantie (during the holidays)",
        "in de zomer / winter / lente / herfst (in summer / winter / spring / autumn)",
        "in [month] — in januari, in februari, in maart...",
        "in [year] — in 2021, in 1999",
      ]},
    ],
    memory: "🧠 Om = O'clock (both start with O — easy!). Op = a point you can point to on a calendar (specific day/date). In = inside a period of time (month, season, year, weekend).",
    examples: [
      { nl: "Om 7 uur 's morgens.", en: "At 7 o'clock in the morning." },
      { nl: "Op dinsdag. / Op 8 september.", en: "On Tuesday. / On 8 September." },
      { nl: "Op maandagavond om 8 uur.", en: "On Monday evening at 8 o'clock." },
      { nl: "In het weekend. / In de zomer. / In maart. / In 1999.", en: "At the weekend. / In summer. / In March. / In 1999." },
      { nl: "De les is op dinsdag om half tien.", en: "The lesson is on Tuesday at 9:30." },
    ],
    practice: [
      { role: "A", dutch: "Om, op of in? → '___ 9 uur'", english: "Om, op or in? → '___ 9 o'clock'" },
      { role: "B", dutch: "OM 9 uur — klokken gebruiken altijd 'om'.", english: "OM 9 uur — clocks always use 'om'." },
      { role: "A", dutch: "Om, op of in? → '___ maandag'", english: "Om, op or in? → '___ Monday'" },
      { role: "B", dutch: "OP maandag — een specifieke dag.", english: "OP maandag — a specific day." },
      { role: "A", dutch: "Om, op of in? → '___ het weekend'", english: "Om, op or in? → '___ the weekend'" },
      { role: "B", dutch: "IN het weekend — een periode, geen specifiek punt.", english: "IN het weekend — a period, not a specific point." },
      { role: "A", dutch: "Om, op of in? → '___ de zomer'", english: "Om, op or in? → '___ summer'" },
      { role: "B", dutch: "IN de zomer — een seizoen is een periode.", english: "IN de zomer — a season is a period." },
      { role: "A", dutch: "Wanneer is de les?", english: "When is the lesson?" },
      { role: "B", dutch: "De les is op ___ om ___ uur.", english: "The lesson is on ___ at ___ o'clock." },
      { role: "A", dutch: "Wanneer ga jij op vakantie?", english: "When do you go on holiday?" },
      { role: "B", dutch: "In de zomer — in augustus.", english: "In summer — in August." },
    ],
  },

  // ─── LEERPAD 3B ────────────────────────────────────────────────────────────
  {
    id: "lp3b",
    tag: "LEERPAD 3B",
    title: "Hoe oud ben jij? — How old are you?",
    difficulty: "easy",
    shortcut: "Ik ben [number] jaar (oud). 'oud' is optional in speech — 'Ik ben 35 jaar' is perfectly natural.",
    explanation: "This lesson combines 'zijn' (to be) with numbers in a personal context. You give your age, ask about others' ages, and talk about birthdays. It's also where dates and months come together.",
    patterns: [
      { rule: "Zijn — to be (conjugation)", examples: [
        "ik ben (I am)",
        "jij / je bent (you are) — but: ben jij? in questions",
        "hij / zij / ze is (he / she is)",
        "wij / we zijn (we are)",
        "jullie zijn (you all are)",
        "zij / ze zijn (they are)",
      ]},
      { rule: "Hoe oud ben jij?", examples: [
        "Hoe oud ben jij? (How old are you?)",
        "Ik ben ___ jaar (oud). (I am ___ years old.)",
        "Hoe oud is jouw partner / kind? (How old is your partner / child?)",
        "Hij / Zij is ___ jaar. (He / She is ___ years old.)",
        "Ik ben net ___ geworden. (I just turned ___.) ← bonus phrase",
      ]},
      { rule: "Verjaardag — Birthday", examples: [
        "Wanneer ben jij jarig? (When is your birthday?)",
        "Wanneer is jouw verjaardag? (When is your birthday?)",
        "Ik ben jarig op ___ [dag] [maand]. (My birthday is on ___ [day] [month].)",
        "Ik verjaar op 5 maart. (My birthday is on March 5th.)",
        "Gelukkige verjaardag! (Happy birthday!)",
        "Hoeveel kaarsjes? (How many candles?) ← fun follow-up",
      ]},
      { rule: "Dates — ordinal numbers", examples: [
        "de eerste (1st) / de tweede (2nd) / de derde (3rd)",
        "de vierde (4th) / de vijfde (5th) / de tiende (10th)",
        "de twintigste (20th) / de eenentwintigste (21st)",
        "Ik ben geboren op 15 april 1985. (I was born on 15 April 1985.)",
        "In welk jaar ben jij geboren? (In what year were you born?)",
      ]},
    ],
    memory: "🧠 'Hoe oud' = how old. 'Hoe laat' = how late (what time). Don't mix them up — both start with 'Hoe' but mean different things.",
    examples: [
      { nl: "Hoe oud ben jij?", en: "How old are you?" },
      { nl: "Ik ben vijfendertig jaar.", en: "I am thirty-five years old." },
      { nl: "Wanneer ben jij jarig?", en: "When is your birthday?" },
      { nl: "Ik verjaar op 12 juni.", en: "My birthday is on June 12th." },
      { nl: "Hoe oud is jouw oudste kind?", en: "How old is your oldest child?" },
      { nl: "In welk jaar ben jij geboren?", en: "In what year were you born?" },
    ],
    practice: [
      { role: "A", dutch: "Hoe oud ben jij?", english: "How old are you?" },
      { role: "B", dutch: "Ik ben ___ jaar. En jij?", english: "I am ___ years old. And you?" },
      { role: "A", dutch: "Ik ben ___ jaar.", english: "I am ___ years old." },
      { role: "A", dutch: "Wanneer ben jij jarig?", english: "When is your birthday?" },
      { role: "B", dutch: "Ik ben jarig op ___ [maand].", english: "My birthday is on ___ [month]." },
      { role: "A", dutch: "In welk jaar ben jij geboren?", english: "In what year were you born?" },
      { role: "B", dutch: "Ik ben geboren in ___.", english: "I was born in ___." },
      { role: "A", dutch: "Hoe oud is jouw partner?", english: "How old is your partner?" },
      { role: "B", dutch: "Mijn partner is ___ jaar.", english: "My partner is ___ years old." },
    ],
  },

  // ─── LEERPAD 3C — GRAAG ────────────────────────────────────────────────────
  {
    id: "graag",
    tag: "LEERPAD 3C · GRAAG",
    title: "graag — Expressing What You Like Doing",
    difficulty: "easy",
    shortcut: "Put 'graag' after the verb. For 'not graag', add 'niet' before 'graag'. That's it.",
    explanation: "'Graag' means 'gladly / with pleasure'. In everyday Belgian Dutch it's how you say you like doing something. Unlike English, there's no separate 'to like' verb — you just slot 'graag' into the sentence.",
    patterns: [
      { rule: "Structure: [subject] + [verb] + graag (+ rest)", examples: [
        "Ik wandel graag. (I like walking.)",
        "Ik zwem graag. (I like swimming.)",
        "Ik speel graag op de computer. (I like playing on the computer.)",
        "Ik neem graag foto's van de natuur. (I like taking photos of nature.)",
      ]},
      { rule: "With 'gaan' + infinitive: Ik ga graag + [infinitive]", examples: [
        "Ik ga graag wandelen. (I like going for walks.)",
        "Ik ga graag skiën in de bergen. (I like skiing in the mountains.)",
        "Ik ga graag frietjes eten. (I like going to eat fries.)",
      ]},
      { rule: "Negation: niet graag = don't like doing", examples: [
        "Ik eet niet graag scampi. (I don't like eating shrimp.)",
        "Ik heb niet graag koud. (I don't like being cold.) ← very Belgian!",
        "Ik sta niet graag vroeg op. (I don't like getting up early.) ← opstaan = to get up",
      ]},
      { rule: "1st person — ik + verb stem (no ending)", examples: [
        "Ik wandel graag.", "Ik zwem graag.", "Ik game graag.",
      ]},
      { rule: "2nd person — je/jij + verb stem + t", examples: [
        "Je wandelt graag.", "Je zwemt graag.", "Zwem je graag? (inversion drops the -t!)",
      ]},
      { rule: "3rd person — hij/ze/zij/de jongen + verb stem + t", examples: [
        "Hij zwemt graag.", "Ze wandelt graag.", "De jongen speelt graag buiten.",
      ]},
      { rule: "Plurals — wij/jullie/zij + infinitive form", examples: [
        "We zwemmen graag. (We like swimming.)",
        "Jullie wandelen graag. (You all like walking.) ← jullie = you plural, NOT they",
        "Zij fietsen graag. (They like cycling.) ← zij = they (3rd person plural)",
      ]},
      { rule: "Yes/No questions — Ga je graag...? / ...je graag...?", examples: [
        "Flip the subject and verb, graag stays in its normal position:",
        "Ga je graag wandelen? (Do you like going for walks?)",
        "Ga je graag fietsen? (Do you like cycling?)",
        "Ga je graag met de fiets? (Do you like going by bike?)",
        "Ga je graag met de trein? (Do you like going by train?)",
        "Ga je graag met de ferry? (Do you like going by ferry?)",
        "Zwem je graag? (Do you like swimming?) ← inversion drops the -t",
        "Wandel je graag in de natuur? (Do you like walking in nature?)",
        "Ga je graag skiën in de bergen? (Do you like skiing in the mountains?)",
        "Gaat hij graag mee? (Does he like coming along?)",
        "↳ Answer: Ja, ik ga graag met de ferry. / Nee, ik ga niet graag met de ferry.",
      ]},
    ],
    memory: "🧠 Conjugation: ik = stem | jij/hij/zij = stem+t | wij/jullie/zij = -en form. NOTE: 'jij' after verb (inversion) drops the -t: 'Zwem jij graag?' not 'Zwemt jij'.",
    examples: [
      { nl: "Ik zwem graag. / Je zwemt graag. / Hij zwemt graag.", en: "I / You / He like(s) swimming." },
      { nl: "We zwemmen graag. / Jullie zwemmen graag.", en: "We / You all like swimming." },
      { nl: "Ik ga graag skiën. / Ik eet niet graag scampi.", en: "I like skiing. / I don't like eating shrimp." },
      { nl: "Ga je graag met de ferry?", en: "Do you like going by ferry?" },
      { nl: "Ja, ik ga graag met de ferry. / Nee, ik ga niet graag met de ferry.", en: "Yes, I like going by ferry. / No, I don't like going by ferry." },
    ],
    practice: [
      { role: "A", dutch: "Wat doe je graag?", english: "What do you like to do?" },
      { role: "B", dutch: "Ik ___ graag. / Ik ga graag ___. En jij?", english: "I like ___ing. / I like going ___. And you?" },
      { role: "A", dutch: "Ik ga graag ___.", english: "I like going ___." },
      { role: "A", dutch: "Ga je graag wandelen?", english: "Do you like going for walks?" },
      { role: "B", dutch: "Ja, ik ga graag wandelen. / Nee, ik ga niet graag wandelen.", english: "Yes, I like going for walks. / No, I don't like going for walks." },
      { role: "A", dutch: "Ga je graag met de trein?", english: "Do you like going by train?" },
      { role: "B", dutch: "Ja, ik ga graag met de trein. / Nee, ik ga liever met de auto.", english: "Yes, I like going by train. / No, I prefer going by car." },
      { role: "A", dutch: "Ga je graag met de ferry?", english: "Do you like going by ferry?" },
      { role: "B", dutch: "Ja, ik ga graag met de ferry! / Nee, ik ga niet graag met de ferry.", english: "Yes, I like going by ferry! / No, I don't like going by ferry." },
      { role: "A", dutch: "Zwem je graag?", english: "Do you like swimming?" },
      { role: "B", dutch: "Ja, ik zwem graag. / Nee, ik zwem niet graag.", english: "Yes, I like swimming. / No, I don't like swimming." },
      { role: "A", dutch: "Wat doe je niet graag?", english: "What don't you like doing?" },
      { role: "B", dutch: "Ik ___ niet graag. Maar ik ___ graag.", english: "I don't like ___ing. But I like ___ing." },
    ],
  },

  // ─── LEERPAD 3C — GA JE MEE ────────────────────────────────────────────────
  {
    id: "gajemee",
    tag: "LEERPAD 3C · GA JE MEE",
    title: "Ga je mee...? — Inviting Someone Along",
    difficulty: "easy",
    shortcut: "'Ga je mee' = 'Are you coming with me/us to...'. Add an activity or destination after it.",
    explanation: "'Gaan' (to go) + 'mee' (along/with) is THE standard Belgian Dutch way to invite someone. 'Mee' is a separable verb prefix — it sits at the end in questions. You'll use this every single day.",
    patterns: [
      { rule: "Ga je mee + [infinitive]? — activity invitation", examples: [
        "Ga je mee fietsen? (Coming cycling?)",
        "Ga je mee zwemmen? (Coming swimming?)",
        "Ga je mee wandelen? (Coming for a walk?)",
        "Ga je mee iets drinken? (Coming for a drink?)",
      ]},
      { rule: "Ga je mee naar + [place]? — destination invitation", examples: [
        "Ga je mee naar het museum? (Coming to the museum?)",
        "Ga je mee naar het verjaardagsfeest? (Coming to the birthday party?)",
        "Ga je mee naar de markt? (Coming to the market?)",
      ]},
      { rule: "Ga je mee + [food/drink]?", examples: [
        "Ga je mee frietjes eten? (Coming for fries?)",
        "Ga je mee iets drinken? (Coming for a drink?)",
        "Ga je mee een pintje drinken? (Coming for a beer?)",
        "Ga je mee uit eten naar het restaurant? (Coming out to eat?)",
      ]},
      { rule: "Other persons", examples: [
        "Gaat u mee? (formal)",
        "Gaan jullie mee naar het feest? (Are you all coming to the party?)",
        "Gaan we mee? (Are we going along?)",
      ]},
      { rule: "Naar + article (de/het) for specific places vs naar alone for cities/countries", examples: [
        "Specific venues take their article after 'naar':",
        "  Ga je mee naar DE cinema? (de cinema = de-word)",
        "  Ga je mee naar DE zoo? (de zoo = de-word)",
        "  Ga je mee naar HET museum? (het museum = het-word)",
        "  Ga je mee naar HET café? (het café = het-word)",
        "  Ga je mee naar DE markt? (de markt = de-word)",
        "  Ga je mee naar HET strand? (het strand = het-word)",
        "Cities, countries, and regions use 'naar' with NO article:",
        "  Ga je mee naar Brugge? (no article — city)",
        "  Ga je mee naar België? (no article — country)",
        "  Ga je mee naar Brussel? (no article — city)",
        "  Ga je mee naar het noorden? (direction/region can take het — the north)",
        "↳ Quick rule: if it has a de/het in front normally, keep it. City/country names → no article.",
      ]},
    ],
    memory: "🧠 'Ga je mee' = minimal syntax, maximum effect. Activity or place just appends like an argument: ga_je_mee(fietsen) ✓",
    examples: [
      { nl: "Ga je mee fietsen?", en: "Are you coming cycling?" },
      { nl: "Ga je mee naar het verjaardagsfeest?", en: "Are you coming to the birthday party?" },
      { nl: "Ga je mee frietjes eten?", en: "Coming for fries?" },
    ],
    practice: [
      { role: "A", dutch: "Ga je mee fietsen?", english: "Are you coming cycling?" },
      { role: "B", dutch: "Ja, graag! / Nee, ik heb geen tijd.", english: "Yes please! / No, I have no time." },
      { role: "A", dutch: "Ga je mee naar het museum?", english: "Are you coming to the museum?" },
      { role: "B", dutch: "Ja, met plezier! / Nee, ik ben te moe.", english: "Yes, with pleasure! / No, I'm too tired." },
      { role: "A", dutch: "Ga je mee iets drinken na de les?", english: "Coming for a drink after the lesson?" },
      { role: "B", dutch: "Ja, goed idee! / Nee, ik moet naar huis.", english: "Yes, good idea! / No, I have to go home." },
      { role: "A", dutch: "Gaan jullie mee naar het verjaardagsfeest?", english: "Are you all coming to the birthday party?" },
      { role: "B", dutch: "Ja, wij gaan mee! / Nee, wij kunnen niet.", english: "Yes, we're coming! / No, we can't." },
    ],
  },

  // ─── LEERPAD 3C — AFSPREKEN ────────────────────────────────────────────────
  {
    id: "afspreken",
    tag: "LEERPAD 3C · AFSPREKEN",
    title: "Afspreken — Making Appointments",
    difficulty: "easy",
    shortcut: "'Wanneer spreken we af?' + 'Past dat?' — ask when, name your time, check it works. Three moves and you have a plan.",
    explanation: "'Afspreken' means to make an arrangement or appointment with someone. It's a separable verb: 'ik spreek af', 'we spreken af'. You'll use this constantly — arranging when to meet, where to meet, and confirming it suits both people.",
    patterns: [
      { rule: "Afspreken — the verb", examples: [
        "'Afspreken' = to make an arrangement / to agree to meet",
        "Separable: af- flies to the end in main clauses",
        "ik spreek af · jij spreekt af · hij/zij spreekt af",
        "wij/jullie/zij spreken af",
        "Wanneer spreken we af? (When do we make arrangements?)",
        "Laten we afspreken! (Let's make a plan!)",
        "We spreken af om drie uur. (We arrange to meet at three o'clock.)",
      ]},
      { rule: "Wanneer? — When do we meet?", examples: [
        "Wanneer spreken we af? (When do we arrange to meet?)",
        "Morgen — tomorrow",
        "Overmorgen — the day after tomorrow",
        "Volgende week — next week",
        "'s ochtends — in the morning",
        "'s middags — in the afternoon",
        "'s avonds — in the evening",
        "Vroeg — early · Laat — late",
        "Om 10 uur — at 10 o'clock",
        "Om half drie — at 2:30",
        "Rond twee uur — around two o'clock ('rond' = approximately)",
      ]},
      { rule: "Past dat? — Does that suit you?", examples: [
        "Past dat? (Does that suit / work for you?)",
        "Past dat voor jou? (Does that work for you?) ← slightly more explicit",
        "Ja, dat past! (Yes, that works!)",
        "Nee, dat past niet. (No, that doesn't work.)",
        "Dat past me goed. (That suits me well.)",
        "Dat past me niet zo goed. (That doesn't suit me that well.)",
        "Past het ook om ___? (Does ___ also work?)",
      ]},
      { rule: "Waar? — Where do we meet?", examples: [
        "Waar spreken we af? (Where do we arrange to meet?)",
        "In het café — in the café",
        "In het park — in the park",
        "Aan de ingang — at the entrance",
        "Bij de bushalte — by the bus stop",
        "Bij de ingang van het museum — at the entrance of the museum",
        "Aan de kassa — at the ticket desk/checkout",
        "Thuis bij mij — at my place",
        "Op het station — at the station",
      ]},
      { rule: "Confirming the plan — Putting it all together", examples: [
        "Goed, we spreken af morgen om 10 uur aan de ingang. (Good, we'll meet tomorrow at 10 at the entrance.)",
        "Tot dan! (See you then!)",
        "Tot morgen! (See you tomorrow!)",
        "Tot volgende week! (See you next week!)",
        "Ik zie je morgen! (I'll see you tomorrow!)",
        "Vergeet het niet! (Don't forget!)",
      ]},
      { rule: "Changing or cancelling a plan", examples: [
        "Ik kan morgen toch niet. (I actually can't tomorrow after all.)",
        "Kunnen we het verzetten? (Can we reschedule it?)",
        "Kunnen we een andere dag afspreken? (Can we arrange another day?)",
        "Kan het ook om ___? (Can it also be at ___?)",
        "Ik moet het afzeggen. (I have to cancel it.)",
        "Sorry, ik ben te laat! (Sorry, I'm running late!)",
      ]},
    ],
    memory: "🧠 'Afspreken' is separable — 'ik spreek af', not 'ik afspreeek'. The full formula: Wanneer? [time] + Waar? [place] + Past dat? [confirm]. Then close with 'Tot dan!'",
    examples: [
      { nl: "Wanneer spreken we af?", en: "When do we arrange to meet?" },
      { nl: "Morgen 's ochtends om tien uur? Past dat?", en: "Tomorrow morning at ten? Does that suit you?" },
      { nl: "Ja, dat past! Waar spreken we af?", en: "Yes, that works! Where do we meet?" },
      { nl: "Aan de ingang van het café.", en: "At the entrance of the café." },
      { nl: "Goed, tot morgen dan! Vergeet het niet!", en: "Good, see you tomorrow then! Don't forget!" },
    ],
    practice: [
      { role: "A", dutch: "Ga je mee naar het museum?", english: "Are you coming to the museum?" },
      { role: "B", dutch: "Ja, graag! Wanneer spreken we af?", english: "Yes please! When do we arrange to meet?" },
      { role: "A", dutch: "Morgen 's ochtends? Past dat?", english: "Tomorrow morning? Does that suit you?" },
      { role: "B", dutch: "Ja, dat past! Om hoe laat?", english: "Yes, that works! At what time?" },
      { role: "A", dutch: "Om tien uur. Past dat?", english: "At ten o'clock. Does that work?" },
      { role: "B", dutch: "Dat past me goed! Waar spreken we af?", english: "That suits me well! Where do we meet?" },
      { role: "A", dutch: "Aan de ingang van het museum.", english: "At the entrance of the museum." },
      { role: "B", dutch: "Goed! Tot morgen dan!", english: "Great! See you tomorrow then!" },
      { role: "A", dutch: "Tot morgen! Vergeet het niet!", english: "See you tomorrow! Don't forget!" },
      { role: "A", dutch: "Ik kan morgen toch niet. Kunnen we het verzetten?", english: "I actually can't tomorrow. Can we reschedule?" },
      { role: "B", dutch: "Ja, geen probleem. Kan het ook overmorgen?", english: "Yes, no problem. Can it also be the day after tomorrow?" },
      { role: "A", dutch: "Overmorgen 's middags past me goed.", english: "The day after tomorrow in the afternoon suits me well." },
    ],
  },

  // ─── LEERPAD 3C — WAT DOE JE GRAAG ────────────────────────────────────────
  {
    id: "watdoejegraag",
    tag: "LEERPAD 3C · WAT DOE JE GRAAG",
    title: "Wat doe je graag? — What Do You Like to Do?",
    difficulty: "easy",
    shortcut: "'Wat doe je graag?' is THE question your teacher will ask. Know it cold and have 3–4 answers ready.",
    explanation: "'Wat doe je graag?' combines 'doen' (to do) + 'graag' (gladly). It's your teacher's go-to question for conversation practice. You need to answer naturally, ask it back, and link likes with dislikes.",
    patterns: [
      { rule: "The question — all persons", examples: [
        "Wat doe je graag? (What do you like to do?) ← most common",
        "Wat doe jij graag? (What do YOU like to do?) ← emphasized",
        "Wat doet hij / zij graag? (What does he / she like to do?)",
        "Wat doen jullie graag? (What do you all like to do?)",
        "Wat doet u graag? (What do you like to do?) ← formal",
      ]},
      { rule: "Conjugation of 'doen' — watch the inversion!", examples: [
        "ik doe → Wat doe ik graag?",
        "jij/je doet → Wat doe je graag? (inversion drops -t!)",
        "hij/zij doet → Wat doet hij/zij graag?",
        "wij/jullie/zij doen → Wat doen wij/jullie/zij graag?",
      ]},
      { rule: "Specific follow-up questions", examples: [
        "Wat doe je graag in het weekend? (at the weekend?)",
        "Wat doe je graag in de zomer / winter? (in summer / winter?)",
        "Doe je graag sport? (Do you like sport?) ← yes/no",
        "Ga je graag naar het museum? (Do you like going to the museum?)",
      ]},
      { rule: "Linking likes and dislikes", examples: [
        "Ik wandel graag, maar ik zwem niet graag.",
        "Ik ga graag fietsen en ik ga ook graag skiën.",
        "Ik kook graag, maar ik doe niet graag de afwas.",
      ]},
    ],
    memory: "🧠 Have your personal answer ready as a reflex: 'Ik [verb] graag' + 'maar ik [verb] niet graag'. One sentence shows graag, mais, and negation all at once.",
    examples: [
      { nl: "Wat doe je graag?", en: "What do you like to do?" },
      { nl: "Ik ga graag wandelen en fietsen.", en: "I like going walking and cycling." },
      { nl: "Ik kook graag, maar ik eet niet graag scampi.", en: "I like cooking, but I don't like eating shrimp." },
      { nl: "Wat doet zij graag in het weekend?", en: "What does she like to do at the weekend?" },
    ],
    practice: [
      { role: "A", dutch: "Wat doe je graag?", english: "What do you like to do?" },
      { role: "B", dutch: "Ik ___ graag. En jij?", english: "I like ___ing. And you?" },
      { role: "A", dutch: "Ik ga graag ___.", english: "I like going ___." },
      { role: "A", dutch: "Wat doe je graag in het weekend?", english: "What do you like to do at the weekend?" },
      { role: "B", dutch: "In het weekend ___ ik graag.", english: "At the weekend I like ___ing." },
      { role: "A", dutch: "Wat doe je niet graag?", english: "What don't you like doing?" },
      { role: "B", dutch: "Ik ___ niet graag. Maar ik ___ graag.", english: "I don't like ___ing. But I like ___ing." },
      { role: "A", dutch: "Doe je graag sport?", english: "Do you like sport?" },
      { role: "B", dutch: "Ja, ik sport graag. / Nee, ik sport niet graag.", english: "Yes, I like sport. / No, I don't like sport." },
    ],
  },

  // ─── LEERPAD 3C — MET X MEE ────────────────────────────────────────────────
  {
    id: "metmee",
    tag: "LEERPAD 3C · ADVANCED",
    title: "Ga je met X mee? — Going With Someone Specific",
    difficulty: "medium",
    shortcut: "Wrap the companion: ga [je] + met [X] + mee. Verb follows the subject, not the companion.",
    explanation: "'Ga je mee?' asks if someone is coming. 'Ga je met mij mee?' specifies who they're coming WITH. The verb conjugates based on the subject, and the companion always goes inside 'met...mee'.",
    patterns: [
      { rule: "met mij / met me — with me", examples: [
        "Ga je met mij mee wandelen? (Are you coming walking with me?)",
        "Ga je met mij mee naar het feest? (Are you coming to the party with me?)",
        "↳ Reply: Ja, ik ga met jou mee! (Yes, I'm coming with you!) ← reply uses jou, not mij",
      ]},
      { rule: "met jou / met je — with you", examples: [
        "Ik ga graag met jou mee fietsen. (I'd love to go cycling with you.)",
        "Zij gaat met jou mee naar het museum. (She's going to the museum with you.)",
        "↳ mij = stressed/formal · me = unstressed · same rule applies to jou/je",
      ]},
      { rule: "met hem — with him", examples: [
        "Ga je met hem mee zwemmen? (Are you going swimming with him?)",
        "Ja, ik ga met hem mee. (Yes, I'm going with him.)",
        "Ze gaat niet met hem mee. (She's not going with him.)",
      ]},
      { rule: "met haar — with her", examples: [
        "Ga je met haar mee naar de markt? (Are you going to the market with her?)",
        "Ja, ik ga met haar mee. (Yes, I'm going with her.)",
        "Hij wil niet met haar mee. (He doesn't want to go with her.)",
      ]},
      { rule: "met ons — with us", examples: [
        "Ga je met ons mee naar het restaurant? (Coming to the restaurant with us?)",
        "Ja, ik ga graag met jullie mee! (Yes, I'd love to come with you all!) ← reply: jullie, not ons",
        "↳ Important: you say 'met ons' when inviting, but the reply uses 'met jullie'",
      ]},
      { rule: "met jullie — with you (plural)", examples: [
        "Ik ga met jullie mee als jullie willen. (I'll come with you all if you want.)",
        "Wij gaan met jullie mee naar het strand. (We're going to the beach with you all.)",
      ]},
      { rule: "met hen / met hun — with them", examples: [
        "Ga je met hen mee naar het feest? (Are you going to the party with them?)",
        "Ja, ik ga met hen mee. (Yes, I'm going with them.)",
        "↳ Use 'hen' after prepositions like 'met'. 'hun' is also heard in spoken Belgian Dutch.",
      ]},
      { rule: "ermee — with it (replaces a thing, never a person)", examples: [
        "Ik ga ermee mee. (I'm going along with it.)",
        "↳ 'mee' appears TWICE: er-mee = with it · gaan mee = go along. Both are needed!",
        "Ga je ermee mee? (Are you going along with it?)",
        "Ze gaat er niet mee mee. (She's not going along with it.)",
        "Ga je ermee mee of ga je met de bus mee? (Are you going with it or are you going with the bus?)",
        "↳ 'ermee' replaces a thing already mentioned (e.g. the car). 'met de bus' names the thing directly.",
      ]},
      { rule: "Subject = ik/jij: ga + met [X] + mee", examples: [
        "Ga je met mij mee fietsen? (Are you coming cycling with me?)",
        "Ik ga met jou mee wandelen. (I'm going walking with you.)",
        "Ga je met ons mee naar het museum? (Coming to the museum with us?)",
      ]},
      { rule: "Subject = hij/zij: gaat + met [X] + mee", examples: [
        "Gaat ze met mij mee? (Is she coming with me?)",
        "Ze gaat met jou mee zwemmen. (She's going swimming with you.)",
        "Ze gaat met onze groep mee. (She's going with our group.)",
      ]},
      { rule: "Subject = wij/jullie/zij: gaan + met [X] + mee", examples: [
        "Gaan jullie met mij mee fietsen? (Are you all coming cycling with me?)",
        "Wij gaan met jullie mee naar het strand. (We're going to the beach with you.)",
      ]},
      { rule: "ons vs. onze — common confusion", examples: [
        "'met ons' = with us (pronoun after preposition)",
        "'onze groep' = our group (possessive before de-word)",
        "'ons huis' = our house (possessive before het-word)",
      ]},
    ],
    memory: "🧠 ga [je] + met [X] + mee — the companion is always sandwiched between 'met' and 'mee'. Subject drives the verb form.",
    examples: [
      { nl: "Ga je met mij mee wandelen?", en: "Are you coming walking with me?" },
      { nl: "Ik ga met jou mee naar het museum.", en: "I'm going to the museum with you." },
      { nl: "Gaat ze met ons mee fietsen?", en: "Is she coming cycling with us?" },
      { nl: "Ze gaat met onze groep mee.", en: "She's going with our group." },
    ],
    practice: [
      { role: "A", dutch: "Ga je met mij mee wandelen?", english: "Are you coming walking with me?" },
      { role: "B", dutch: "Ja, ik ga met jou mee! / Nee, ik kan niet.", english: "Yes, I'll come with you! / No, I can't." },
      { role: "A", dutch: "Ga je met ons mee naar het feest?", english: "Are you coming to the party with us?" },
      { role: "B", dutch: "Ja, ik ga met jullie mee! / Nee, helaas niet.", english: "Yes, I'll come with you all! / No, unfortunately not." },
      { role: "A", dutch: "Gaat ze met hen mee naar het museum?", english: "Is she going to the museum with them?" },
      { role: "B", dutch: "Ja, ze gaat met hen mee. / Nee, ze gaat niet mee.", english: "Yes, she's going with them. / No, she's not going." },
    ],
  },

  // ─── LEERPAD 3C — ANSWERS ──────────────────────────────────────────────────
  {
    id: "answers",
    tag: "LEERPAD 3C · ANSWERS",
    title: "Accepting & Declining — Ja, graag! / Ik heb geen zin.",
    difficulty: "easy",
    shortcut: "Ja, graag! = default accept. For no: give a reason + soften it. Never a bare 'nee'.",
    explanation: "Belgians are socially warm — a bare 'nee' without an excuse sounds rude. Learn a few go-to reasons and always pair a refusal with a softener. This alone will make you sound much more natural.",
    patterns: [
      { rule: "✅ Accepting warmly", examples: [
        "Ja, graag! (Yes please! / I'd love to!) ← most common",
        "Ja, zeker! (Yes, definitely!)",
        "Ja, goed idee! (Yes, good idea!)",
        "Natuurlijk! (Of course!)",
        "Met plezier! (With pleasure!)",
        "Dat lijkt me leuk! (That sounds fun!)",
        "Ja, ik kom! (Yes, I'm coming!)",
      ]},
      { rule: "❌ Declining — time & energy", examples: [
        "Ik heb geen tijd. (I have no time.)",
        "Ik ben te moe. (I'm too tired.)",
        "Ik ben moe. (I'm tired.)",
        "Ik ben niet klaar. (I'm not ready / done yet.)",
      ]},
      { rule: "❌ Declining — mood & health", examples: [
        "Ik heb geen zin. (I don't feel like it.)",
        "Ik heb er geen zin in. (I'm not in the mood for it.)",
        "Ik voel me niet goed. (I don't feel well.)",
        "Ik heb hoofdpijn. (I have a headache.)",
        "Ik ben ziek. (I'm sick.)",
      ]},
      { rule: "❌ Declining — obligations", examples: [
        "Ik moet werken. (I have to work.)",
        "Ik moet vroeg opstaan. (I have to get up early.)",
        "Ik heb al plannen. (I already have plans.)",
        "Ik moet voor de kinderen zorgen. (I have to look after the kids.)",
        "Ik moet naar huis. (I have to go home.)",
      ]},
      { rule: "🔄 Always soften a refusal — very Belgian!", examples: [
        "Misschien een andere keer? (Maybe another time?)",
        "Een andere keer misschien! (Another time maybe!)",
        "Volgende keer! (Next time!)",
        "Jammer, maar ik kan niet. (Pity, but I can't.)",
        "Spijtig genoeg kan ik niet. (Unfortunately I can't.)",
        "Kan het ook morgen / volgende week? (Can it be tomorrow / next week?)",
      ]},
    ],
    memory: "🧠 Refusal formula: [reason] + [softener]. Like a HTTP 503 with a Retry-After header — always give them something to work with.",
    examples: [
      { nl: "Ja, graag! Hoe laat?", en: "Yes please! What time?" },
      { nl: "Ik heb geen zin. Een andere keer misschien?", en: "I don't feel like it. Maybe another time?" },
      { nl: "Ik moet werken, maar volgende keer!", en: "I have to work, but next time!" },
    ],
    practice: [
      { role: "A", dutch: "Ga je mee fietsen?", english: "Are you coming cycling?" },
      { role: "B", dutch: "Ja, graag! Hoe laat? / Nee, ik heb geen tijd. Volgende keer!", english: "Yes please! What time? / No, I have no time. Next time!" },
      { role: "A", dutch: "Ga je mee iets drinken na de les?", english: "Coming for a drink after the lesson?" },
      { role: "B", dutch: "Ja, met plezier! / Nee, ik ben te moe. Jammer!", english: "Yes, with pleasure! / No, I'm too tired. What a pity!" },
      { role: "A", dutch: "Ga je mee naar het verjaardagsfeest?", english: "Are you coming to the birthday party?" },
      { role: "B", dutch: "Dat lijkt me leuk! / Ik heb geen zin. Misschien een andere keer?", english: "That sounds fun! / I don't feel like it. Maybe another time?" },
      { role: "A", dutch: "Ga je mee naar het museum?", english: "Are you coming to the museum?" },
      { role: "B", dutch: "Ik heb hoofdpijn. Kan het ook volgende week?", english: "I have a headache. Can it be next week?" },
    ],
  },

  // ─── LEERPAD 4A ────────────────────────────────────────────────────────────
  {
    id: "lp4a",
    tag: "LEERPAD 4A",
    title: "Welk weer is het? — What is the weather like?",
    difficulty: "easy",
    shortcut: "Het + 3rd person verb: het regent / het sneeuwt / het waait / het vriest. Or: Het is + adjective: het is bewolkt / warm / koud.",
    explanation: "Weather is one of the most common Belgian conversation topics — Belgians talk about it constantly! You need two structures: 'het + verb' for weather actions, and 'het is + adjective' for states. You also learn compass directions and weather-related places.",
    patterns: [
      { rule: "Het + weather verb — what the weather is DOING", examples: [
        "Het regent. (It is raining.) ← from 'regenen'",
        "Het sneeuwt. (It is snowing.) ← from 'sneeuwen'",
        "Het waait. (It is windy / the wind is blowing.) ← from 'waaien' [WAY-yun]",
        "Het hagelt. (It is hailing.) ← from 'hagelen'",
        "Het vriest. (It is freezing.) ← from 'vriezen'. Irregular: vriezen → vriest",
        "Het bliksemt. (It is lightning.) ← from 'bliksemen'",
        "De zon schijnt. (The sun is shining.) ← subject is 'de zon', not 'het'",
      ]},
      { rule: "Het is + adjective — what the weather IS like", examples: [
        "Het is warm. (It is warm.)",
        "Het is koud. (It is cold.)",
        "Het is bewolkt. (It is cloudy.) ← [buh-VOLKT]",
        "Het is zonnig. (It is sunny.)",
        "Het is mistig. (It is foggy.)",
        "Het is winderig. (It is windy.) ← alternative to 'het waait'",
        "Het is nat. (It is wet.)",
      ]},
      { rule: "Questions about the weather", examples: [
        "Welk weer is het? (What is the weather like?) ← the LP4A key question",
        "Hoe is het weer? (How is the weather?) ← very common alternative",
        "Wat is de weersvoorspelling? (What is the weather forecast?)",
        "Is het warm buiten? (Is it warm outside?)",
        "Regent het? (Is it raining?)",
      ]},
      { rule: "Het kompas — compass directions", examples: [
        "het noorden [HON-duh-run] — the north",
        "het zuiden [ZOW-dun] — the south",
        "het oosten [OHS-tun] — the east",
        "het westen [VES-tun] — the west",
        "noordelijk — northern · zuidelijk — southern",
        "oostelijk — eastern · westelijk — western",
        "In het noorden van België regent het. (In the north of Belgium it is raining.)",
      ]},
      { rule: "Weather-related places and words", examples: [
        "de grens [duh khrens] — the border",
        "de kust [duh kust] — the coast (already known!)",
        "de vakantie [duh fah-KANT-see] — the holiday / vacation",
        "Op vakantie gaan = to go on holiday",
        "Aan de kust is het winderig. (At the coast it is windy.)",
        "Aan de grens met Frankrijk... (At the border with France...)",
      ]},
    ],
    memory: "🧠 Two patterns: action → Het + verb (het regent, het waait). State → Het is + adjective (het is bewolkt). Exception: de zon schijnt — the sun has its own subject.",
    examples: [
      { nl: "Welk weer is het vandaag?", en: "What is the weather like today?" },
      { nl: "Het regent en het is koud.", en: "It is raining and it is cold." },
      { nl: "In het westen waait het hard.", en: "In the west it is blowing hard." },
      { nl: "De zon schijnt aan de kust.", en: "The sun is shining at the coast." },
      { nl: "Het vriest vannacht.", en: "It is freezing tonight." },
    ],
    practice: [
      { role: "A", dutch: "Welk weer is het?", english: "What is the weather like?" },
      { role: "B", dutch: "Het is ___. / Het ___t. / De zon schijnt.", english: "It is ___. / It is ___ing. / The sun is shining." },
      { role: "A", dutch: "Regent het vandaag?", english: "Is it raining today?" },
      { role: "B", dutch: "Ja, het regent. / Nee, de zon schijnt!", english: "Yes, it is raining. / No, the sun is shining!" },
      { role: "A", dutch: "Hoe is het weer in het noorden?", english: "How is the weather in the north?" },
      { role: "B", dutch: "In het noorden is het bewolkt en koud.", english: "In the north it is cloudy and cold." },
      { role: "A", dutch: "Is het warm aan de kust?", english: "Is it warm at the coast?" },
      { role: "B", dutch: "Ja, de zon schijnt en het is warm! / Nee, het waait hard.", english: "Yes, the sun is shining and it is warm! / No, it is blowing hard." },
      { role: "A", dutch: "Gaan jullie op vakantie naar de kust?", english: "Are you going on holiday to the coast?" },
      { role: "B", dutch: "Ja! Als het niet regent... (If it doesn't rain...)", english: "Yes! If it doesn't rain..." },
    ],
  },

  // ─── LEERPAD 4B ────────────────────────────────────────────────────────────
  {
    id: "lp4b",
    tag: "LEERPAD 4B",
    title: "Wanneer is de winkel open? — When is the shop open?",
    difficulty: "easy",
    shortcut: "Open/gesloten + openingsuren. 'Wachten op' = to wait FOR (not on). 'Op welk spoor?' for trains.",
    explanation: "Leerpad 4B is practical everyday language: shops, timetables, supermarkets, trains. You learn to ask about opening hours, navigate a supermarket, and understand train platform information. Many of these words you'll use every week.",
    patterns: [
      { rule: "Winkel en openingsuren — shops and opening hours", examples: [
        "de winkel [duh VIN-kul] — the shop",
        "de supermarkt — the supermarket",
        "de bibliotheek [duh bib-lee-oh-TAYK] — the library",
        "de openingsuren [duh OH-puh-nings-uu-run] — the opening hours",
        "de dienstregeling [duh DEENST-ray-khuh-ling] — the timetable / schedule",
        "open — open · gesloten [khuh-SLOH-tun] — closed",
        "Wanneer is de winkel open? (When is the shop open?)",
        "De winkel is gesloten op zondag. (The shop is closed on Sunday.)",
      ]},
      { rule: "Winkelen — shopping vocabulary", examples: [
        "winkelen [VIN-kuh-lun] — to go shopping (separable: ik winkel, jij winkelt)",
        "Ga je mee winkelen? (Are you coming shopping?) ← LP4C key question",
        "Ik winkel in de supermarkt. (I shop at the supermarket.)",
        "de boodschappen [duh BOHT-skhap-pun] — the groceries",
        "de boodschappentas — the grocery bag / shopping bag",
        "Ik doe de boodschappen. (I do the grocery shopping.)",
        "de kassa [duh KAS-sah] — the checkout / till",
        "Ik betaal aan de kassa. (I pay at the checkout.)",
      ]},
      { rule: "Betalen en wachten — paying and waiting", examples: [
        "betalen [buh-TAH-lun] — to pay",
        "Ik betaal met de kaart / met cash. (I pay by card / with cash.)",
        "wachten [VAKH-tun] — to wait",
        "wachten op = to wait FOR (not 'on' — different from English!)",
        "Ik wacht op de trein. (I am waiting for the train.)",
        "Ik wacht op de winkel. (I am waiting for the shop [to open].)",
        "Hoe lang moet ik wachten? (How long do I have to wait?)",
      ]},
      { rule: "De trein — train platform vocabulary", examples: [
        "het spoor [huht spohr] — the (railway) track / platform",
        "Op welk spoor vertrekt de trein? (On which track does the train depart?)",
        "De trein vertrekt op spoor 7. (The train departs on platform 7.)",
        "vertrekken — to depart · aankomen — to arrive",
        "de afspraak [duh AF-spraak] — the appointment (also: arranged meeting)",
        "Ik heb een afspraak om drie uur. (I have an appointment at three o'clock.)",
      ]},
      { rule: "Herhalen — repetition vocabulary (from your course!)", examples: [
        "de herhaling [duh her-HAH-ling] — the repetition / revision",
        "herhalen — to repeat (ik herhaal, jij herhaalt)",
        "Kan je dat herhalen? (Can you repeat that?)",
        "de vacature [duh fah-kah-TUU-ruh] — the job vacancy",
        "Er is een vacature bij de supermarkt. (There is a vacancy at the supermarket.)",
      ]},
    ],
    memory: "🧠 'Wachten op' = wait FOR — the op surprises English speakers. Same structure as 'wachten op de bus' (waiting for the bus) — op always goes with wachten.",
    examples: [
      { nl: "Wanneer is de supermarkt open?", en: "When is the supermarket open?" },
      { nl: "De winkel is gesloten op zondag.", en: "The shop is closed on Sunday." },
      { nl: "Ik betaal aan de kassa met de kaart.", en: "I pay at the checkout by card." },
      { nl: "Op welk spoor vertrekt de trein naar Brussel?", en: "On which track does the train to Brussels depart?" },
      { nl: "Ik wacht op de trein op spoor 3.", en: "I am waiting for the train on platform 3." },
      { nl: "Ik heb een afspraak bij de dokter om half tien.", en: "I have a doctor's appointment at 9:30." },
    ],
    practice: [
      { role: "A", dutch: "Wanneer is de bibliotheek open?", english: "When is the library open?" },
      { role: "B", dutch: "De bibliotheek is open van ___ tot ___ uur.", english: "The library is open from ___ to ___ o'clock." },
      { role: "A", dutch: "Is de supermarkt open op zondag?", english: "Is the supermarket open on Sunday?" },
      { role: "B", dutch: "Nee, de supermarkt is gesloten op zondag.", english: "No, the supermarket is closed on Sunday." },
      { role: "A", dutch: "Op welk spoor vertrekt de trein?", english: "On which platform does the train depart?" },
      { role: "B", dutch: "De trein vertrekt op spoor ___.", english: "The train departs on platform ___." },
      { role: "A", dutch: "Hoe betaal jij — met de kaart of met cash?", english: "How do you pay — by card or with cash?" },
      { role: "B", dutch: "Ik betaal altijd met de kaart. / Ik betaal liever met cash.", english: "I always pay by card. / I prefer to pay with cash." },
      { role: "A", dutch: "Wacht jij lang op de bus?", english: "Do you wait long for the bus?" },
      { role: "B", dutch: "Nee, ik wacht maar vijf minuten. / Ja, soms een kwartier!", english: "No, I only wait five minutes. / Yes, sometimes a quarter hour!" },
    ],
  },

  // ─── LEERPAD 4C ────────────────────────────────────────────────────────────
  {
    id: "lp4c",
    tag: "LEERPAD 4C",
    title: "Ga je mee winkelen? — Are you coming shopping?",
    difficulty: "easy",
    shortcut: "Fruit and veg follow the same de/het rules as all nouns — most are de-words. Plural forms follow the spelling rules you already know.",
    explanation: "Leerpad 4C brings the shopping invitation into the food world. You learn fruit and vegetable vocabulary, how to talk about buying them, and quantities. A good test of whether your plural spelling rules and de/het knowledge are sticking.",
    patterns: [
      { rule: "Fruit — de-words (singular → plural)", examples: [
        "de sinaasappel [dee sin-aas-AP-pul] → de sinaasappels — orange / oranges",
        "de appel → de appels — apple / apples",
        "de peer → de peren — pear / pears ← long ee stays long: pe-ren",
        "de kers → de kersen — cherry / cherries",
        "de aardbei [duh AART-bay] → de aardbeien — strawberry / strawberries",
        "de banaan → de bananen — banana / bananas ← long aa stays long: ba-na-nen",
        "de druif [duh drowf] → de druiven — grape / grapes ← f → v rule!",
        "de ananas → de ananassen — pineapple / pineapples",
        "de watermeloen → de watermeloenen — watermelon / watermelons",
      ]},
      { rule: "Groenten — vegetables (also de-words)", examples: [
        "de wortel [duh VOR-tul] → de wortels — carrot / carrots",
        "de aardappel [duh AART-ap-pul] → de aardappels — potato / potatoes",
        "de tomaat [duh toh-MAAT] → de tomaten — tomato / tomatoes ← long aa stays long: to-ma-ten",
        "↳ 'aardappel' = earth apple! aard = earth, appel = apple",
      ]},
      { rule: "Useful shopping phrases for the market", examples: [
        "Heeft u ___? / Hebt u ___? (Do you have ___?) ← formal, to a shopkeeper",
        "Mag ik ___ kilo ___? (May I have ___ kilo of ___?)",
        "Een kilo sinaasappels, alsjeblieft. (A kilo of oranges, please.)",
        "Een tros bananen, alsjeblieft. (A bunch of bananas, please.)",
        "Een tros druiven, alsjeblieft. (A bunch of grapes, please.)",
        "Hoe-veel kosten de aardbeien? (How much do the strawberries cost?)",
        "Ze zijn te duur! / Dat is een koopje! (Too expensive! / That's a bargain!)",
      ]},
      { rule: "De tros — bunch (bananas and grapes)", examples: [
        "de tros [duh tros] — the bunch / cluster",
        "een tros bananen — a bunch of bananas",
        "een tros druiven — a bunch of grapes",
        "↳ Use 'tros' specifically for things that grow in clusters",
      ]},
      { rule: "Ga je mee winkelen? — linking back to LP3C", examples: [
        "Ga je mee winkelen? (Are you coming shopping?)",
        "Ga je mee naar de markt? (Are you coming to the market?)",
        "Ga je mee naar de supermarkt? (Are you coming to the supermarket?)",
        "Ik moet nog boodschappen doen. (I still have to do the grocery shopping.)",
        "Wat staat er op de boodschappenlijst? (What is on the shopping list?)",
      ]},
    ],
    memory: "🧠 Most fruit and veg = de-words. For plurals, apply the rules you know: druif → druiven (f→v), tomaat → tomaten (long aa open syllable), banaan → bananen (same), peer → peren (same).",
    examples: [
      { nl: "Ga je mee winkelen naar de markt?", en: "Are you coming shopping to the market?" },
      { nl: "Een kilo aardappels en een tros bananen, alsjeblieft.", en: "A kilo of potatoes and a bunch of bananas, please." },
      { nl: "Hoeveel kosten de aardbeien?", en: "How much do the strawberries cost?" },
      { nl: "De druiven zijn te duur. Ik neem liever een appel.", en: "The grapes are too expensive. I'd rather take an apple." },
      { nl: "Ik moet nog boodschappen doen in de supermarkt.", en: "I still have to do the grocery shopping at the supermarket." },
    ],
    practice: [
      { role: "A", dutch: "Ga je mee winkelen?", english: "Are you coming shopping?" },
      { role: "B", dutch: "Ja, graag! Naar de markt of naar de supermarkt?", english: "Yes please! To the market or to the supermarket?" },
      { role: "A", dutch: "Naar de markt. Ik wil fruit kopen.", english: "To the market. I want to buy fruit." },
      { role: "B", dutch: "Goed idee! Wat staat er op de boodschappenlijst?", english: "Good idea! What is on the shopping list?" },
      { role: "A", dutch: "Aardbeien, bananen en een tros druiven.", english: "Strawberries, bananas and a bunch of grapes." },
      { role: "B", dutch: "En groenten? Aardappels en wortels?", english: "And vegetables? Potatoes and carrots?" },
      { role: "A", dutch: "Ja! Hoeveel kosten de tomaten?", english: "Yes! How much do the tomatoes cost?" },
      { role: "B", dutch: "Twee euro per kilo. Dat is een koopje!", english: "Two euro per kilo. That's a bargain!" },
      { role: "A", dutch: "Mag ik een kilo tomaten, alsjeblieft?", english: "May I have a kilo of tomatoes, please?" },
    ],
  },
  {
    id: "articles",
    tag: "GRAMMAR · ARTICLES",
    title: "de vs. het — The #1 Headache",
    difficulty: "hard",
    shortcut: "Default to 'de'. You'll be right ~75% of the time.",
    explanation: "Every Dutch noun is either a 'de-word' or a 'het-word'. There's no perfect logic — but there ARE patterns.",
    patterns: [
      { rule: "ALL plurals → de", examples: ["de huizen (houses)", "de mensen (people)", "de kinderen (children)"] },
      { rule: "People & professions → de", examples: ["de man", "de vrouw", "de dokter", "de leraar"] },
      { rule: "Most words ending -ing, -heid, -schap → de", examples: ["de vergadering", "de vrijheid", "de vriendschap"] },
      { rule: "Diminutives (-je, -tje) → ALWAYS het", examples: ["het huisje", "het meisje", "het biertje ✓"] },
      { rule: "Words for young creatures → het", examples: ["het kind", "het kuiken", "het lam"] },
      { rule: "Languages & sports → het", examples: ["het Nederlands", "het voetbal"] },
    ],
    memory: "🧠 Think of it like Linux file permissions — learn the exceptions, default to the safe value (de).",
    examples: [
      { nl: "de auto / het huis", en: "the car / the house" },
      { nl: "een auto / een huis", en: "a car / a house (indefinite = always 'een')" },
    ],
    practice: [
      { role: "A", dutch: "De of het? → 'huis'", english: "De or het? → 'house'" },
      { role: "B", dutch: "het huis ✓ (het-word)", english: "the house" },
      { role: "A", dutch: "De of het? → 'auto'", english: "De or het? → 'car'" },
      { role: "B", dutch: "de auto ✓ (de-word)", english: "the car" },
      { role: "A", dutch: "De of het? → 'biertje'", english: "De or het? → 'beer (diminutive)'" },
      { role: "B", dutch: "het biertje ✓ (ALL diminutives = het)", english: "the beer" },
      { role: "A", dutch: "De of het? → 'kinderen'", english: "De or het? → 'children'" },
      { role: "B", dutch: "de kinderen ✓ (ALL plurals = de)", english: "the children" },
    ],
  },
  {
    id: "wordorder",
    tag: "GRAMMAR · WORD ORDER",
    title: "SOV — Verb Goes Last (in subclauses)",
    difficulty: "medium",
    shortcut: "Main clause = SVO like English. Subclause = verb kicks to the END.",
    explanation: "Dutch is SVO in main clauses but SOV in subordinate clauses. This trips everyone up.",
    patterns: [
      { rule: "Main clause: Subject → Verb → Object", examples: ["Ik drink koffie.", "Hij werkt thuis."] },
      { rule: "Yes/No question: flip S and V", examples: ["Drink jij koffie?", "Werkt hij thuis?"] },
      { rule: "Subclause (omdat, dat, als...): verb goes LAST", examples: ["...omdat ik koffie drink.", "...dat hij thuis werkt."] },
      { rule: "Two verbs in subclause: infinitive comes last", examples: ["...omdat ik koffie wil drinken.", "...dat hij niet kan werken."] },
    ],
    memory: "🧠 Subclause = function call — you stack verbs at the end like arguments: subject + [modal] + [infinitive].",
    examples: [
      { nl: "Ik ga naar huis omdat ik moe ben.", en: "I'm going home because I'm tired." },
      { nl: "Hij zegt dat hij niet kan komen.", en: "He says that he can't come." },
    ],
    practice: [
      { role: "A", dutch: "Waarom ga je naar huis?", english: "Why are you going home?" },
      { role: "B", dutch: "Ik ga naar huis omdat ik moe ben.", english: "I'm going home because I'm tired." },
      { role: "A", dutch: "Waarom leer je Nederlands?", english: "Why are you learning Dutch?" },
      { role: "B", dutch: "Ik leer Nederlands omdat ik in België woon.", english: "I'm learning Dutch because I live in Belgium." },
    ],
  },
  {
    id: "negation",
    tag: "GRAMMAR · NEGATION",
    title: "niet vs. geen — Two Ways to Say No",
    difficulty: "easy",
    shortcut: "'geen' replaces 'een' or no article. 'niet' negates everything else.",
    explanation: "Dutch has two negation words. The rule is simple once you see the pattern.",
    patterns: [
      { rule: "geen = negates nouns (replaces een/no article)", examples: ["Ik heb geen auto.", "Ik heb geen tijd."] },
      { rule: "niet = negates verbs, adjectives, adverbs", examples: ["Ik werk niet.", "Het is niet goed."] },
      { rule: "niet = negates specific nouns with 'de/het'", examples: ["Ik heb de auto niet. (I don't have THE car.)"] },
      { rule: "niet comes at END before separable verb parts", examples: ["Ik ga niet mee."] },
    ],
    memory: "🧠 geen = 'no [thing]' (/dev/null for nouns). niet = toggle switch for everything else.",
    examples: [
      { nl: "Ik drink geen koffie.", en: "I don't drink coffee. (geen = no article)" },
      { nl: "Ik drink de koffie niet.", en: "I'm not drinking the coffee. (the specific one)" },
    ],
    practice: [
      { role: "A", dutch: "Heb jij een auto?", english: "Do you have a car?" },
      { role: "B", dutch: "Nee, ik heb geen auto.", english: "No, I have no car." },
      { role: "A", dutch: "Werk jij vandaag?", english: "Are you working today?" },
      { role: "B", dutch: "Nee, ik werk vandaag niet.", english: "No, I'm not working today." },
    ],
  },
  {
    id: "adjectives",
    tag: "GRAMMAR · ADJECTIVES",
    title: "Adjective Endings — The -e Rule",
    difficulty: "medium",
    shortcut: "Add -e to almost every adjective. The only exception: het-word + indefinite (een).",
    explanation: "Dutch adjectives inflect. One clean rule covers 90% of cases.",
    patterns: [
      { rule: "de-word: always add -e", examples: ["de grote auto", "een grote auto"] },
      { rule: "het-word + definite (het/dit/dat): add -e", examples: ["het grote huis", "dat oude gebouw"] },
      { rule: "het-word + indefinite (een): NO -e ← the exception!", examples: ["een groot huis ✓ (NOT grote)", "een oud gebouw ✓"] },
      { rule: "Predicate adjective (after zijn): NO ending ever", examples: ["De auto is groot.", "Het huis is oud."] },
    ],
    memory: "🧠 One exception: 'een [het-word]' = no -e. Everything else gets -e. Default-deny firewall with one allow rule.",
    examples: [
      { nl: "een groot huis / het grote huis", en: "a big house / the big house" },
      { nl: "een grote auto / de grote auto", en: "a big car / the big car" },
    ],
    practice: [
      { role: "A", dutch: "Groot of grote? → 'een ___ huis'", english: "Groot or grote? → 'a ___ house'" },
      { role: "B", dutch: "een groot huis ✓ (het-word + een = no -e)", english: "a big house" },
      { role: "A", dutch: "Groot of grote? → 'de ___ auto'", english: "Groot or grote? → 'the ___ car'" },
      { role: "B", dutch: "de grote auto ✓ (de-word = always -e)", english: "the big car" },
    ],
  },
  {
    id: "verbtenses",
    tag: "GRAMMAR · PAST TENSE",
    title: "Past Tense — Only 2 You Really Need",
    difficulty: "medium",
    shortcut: "For speaking: use 'hebben/zijn + past participle'. Forget the simple past for now.",
    explanation: "In spoken Belgian Dutch, people almost always use the perfect tense. Learn that first.",
    patterns: [
      { rule: "Perfect = hebben/zijn + ge-[verb stem]-d/t", examples: ["Ik heb gewerkt.", "Ik heb gegeten."] },
      { rule: "'t kofschip rule — stem + t if last letter in: t,k,f,s,ch,p", examples: ["werken → gewerkt", "maken → gemaakt"] },
      { rule: "All other verbs → stem + d", examples: ["leven → geleefd", "reizen → gereisd"] },
      { rule: "Movement + state verbs use ZIJN", examples: ["Ik ben gegaan.", "Ik ben gevallen.", "Ik ben geweest."] },
      { rule: "Top irregular past participles", examples: ["zijn→geweest", "hebben→gehad", "gaan→gegaan", "komen→gekomen", "zien→gezien"] },
    ],
    memory: "🧠 Three mnemonics for the same rule — pick whichever sticks: '**t kofschip**' (Dutch), '**'t fokschaap**' (Dutch alternative), or '**soft ketchup**' (English — easiest to pronounce). All contain the same letters: t, k, f, s, ch, p. If the verb stem ends in one of those, the past participle gets -t. Everything else gets -d.",
    examples: [
      { nl: "Ik heb gisteren gewerkt.", en: "I worked yesterday." },
      { nl: "Ze zijn naar Brussel gegaan.", en: "They went to Brussels." },
    ],
    practice: [
      { role: "A", dutch: "Wat heb jij gisteren gedaan?", english: "What did you do yesterday?" },
      { role: "B", dutch: "Ik heb gewerkt. / Ik ben naar ___ gegaan.", english: "I worked. / I went to ___." },
      { role: "A", dutch: "Ben jij al in Brussel geweest?", english: "Have you already been to Brussels?" },
      { role: "B", dutch: "Ja, ik ben er geweest. / Nee, nog niet.", english: "Yes, I've been there. / No, not yet." },
    ],
  },
  {
    id: "modal",
    tag: "GRAMMAR · MODALS",
    title: "The Power 5 Modal Verbs",
    difficulty: "easy",
    shortcut: "Modal + infinitive at end. No 'te'. No conjugation on the infinitive.",
    explanation: "Modals are your workhorses. Learn their conjugations and you can express almost anything.",
    patterns: [
      { rule: "kunnen (can)", examples: ["Ik kan, jij kunt/kan, hij kan, wij kunnen"] },
      { rule: "willen (want to)", examples: ["Ik wil, jij wilt/wil, hij wil, wij willen"] },
      { rule: "moeten (must / have to)", examples: ["Ik moet, jij moet, hij moet, wij moeten"] },
      { rule: "mogen (may / allowed to)", examples: ["Ik mag, jij mag, hij mag, wij mogen"] },
      { rule: "zullen (will / shall)", examples: ["Ik zal, jij zal/zult, hij zal, wij zullen"] },
    ],
    memory: "🧠 Modal verbs = pipes in bash. Modal sets the mode, infinitive is the command: ik wil | werken.",
    examples: [
      { nl: "Ik kan Nederlands spreken.", en: "I can speak Dutch." },
      { nl: "Je moet dat niet doen.", en: "You mustn't do that." },
      { nl: "Mag ik even storen?", en: "May I disturb you for a moment?" },
    ],
    practice: [
      { role: "A", dutch: "Kan jij goed koken?", english: "Can you cook well?" },
      { role: "B", dutch: "Ja, ik kan goed koken. / Nee, ik kan niet goed koken.", english: "Yes, I can cook well. / No, I can't cook well." },
      { role: "A", dutch: "Mag ik even de deur opendoen?", english: "May I open the door for a moment?" },
      { role: "B", dutch: "Ja, natuurlijk! / Nee, liever niet.", english: "Yes, of course! / No, I'd rather not." },
    ],
  },
  {
    id: "separable",
    tag: "GRAMMAR · SEPARABLE VERBS",
    title: "Verbs That Split Apart",
    difficulty: "hard",
    shortcut: "The prefix detaches and jumps to the END of the main clause.",
    explanation: "Dutch compound verbs separate in main clauses — the prefix flies to the end. In subclauses, they stay together.",
    patterns: [
      { rule: "Main clause: prefix → end", examples: ["aankomen → Ik kom morgen aan.", "opbellen → Ik bel je op."] },
      { rule: "Subclause: prefix stays attached", examples: ["...omdat ik morgen aankom.", "...dat ik je opbel."] },
      { rule: "Past participle: ge- goes BETWEEN prefix and stem", examples: ["aankomen → aangekomen", "opbellen → opgebeld"] },
      { rule: "Common separable prefixes", examples: ["aan-, op-, uit-, mee-, af-, in-, door-, terug-"] },
    ],
    memory: "🧠 The prefix is a git subcommand that gets pushed to the end: 'ik bel [stuff happens] op'.",
    examples: [
      { nl: "Ik bel je morgen op.", en: "I'll call you tomorrow." },
      { nl: "Hij is al aangekomen.", en: "He has already arrived." },
    ],
    practice: [
      { role: "A", dutch: "Wanneer kom jij aan?", english: "When do you arrive?" },
      { role: "B", dutch: "Ik kom om ___ uur aan.", english: "I arrive at ___ o'clock." },
      { role: "A", dutch: "Bel jij mij op?", english: "Will you call me?" },
      { role: "B", dutch: "Ja, ik bel jou vanavond op.", english: "Yes, I'll call you this evening." },
    ],
  },
  {
    id: "diminutives",
    tag: "GRAMMAR · DIMINUTIVES",
    title: "The -je Suffix — Belgians Use It Constantly",
    difficulty: "easy",
    shortcut: "Add -je to almost any noun. It softens requests and makes speech friendlier.",
    explanation: "Diminutives aren't just for small things — they soften requests and make you sound naturally Belgian.",
    patterns: [
      { rule: "Basic: add -je", examples: ["huis → huisje", "bier → biertje", "koffie → koffietje"] },
      { rule: "After n,l,r,ng,um: add -etje", examples: ["baan → baantje", "bal → balletje"] },
      { rule: "Diminutives are ALWAYS het-words", examples: ["het biertje, het koffietje, het huisje"] },
      { rule: "Used to soften requests", examples: ["Een koffietje, alsjeblieft.", "Nog een pintje?"] },
    ],
    memory: "🧠 -je = sudo --polite. Doesn't change the command, just makes it friendlier.",
    examples: [
      { nl: "Een biertje, graag!", en: "A beer, please!" },
      { nl: "Wacht even een momentje.", en: "Just wait a moment." },
    ],
    practice: [
      { role: "A", dutch: "Wil jij een koffie of een thee?", english: "Do you want a coffee or a tea?" },
      { role: "B", dutch: "Een koffietje, alsjeblieft!", english: "A coffee, please!" },
      { role: "A", dutch: "Nog een pintje?", english: "Another beer?" },
      { role: "B", dutch: "Ja, graag! / Nee, dank je.", english: "Yes please! / No thank you." },
    ],
  },
  {
    id: "erword",
    tag: "GRAMMAR · ER",
    title: "The Word 'er' — Small but Everywhere",
    difficulty: "hard",
    shortcut: "Start with 'er is/zijn'. For the rest, learn by ear.",
    explanation: "'er' has 4 uses. Start with 'er is/zijn' and 'er + preposition' — those cover most cases.",
    patterns: [
      { rule: "er is / er zijn = there is / there are", examples: ["Er is een probleem.", "Er zijn veel mensen."] },
      { rule: "er + preposition replaces 'it' for things", examples: ["Ik denk eraan. (I think about it.)", "Hij wacht erop. (He's waiting for it.)"] },
      { rule: "er = 'there' (location)", examples: ["Ik ben er geweest. (I've been there.)", "Ga er naartoe."] },
      { rule: "er + number = partitive", examples: ["Ik heb er drie. (I have three of them.)"] },
    ],
    memory: "🧠 'er is/zijn' is your go-to. For the rest, notice it when you hear it — pattern recognition beats rote learning.",
    examples: [
      { nl: "Er is geen probleem.", en: "There's no problem." },
      { nl: "Ik heb er geen tijd voor.", en: "I have no time for it." },
    ],
    practice: [
      { role: "A", dutch: "Is er een probleem?", english: "Is there a problem?" },
      { role: "B", dutch: "Nee, er is geen probleem. / Ja, er is een probleem.", english: "No, there's no problem. / Yes, there is a problem." },
      { role: "A", dutch: "Zijn er veel mensen op het feest?", english: "Are there many people at the party?" },
      { role: "B", dutch: "Ja, er zijn veel mensen. / Nee, er zijn niet veel mensen.", english: "Yes, there are many people. / No, there aren't many people." },
    ],
  },

  // ─── UITSPRAAK & SPELLING ──────────────────────────────────────────────────
  {
    id: "pron_vowels",
    tag: "UITSPRAAK · VOWELS",
    title: "Short vs Long Vowels — A·E·O·I",
    difficulty: "medium",
    shortcut: "One vowel in a closed syllable = SHORT. Two vowels or open syllable = LONG. The sound never changes — only the spelling.",
    explanation: "Dutch vowel length is completely systematic. A single vowel in a closed syllable (ending in a consonant) is short. A double vowel signals long, and a single vowel in an open syllable (ending in a vowel sound) is also long. This rule underpins both pronunciation AND plural spelling.",
    patterns: [
      { rule: "The open vs closed syllable rule — the foundation", examples: [
        "CLOSED syllable (vowel + consonant, no more vowel): SHORT sound",
        "  bom [short o] · man [short a] · bed [short e] · vis [short i]",
        "OPEN syllable (ends in a vowel sound): LONG sound",
        "  bo-men [long o] · ma-nen [long a] · be-nen [long e]",
        "DOUBLE vowel spelling = LONG sound",
        "  boom [long oo] · maan [long aa] · been [long ee]",
        "Key insight: boom and bomen have the SAME long 'o' sound — only the spelling changes!",
      ]},
      { rule: "A (short) vs AA (long)", examples: [
        "a (short): man [man], bad [bat], kat [kat], land [lant]",
        "aa (long): maan [maan], naam [naam], staat [staat], taal [taal]",
        "Open syllable: ma-nen [long a] — same sound as maan despite one 'a'",
      ]},
      { rule: "E (short) vs EE (long)", examples: [
        "e (short, stressed): bed [bet], mes [mes], les [les], set [set]",
        "e (unstressed): becomes a SCHWA — like 'uh'. de, een, je, me, even, morgen",
        "ee (long): been [bayn], week [vayk], meer [mayr], beer [bayr]",
        "Open syllable: be-nen [long e] — same sound as been",
      ]},
      { rule: "O (short) vs OO (long)", examples: [
        "o (short): bom [bom], bot [bot], rok [rok], god [khot]",
        "oo (long): boom [bohm], boot [boht], rood [roht], groot [khroht]",
        "Open syllable: bo-men [long o] — same sound as boom",
      ]},
      { rule: "I (short) vs IE (long)", examples: [
        "i (short): dit [dit], vis [fis], lip [lip], kin [kin]",
        "ie (long): bier [beer], hier [heer], niet [neet], brief [breef]",
        "Note: Dutch uses 'ie' for the long ee sound (no double 'ii')",
      ]},
    ],
    memory: "🧠 Think of a pipe: single vowel in a closed syllable = narrow pipe = short sound. Double vowel or open syllable = wide pipe = long sound. The sound never changes — only the spelling adjusts to signal it.",
    examples: [
      { nl: "man / maan", en: "short a / long aa — one letter difference, two sounds" },
      { nl: "bom / boom", en: "short o / long oo" },
      { nl: "bed / been", en: "short e / long ee" },
      { nl: "boom / bomen", en: "long oo / long o — same sound, simplified spelling" },
      { nl: "bom / bommen", en: "short o / short o — doubled m keeps it short" },
    ],
    practice: [
      { role: "A", dutch: "Lang of kort? → 'man'", english: "Long or short? → 'man'" },
      { role: "B", dutch: "Kort — één klinker in een gesloten lettergreep. [man]", english: "Short — one vowel in a closed syllable." },
      { role: "A", dutch: "Lang of kort? → 'maan'", english: "Long or short? → 'maan'" },
      { role: "B", dutch: "Lang — dubbele klinker. [maan]", english: "Long — double vowel." },
      { role: "A", dutch: "Hoe klinkt de 'o' in 'bomen'?", english: "How does the 'o' sound in 'bomen'?" },
      { role: "B", dutch: "Lang — net als 'boom'. Open lettergreep: bo-men.", english: "Long — same as 'boom'. Open syllable: bo-men." },
    ],
  },
  {
    id: "pron_special",
    tag: "UITSPRAAK · SPECIAL VOWELS",
    title: "Special Vowels — EU·IJ/EI·UI·OE·IE",
    difficulty: "medium",
    shortcut: "OE = English 'oo'. IE = English 'ee'. IJ/EI = English 'eye'. EU = French 'eu'. UI = the hard one.",
    explanation: "Dutch has five vowel combinations that don't exist in English. OE and IE are the easiest. IJ and EI are identical in sound. EU and UI require new mouth positions — but with practice they click into place.",
    patterns: [
      { rule: "IE — long 'ee' sound (like 'see')", examples: [
        "Mouth: lips slightly spread, tongue high and forward",
        "bier [beer] (beer) · hier [heer] (here) · niet [neet] (not)",
        "brief [breef] (letter) · zien [zeen] (to see) · vier [feer] (four)",
        "⚠ Don't confuse IE with IJ: ie = 'ee', ij = 'eye'",
      ]},
      { rule: "OE — long 'oo' sound (like 'food')", examples: [
        "Mouth: lips rounded and pushed forward",
        "doen [doon] (to do) · goed [khoot] (good) · boek [book] (book)",
        "groep [khroep] (group) · moeten [mooten] (must) · schoen [skhoon] (shoe)",
        "This is one of the easier Dutch sounds — just say 'oo' as in 'food'",
      ]},
      { rule: "IJ / EI — 'eye' sound (identical pronunciation)", examples: [
        "Mouth: starts open like 'ah', glides to 'ee' position",
        "zijn [zayn] (to be) · wijn [vayn] (wine) · tijd [tayd] (time)",
        "klein [klayn] (small) · trein [trayn] (train) · mei [may] (May)",
        "IJ and EI are pronounced IDENTICALLY — only spelling differs",
        "Tip: 'ij' is more common mid-word; 'ei' appears in some common words (trein, klein, mei)",
      ]},
      { rule: "EU — rounded 'ee' (like French 'deux', German 'schön')", examples: [
        "Mouth: round your lips as if saying 'oo', but put your tongue in 'ee' position",
        "leuk [löök] (fun/nice) · deur [dör] (door) · neus [nös] (nose)",
        "euro [ö-ro] · nieuw [neew] (new) · reus [rös] (giant)",
        "Practice: say 'ee', hold it, then slowly round your lips without moving your tongue",
      ]},
      { rule: "UI — the hardest Dutch vowel", examples: [
        "Mouth: start with EU position, then glide toward 'ee' — lips start rounded, end spread",
        "huis [howss] (house) · uit [owt] (out) · buik [bowk] (belly)",
        "zuidelijk [zow-duh-luk] (southern) · tuin [town] (garden) · ruim [rowm] (spacious)",
        "It's often approximated as 'ow' by English speakers — close enough to be understood",
        "The phonetic guide [howss] is approximate — the real sound is rounder than English 'ow'",
      ]},
    ],
    memory: "🧠 Mouth journey for UI: start like EU (rounded, forward), glide to spread lips like IE. OE = just 'oo'. IE = just 'ee'. IJ/EI = just 'eye'. EU = 'oo' lips + 'ee' tongue.",
    examples: [
      { nl: "bier / boer / buur", en: "IE [beer] / OE [boor] / EU [bür] — three different vowels" },
      { nl: "zijn / zien", en: "IJ [zayn] / IE [zeen] — 'eye' vs 'ee'" },
      { nl: "huis / hoes", en: "UI [howss] / OE [hoos] — hear the difference" },
      { nl: "leuk / look", en: "EU [löök] / OE [look] — EU needs rounded lips" },
    ],
    practice: [
      { role: "A", dutch: "Hoe spreek je 'goed' uit?", english: "How do you pronounce 'goed'?" },
      { role: "B", dutch: "'goed' = [khoot] — OE klinkt als 'oo' in food", english: "'goed' = [khoot] — OE sounds like 'oo' in food" },
      { role: "A", dutch: "Wat is het verschil tussen 'zijn' en 'zien'?", english: "What's the difference between 'zijn' and 'zien'?" },
      { role: "B", dutch: "'zijn' = [zayn] (IJ = 'eye'). 'zien' = [zeen] (IE = 'ee').", english: "'zijn' = [zayn]. 'zien' = [zeen]." },
      { role: "A", dutch: "Hoe klinkt 'leuk'?", english: "How does 'leuk' sound?" },
      { role: "B", dutch: "[löök] — EU: lippen rond als 'oo', tong als 'ee'", english: "[löök] — EU: lips round like 'oo', tongue like 'ee'" },
    ],
  },
  {
    id: "pron_r",
    tag: "UITSPRAAK · VOWELS + R",
    title: "Vowels Before R — How R Changes the Sound",
    difficulty: "medium",
    shortcut: "The Belgian R is uvular (back of throat). Unstressed -er endings reduce to a soft 'uh'. Vowel + r combinations have their own fixed sounds.",
    explanation: "In Belgian Dutch the 'r' is produced at the back of the throat (uvular), not with the tongue tip. This is softer than the French R but more present than English. When vowels appear before R, they form fixed combinations that are worth learning as whole sounds.",
    patterns: [
      { rule: "The Belgian R — how to produce it", examples: [
        "Position: back of throat, like gargling very gently",
        "Softer than French R, more noticeable than English R",
        "In Belgian Dutch: gentler and less guttural than Dutch Netherlands R",
        "Practice word: 'rood' [roht] — the r is at the back, not the tongue tip",
      ]},
      { rule: "-aar — long aa + r", examples: [
        "jaar [yaar] (year) · maar [maar] (but) · haar [haar] (her/hair)",
        "naar [naar] (to/towards) · paar [paar] (pair/couple) · waar [vaar] (where/true)",
      ]},
      { rule: "-eer — long ee + r", examples: [
        "meer [mayr] (more/lake) · beer [bayr] (bear/beer) · peer [payr] (pear)",
        "keer [kayr] (time/turn) · leer [layr] (leather/learn) · weer [vayr] (weather/again)",
      ]},
      { rule: "-ier — long ie + r", examples: [
        "bier [beer] (beer) · hier [heer] (here) · vier [feer] (four)",
        "dier [deer] (animal) · papier [pah-peer] (paper)",
      ]},
      { rule: "-oor — long oo + r", examples: [
        "voor [fohr] (for/before) · door [dohr] (through/door) · oor [ohr] (ear)",
        "groot [khroht] — note: oo before t, not r here",
        "floor [flohr] · boor [bohr] (drill)",
      ]},
      { rule: "-er (unstressed suffix) — reduced to schwa", examples: [
        "When -er ends a word and is unstressed, it reduces to a soft 'uh':",
        "kamer [KAH-muh] (room) · water [VAH-tuh] (water) · dokter [DOK-tuh] (doctor)",
        "lekker [LEK-uh] (nice/tasty) · beter [BAY-tuh] (better)",
        "⚠ Don't pronounce the 'r' strongly here — it's nearly silent in natural speech",
      ]},
    ],
    memory: "🧠 The unstressed -er ending is the most important to get right — it's everywhere. Reduce it to 'uh'. For the vowel+r combinations, learn them as fixed sounds: -aar/-eer/-ier/-oor are each one distinct sound.",
    examples: [
      { nl: "kamer / dokter / lekker", en: "[KAH-muh] / [DOK-tuh] / [LEK-uh] — -er reduces to soft 'uh'" },
      { nl: "jaar / meer / bier / voor", en: "-aar / -eer / -ier / -oor — fixed vowel+R combinations" },
      { nl: "rood / regen / Roeselare", en: "R at start: back-of-throat, not tongue tip" },
    ],
    practice: [
      { role: "A", dutch: "Hoe spreek je 'kamer' uit?", english: "How do you pronounce 'kamer'?" },
      { role: "B", dutch: "[KAH-muh] — de -er is zacht, bijna stil", english: "[KAH-muh] — the -er is soft, almost silent" },
      { role: "A", dutch: "En 'lekker'?", english: "And 'lekker'?" },
      { role: "B", dutch: "[LEK-uh] — zelfde patroon. Geen harde R.", english: "[LEK-uh] — same pattern. No hard R." },
      { role: "A", dutch: "Hoe klinkt 'jaar'?", english: "How does 'jaar' sound?" },
      { role: "B", dutch: "[yaar] — lange aa + zachte R achterin de keel", english: "[yaar] — long aa + soft R at back of throat" },
    ],
  },
  {
    id: "pron_s",
    tag: "UITSPRAAK · 'S WORDS",
    title: "The 's- Construction — 's ochtends, 's avonds",
    difficulty: "easy",
    shortcut: "'s = a remnant of the old word 'des' (of the). Only used for time of day and a few place names. Always lowercase.",
    explanation: "You'll see and hear 's ochtends, 's middags, 's avonds and 's nachts constantly. The apostrophe 's looks strange but has a simple origin: it's what's left of the old Dutch genitive 'des' (meaning 'of the'). In modern Dutch this form only survives in these frozen expressions.",
    patterns: [
      { rule: "Origin — 'des' → 's", examples: [
        "Old Dutch: 'des ochtends' = 'of the morning' (genitive case)",
        "Modern Dutch: des → 's  (the 'de' dropped, apostrophe marks the omission)",
        "'s ochtends literally still means 'of the morning' → used to mean 'in the morning'",
        "This is a FROZEN form — you can't make new ones, just learn these fixed expressions",
      ]},
      { rule: "The four main time expressions", examples: [
        "'s ochtends — in the morning (roughly 6am–noon)",
        "'s middags — in the afternoon (roughly noon–6pm)",
        "'s avonds — in the evening (roughly 6pm–midnight)",
        "'s nachts — at night / in the night (midnight–6am)",
        "'s morgens — in the morning (alternative, slightly more formal than 's ochtends)",
      ]},
      { rule: "Pronunciation — the 's blends in", examples: [
        "The 's is a soft /s/ that blends into the following word",
        "'s ochtends → say 'sochtends' [sɔxtənts] with a gentle s at the start",
        "'s avonds → say 'savonds' [SAH-fonts]",
        "'s nachts → say 'snachts' [snakhts]",
        "The apostrophe just signals where the missing 'de' was — don't pause after it",
      ]},
      { rule: "Always lowercase — even at the start of a sentence", examples: [
        "'s Ochtends ga ik wandelen. ← WRONG",
        "'s ochtends ga ik wandelen. ← CORRECT (lowercase 's even at sentence start)",
        "Exception: in place names, 's is followed by a capital: 's-Hertogenbosch, 's-Gravenhage",
      ]},
      { rule: "Place names with 's-", examples: [
        "'s-Hertogenbosch = full name of Den Bosch (North Brabant)",
        "'s-Gravenhage = official name of Den Haag / The Hague",
        "Both use a capital after the hyphen even though 's itself is lowercase",
      ]},
    ],
    memory: "🧠 Think of 's as a contraction — like English 'it's' drops the 'i'. 'des' drops the 'de' and leaves 's. So 's ochtends = de[s] ochtends = of the morning = in the morning.",
    examples: [
      { nl: "'s ochtends drink ik koffie.", en: "In the morning I drink coffee." },
      { nl: "'s avonds ga ik graag wandelen.", en: "In the evening I like going for walks." },
      { nl: "'s middags eet ik een boterham.", en: "In the afternoon I eat a sandwich." },
      { nl: "'s nachts slaap ik goed.", en: "At night I sleep well." },
    ],
    practice: [
      { role: "A", dutch: "Wanneer drink jij koffie?", english: "When do you drink coffee?" },
      { role: "B", dutch: "'s ochtends drink ik altijd koffie.", english: "In the morning I always drink coffee." },
      { role: "A", dutch: "Wat doe jij 's avonds?", english: "What do you do in the evening?" },
      { role: "B", dutch: "'s avonds ___ ik graag ___.", english: "In the evening I like ___ing." },
      { role: "A", dutch: "Slaap jij goed 's nachts?", english: "Do you sleep well at night?" },
      { role: "B", dutch: "Ja, 's nachts slaap ik goed. / Nee, ik slaap niet goed 's nachts.", english: "Yes, I sleep well at night. / No, I don't sleep well at night." },
    ],
  },
  {
    id: "spelling_plural",
    tag: "SPELLING · PLURALS",
    title: "Singular → Plural — The Spelling Rules",
    difficulty: "medium",
    shortcut: "The sound never changes — only the spelling adjusts. Short stays short, long stays long.",
    explanation: "Dutch plural spelling follows directly from the open/closed syllable rule. The goal is always to preserve the original vowel sound. A short vowel needs a closed syllable (doubled consonant). A long vowel needs an open syllable (drop one vowel letter). The sound is your guide — if it sounds right, the spelling is probably right.",
    patterns: [
      { rule: "Rule 1 — Short vowel (1 vowel + 1 consonant): double the consonant + -en", examples: [
        "Why: adding -en would create an open syllable → vowel would go long → sounds wrong",
        "Solution: double the consonant to keep the syllable CLOSED and vowel SHORT",
        "bom → bom+m+en → bommen [short o stays short]",
        "man → man+n+en → mannen [short a stays short]",
        "bot → bot+t+en → botten [short o stays short]",
        "bed → bed+d+en → bedden [short e stays short]",
      ]},
      { rule: "Rule 2 — Long vowel (2 vowels + 1 consonant): drop one vowel + -en", examples: [
        "Why: the open syllable (bo-men) automatically makes the vowel long — no need for two letters",
        "Solution: drop one vowel — the spelling simplifies, but the SOUND stays LONG",
        "boom → bo+men → bomen [long o STAYS long — open syllable bo-]",
        "maan → ma+nen → manen [long a STAYS long — open syllable ma-]",
        "been → be+nen → benen [long ee STAYS long — open syllable be-]",
        "boot → bo+ten → boten [long o STAYS long — open syllable bo-]",
        "⚠ Common mistake: thinking 'bomen' has a short o because there's only one 'o'. It doesn't!",
      ]},
      { rule: "Rule 3 — Vowel + consonant cluster (2+ consonants): just add -en", examples: [
        "No changes needed — the cluster already keeps the syllable closed",
        "boek → boeken (oe + k = cluster)",
        "fiets → fietsen (ie + ts = cluster)",
        "hond → honden (on + d) — note: final d is kept in plural",
        "stoel → stoelen (oe + l)",
      ]},
      { rule: "Rule 4 — f → v before -en (voicing)", examples: [
        "In Dutch, 'f' at the end of a word becomes 'v' before a vowel suffix",
        "brief → brieven (f → v)",
        "wolf → wolven (f → v)",
        "dief → dieven (f → v)",
        "roof → roven (f → v)",
      ]},
      { rule: "Rule 5 — s → z before -en (voicing)", examples: [
        "Similarly, final 's' voices to 'z' before -en",
        "vaas → vazen (s → z)",
        "huis → huizen (s → z)",
        "roos → rozen (s → z)",
        "muis → muizen (s → z — mouse/mice!)",
      ]},
      { rule: "Rule 6 — Words ending -el, -er, -em, -en → add -s (not -en)", examples: [
        "tafel → tafels (table/tables)",
        "kamer → kamers (room/rooms)",
        "oven → ovens",
        "bezem → bezems (broom/brooms)",
        "Also: -aar, -eur, -ier, -or endings → add -s: dokter → dokters, chauffeur → chauffeurs",
      ]},
      { rule: "Rule 7 — Diminutives (-je) → add -s", examples: [
        "huisje → huisjes",
        "biertje → biertjes",
        "koffietje → koffietjes",
        "meisje → meisjes",
      ]},
      { rule: "Rule 8 — Foreign/international words → add -'s", examples: [
        "Used when word ends in: a, e, i, o, u, y",
        "auto → auto's · foto → foto's · café → café's",
        "taxi → taxi's · menu → menu's",
        "The apostrophe prevents confusion (autos would look like it has a long 'o')",
      ]},
    ],
    memory: "🧠 Say the plural out loud first. If the vowel sounds short → you need a doubled consonant. If it sounds long → open syllable does the work. Your ear is the spelling guide.",
    examples: [
      { nl: "man → mannen / maan → manen", en: "short a stays short / long a stays long — hear the difference!" },
      { nl: "bot → botten / boot → boten", en: "short o / long o — same principle" },
      { nl: "brief → brieven / vaas → vazen", en: "f→v / s→z voicing rules" },
      { nl: "tafel → tafels / auto → auto's", en: "-el→-s / foreign word→-'s" },
    ],
    practice: [
      { role: "A", dutch: "Meervoud van 'bom'?", english: "Plural of 'bom'?" },
      { role: "B", dutch: "bommen — korte o, dus dubbele m: bom+m+en", english: "bommen — short o, so double m" },
      { role: "A", dutch: "Meervoud van 'boom'?", english: "Plural of 'boom'?" },
      { role: "B", dutch: "bomen — lange o blijft lang in open lettergreep: bo-men", english: "bomen — long o stays long in open syllable: bo-men" },
      { role: "A", dutch: "Meervoud van 'brief'?", english: "Plural of 'brief'?" },
      { role: "B", dutch: "brieven — f wordt v voor -en", english: "brieven — f becomes v before -en" },
      { role: "A", dutch: "Meervoud van 'vaas'?", english: "Plural of 'vaas'?" },
      { role: "B", dutch: "vazen — s wordt z voor -en", english: "vazen — s becomes z before -en" },
      { role: "A", dutch: "Meervoud van 'auto'?", english: "Plural of 'auto'?" },
      { role: "B", dutch: "auto's — buitenlands woord dat eindigt op klinker", english: "auto's — foreign word ending in vowel" },
    ],
  },

  // ─── TESTS ────────────────────────────────────────────────────────────────
  {
    id: "test_lp1a",
    tag: "TEST · LP 1A",
    title: "Test — Leerpad 1A: Uit welk land kom jij?",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "What does 'Uit welk land kom jij?' mean?",
        options: ["Where do you live?", "What language do you speak?", "Where are you from?", "What is your name?"],
        answer: 2,
        explanation: "'Uit welk land kom jij?' = 'What country are you from?' Don't confuse with 'Waar woon jij?' = 'Where do you live?'"
      },
      {
        q: "How do you say 'My name is [name]' in Dutch?",
        options: ["Ik woon in ___.", "Ik kom uit ___.", "Mijn naam is ___.", "Ik spreek ___."],
        answer: 2,
        explanation: "'Mijn naam is ___' = 'My name is ___'. You can also say 'Ik heet ___' — both are natural."
      },
      {
        q: "'Ik woon in Roeselare' means:",
        options: ["I come from Roeselare", "I work in Roeselare", "I live in Roeselare", "I speak in Roeselare"],
        answer: 2,
        explanation: "'wonen' = to live/reside. 'Ik woon' = I live. Different from 'Ik kom uit' (I come from)."
      },
      {
        q: "How do you say 'I speak a little Dutch'?",
        options: ["Ik leer Nederlands.", "Ik spreek een beetje Nederlands.", "Ik kom uit Nederland.", "Ik woon in Nederland."],
        answer: 1,
        explanation: "'een beetje' = a little. A very useful phrase for the first lesson!"
      },
      {
        q: "'Aangenaam!' is used when:",
        options: ["Saying goodbye", "Answering the phone", "Meeting someone for the first time", "Asking for directions"],
        answer: 2,
        explanation: "'Aangenaam!' = 'Pleased to meet you!' from 'aangenaam kennis te maken'. Said when being introduced to someone."
      },
      {
        q: "Which verb means 'to live/reside'?",
        options: ["komen", "spreken", "heten", "wonen"],
        answer: 3,
        explanation: "'wonen' = to live/reside. Ik woon, jij woont, hij woont, wij wonen. Not to be confused with 'leven' (to be alive)."
      },
      {
        q: "Which question do you ask to find out someone's name?",
        options: ["Tot ziens!", "Hoe heet jij?", "Doei!", "Goedenacht!"],
        answer: 1,
        explanation: "'Hoe heet jij?' = 'What is your name?' You can also say 'Wat is jouw naam?' — both are natural. In formal situations: 'Wat is uw naam?'"
      },
      {
        q: "How do you formally ask someone's name?",
        options: ["Hoe heet jij?", "Wat is uw naam?", "Welke taal spreek jij?", "Waar woon jij?"],
        answer: 1,
        explanation: "'uw' is the formal 'your'. 'Wat is uw naam?' is used with strangers, elders, or in professional settings. 'Hoe heet jij?' is informal."
      },
    ],
  },
  {
    id: "test_lp1b",
    tag: "TEST · LP 1B",
    title: "Test — Leerpad 1B: Wat is jouw beroep?",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "What does 'Wat is jouw beroep?' mean?",
        options: ["Where do you work?", "What is your profession?", "Are you married?", "Do you have children?"],
        answer: 1,
        explanation: "'beroep' = profession/job. 'jouw' = your (informal). You can also ask 'Wat doe jij voor werk?'"
      },
      {
        q: "How do you say 'I work at school'?",
        options: ["Ik werk bij school.", "Ik werk aan school.", "Ik werk op school.", "Ik werk in school."],
        answer: 2,
        explanation: "'op school' is the fixed expression. Hospitals use 'in': 'in het ziekenhuis'. Companies use 'bij': 'bij [bedrijf]'."
      },
      {
        q: "'Ik ben met pensioen' means:",
        options: ["I am unemployed", "I am on holiday", "I work part-time", "I am retired"],
        answer: 3,
        explanation: "'met pensioen' = retired (literally 'with pension'). 'Ik ben werkloos' = I am unemployed."
      },
      {
        q: "Which means 'single' (not in a relationship)?",
        options: ["getrouwd", "verloofd", "gescheiden", "alleenstaand"],
        answer: 3,
        explanation: "'alleenstaand' = alone-standing = single. Literally describes someone 'standing alone'. Very descriptive!"
      },
      {
        q: "'Mijn vrouw is lerares' — what does the -es ending tell you?",
        options: ["She is retired", "She teaches languages", "She is a female teacher", "She works part-time"],
        answer: 2,
        explanation: "'-es' is a feminine suffix. 'lerares' = female teacher. 'leraar' = male teacher. Same pattern: 'verkoper' (m) / 'verkoopster' (f)."
      },
      {
        q: "'Ik ben gescheiden' means:",
        options: ["I am married", "I am engaged", "I am single", "I am divorced"],
        answer: 3,
        explanation: "'gescheiden' = divorced. From 'scheiden' (to separate). Soft 'g' at the start."
      },
      {
        q: "Which is correct for 'I work as an electrician'?",
        options: ["Ik doe elektricien.", "Ik werk als elektricien.", "Ik ga elektricien.", "Ik ben als elektricien."],
        answer: 1,
        explanation: "'Ik werk als [beroep]' = I work as a [profession]. You can also say 'Ik ben elektricien' — both are natural and common."
      },
      {
        q: "How do you ask about someone's partner's job?",
        options: ["Wat doet jouw partner?", "Wie is jouw partner?", "Waar woont jouw partner?", "Hoeveel verdient jouw partner?"],
        answer: 0,
        explanation: "'Wat doet jouw partner?' = 'What does your partner do?' Using 'doen' (to do) for profession questions is very natural."
      },
    ],
  },
  {
    id: "test_lp2",
    tag: "TEST · LP 2",
    title: "Test — Leerpad 2A + 2B: Kinderen & Kosten",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "'Hoeveel kinderen heb jij?' — why is it 'heb' and not 'hebt'?",
        options: ["'hebben' is irregular here", "Inversion: 'jij' after the verb drops the -t", "It's 1st person singular", "'hebt' is actually correct"],
        answer: 1,
        explanation: "When 'jij/je' comes AFTER the verb (inversion in questions), the -t drops. 'heb jij?' not 'hebt jij?'. Same rule: 'Ga je?' not 'Gaat je?'"
      },
      {
        q: "'Ik heb geen kinderen' means:",
        options: ["I have some children", "My children are not here", "I have no children", "I don't want children"],
        answer: 2,
        explanation: "'geen' negates nouns. 'Ik heb geen [noun]' = I have no [noun]. 'geen' replaces 'een' (a/an) in negation."
      },
      {
        q: "How do you say 'My oldest is twelve years old'?",
        options: ["Mijn jongste is twaalf jaar.", "Mijn oudste is twaalf jaar.", "Mijn kind heeft twaalf jaar.", "Twaalf jaar heeft mijn oudste."],
        answer: 1,
        explanation: "'oudste' = oldest. 'jongste' = youngest. Dutch uses 'zijn' for age: 'is twaalf jaar', not 'heeft twaalf jaar'."
      },
      {
        q: "You're in a shop. How do you ask 'How much does it cost?'",
        options: ["Wat kost het?", "Hoeveel kost het?", "Both are correct.", "Hoe duur is het?"],
        answer: 2,
        explanation: "'Hoeveel kost het?' and 'Wat kost het?' are both natural and common. 'Hoe duur is het?' (how expensive is it?) is also used but less standard."
      },
      {
        q: "The price is too high. What do you say?",
        options: ["Dat is goedkoop!", "Dat is een koopje!", "Dat is redelijk.", "Dat is te duur!"],
        answer: 3,
        explanation: "'te duur' = too expensive. 'te' = too (as in excessively). 'goedkoop' = cheap. 'een koopje' = a bargain."
      },
      {
        q: "'Hoeveel kosten die?' — when do you use 'kosten' instead of 'kost'?",
        options: ["When talking about expensive things", "When asking politely", "When the subject is plural", "When in a formal shop"],
        answer: 2,
        explanation: "'kost' = singular (het boek kost...). 'kosten' = plural (die boeken kosten...). Match the verb to the subject, not the price."
      },
      {
        q: "'één' vs 'een' — what is the difference?",
        options: ["'één' is formal, 'een' is informal", "'één' = the number one (with accent), 'een' = the article a/an", "They are the same word", "'een' is only used before het-words"],
        answer: 1,
        explanation: "The accent marks on 'één' distinguish the number from the article. 'Ik heb één kind' (I have one child) vs 'Ik heb een kind' (I have a child)."
      },
      {
        q: "'Ik heb één broer en twee zussen' — what does this mean?",
        options: ["I have two brothers and one sister", "I have one brother and two sisters", "I am an only child", "I have three siblings"],
        answer: 1,
        explanation: "'broer' = brother. 'zus' (pl. 'zussen') = sister. 'één broer' = one brother. 'twee zussen' = two sisters."
      },
    ],
  },
  {
    id: "test_lp3ab",
    tag: "TEST · LP 3A+B",
    title: "Test — Leerpad 3A + 3B: Tijd & Leeftijd",
    type: "quiz",
    difficulty: "medium",
    questions: [
      {
        q: "'Het is half drie' — what time is it?",
        options: ["3:30", "3:15", "2:45", "2:30"],
        answer: 3,
        explanation: "This is the #1 Dutch time trap! 'half drie' = halfway TO three = 2:30. NOT half past two (that would be half twee = 1:30)."
      },
      {
        q: "How do you say 'quarter past ten'?",
        options: ["kwart voor tien", "half tien", "kwart over tien", "tien over kwart"],
        answer: 2,
        explanation: "'kwart over tien' = 10:15. 'kwart voor tien' = 9:45. Over = past. Voor = to/before."
      },
      {
        q: "'Het is kwart voor acht' — what time is it?",
        options: ["8:15", "8:45", "7:15", "7:45"],
        answer: 3,
        explanation: "'kwart voor acht' = quarter TO eight = 7:45. 'voor' means before — so quarter before eight."
      },
      {
        q: "It's 2:25. How do you say this in Dutch?",
        options: ["vijf voor half drie", "vijf over half twee", "tien voor half drie", "kwart voor half drie"],
        answer: 0,
        explanation: "2:25 = five minutes before 2:30 (half drie). Think: half drie = 2:30, so 2:25 = vijf voor half drie."
      },
      {
        q: "Which verb is used for age in Dutch?",
        options: ["hebben", "komen", "zijn", "wonen"],
        answer: 2,
        explanation: "Dutch uses 'zijn' for age: 'Ik BEN vijfendertig jaar.' Never 'ik heb 35 jaar' — that's a very common mistake!"
      },
      {
        q: "How do you say 'I am thirty-five years old'?",
        options: ["Ik heb vijfendertig jaar.", "Ik ga vijfendertig jaar.", "Ik ben vijfendertig jaar.", "Ik woon vijfendertig jaar."],
        answer: 2,
        explanation: "'Ik ben [number] jaar (oud).' The word 'oud' (old) is optional — 'Ik ben 35 jaar' is perfectly natural."
      },
      {
        q: "'Wanneer ben jij jarig?' means:",
        options: ["How old are you?", "In what year were you born?", "When is your birthday?", "Where were you born?"],
        answer: 2,
        explanation: "'jarig zijn' = to have your birthday. 'Wanneer ben jij jarig?' = When is your birthday? You can also say 'Wanneer is jouw verjaardag?'"
      },
      {
        q: "'Om hoe laat begint de les?' — what does 'om' signal?",
        options: ["It means 'about' (approximately)", "It introduces a specific time point", "It means 'until'", "It is a filler word"],
        answer: 1,
        explanation: "'Om + time' = at [specific time]. 'Om twee uur' = at two o'clock. 'Om hoe laat?' = At what time? Always use 'om' before clock times."
      },
    ],
  },
  {
    id: "test_lp3c",
    tag: "TEST · LP 3C",
    title: "Test — Leerpad 3C: Graag, Ga je mee & Antwoorden",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "'Ik wandel graag' — where does 'graag' go?",
        options: ["Before the subject: 'Graag ik wandel.'", "Before the verb: 'Ik graag wandel.'", "After the verb: 'Ik wandel graag.'", "At the end with negation only"],
        answer: 2,
        explanation: "Structure: [subject] + [verb] + graag. 'Ik wandel graag.' For negation: 'Ik wandel niet graag.' The 'niet' goes before 'graag'."
      },
      {
        q: "'Je zwemt graag' — what happens in the yes/no question form?",
        options: ["Je zwemt graag? (no change)", "Zwem je graag? (-t drops in inversion)", "Graag zwem je? (graag moves first)", "Zwemt graag je? (subject moves last)"],
        answer: 1,
        explanation: "Inversion rule: when 'je/jij' comes AFTER the verb, the -t drops. 'zwem je' not 'zwemt je'. This applies to all verbs with jij/je."
      },
      {
        q: "How do you say 'She likes cycling'?",
        options: ["Zij fiets graag.", "Zij fietsen graag.", "Zij fietst graag.", "Zij niet fietst graag."],
        answer: 2,
        explanation: "3rd person singular = verb stem + t. 'fietsen' → stem 'fiets' + t = 'fietst'. Zij fietst graag."
      },
      {
        q: "'Ga je mee fietsen?' — what does 'mee' add here?",
        options: ["It makes it a question", "It means 'also'", "It means 'along/with' — you're inviting them to join", "It is the separable verb prefix meaning 'away'"],
        answer: 2,
        explanation: "'meegaan' (to go along) is a separable verb. 'mee' flies to the end in main clauses: 'Ik ga mee.' In questions with inversion: 'Ga je mee?'"
      },
      {
        q: "What is the most natural way to accept an invitation in Belgian Dutch?",
        options: ["Nee, dank je.", "Ja, dat is goed.", "Ja, graag!", "Ja, ik wil."],
        answer: 2,
        explanation: "'Ja, graag!' is the most natural and versatile acceptance. It literally means 'Yes, gladly!' Very Belgian!"
      },
      {
        q: "'Ik heb geen zin' — when would you use this?",
        options: ["When you are too tired", "When you have no time", "When you don't feel like it", "When you are sick"],
        answer: 2,
        explanation: "'geen zin hebben' = to not feel like it / to not be in the mood. 'Ik ben te moe' = I'm too tired. 'Ik heb geen tijd' = I have no time."
      },
      {
        q: "You're declining an invitation. Which response sounds most Belgian?",
        options: ["Nee.", "Ik kan niet.", "Ik heb geen tijd. Volgende keer!", "Ik wil niet komen."],
        answer: 2,
        explanation: "Belgians always soften a refusal: give a reason + a softener ('Volgende keer!' / 'Misschien een andere keer?'). A bare 'nee' sounds rude."
      },
      {
        q: "'Ga je met mij mee wandelen?' — what does 'mij' add?",
        options: ["It makes the sentence past tense", "It specifies you're going WITH a particular person (me)", "It makes it more formal", "It changes the verb from 'gaan' to 'meegaan'"],
        answer: 1,
        explanation: "'Ga je mee?' = Are you coming? 'Ga je met mij mee?' = Are you coming WITH ME? 'met + pronoun + mee' sandwiches the companion."
      },
    ],
  },

  // ─── NEW GRAMMAR MODULES ───────────────────────────────────────────────────
  {
    id: "possessives",
    tag: "GRAMMAR · POSSESSIVES",
    title: "Possessives — mijn / jouw / zijn / haar / ons / onze",
    difficulty: "easy",
    shortcut: "mijn/jouw/zijn/haar never change. Only ons/onze split: ons before het-words, onze before de-words and all plurals.",
    explanation: "Possessives come up from the very first lesson — mijn naam, jouw partner, zijn kind. Most are completely invariable (they don't change for gender or number). The only one to watch is ons/onze.",
    patterns: [
      { rule: "The full set — singular possessives", examples: [
        "mijn — my (always mijn, never changes)",
        "jouw / je — your (informal). jouw = stressed, je = unstressed",
        "uw — your (formal, always use with strangers/elders)",
        "zijn — his / its",
        "haar — her",
      ]},
      { rule: "Plural possessives", examples: [
        "ons / onze — our ← the tricky one, see below",
        "jullie — your (plural, informal)",
        "hun — their",
      ]},
      { rule: "ons vs onze — the only one that changes", examples: [
        "ons = before het-words: ons huis (our house) · ons kind (our child)",
        "onze = before de-words: onze auto (our car) · onze school (our school)",
        "onze = before ALL plurals: onze kinderen · onze huizen",
        "↳ Rule: same logic as de/het articles. When in doubt, say 'onze' — you'll be right ~75% of the time.",
      ]},
      { rule: "Common phrases from the course", examples: [
        "mijn naam (my name) · mijn partner (my partner)",
        "jouw beroep (your profession) · jouw verjaardag (your birthday)",
        "zijn werk (his work) · zijn vrouw (his wife)",
        "haar man (her husband) · haar kinderen (her children)",
        "ons huis (our house) · onze groep (our group)",
        "hun kinderen (their children) · jullie les (your lesson)",
      ]},
      { rule: "Stressed vs unstressed — je/jouw, ze/haar, we/ons", examples: [
        "Unstressed (normal speech): je fiets, ze tas, we groep",
        "Stressed (emphasis): JOUW fiets (YOUR bike, not mine!)",
        "je and ze can be ambiguous — jouw/haar are unambiguous",
      ]},
    ],
    memory: "🧠 Only ons/onze changes. Everything else is fixed. And ons/onze follows the exact same de/het split as articles: ons huis (het) / onze auto (de).",
    examples: [
      { nl: "mijn naam / jouw naam / zijn naam / haar naam", en: "my name / your name / his name / her name" },
      { nl: "ons huis / onze auto", en: "our house (het-word) / our car (de-word)" },
      { nl: "Wat is jouw beroep?", en: "What is your profession?" },
      { nl: "Hoe oud zijn jullie kinderen?", en: "How old are your (plural) children?" },
    ],
    practice: [
      { role: "A", dutch: "Hoe heet jouw partner?", english: "What is your partner's name?" },
      { role: "B", dutch: "Mijn partner heet ___.", english: "My partner's name is ___." },
      { role: "A", dutch: "Ons of onze? → '___ huis'", english: "Ons or onze? → '___ house'" },
      { role: "B", dutch: "ONS huis — het-word.", english: "ONS huis — het-word." },
      { role: "A", dutch: "Ons of onze? → '___ kinderen'", english: "Ons or onze? → '___ children'" },
      { role: "B", dutch: "ONZE kinderen — altijd onze voor meervoud.", english: "ONZE kinderen — always onze for plurals." },
      { role: "A", dutch: "Wat doet zijn vrouw voor werk?", english: "What does his wife do for work?" },
      { role: "B", dutch: "Zijn vrouw is ___. Ze werkt als ___.", english: "His wife is ___. She works as ___." },
    ],
  },
  {
    id: "prepositions_place",
    tag: "GRAMMAR · PREPOSITIONS (PLACE)",
    title: "Where Things Are — Spatial Prepositions",
    difficulty: "easy",
    shortcut: "in = inside. op = on top of / at. aan = at the edge of / on. bij = near / at someone's place. voor/achter/naast/tussen = in front of / behind / next to / between.",
    explanation: "You already know op/in/aan/bij for time expressions. The same words appear for location, but with different meanings. These come up constantly in Afspreken (aan de ingang, bij de bushalte) and in everyday directions.",
    patterns: [
      { rule: "in — inside or within", examples: [
        "in het café (in the café — inside)",
        "in de stad (in the city)",
        "in het ziekenhuis (in the hospital)",
        "in België (in Belgium) · in Brussel (in Brussels)",
      ]},
      { rule: "op — on top of, or at (flat surfaces, floors, locations)", examples: [
        "op tafel (on the table)",
        "op school (at school) · op het werk (at work) · op kantoor (at the office)",
        "op de eerste verdieping (on the first floor)",
        "op het strand (on the beach)",
      ]},
      { rule: "aan — at the edge of, along, on (attached to something)", examples: [
        "aan de ingang (at the entrance)",
        "aan de kust (at the coast)",
        "aan de deur (at the door)",
        "aan tafel (at the table — seated)",
        "↳ Compare: op tafel (on the table surface) vs aan tafel (at the table, seated)",
      ]},
      { rule: "bij — near, by, at someone's place, at an organisation", examples: [
        "bij de bushalte (by/at the bus stop)",
        "bij de ingang (by the entrance)",
        "bij mij thuis (at my place)",
        "bij de dokter (at the doctor's)",
        "bij [bedrijf] werken (to work at [company])",
      ]},
      { rule: "voor / achter / naast / tussen — relative position", examples: [
        "voor het museum (in front of the museum)",
        "achter het station (behind the station)",
        "naast de bushalte (next to the bus stop)",
        "tussen het café en de supermarkt (between the café and the supermarket)",
      ]},
    ],
    memory: "🧠 bij = at someone's/something's location (personal or organisational). aan = touching or bordering something. op = surface or formal location. in = enclosed within.",
    examples: [
      { nl: "We spreken af aan de ingang.", en: "We meet at the entrance." },
      { nl: "Bij de bushalte op de hoek.", en: "At the bus stop on the corner." },
      { nl: "Ik werk bij een groot bedrijf.", en: "I work at a large company." },
      { nl: "Het café is naast het museum.", en: "The café is next to the museum." },
    ],
    practice: [
      { role: "A", dutch: "Waar spreken we af?", english: "Where do we meet?" },
      { role: "B", dutch: "Aan de ingang van het museum. / Bij de bushalte.", english: "At the entrance of the museum. / At the bus stop." },
      { role: "A", dutch: "In, op, aan, of bij? → '___ het station'", english: "In, op, aan, or bij? → '___ the station'" },
      { role: "B", dutch: "Bij het station — naast/in de buurt van. Of: in het station (inside).", english: "Bij het station — near it. Or: in het station (inside it)." },
      { role: "A", dutch: "Waar werkt jouw partner?", english: "Where does your partner work?" },
      { role: "B", dutch: "Op school. / In het ziekenhuis. / Bij [bedrijf].", english: "At school. / In the hospital. / At [company]." },
    ],
  },
  {
    id: "inversion",
    tag: "GRAMMAR · INVERSION",
    title: "Inversion — Why the -t Disappears",
    difficulty: "medium",
    shortcut: "When jij/je comes AFTER the verb in a question, drop the -t. This applies to every verb, every time.",
    explanation: "Inversion is the source of the single most common spoken error at this level. The rule is simple and absolute: when you flip subject and verb to form a question, and the subject is jij or je, the verb loses its -t. No exceptions.",
    patterns: [
      { rule: "Normal statement → Question: flip subject and verb", examples: [
        "Jij werkt. (You work.) → Werk jij? (Do you work?)",
        "Je gaat mee. (You're coming.) → Ga je mee? (Are you coming?)",
        "Je zwemt graag. (You like swimming.) → Zwem je graag? (Do you like swimming?)",
        "Je hebt kinderen. (You have children.) → Heb je kinderen? (Do you have children?)",
      ]},
      { rule: "The -t drop rule — jij/je after verb always loses -t", examples: [
        "werkt → Werk jij? ✓ (NOT Werkt jij?)",
        "gaat → Ga je? ✓ (NOT Gaat je?)",
        "zwemt → Zwem je? ✓ (NOT Zwemt je?)",
        "hebt → Heb je? ✓ (NOT Hebt je?)",
        "komt → Kom je? ✓ (NOT Komt je?)",
        "doet → Doe je? ✓ (NOT Doet je?)",
      ]},
      { rule: "Other pronouns — no -t drop, they follow normal rules", examples: [
        "hij werkt → Werkt hij? ✓ (hij keeps the -t)",
        "zij werkt → Werkt zij? ✓ (zij keeps the -t)",
        "u werkt → Werkt u? ✓ (u keeps the -t)",
        "wij werken → Werken wij? ✓ (no -t involved)",
        "↳ The -t drop ONLY applies to jij/je, never to hij/zij/u",
      ]},
      { rule: "Why this matters — real examples from the course", examples: [
        "Ga je mee? (not Gaat je mee?) — Ga je mee fietsen?",
        "Hoe heet jij? (not Hoe heet jij? — actually heet doesn't change here!)",
        "↳ Wait — 'heet' stays as 'heet' because 'heten' stem is 'heet' (ends in t already)",
        "Zwem je graag? (not Zwemt je graag?) ← from graag module",
        "Heb jij kinderen? (not Hebt jij kinderen?) ← from lp2a",
        "Doe je graag sport? (not Doet je graag sport?) ← from watdoejegraag",
      ]},
      { rule: "Edge case — stems already ending in -t", examples: [
        "Some verb stems already end in -t: zitten (zit), heten (heet), weten (weet)",
        "Zit jij? ✓ — stem 'zit' already has t, so the question looks the same as statement",
        "Weet jij? ✓ — same situation",
        "These can be confusing — context usually clarifies.",
      ]},
    ],
    memory: "🧠 One rule, no exceptions: jij/je AFTER the verb = drop the -t. Write it on a sticky note. It appears in every question you will ever ask.",
    examples: [
      { nl: "Je werkt. → Werk je?", en: "You work. → Do you work?" },
      { nl: "Je gaat mee. → Ga je mee?", en: "You're coming. → Are you coming?" },
      { nl: "Je zwemt graag. → Zwem je graag?", en: "You like swimming. → Do you like swimming?" },
      { nl: "Je hebt kinderen. → Heb je kinderen?", en: "You have children. → Do you have children?" },
    ],
    practice: [
      { role: "A", dutch: "Maak een vraag: 'Je werkt vandaag.'", english: "Make a question: 'You work today.'" },
      { role: "B", dutch: "Werk je vandaag? (niet: Werkt je!)", english: "Werk je vandaag? (not: Werkt je!)" },
      { role: "A", dutch: "Maak een vraag: 'Je gaat mee naar het museum.'", english: "Make a question: 'You're coming to the museum.'" },
      { role: "B", dutch: "Ga je mee naar het museum? (niet: Gaat je!)", english: "Ga je mee naar het museum? (not: Gaat je!)" },
      { role: "A", dutch: "Werkt hij of Werk hij?", english: "Werkt hij or Werk hij?" },
      { role: "B", dutch: "Werkt hij ✓ — hij/zij/u houden de -t altijd.", english: "Werkt hij ✓ — hij/zij/u always keep the -t." },
    ],
  },

  // ─── NEW UITSPRAAK MODULES ─────────────────────────────────────────────────
  {
    id: "pron_g",
    tag: "UITSPRAAK · G AND CH",
    title: "The G and CH — The Most Important Belgian Sound",
    difficulty: "medium",
    shortcut: "Belgian g/ch = a soft, breathy rasp at the very back of the throat. Think of fogging up a mirror — gently. Nothing like the English 'g' in 'go'.",
    explanation: "The g and ch are the sounds that most immediately mark you as a non-native speaker if you get them wrong. Dutch Netherlands uses a harsh, guttural sound. Belgian Dutch is much softer — more like a gentle breath through the back of the throat. Get this right and you'll sound noticeably more natural.",
    patterns: [
      { rule: "How to produce the Belgian g/ch", examples: [
        "1. Open your mouth slightly",
        "2. Breathe out gently through the BACK of your throat — like fogging a mirror",
        "3. Add the tiniest amount of friction — just enough to hear it",
        "4. It should feel like an 'h' with a little rasp, NOT a hard scrape",
        "The Dutch Netherlands 'g' is much harsher — Belgian is gentler, closer to a soft 'h'",
      ]},
      { rule: "G at the start of words", examples: [
        "goed [khoot] — good (NOT 'khut' as in NL Dutch)",
        "gaan [khaan] — to go",
        "groot [khroht] — big",
        "graag [khraakh] — gladly",
        "gisteren [KHIS-tuh-run] — yesterday",
        "getrouwd [khuh-TROWT] — married",
      ]},
      { rule: "G in the middle of words", examples: [
        "beginnen [buh-KHIN-un] — to begin",
        "vragen [FRAH-khun] — to ask",
        "zeggen [ZEK-khun] — to say",
        "liggen [LIK-khun] — to lie (down)",
        "↳ The g softens even further between vowels in Belgian Dutch",
      ]},
      { rule: "CH — identical sound to G in Belgian Dutch", examples: [
        "In Belgian Dutch, ch and g are pronounced identically",
        "acht [akht] — eight",
        "gracht [khrakht] — canal",
        "nacht [nakht] — night",
        "lachen [LAH-khun] — to laugh",
        "zachten [ZAKH-tun] — to soften",
      ]},
      { rule: "SCH — s + ch combination", examples: [
        "sch = [skh] — the s is clear, followed by the soft ch",
        "school [skhohl] — school",
        "schoen [skhoon] — shoe",
        "schrijven [SKHRAY-vun] — to write",
        "schilderij [SKHIL-duh-ray] — painting",
        "↳ Don't say 'sh' (English) — say 's' + soft Belgian 'kh'",
      ]},
      { rule: "Words where g is NOT the guttural — borrowed words", examples: [
        "In French-origin words, g before e/i = French 'zh' (like in 'measure')",
        "garagist [khah-rah-ZHIST] — mechanic (French origin, g before i = zh)",
        "horloge [hor-LOH-zhuh] — wristwatch (French origin)",
        "bagage [bah-GAH-zhuh] — luggage",
        "↳ If the word feels French, the soft 'zh' is likely correct",
      ]},
    ],
    memory: "🧠 Belgian g = fog a mirror. Not a cleared throat, not an English 'g', not a French 'zh' — just a gentle, breathy rasp. Practise: goed, graag, gaan — all three start with that same soft sound.",
    examples: [
      { nl: "goed / groot / graag", en: "[khoot] / [khroht] / [khraakh] — soft g, never hard" },
      { nl: "acht / nacht / lachen", en: "[akht] / [nakht] / [LAH-khun] — ch = same soft sound" },
      { nl: "school / schoen / schrijven", en: "[skhohl] / [skhoon] / [SKHRAY-vun] — sch = s + soft kh" },
    ],
    practice: [
      { role: "A", dutch: "Spreek uit: 'goed'", english: "Pronounce: 'goed'" },
      { role: "B", dutch: "[khoot] — zachte g, als adem door de keel. Niet hard!", english: "[khoot] — soft g, like breath through the throat. Not hard!" },
      { role: "A", dutch: "Spreek uit: 'school'", english: "Pronounce: 'school'" },
      { role: "B", dutch: "[skhohl] — s + zachte kh + ool. Niet 'shool'.", english: "[skhohl] — s + soft kh + ool. Not 'shool'." },
      { role: "A", dutch: "Wat is het verschil tussen de g in 'groot' en de g in 'garagist'?", english: "What's the difference between the g in 'groot' and in 'garagist'?" },
      { role: "B", dutch: "'groot' = zachte kh. 'garagist' = zh (Frans). Frans woord, Franse uitspraak.", english: "'groot' = soft kh. 'garagist' = zh (French). French word, French pronunciation." },
    ],
  },
  {
    id: "pron_schwa",
    tag: "UITSPRAAK · SCHWA",
    title: "The Schwa — Dutch's Most Common Sound",
    difficulty: "medium",
    shortcut: "The schwa is the 'uh' sound. It replaces almost every unstressed 'e' in Dutch. If a syllable isn't stressed, the 'e' becomes 'uh'.",
    explanation: "The schwa [ə] is the most frequent vowel in Dutch — and the one most English speakers ignore. Any unstressed 'e' reduces to this neutral 'uh' sound. Getting this right eliminates a huge amount of foreign accent because it changes the rhythm of whole words and sentences.",
    patterns: [
      { rule: "What is the schwa?", examples: [
        "The schwa is a neutral, central vowel — 'uh'",
        "It requires no effort: jaw relaxed, tongue in neutral position, just breathe out slightly",
        "It's the sound in English: 'a' in 'about', 'e' in 'the', 'o' in 'bottom'",
        "In Dutch: any unstressed 'e' is almost always a schwa",
      ]},
      { rule: "Unstressed -e in prefixes", examples: [
        "ge- prefix (past participle): ge- = [khuh-] NOT [khee-]",
        "gewerkt [khuh-VERKT] · geweest [khuh-VAYST] · gegaan [khuh-KHAAN]",
        "be- prefix: be- = [buh-] NOT [bee-]",
        "betekenen [buh-TAY-kuh-nun] · beginnen [buh-KHIN-un] · bezoeken [buh-ZOO-kun]",
        "ver- prefix: ver- = [fur-] NOT [fair-]",
        "vertellen [fur-TEL-un] · vergeten [fur-KHAY-tun] · verloofd [fur-LOHFT]",
      ]},
      { rule: "Unstressed -e in word endings", examples: [
        "de = [duh] (the) — never [dee] unless stressed for emphasis",
        "even = [AY-fun] — the second e is schwa",
        "morgen = [MOR-khun] — the second e is schwa",
        "maken = [MAH-kun] — the second e is schwa (and often the n is dropped!)",
        "werken = [VER-kun] — same pattern",
        "All -en verb endings in spoken speech: the e is schwa, n often dropped",
      ]},
      { rule: "Common words where English speakers stress the wrong syllable", examples: [
        "goedemorgen: [khoo-duh-MOR-khun] ← stress on MOR, both e's are schwas",
        "aangenaam: [aan-khuh-NAAM] ← stress on NAAM, middle e is schwa",
        "alsjeblieft: [als-yuh-BLEEFT] ← 'je' is schwa + y sound",
        "betekent: [buh-TAY-kunt] ← be- is schwa",
        "gelukkig: [khuh-LUK-ikh] ← ge- is schwa",
      ]},
      { rule: "The rhythm effect — why schwa matters so much", examples: [
        "Dutch words have ONE stressed syllable. Everything else relaxes to schwa.",
        "morGEN — not MORgen · aangeNAAM — not AANgenaam",
        "The stress pattern is what makes Dutch sound like Dutch",
        "Over-pronouncing unstressed vowels = the main source of foreign accent",
      ]},
    ],
    memory: "🧠 Unstressed e = 'uh'. Every time. Say 'goedemorgen' and let the two unstressed e's collapse to 'uh': [khoo-duh-MOR-khun]. The stressed syllable is the only one that gets full vowel quality.",
    examples: [
      { nl: "de / het / een", en: "[duh] / [huht] / [un] — articles are always schwa in natural speech" },
      { nl: "goedemorgen", en: "[khoo-duh-MOR-khun] — both unstressed e's are schwas" },
      { nl: "gewerkt / betekent / verloofd", en: "[khuh-VERKT] / [buh-TAY-kunt] / [fur-LOHFT] — all prefixes are schwa" },
      { nl: "maken / werken / wandelen", en: "[MAH-kun] / [VER-kun] / [VAN-duh-lun] — -en endings reduce to schwa" },
    ],
    practice: [
      { role: "A", dutch: "Hoe spreek je 'goedemorgen' uit?", english: "How do you pronounce 'goedemorgen'?" },
      { role: "B", dutch: "[khoo-duh-MOR-khun] — stress op MOR, beide e's zijn schwas.", english: "[khoo-duh-MOR-khun] — stress on MOR, both e's are schwas." },
      { role: "A", dutch: "Hoe klinkt het voorvoegsel 'ge-' in 'gewerkt'?", english: "How does the prefix 'ge-' sound in 'gewerkt'?" },
      { role: "B", dutch: "[khuh-] — schwa. Nooit [khee-]. Gewerkt = [khuh-VERKT].", english: "[khuh-] — schwa. Never [khee-]. Gewerkt = [khuh-VERKT]." },
      { role: "A", dutch: "En 'de'? Hoe klinkt dat in een zin?", english: "And 'de'? How does that sound in a sentence?" },
      { role: "B", dutch: "[duh] — altijd schwa, tenzij benadrukt: 'DE auto, niet de fiets!'", english: "[duh] — always schwa, unless stressed: 'THE car, not the bike!'" },
    ],
  },

  // ─── NEW TESTS ─────────────────────────────────────────────────────────────
  {
    id: "test_opening",
    tag: "TEST · OPENING",
    title: "Test — Opening: Hoe gaat het?",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "Someone greets you with 'Hoe gaat het?' What is the most natural Belgian reply?",
        options: ["Tot ziens!", "Goed, dank je! En met jou?", "Aangenaam!", "Prettige dag!"],
        answer: 1,
        explanation: "'Goed, dank je! En met jou?' is the standard 3-part Belgian ritual: answer + thank + ask back. Always asking back is important — skipping it can feel abrupt."
      },
      {
        q: "'Gaat wel.' — what does this mean?",
        options: ["It's going very well!", "Not good at all.", "Getting by / alright.", "I don't know."],
        answer: 2,
        explanation: "'Gaat wel' is the quintessential Belgian modest answer — not over-enthusiastic, not negative. Roughly 'it's fine / getting by'. Belgians rarely say 'heel goed!' unprompted."
      },
      {
        q: "When do you use 'Goedemiddag'?",
        options: ["In the morning until noon", "From noon to roughly 6pm", "From 6pm onwards", "Only at formal events"],
        answer: 1,
        explanation: "'Goedemiddag' = good afternoon, used from roughly noon to 6pm. 'Goedemorgen' = morning. 'Goedenavond' = evening (from ~6pm)."
      },
      {
        q: "Which is the most casual goodbye in Belgian Dutch?",
        options: ["Tot ziens!", "Goedenacht!", "Doei!", "Aangenaam!"],
        answer: 2,
        explanation: "'Doei!' is the most casual — used among friends. 'Tot ziens' is neutral and very common. 'Goedenacht' is only for parting at bedtime."
      },
      {
        q: "'Alles goed met de familie?' is an example of:",
        options: ["A formal business greeting", "A casual Belgian smalltalk opener", "A way to say goodbye", "A question about someone's health"],
        answer: 1,
        explanation: "This is classic Belgian warm smalltalk — asking about family as a social nicety. Belgians are relationship-oriented and this kind of opener is very natural and expected."
      },
      {
        q: "How do you say 'Have a nice weekend' in Dutch?",
        options: ["Prettige dag!", "Tot volgende week!", "Prettig weekend!", "Goed weekend!"],
        answer: 2,
        explanation: "'Prettig weekend!' = have a nice weekend. 'Prettige dag!' = have a nice day. The -e on 'prettige' before 'dag' follows the adjective inflection rule (de-word)."
      },
    ],
  },
  {
    id: "test_om_op_in",
    tag: "TEST · LP 3A · OM/OP/IN",
    title: "Test — Leerpad 3A: Om · Op · In",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "Which preposition goes with a clock time?",
        options: ["in", "op", "om", "aan"],
        answer: 2,
        explanation: "'Om' is always used with clock times: 'om 9 uur', 'om half drie', 'om kwart over tien'. Memory trick: Om = O'clock — both start with O."
      },
      {
        q: "How do you say 'on Tuesday'?",
        options: ["in dinsdag", "om dinsdag", "op dinsdag", "aan dinsdag"],
        answer: 2,
        explanation: "'Op' is used for specific days, dates, and named occasions. 'Op maandag', 'op 8 september', 'op mijn verjaardag'."
      },
      {
        q: "How do you say 'in summer'?",
        options: ["op de zomer", "om de zomer", "aan de zomer", "in de zomer"],
        answer: 3,
        explanation: "'In' is used for periods — seasons, months, years, holidays. 'In de zomer', 'in maart', 'in 1999', 'in het weekend'."
      },
      {
        q: "Which is correct: 'The lesson is ___ Tuesday ___ 9 o'clock'?",
        options: ["in dinsdag om 9 uur", "op dinsdag om 9 uur", "op dinsdag in 9 uur", "om dinsdag op 9 uur"],
        answer: 1,
        explanation: "Op + specific day, om + clock time. 'De les is op dinsdag om 9 uur.' This combination is the most common at this level."
      },
      {
        q: "'In het weekend' — why 'in' and not 'op'?",
        options: ["'het weekend' is a het-word", "The weekend is a period, not a single point", "'op weekend' doesn't exist", "Weekend always uses 'in' as an exception"],
        answer: 1,
        explanation: "'In' is for periods of time. The weekend is a stretch of time (Saturday + Sunday), not a single point on the calendar. Compare: 'op zaterdag' (specific day) vs 'in het weekend' (the period)."
      },
      {
        q: "How do you say 'I was born in 1985'?",
        options: ["Ik ben geboren op 1985.", "Ik ben geboren om 1985.", "Ik ben geboren in 1985.", "Ik ben geboren aan 1985."],
        answer: 2,
        explanation: "Years always use 'in': 'in 1985', 'in 2021'. Think of a year as a container — you were born inside that year."
      },
    ],
  },
  {
    id: "test_uitspraak",
    tag: "TEST · UITSPRAAK",
    title: "Test — Uitspraak: Pronunciation Rules",
    type: "quiz",
    difficulty: "medium",
    questions: [
      {
        q: "How does 'IJ' sound in Belgian Dutch?",
        options: ["Like English 'ee' (as in see)", "Like English 'eye'", "Like French 'eu'", "Like English 'oy'"],
        answer: 1,
        explanation: "'IJ' and 'EI' both sound like English 'eye'. Examples: zijn [zayn], tijd [tayd], klein [klayn], trein [trayn]. IJ and EI are pronounced identically — only the spelling differs."
      },
      {
        q: "'boom' vs 'bomen' — is the 'o' sound different?",
        options: ["Yes — 'boom' is long, 'bomen' is short", "No — both have a long 'o' sound", "Yes — 'bomen' has a short 'o'", "It depends on the region"],
        answer: 1,
        explanation: "The sound is IDENTICAL. 'Boom' uses 'oo' to signal long in a closed syllable. 'Bomen' uses a single 'o' in an open syllable (bo-men) which is also long. The spelling changes, not the sound."
      },
      {
        q: "How do you pronounce 'kamer' in natural Belgian Dutch?",
        options: ["[KAH-mehr] — full R at the end", "[KAH-muh] — R reduces to soft 'uh'", "[kah-MER] — stress on second syllable", "[KAY-muh] — long aa sound"],
        answer: 1,
        explanation: "Unstressed -er endings reduce to a schwa ('uh'). The R is nearly silent. 'kamer' = [KAH-muh], 'water' = [VAH-tuh], 'lekker' = [LEK-uh]. This is one of the most important naturalness patterns."
      },
      {
        q: "What is the 'schwa'?",
        options: ["The Dutch word for 'ch' sound", "The neutral 'uh' sound that replaces unstressed 'e'", "The soft Belgian g sound", "A silent letter in Dutch"],
        answer: 1,
        explanation: "The schwa [ə] is the neutral 'uh' sound. Every unstressed 'e' in Dutch becomes a schwa. It's why 'de' sounds like [duh], 'goedemorgen' sounds like [khoo-duh-MOR-khun], and 'gewerkt' sounds like [khuh-VERKT]."
      },
      {
        q: "How do you pronounce the Belgian 'g' in 'goed'?",
        options: ["Like English 'g' in 'go'", "Like French 'g' in 'garage' (zh)", "A soft, breathy rasp at the back of the throat", "Silent — the g is not pronounced"],
        answer: 2,
        explanation: "The Belgian 'g' is a soft, gentle rasp produced at the back of the throat — like fogging a mirror. Much softer than Dutch Netherlands. Never like English 'g' or French 'zh' (except in French-origin words)."
      },
      {
        q: "'bom' vs 'bommen' — what does doubling the 'm' signal?",
        options: ["The word has changed meaning", "The vowel is long in the plural", "The vowel stays short — doubling prevents the open syllable from making it long", "It is a spelling error"],
        answer: 2,
        explanation: "Without doubling, 'bomen' would be read as long o (open syllable bo-men). 'Bommen' keeps the syllable closed (bom-men), preserving the short 'o'. The sound doesn't change — the spelling protects it."
      },
    ],
  },
  {
    id: "test_lp4",
    tag: "TEST · LP 4",
    title: "Test — Leerpad 4: Weer, Winkels & Fruit",
    type: "quiz",
    difficulty: "easy",
    questions: [
      {
        q: "How do you say 'It is raining' in Dutch?",
        options: ["Het is regen.", "De regen valt.", "Het regent.", "Het is regenachtig."],
        answer: 2,
        explanation: "Weather actions use 'het + verb': het regent (raining), het sneeuwt (snowing), het waait (windy), het vriest (freezing). Note: 'De zon schijnt' is different — the sun is the subject."
      },
      {
        q: "'De zon schijnt' — why is the subject 'de zon' and not 'het'?",
        options: ["'Schijnen' is irregular", "'De zon' is the actual subject doing the shining — the sun has its own noun", "It is a mistake — it should be 'het schijnt'", "Only in Belgian Dutch"],
        answer: 1,
        explanation: "Most weather verbs use 'het' as a dummy subject (het regent, het waait). But 'de zon schijnt' is different — the sun (de zon) is the real subject performing the action of shining."
      },
      {
        q: "What does 'bewolkt' mean?",
        options: ["windy", "freezing", "cloudy", "foggy"],
        answer: 2,
        explanation: "'Bewolkt' = cloudy. From 'wolk' (cloud). 'Het is bewolkt' = it is cloudy. Other states: zonnig (sunny), mistig (foggy), winderig (windy)."
      },
      {
        q: "What is the Dutch word for 'the checkout' (in a shop)?",
        options: ["de boodschappen", "de kassa", "de winkel", "de boodschappentas"],
        answer: 1,
        explanation: "'De kassa' = the checkout / till. 'Ik betaal aan de kassa' = I pay at the checkout. 'De boodschappen' = the groceries. 'De boodschappentas' = the grocery bag."
      },
      {
        q: "'Ik wacht op de trein' — what does 'op' mean here?",
        options: ["on (physically on top of)", "for", "at", "until"],
        answer: 1,
        explanation: "'Wachten op' = to wait FOR. The 'op' is part of the fixed verb combination — it doesn't mean 'on top of'. English speakers often expect 'voor' here, but Dutch uses 'op'."
      },
      {
        q: "What is the plural of 'druif'?",
        options: ["druifs", "druiven", "druyven", "druifen"],
        answer: 1,
        explanation: "'druif → druiven' follows the f→v voicing rule before -en. The f at the end of the word voices to v when a vowel suffix follows. Same pattern: brief→brieven, wolf→wolven."
      },
      {
        q: "How do you say 'a bunch of bananas'?",
        options: ["een kilo bananen", "een tros bananen", "een pak bananen", "een bos bananen"],
        answer: 1,
        explanation: "'Een tros bananen' = a bunch of bananas. 'Tros' is used specifically for things that grow in clusters — bananas and grapes (een tros druiven)."
      },
      {
        q: "'Op welk spoor vertrekt de trein?' — what does 'spoor' mean?",
        options: ["time", "direction", "(railway) platform / track", "ticket"],
        answer: 2,
        explanation: "'Het spoor' = the railway track / platform. 'Op welk spoor?' = on which platform? 'De trein vertrekt op spoor 7' = the train departs from platform 7."
      },
    ],
  },
];

const DIFFICULTY_COLOR = { easy: "#2ecc71", medium: "#f39c12", hard: "#e74c3c" };
const DIFFICULTY_LABEL = { easy: "QUICK WIN", medium: "PRACTICE NEEDED", hard: "TAKES TIME" };

export default function DutchGrammar() {
  const [active, setActive] = useState("lp1a");
  const [expandedPatterns, setExpandedPatterns] = useState({});
  const [hidePracticeEn, setHidePracticeEn] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const rule = RULES.find(r => r.id === active);
  const isQuiz = rule?.type === "quiz";

  const handleSetActive = (id) => {
    setActive(id);
    const target = RULES.find(r => r.id === id);
    if (target?.type === "quiz") {
      setQuizIndex(0); setQuizSelected(null);
      setQuizSubmitted(false); setQuizScore(0); setQuizCompleted(false);
    }
  };

  const togglePattern = (key) =>
    setExpandedPatterns(p => ({ ...p, [key]: !p[key] }));

  const leerpads = RULES.filter(r => r.tag.startsWith("LEERPAD"));
  const grammar = RULES.filter(r => r.tag.startsWith("GRAMMAR"));
  const uitspraak = RULES.filter(r => r.tag.startsWith("UITSPRAAK") || r.tag.startsWith("SPELLING"));
  const tests = RULES.filter(r => r.tag.startsWith("TEST"));

  return (
    <div style={{
      fontFamily: "'Courier New', 'Consolas', monospace",
      background: "#0a0e0a",
      minHeight: "100vh",
      color: "#c8ffc8",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Top bar */}
      <div style={{
        background: "#0d140d",
        borderBottom: "1px solid #1a4a1a",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#e74c3c" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f39c12" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#2ecc71" }} />
        </div>
        <span style={{ color: "#3a7a3a", fontSize: "13px" }}>dutch-grammar --interactive --no-fluff</span>
        <span style={{ marginLeft: "auto", fontSize: "11px", color: "#2a5a2a" }}>
          🇧🇪 {RULES.length} modules loaded
        </span>
      </div>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: "200px",
          minWidth: "160px",
          background: "#080c08",
          borderRight: "1px solid #1a4a1a",
          padding: "12px 0",
          overflowY: "auto",
        }}>
          {/* Leerpad section */}
          <div style={{ padding: "0 12px 6px", fontSize: "9px", color: "#c8a84b", letterSpacing: "2px", marginBottom: "2px" }}>
            ── CURSUS ──
          </div>
          {leerpads.map(r => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: active === r.id ? "#0d200d" : "transparent",
                border: "none",
                borderLeft: `3px solid ${active === r.id ? "#2ecc71" : "transparent"}`,
                color: active === r.id ? "#2ecc71" : "#3a6a3a",
                padding: "7px 12px",
                cursor: "pointer",
                fontSize: "11px",
                fontFamily: "inherit",
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ display: "block", fontSize: "9px", color: "#c8a84b", marginBottom: "2px", opacity: 0.9 }}>
                {r.tag}
              </span>
              {r.title.split("—")[0].trim().replace("Ga je met X mee?", "Ga je met X mee?")}
            </button>
          ))}

          {/* Grammar section */}
          <div style={{ padding: "12px 12px 6px", fontSize: "9px", color: "#00bcd4", letterSpacing: "2px", marginTop: "4px" }}>
            ── GRAMMATICA ──
          </div>
          {grammar.map(r => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: active === r.id ? "#0d200d" : "transparent",
                border: "none",
                borderLeft: `3px solid ${active === r.id ? "#2ecc71" : "transparent"}`,
                color: active === r.id ? "#2ecc71" : "#2a5a5a",
                padding: "7px 12px",
                cursor: "pointer",
                fontSize: "11px",
                fontFamily: "inherit",
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ display: "block", fontSize: "9px", color: "#00bcd4", marginBottom: "2px", opacity: 0.8 }}>
                {r.tag.replace("GRAMMAR · ", "")}
              </span>
              {r.title.split("—")[0].trim()}
            </button>
          ))}

          {/* Uitspraak section */}
          <div style={{ padding: "12px 12px 6px", fontSize: "9px", color: "#e67e22", letterSpacing: "2px", marginTop: "4px" }}>
            ── UITSPRAAK ──
          </div>
          {uitspraak.map(r => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: active === r.id ? "#0d200d" : "transparent",
                border: "none",
                borderLeft: `3px solid ${active === r.id ? "#2ecc71" : "transparent"}`,
                color: active === r.id ? "#2ecc71" : "#4a3a1a",
                padding: "7px 12px",
                cursor: "pointer",
                fontSize: "11px",
                fontFamily: "inherit",
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ display: "block", fontSize: "9px", color: "#e67e22", marginBottom: "2px", opacity: 0.8 }}>
                {r.tag.replace("UITSPRAAK · ", "").replace("SPELLING · ", "SPELLING · ")}
              </span>
              {r.title.split("—")[0].trim()}
            </button>
          ))}

          {/* Tests section */}
          <div style={{ padding: "12px 12px 6px", fontSize: "9px", color: "#e74c3c", letterSpacing: "2px", marginTop: "4px" }}>
            ── TESTEN ──
          </div>
          {tests.map(r => (
            <button
              key={r.id}
              onClick={() => handleSetActive(r.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: active === r.id ? "#200d0d" : "transparent",
                border: "none",
                borderLeft: `3px solid ${active === r.id ? "#e74c3c" : "transparent"}`,
                color: active === r.id ? "#e74c3c" : "#4a1a1a",
                padding: "7px 12px",
                cursor: "pointer",
                fontSize: "11px",
                fontFamily: "inherit",
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ display: "block", fontSize: "9px", color: "#e74c3c", marginBottom: "2px", opacity: 0.8 }}>
                {r.tag}
              </span>
              {r.title.replace("Test — ", "")}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
          {rule && isQuiz && (
            <QuizView
              rule={rule}
              quizIndex={quizIndex} quizSelected={quizSelected}
              quizSubmitted={quizSubmitted} quizScore={quizScore} quizCompleted={quizCompleted}
              setQuizIndex={setQuizIndex} setQuizSelected={setQuizSelected}
              setQuizSubmitted={setQuizSubmitted} setQuizScore={setQuizScore}
              setQuizCompleted={setQuizCompleted}
            />
          )}
          {rule && !isQuiz && (
            <div>
              {/* Rule header */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                  <span style={{
                    background: DIFFICULTY_COLOR[rule.difficulty] + "22",
                    border: `1px solid ${DIFFICULTY_COLOR[rule.difficulty]}`,
                    color: DIFFICULTY_COLOR[rule.difficulty],
                    fontSize: "9px",
                    padding: "2px 8px",
                    letterSpacing: "2px",
                  }}>
                    {DIFFICULTY_LABEL[rule.difficulty]}
                  </span>
                  <span style={{ color: rule.tag.startsWith("LEERPAD") ? "#c8a84b" : rule.tag.startsWith("GRAMMAR") ? "#00bcd4" : "#e67e22", fontSize: "10px", letterSpacing: "2px" }}>
                    {rule.tag}
                  </span>
                </div>
                <h1 style={{
                  fontSize: "clamp(15px, 2.5vw, 21px)",
                  color: "#7aff7a",
                  margin: "0 0 10px",
                  fontWeight: "normal",
                  letterSpacing: "1px",
                }}>
                  {rule.title}
                </h1>
                <p style={{ color: "#5a8a5a", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
                  {rule.explanation}
                </p>
              </div>

              {/* Shortcut box */}
              <div style={{
                background: "#0d200d",
                border: "1px solid #2ecc71",
                borderLeft: "4px solid #2ecc71",
                padding: "14px 16px",
                marginBottom: "20px",
                borderRadius: "2px",
              }}>
                <div style={{ fontSize: "9px", color: "#2ecc71", letterSpacing: "2px", marginBottom: "6px" }}>$ SHORTCUT</div>
                <div style={{ fontSize: "14px", color: "#c8ffc8" }}>{rule.shortcut}</div>
              </div>

              {/* Memory trick */}
              <div style={{
                background: "#0d1a1a",
                border: "1px solid #1a6a6a",
                borderLeft: "4px solid #00bcd4",
                padding: "14px 16px",
                marginBottom: "24px",
                borderRadius: "2px",
              }}>
                <div style={{ fontSize: "9px", color: "#00bcd4", letterSpacing: "2px", marginBottom: "6px" }}>$ MEMORY TRICK</div>
                <div style={{ fontSize: "13px", color: "#a0d8d8", lineHeight: 1.6 }}>{rule.memory}</div>
              </div>

              {/* Patterns */}
              <div style={{ marginBottom: "24px" }}>
                <div style={{ fontSize: "10px", color: "#2a5a2a", letterSpacing: "2px", marginBottom: "12px" }}>PATTERNS & RULES</div>
                {rule.patterns.map((p, i) => {
                  const key = `${rule.id}-${i}`;
                  const open = expandedPatterns[key];
                  return (
                    <div key={i} style={{ marginBottom: "8px", background: "#0d140d", border: "1px solid #1a3a1a", borderRadius: "2px", overflow: "hidden" }}>
                      <button
                        onClick={() => togglePattern(key)}
                        style={{
                          display: "flex", width: "100%", background: "none", border: "none",
                          color: "#7aff7a", padding: "10px 14px", cursor: "pointer",
                          fontFamily: "inherit", fontSize: "13px", textAlign: "left",
                          alignItems: "center", gap: "8px",
                        }}
                      >
                        <span style={{ color: "#2ecc71", fontSize: "10px" }}>{open ? "▼" : "▶"}</span>
                        {p.rule}
                      </button>
                      {open && (
                        <div style={{ padding: "0 14px 12px 28px" }}>
                          {p.examples.map((ex, j) => (
                            <div key={j} style={{
                              fontSize: "12px", color: "#5a9a5a", padding: "3px 0",
                              borderLeft: "2px solid #1a4a1a", paddingLeft: "10px", marginBottom: "3px",
                            }}>
                              {ex}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Examples */}
              <div style={{ marginBottom: "28px" }}>
                <div style={{ fontSize: "10px", color: "#2a5a2a", letterSpacing: "2px", marginBottom: "12px" }}>REAL EXAMPLES</div>
                <div style={{ display: "grid", gap: "8px" }}>
                  {rule.examples.map((ex, i) => (
                    <div key={i} style={{
                      background: "#080c08", border: "1px solid #1a3a1a", padding: "12px 16px",
                      borderRadius: "2px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px",
                    }}>
                      <div>
                        <div style={{ fontSize: "9px", color: "#2a5a2a", letterSpacing: "2px", marginBottom: "4px" }}>NL</div>
                        <div style={{ fontSize: "13px", color: "#7aff7a" }}>{ex.nl}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: "9px", color: "#2a5a2a", letterSpacing: "2px", marginBottom: "4px" }}>EN</div>
                        <div style={{ fontSize: "13px", color: "#5a8a5a" }}>{ex.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partner Practice */}
              {rule.practice && rule.practice.length > 0 && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <div style={{ fontSize: "10px", color: "#c8a84b", letterSpacing: "2px" }}>
                      💬 PARTNER PRACTICE
                    </div>
                    <button
                      onClick={() => setHidePracticeEn(!hidePracticeEn)}
                      style={{
                        background: hidePracticeEn ? "#c8a84b22" : "transparent",
                        border: "1px solid #c8a84b",
                        color: "#c8a84b",
                        padding: "3px 10px",
                        cursor: "pointer",
                        fontFamily: "inherit",
                        fontSize: "10px",
                        letterSpacing: "1px",
                        borderRadius: "2px",
                      }}
                    >
                      {hidePracticeEn ? "▶ SHOW ENGLISH" : "✕ HIDE ENGLISH"}
                    </button>
                  </div>
                  <div style={{ border: "1px solid #2a3a1a", borderRadius: "2px", overflow: "hidden" }}>
                    {rule.practice.map((line, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          padding: "10px 14px",
                          background: line.role === "A" ? "#080e08" : "#09080e",
                          borderBottom: i < rule.practice.length - 1 ? "1px solid #111811" : "none",
                        }}
                      >
                        <div style={{
                          minWidth: "22px",
                          height: "22px",
                          borderRadius: "50%",
                          background: line.role === "A" ? "#0d300d" : "#0d0d30",
                          color: line.role === "A" ? "#2ecc71" : "#7aaaff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: "bold",
                          flexShrink: 0,
                          marginTop: "1px",
                          border: `1px solid ${line.role === "A" ? "#1a4a1a" : "#1a1a4a"}`,
                        }}>
                          {line.role}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontSize: "13px",
                            color: line.role === "A" ? "#7aff7a" : "#7aaaff",
                            lineHeight: "1.5",
                          }}>
                            {line.dutch}
                          </div>
                          {!hidePracticeEn && (
                            <div style={{ fontSize: "11px", color: "#3a4a3a", marginTop: "3px", fontStyle: "italic" }}>
                              {line.english}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: "10px", color: "#2a3a2a", marginTop: "6px", letterSpacing: "1px" }}>
                    ___ = fill in your own · HIDE ENGLISH to practice blind · swap A/B roles each round
                  </div>
                </div>
              )}

              {/* Nav buttons */}
              <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
                {RULES.findIndex(r => r.id === active) > 0 && (
                  <button
                    onClick={() => handleSetActive(RULES[RULES.findIndex(r => r.id === active) - 1].id)}
                    style={{
                      background: "transparent", border: "1px solid #1a4a1a", color: "#3a7a3a",
                      padding: "8px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px", letterSpacing: "1px",
                    }}
                  >
                    ← PREV
                  </button>
                )}
                {RULES.findIndex(r => r.id === active) < RULES.length - 1 && (
                  <button
                    onClick={() => handleSetActive(RULES[RULES.findIndex(r => r.id === active) + 1].id)}
                    style={{
                      background: "#0d200d", border: "1px solid #2ecc71", color: "#2ecc71",
                      padding: "8px 16px", cursor: "pointer", fontFamily: "inherit", fontSize: "12px",
                      letterSpacing: "1px", marginLeft: "auto",
                    }}
                  >
                    NEXT →
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div style={{
        background: isQuiz ? "#e74c3c" : "#2ecc71",
        padding: "4px 16px",
        display: "flex",
        gap: "24px",
        fontSize: "11px",
        color: "#0a0e0a",
        fontWeight: "bold",
      }}>
        <span>MODULE {RULES.findIndex(r => r.id === active) + 1}/{RULES.length}</span>
        <span>{rule?.tag}</span>
        <span style={{ marginLeft: "auto" }}>🇧🇪 BELGISCH NEDERLANDS</span>
      </div>
    </div>
  );
}

function QuizView({ rule, quizIndex, quizSelected, quizSubmitted, quizScore, quizCompleted,
                    setQuizIndex, setQuizSelected, setQuizSubmitted, setQuizScore, setQuizCompleted }) {
  const total = rule.questions.length;

  const handleSelect = (idx) => {
    if (!quizSubmitted) setQuizSelected(idx);
  };

  const handleCheck = () => {
    if (quizSelected === null) return;
    setQuizSubmitted(true);
    if (quizSelected === rule.questions[quizIndex].answer) setQuizScore(s => s + 1);
  };

  const handleNext = () => {
    if (quizIndex + 1 >= total) {
      setQuizCompleted(true);
    } else {
      setQuizIndex(i => i + 1);
      setQuizSelected(null);
      setQuizSubmitted(false);
    }
  };

  const handleRetake = () => {
    setQuizIndex(0); setQuizSelected(null);
    setQuizSubmitted(false); setQuizScore(0); setQuizCompleted(false);
  };

  const LABELS = ["A", "B", "C", "D"];

  if (quizCompleted) {
    const pct = Math.round((quizScore / total) * 100);
    const grade = pct >= 90 ? "🏆 Uitstekend!" : pct >= 70 ? "✅ Goed gedaan!" : pct >= 50 ? "📖 Bijna!" : "💪 Blijf oefenen!";
    const gradeEn = pct >= 90 ? "Excellent!" : pct >= 70 ? "Well done!" : pct >= 50 ? "Almost there!" : "Keep practising!";
    return (
      <div style={{ maxWidth: "520px", margin: "40px auto", textAlign: "center" }}>
        <div style={{ fontSize: "11px", color: "#e74c3c", letterSpacing: "3px", marginBottom: "24px" }}>{rule.tag}</div>
        <div style={{ fontSize: "48px", marginBottom: "12px" }}>{pct >= 70 ? "🎉" : "📚"}</div>
        <div style={{ fontSize: "32px", color: "#7aff7a", fontWeight: "bold", marginBottom: "8px" }}>
          {quizScore} / {total}
        </div>
        <div style={{ fontSize: "20px", color: "#c8ffc8", marginBottom: "4px" }}>{pct}%</div>
        <div style={{ fontSize: "16px", color: "#7aff7a", marginBottom: "32px" }}>{grade} {gradeEn}</div>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={handleRetake}
            style={{
              background: "#0d200d", border: "1px solid #2ecc71", color: "#2ecc71",
              padding: "12px 28px", cursor: "pointer", fontFamily: "inherit",
              fontSize: "13px", letterSpacing: "1px", borderRadius: "2px",
            }}
          >
            ↺ OPNIEUW / RETAKE
          </button>
        </div>
        <div style={{ marginTop: "32px", padding: "16px", background: "#0d140d", border: "1px solid #1a3a1a", borderRadius: "2px" }}>
          <div style={{ fontSize: "10px", color: "#2a5a2a", letterSpacing: "2px", marginBottom: "10px" }}>QUESTION REVIEW</div>
          {rule.questions.map((q, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "6px 0", borderBottom: "1px solid #0d1a0d" }}>
              <span style={{ fontSize: "12px", color: "#3a5a3a", minWidth: "16px" }}>{i + 1}.</span>
              <span style={{ fontSize: "11px", color: "#5a8a5a", flex: 1, lineHeight: 1.5 }}>{q.q}</span>
              <span style={{ fontSize: "11px", color: "#2ecc71", minWidth: "60px", textAlign: "right" }}>
                {q.options[q.answer].length > 20 ? q.options[q.answer].slice(0, 18) + "…" : q.options[q.answer]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const q = rule.questions[quizIndex];
  const progress = ((quizIndex) / total) * 100;

  return (
    <div style={{ maxWidth: "600px" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <span style={{ fontSize: "10px", color: "#e74c3c", letterSpacing: "2px" }}>{rule.tag}</span>
          <span style={{ fontSize: "11px", color: "#3a5a3a" }}>
            {quizIndex + 1} / {total}
            {quizScore > 0 && <span style={{ color: "#2ecc71", marginLeft: "10px" }}>✓ {quizScore}</span>}
          </span>
        </div>
        {/* Progress bar */}
        <div style={{ height: "3px", background: "#1a2a1a", borderRadius: "2px", overflow: "hidden" }}>
          <div style={{
            height: "100%",
            width: `${progress}%`,
            background: "#2ecc71",
            transition: "width 0.3s ease",
          }} />
        </div>
      </div>

      {/* Question */}
      <div style={{
        background: "#0d140d",
        border: "1px solid #1a4a1a",
        borderLeft: "4px solid #e74c3c",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "2px",
        fontSize: "15px",
        color: "#c8ffc8",
        lineHeight: 1.6,
      }}>
        {q.q}
      </div>

      {/* Options */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
        {q.options.map((opt, i) => {
          let bg = "transparent";
          let border = "1px solid #1a3a1a";
          let color = "#7aff7a";
          let labelBg = "#0d200d";
          let labelColor = "#2ecc71";
          if (quizSubmitted) {
            if (i === q.answer) {
              bg = "#0d300d"; border = "1px solid #2ecc71"; color = "#2ecc71";
              labelBg = "#2ecc71"; labelColor = "#0a0e0a";
            } else if (i === quizSelected && i !== q.answer) {
              bg = "#300d0d"; border = "1px solid #e74c3c"; color = "#e74c3c";
              labelBg = "#e74c3c"; labelColor = "#0a0e0a";
            } else {
              color = "#2a4a2a"; border = "1px solid #111811";
            }
          } else if (i === quizSelected) {
            bg = "#0d200d"; border = "1px solid #7aff7a";
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                background: bg, border, borderRadius: "2px",
                padding: "12px 16px", cursor: quizSubmitted ? "default" : "pointer",
                fontFamily: "inherit", textAlign: "left", color, fontSize: "13px",
                transition: "all 0.15s ease",
              }}
            >
              <span style={{
                minWidth: "22px", height: "22px", borderRadius: "50%",
                background: labelBg, color: labelColor,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "10px", fontWeight: "bold", flexShrink: 0,
                border: `1px solid ${quizSubmitted && i === q.answer ? "#2ecc71" : quizSubmitted && i === quizSelected ? "#e74c3c" : "#1a4a1a"}`,
              }}>
                {LABELS[i]}
              </span>
              {opt}
              {quizSubmitted && i === q.answer && <span style={{ marginLeft: "auto", fontSize: "14px" }}>✓</span>}
              {quizSubmitted && i === quizSelected && i !== q.answer && <span style={{ marginLeft: "auto", fontSize: "14px" }}>✗</span>}
            </button>
          );
        })}
      </div>

      {/* Check button */}
      {!quizSubmitted && (
        <button
          onClick={handleCheck}
          disabled={quizSelected === null}
          style={{
            background: quizSelected !== null ? "#0d200d" : "transparent",
            border: `1px solid ${quizSelected !== null ? "#2ecc71" : "#1a3a1a"}`,
            color: quizSelected !== null ? "#2ecc71" : "#2a4a2a",
            padding: "10px 24px", cursor: quizSelected !== null ? "pointer" : "default",
            fontFamily: "inherit", fontSize: "12px", letterSpacing: "2px", borderRadius: "2px",
          }}
        >
          CHECK ANSWER
        </button>
      )}

      {/* Explanation + Next */}
      {quizSubmitted && (
        <div>
          <div style={{
            background: quizSelected === q.answer ? "#0d200d" : "#1a0d0d",
            border: `1px solid ${quizSelected === q.answer ? "#2ecc71" : "#e74c3c"}`,
            borderLeft: `4px solid ${quizSelected === q.answer ? "#2ecc71" : "#e74c3c"}`,
            padding: "14px 16px", marginBottom: "16px", borderRadius: "2px",
          }}>
            <div style={{ fontSize: "9px", letterSpacing: "2px", marginBottom: "6px",
              color: quizSelected === q.answer ? "#2ecc71" : "#e74c3c" }}>
              {quizSelected === q.answer ? "✓ CORRECT" : "✗ NOT QUITE"}
            </div>
            <div style={{ fontSize: "13px", color: "#a0c8a0", lineHeight: 1.6 }}>{q.explanation}</div>
          </div>
          <button
            onClick={handleNext}
            style={{
              background: "#0d200d", border: "1px solid #2ecc71", color: "#2ecc71",
              padding: "10px 24px", cursor: "pointer", fontFamily: "inherit",
              fontSize: "12px", letterSpacing: "2px", borderRadius: "2px",
            }}
          >
            {quizIndex + 1 >= total ? "SEE RESULTS →" : "NEXT →"}
          </button>
        </div>
      )}
    </div>
  );
}
