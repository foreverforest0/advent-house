window.ADVENT = {
  year: 2026,
  tagline: "31 окно. 31 слово. 7 минут в день.",

  types: {
    trend:   { ru: "Тренд",    ink: "#0F8C7E", glow: "#6FD3C7" },
    word:    { ru: "Слово",    ink: "#6B4BE0", glow: "#A98BFF" },
    screen:  { ru: "Экран",    ink: "#2C6BE0", glow: "#7FB0FF" },
    music:   { ru: "Музыка",   ink: "#C2417A", glow: "#FF9EC4" },
    fun:     { ru: "Игра",     ink: "#B26A00", glow: "#FFC46B" },
    culture: { ru: "Культура", ink: "#2E7D4F", glow: "#8FE0A5" },
    talk:    { ru: "Разговор", ink: "#C2492B", glow: "#FFA07A" },
    final:   { ru: "Финал",    ink: "#9A6B1F", glow: "#E8B86D" }
  },

  doors: [
    {
      d: 1, wd: "вт", type: "trend", min: 8, title: "Word of the Year",
      task: "Every December dictionaries choose a Word of the Year. Open one shortlist, pick the word that best describes 2026 for you — and explain why in three sentences.",
      b1: "The page gives definitions. Match each shortlisted word to its meaning, then finish the sentence: “2026 was the year of ___ because ___.”",
      b2: "Which of these words will people still use in 2030? Defend your choice — and name one word you think is overrated.",
      out: "Три предложения или голосовое на 40 секунд.",
      word: "a shortlist",
      note: "Открывает месяц не с Рождества, а с итогов года. Снимает ожидание «ёлочки» и сразу включает opinion language.",
      prompt: "2026 was the year of … because …",
      links: [
        { label: "Collins WOTY", href: "https://www.collinsdictionary.com/woty" },
        { label: "Oxford WOTY", href: "https://languages.oup.com/word-of-the-year/" },
        { label: "Merriam-Webster", href: "https://www.merriam-webster.com/wordplay/word-of-the-year" }
      ]
    },
    {
      d: 2, wd: "ср", type: "word", min: 9, title: "Winter word bank",
      task: "Eight winter expressions, eight meanings. Match them — then write a short text about your week using three of them.",
      b1: "Match with the definitions on the right. Then use three expressions in your answer.",
      b2: "Cover the definitions and guess from the words. Then check, and add one winter idiom of your own.",
      out: "Ответы + 3–5 предложений о своей неделе.",
      word: "to be snowed under",
      note: "Не «список слов», а список ситуаций. Студент сразу переносит их на свою неделю.",
      key: "1-E, 2-C, 3-G, 4-A, 5-H, 6-B, 7-D, 8-F",
      prompt: "My week was …",
      items: {
        a: ["to be snowed under", "to get cold feet", "festive spirit", "winter blues", "to wrap up warm", "a white Christmas", "to break the ice", "to ring in the New Year"],
        b: [
          "A — a low mood caused by short, dark days",
          "B — a Christmas with snow on the ground",
          "C — to suddenly become too nervous to do something you planned",
          "D — to say something that makes strangers feel comfortable",
          "E — to have so much work that you can’t do anything else",
          "F — to celebrate the start of a new year",
          "G — the generous, happy mood people have in December",
          "H — to put on enough clothes for cold weather"
        ]
      }
    },
    {
      d: 3, wd: "чт", type: "screen", min: 10, title: "The three-minute advert",
      task: "Watch the advert once with the sound off. What’s the story? Then watch it with sound and answer three questions: Who is it for? What’s the message? Would you buy it?",
      b1: "Put the five events in order: a girl walks into a shop / she follows a door / she meets her grandmother / they hug / the music changes. Then answer the first question in two sentences.",
      b2: "Is it emotional manipulation? Give two arguments — then say whether that changes your answer to “Would you buy it?”",
      out: "Три коротких ответа + одно слово, которое услышали.",
      word: "a tearjerker",
      note: "2 минуты, история почти без слов, культурный контекст. В паре: один смотрит без звука и пересказывает, второй — со звуком.",
      prompt: "Who is it for? What’s the message? Would you buy it?",
      media: [
        { label: "John Lewis, «The Gifting Hour» — 2:00", url: "https://www.youtube.com/watch?v=55ghIHTaRzM", note: "без слов в первой половине, идеально для «сначала без звука»" },
        { label: "Coca-Cola, «Holidays Are Coming» — 1:01", url: "https://www.youtube.com/watch?v=Yy6fByUmPuE", note: "если нужно короче и проще" }
      ]
    },
    {
      d: 4, wd: "пт", type: "fun", min: 7, title: "Caption this",
      task: "Three photos. Write the worst possible caption for each — then the best one for your favourite.",
      b1: "Start with “When you…” or “Me at 3 a.m. …” and keep it under ten words.",
      b2: "At least one caption has to be a pun or a cultural reference only a human would get.",
      out: "2–3 подписи.",
      word: "cringe",
      note: "Мем — самый короткий письменный продукт с мгновенной обратной связью. И юмор — самая сложная часть языка.",
      prompt: "When you …",
      images: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ugly_Christmas_Sweater_%2831391410050%29.jpg/1280px-Ugly_Christmas_Sweater_%2831391410050%29.jpg", alt: "Office party in ugly Christmas sweaters" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Cat_hiding_inside_a_Christmas_tree.jpg/1280px-Cat_hiding_inside_a_Christmas_tree.jpg", alt: "A black cat hiding inside a Christmas tree" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Christmas_Eve_dinner_table_with_Christmas_food_01.jpg/1280px-Christmas_Eve_dinner_table_with_Christmas_food_01.jpg", alt: "A Christmas Eve dinner table" }
      ]
    },
    {
      d: 5, wd: "сб", type: "culture", min: 9, title: "Christmas, but not yours",
      task: "Six Christmas traditions, six countries. Match them — then choose the one you would steal for your own family and explain why.",
      b1: "Match first. Then: “I’d steal ___ because ___.”",
      b2: "Which tradition tells us the most about that country’s values? Explain in three sentences.",
      out: "Соответствия + три предложения.",
      word: "to be rooted in",
      note: "Культурный перенос: студент сравнивает со своей страной. Хорошо тянет на дискуссию.",
      key: "KFC — Japan · Donald Duck — Sweden · books — Iceland · brooms — Norway · dawn masses — Philippines · spider web — Ukraine",
      prompt: "I’d steal … because …",
      items: {
        a: [
          "KFC for Christmas dinner",
          "Donald Duck on TV at 3 p.m. on 24 December",
          "Books as presents — then everyone reads all night",
          "Hiding every broom in the house",
          "Nine dawn church services before Christmas",
          "A spider-web decoration on the tree for luck"
        ],
        b: ["Japan", "Norway", "Philippines", "Iceland", "Ukraine", "Sweden"]
      }
    },
    {
      d: 6, wd: "вс", type: "talk", min: 8, title: "Would you rather",
      task: "Eight questions, no wrong answers. Answer three of them — but the word “better” is banned. Give a reason and an example instead.",
      b1: "Answer two. Use “I’d rather … because …”.",
      b2: "Answer four. Add “It depends on whether …” to one of them.",
      out: "Три ответа, 60 секунд.",
      word: "I’d rather",
      note: "Запрет на «better» — самый быстрый способ вытащить аргументацию вместо оценки.",
      prompt: "I’d rather … because …",
      items: {
        a: [
          "A white Christmas or a 25 °C Christmas?",
          "Presents at midnight on the 24th or at 8 a.m. on the 25th?",
          "The same film every year or a new one each time?",
          "Host dinner for twelve or be a guest at twelve dinners?",
          "No Christmas music until December or Christmas music all year?",
          "One perfect gift or ten small ones?",
          "New Year’s Eve in a club or on the sofa?",
          "A surprise gift you hate or exactly what you asked for?"
        ]
      }
    },
    {
      d: 7, wd: "пн", type: "music", min: 8, title: "Songs you grew up with",
      task: "Remember three songs that played in your childhood — at home, in the car, at your grandmother’s. For each one, write where you heard it.",
      b1: "Three lines: “I used to hear it in …”. Past simple is enough.",
      b2: "Then: which of the three explains your family best — and what does it say about them?",
      out: "Три строки: песня + где звучала.",
      word: "to grow up with",
      note: "Музыка детства — самый быстрый вход в ностальгию. Студент приносит своё, а не учебник.",
      prompt: "I used to hear it …",
      items: { a: ["Song 1 — where and when you heard it", "Song 2 — where and when", "Song 3 — where and when"] }
    },
    {
      d: 8, wd: "вт", type: "trend", min: 8, title: "Your Wrapped",
      task: "Open your Wrapped (or your most-played playlist). Find your top artist, your top song and your total minutes. Then write: “I spent ___ minutes listening to ___ — that’s ___ than last year.”",
      b1: "Three facts with comparatives: more, less, -er.",
      b2: "Turn your Wrapped into a one-line newspaper headline: “Local woman…”",
      out: "Три предложения.",
      word: "to be hooked on",
      note: "Выходит в начале декабря — идеальное совпадение с календарём. Если нет Spotify, берём любую статистику из приложения.",
      prompt: "I spent … minutes listening to … — that’s … than last year.",
      links: [{ label: "Spotify Wrapped", href: "https://www.spotify.com/wrapped/" }]
    },
    {
      d: 9, wd: "ср", type: "word", min: 8, title: "Over- and under-",
      task: "Add over- or under- to these eight words. Then confess: what did you overspend on in 2026?",
      b1: "Use the definitions. Then one sentence about yourself.",
      b2: "Three sentences: one about you, two about other people — at least one with “underrated”.",
      out: "Восемь ответов + одно предложение.",
      word: "underrated",
      note: "Приставки — скучная тема, которая становится смешной, как только речь заходит о личных провалах.",
      key: "oversleep, overspend, overthink, overdecorate, overcook, underestimate, underdress, underrate",
      prompt: "I overspent on …",
      items: {
        a: ["___sleep", "___spend", "___think", "___decorate", "___cook", "___estimate", "___dress", "___rate"],
        b: [
          "A — to think something is smaller or easier than it really is",
          "B — to wear too few clothes for the occasion",
          "C — to sleep longer than you planned",
          "D — to spend more than you can afford",
          "E — not to appreciate something enough",
          "F — to put up too many decorations",
          "G — to think about something far too much",
          "H — to cook something for too long"
        ]
      }
    },
    {
      d: 10, wd: "чт", type: "screen", min: 8, title: "Describe the film",
      task: "Describe a Christmas film in three sentences — no title, no actors, no character names. I’ll guess.",
      b1: "Genre + hero + problem. “It’s a comedy about a boy who …”",
      b2: "Not one cliché from the trailer. And the description must work for someone who has never seen it.",
      out: "Три предложения.",
      word: "a plot",
      note: "Говорение без подготовки и без материалов. Хорошо работает и в группе: все угадывают.",
      prompt: "It’s a film about …",
      items: { a: ["Rule: no title, no actors, no character names."] }
    },
    {
      d: 11, wd: "пт", type: "fun", min: 7, title: "Expectation vs reality",
      task: "One photo is Pinterest-perfect, one is real life. Describe both in two sentences each — then add one line starting “In reality…”.",
      b1: "Use “In the first photo… In the second…”.",
      b2: "Turn it into a meme caption plus a 20-second rant about Christmas photos.",
      out: "Четыре предложения или один мем.",
      word: "relatable",
      note: "Противопоставление — базовая структура B1–B2: while, whereas, on the other hand. Здесь она рождается сама.",
      prompt: "In reality, …",
      images: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Christmas_room_in_Sweden.jpg/1280px-Christmas_room_in_Sweden.jpg", alt: "A perfectly decorated Christmas room" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tabby_cat_in_Christmas_tree.jpg/1280px-Tabby_cat_in_Christmas_tree.jpg", alt: "A cat inside the Christmas tree" }
      ]
    },
    {
      d: 12, wd: "сб", type: "culture", min: 10, title: "The recipe",
      task: "Here is a recipe with the steps mixed up. Put them in order — then explain your own festive dish so that I can guess the country.",
      b1: "Use first, then, after that, finally.",
      b2: "Explain it to someone who has never cooked it, and add one warning.",
      out: "Порядок шагов + объяснение 40 секунд.",
      word: "to bring to the boil",
      note: "Рецепт — это sequencing, императив и меры. И лучший способ узнать, что студент ест на самом деле.",
      key: "2 → 3 → 5 → 4 → 6 → 7 → 1 → 8 (в карточке порядок перемешан)",
      prompt: "First, … Then, … After that, … Finally, …",
      links: [{ label: "BBC Good Food: gingerbread", href: "https://www.bbcgoodfood.com/recipes/gingerbread-men" }],
      items: {
        a: [
          "Bake for 10–12 minutes.",
          "Heat the oven to 180 °C.",
          "Mix the flour, ginger and cinnamon in a bowl.",
          "Melt the butter and the sugar in a pan.",
          "Add the melted butter to the dry ingredients.",
          "Beat in the egg and the honey.",
          "Roll the dough out and cut out the shapes.",
          "Let them cool completely before you decorate them."
        ]
      }
    },
    {
      d: 13, wd: "вс", type: "talk", min: 9, title: "A photo from childhood",
      task: "Find a photo of yourself as a child — any winter photo will do. Describe what is happening: who is next to you, what you are wearing, what you think you felt.",
      b1: "“I can see… I was wearing… I think I felt…”",
      b2: "What is NOT in the photo — what stayed outside the frame?",
      out: "5 предложений или 60 секунд.",
      word: "to look back on",
      note: "Если детского фото нет — пусть опишет то, которого нет, но которое помнит. Задание от этого только выигрывает: появляется воображение и might have been.",
      prompt: "In this photo I can see …",
      items: { a: ["Если фото нет: опишите кадр, которого у вас нет, но который помните."] }
    },
    {
      d: 14, wd: "пн", type: "music", min: 8, title: "Three seconds",
      task: "Three songs, three seconds each. Guess what they are — then say what mood each one switches on.",
      b1: "“It sounds like… It makes me want to…”",
      b2: "Which of the three is the most overrated, and what would you play instead?",
      out: "Три ответа.",
      word: "catchy",
      note: "Первые три секунды — самый честный тест на узнаваемость. Если студент не знает песню, он всё равно опишет настроение.",
      prompt: "It sounds like …",
      media: [
        { label: "Wham! — Last Christmas (0:00–0:03)", url: "https://www.youtube.com/watch?v=E8gmARGvPlI", note: "включите ровно три секунды" },
        { label: "Mariah Carey — All I Want for Christmas (0:00–0:03)", url: "https://www.youtube.com/watch?v=yXQViqx6GMY", note: "включите ровно три секунды" },
        { label: "Michael Bublé — It’s Beginning to Look a Lot Like Christmas", url: "https://www.youtube.com/watch?v=0bhsXykXxfg", note: "включите ровно три секунды" }
      ]
    },
    {
      d: 15, wd: "вт", type: "trend", min: 9, title: "What did the world google?",
      task: "Open the year in search. Pick three searches you do not understand, and explain one of them to me as if I had been offline all year.",
      b1: "One sentence about each: “People searched for ___ because ___.”",
      b2: "Which single search says the most about 2026? Defend it in three sentences.",
      out: "Три предложения.",
      word: "to look up",
      note: "Бесконечный источник трендов, который обновляется каждый год сам. Тренирует объяснение и догадку.",
      prompt: "People searched for … because …",
      links: [{ label: "Google: Year in Search", href: "https://trends.google.com/trends/yis/" }]
    },
    {
      d: 16, wd: "ср", type: "word", min: 8, title: "Make, do, have, take",
      task: "Match the words to the right verb. Then describe your ideal 25 December using four of the phrases.",
      b1: "Match first, then four sentences.",
      b2: "Add three collocations of your own and test me with them.",
      out: "Соответствия + 4 предложения.",
      word: "to make a toast",
      note: "Коллокации — главный маркер «звучит по-английски». Ошибки здесь самые заметные, поэтому и прогресс самый заметный.",
      key: "make a wish / make a toast · do the shopping / do the dishes · have a blast / have a go / have a lie-in · take a photo",
      prompt: "On 25 December I usually …",
      items: {
        a: ["___ a wish", "___ the shopping", "___ a blast", "___ a toast", "___ the dishes", "___ a photo", "___ a go", "___ a lie-in"],
        b: ["make", "do", "have", "take"]
      }
    },
    {
      d: 17, wd: "чт", type: "screen", min: 10, title: "What would you say?",
      task: "Watch the scene with subtitles off. Pause before the last line: what would your character say? Then finish it and compare with the film.",
      b1: "Write two lines of dialogue.",
      b2: "Rewrite the scene so that it ends badly — five lines.",
      out: "Ваша реплика.",
      word: "to storm off",
      note: "Сцена без последней реплики — мгновенный speaking task, который невозможно сделать «правильно».",
      prompt: "My line: …",
      media: [
        { label: "Elf — Buddy meets his dad — 2:48", url: "https://www.youtube.com/watch?v=WeYA5OKAFPQ", note: "остановите за 20 секунд до конца" },
        { label: "The Office US — Yankee Swap — 4:18", url: "https://www.youtube.com/watch?v=19ulSNSRKyU", note: "для B2, если группа любит сериалы" }
      ]
    },
    {
      d: 18, wd: "пт", type: "fun", min: 8, title: "Meme translation",
      task: "Take a Russian New Year meme. Translate it so that an English speaker laughs — then explain in two sentences why it is funny.",
      b1: "Translate, then add “It’s funny because…”.",
      b2: "Adapt it: change the reference so that a British person gets it instantly.",
      out: "Мем + перевод.",
      word: "to land a joke",
      note: "Лучшее упражнение на культурный перенос. Сразу видно, где калька, а где живой язык.",
      prompt: "It’s funny because …"
    },
    {
      d: 19, wd: "сб", type: "culture", min: 9, title: "A tradition that died out",
      task: "Remember a tradition from your childhood that nobody repeats any more. Describe it in detail — then explain why it disappeared.",
      b1: "“Every year we… Now nobody…”",
      b2: "Would you bring it back? What would it cost, and who would object?",
      out: "60–90 секунд или 6–8 предложений.",
      word: "to die out",
      note: "Исчезнувшие традиции — это одновременно past simple, used to и культурная рефлексия.",
      prompt: "Every year we … Now nobody …",
      items: { a: ["Например: карнавальные костюмы из марли, стенгазеты, походы в баню 31-го, самодельные ёлочные игрушки."] }
    },
    {
      d: 20, wd: "вс", type: "talk", min: 9, title: "2026 in five words",
      task: "Choose five words for your 2026 — not “good” and not “bad”. Then tell me the story behind two of them.",
      b1: "Five words plus one sentence for each.",
      b2: "Then write your year as a 30-word news headline and explain the choice.",
      out: "Пять слов + история двух.",
      word: "a turning point",
      note: "Ограничение «не good и не bad» — самый быстрый способ вытащить настоящую лексику.",
      prompt: "My five words: …",
      items: { a: ["chaotic", "quiet", "expensive", "finally", "unexpected", "slow", "brave", "lucky"] }
    },
    {
      d: 21, wd: "пн", type: "music", min: 8, title: "The song of your year",
      task: "Pick one song that sums up your 2026. Send two lines of lyrics and one sentence explaining why — without using “it’s good”.",
      b1: "“This song is about… It reminds me of…”",
      b2: "Convince me to add it to my playlist in three sentences, as if I hated your genre.",
      out: "Песня + две строки + причина.",
      word: "to resonate with",
      note: "Музыка как личный артефакт: студент приносит своё. Мотивация резко выше.",
      prompt: "This song is about … It reminds me of …"
    },
    {
      d: 22, wd: "вт", type: "trend", min: 8, title: "In and out for 2027",
      task: "Make an in / out list for 2027: three things in, three things out. Then defend the most controversial one.",
      b1: "Two and two, using “I think ___ will be in.”",
      b2: "Four and four, plus “the most overhyped thing of 2026 was…”.",
      out: "Список.",
      word: "overhyped",
      note: "Формат, который студенты видят в соцсетях каждый декабрь, — поэтому язык берут охотно.",
      prompt: "IN: … OUT: …",
      items: { a: ["IN: slow mornings, physical books, voice notes", "OUT: 5 a.m. workouts, endless group chats, “let’s circle back”"] }
    },
    {
      d: 23, wd: "ср", type: "word", min: 7, title: "Word chain",
      task: "Start with SNOW. Each next word must begin with the last letter of the previous one. Ten words, no repeats.",
      b1: "Any words are fine — the point is speed.",
      b2: "Winter words only, and at least one compound (snowman, ice-skating).",
      out: "10 слов.",
      word: "to come up with",
      note: "Быстрая игра на скорость и на первую букву. Хорошо работает голосом: студент диктует цепочку.",
      prompt: "snow → window → …",
      items: { a: ["snow → window → …", "Подсказка: думайте о буквах, а не о смысле."] }
    },
    {
      d: 24, wd: "чт", type: "screen", min: 9, title: "No words needed",
      task: "Watch a short animation with no dialogue. Retell it in five sentences — and the words “and then” are banned.",
      b1: "Five sentences in the past simple.",
      b2: "Add one line of dialogue for each of the two main characters.",
      out: "5 предложений или голосовое.",
      word: "heartwarming",
      note: "Paperman — 6 минут, можно смотреть первые три. Пересказ без “and then” тренирует linking words.",
      prompt: "First, … Later, … In the end, …",
      media: [
        { label: "Paperman (Disney) — 6:20", url: "https://www.youtube.com/watch?v=XrqSF2OOz_M", note: "смотрите первые 3 минуты" },
        { label: "Sainsbury’s «1914» — 3:40", url: "https://www.youtube.com/watch?v=NWF2JBb1bvM", note: "сильнее и мрачнее, для B2" }
      ]
    },
    {
      d: 25, wd: "пт", type: "fun", min: 6, title: "Alphabet in two minutes",
      task: "Christmas from A to Z: one word for each letter, two minutes, no repeats.",
      b1: "Ten letters is already a win.",
      b2: "All 26 — plus one word with a story behind it.",
      out: "Список букв и слов.",
      word: "hearty",
      note: "25-го почти никто не учится: задание должно занимать пять минут и не требовать подготовки.",
      prompt: "A — advent … B — bells …",
      items: { a: ["A — advent calendar", "B — bells", "C — candle", "…"] }
    },
    {
      d: 26, wd: "сб", type: "culture", min: 8, title: "Explain it to a twelve-year-old",
      task: "Take an object from your childhood that a twelve-year-old today has never seen (a pager, a floppy disk, a cassette). Explain it in four sentences — without naming it.",
      b1: "“It was for… You used it when…”",
      b2: "What did we lose when it disappeared?",
      out: "4 предложения, я угадываю.",
      word: "obsolete",
      note: "Описание функции без названия — это парафраз, самый переносимый навык на свете.",
      prompt: "It was for … You used it when …",
      items: { a: ["Например: пейджер, дискета, кассета, плёнка, мыло, бумажная карта, телефон с кнопками."] }
    },
    {
      d: 27, wd: "вс", type: "talk", min: 9, title: "New Year then and now",
      task: "New Year’s Eve at ten versus now. Two columns: food, people, the time you went to bed, one thing you miss.",
      b1: "Past simple and present simple, side by side.",
      b2: "Which version is actually better — and why is that an uncomfortable question?",
      out: "Таблица + 45 секунд.",
      word: "to see in the New Year",
      note: "Сравнение двух жизней в одной таблице — готовый материал на 5–6 предложений.",
      prompt: "When I was ten, … Now I …",
      items: { a: ["Food: then / now", "People: then / now", "Bedtime: then / now", "One thing you miss"] }
    },
    {
      d: 28, wd: "пн", type: "music", min: 8, title: "Pitch a song",
      task: "Choose the best song of 2026 and sell it in three sentences to someone who hates your genre. “It’s good” is banned.",
      b1: "“It’s perfect for… You’ll like it if…”",
      b2: "Sell it to a sixty-year-old classical music fan.",
      out: "Три предложения или 45 секунд.",
      word: "catchy",
      note: "Навык «продать идею» переносится прямо в рабочий английский.",
      prompt: "It’s perfect for … You’ll like it if …",
      items: { a: ["Forbidden: good, nice, cool, amazing."] }
    },
    {
      d: 29, wd: "вт", type: "trend", min: 9, title: "Mini survey",
      task: "Ask five people one question: “What is your resolution for 2027?” Then report the results.",
      b1: "“Three out of five people said…”",
      b2: "Add one surprising finding and one conclusion: “This suggests that…”",
      out: "Мини-отчёт, 60 секунд.",
      word: "to carry out a survey",
      note: "Настоящие данные вместо выдуманной статистики. Плюс reported speech и квантификаторы — сами, без правила.",
      prompt: "Three out of five people said …",
      items: { a: ["3 out of 5 people said…", "The most popular answer was…", "Nobody mentioned…"] }
    },
    {
      d: 30, wd: "ср", type: "word", min: 8, title: "3–2–1",
      task: "Three things you learned in English this year, two you will keep doing, one you will drop. Then: which three words from this calendar do you still remember?",
      b1: "A short list is fine.",
      b2: "Add: what would you tell yourself in January 2026?",
      out: "Список + 30 секунд.",
      word: "to look back on",
      note: "Финальная рефлексия — половина удержания. И к 31-му у студента уже есть слова для финальной истории.",
      prompt: "3 learned · 2 keep · 1 drop",
      items: { a: ["3 learned", "2 keep", "1 drop", "3 words you still remember"] }
    },
    {
      d: 31, wd: "чт", type: "final", min: 10, title: "Snow globe story",
      task: "Use ten words from this calendar in one story. Last frame: your one-sentence wish for 2027.",
      b1: "Six words, sixty seconds.",
      b2: "Ten words, ninety seconds, and one plot twist.",
      out: "История + одно желание.",
      word: "to ring in the New Year",
      note: "Финал собирает месяц в одно. Желания можно собрать в общий пост или открытку группы.",
      prompt: "My wish for 2027: …",
      items: { a: ["All 23 “words of the day” from this calendar."] }
    }
  ]
};
