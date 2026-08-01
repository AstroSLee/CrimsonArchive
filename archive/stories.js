/*
  The Crimson Archive — story data
  ---------------------------------
  Each entry becomes one flower in the garden. To add a new story,
  copy an object below, fill in your own fields, and add it to the
  STORIES array. No build step needed — just save and refresh.

  Fields:
    id        short unique slug, used internally
    name      person's name, or the name of the event
    kind      "person", "event", "poem", or "spirit"
    years     life dates, or the date of the event
    role      one-line description shown under the name
    summary   1-2 sentence summary shown collapsed
    body      array of paragraph strings, shown when expanded
    source    optional short note on where this account draws from
*/

const STORIES = [
  {
    id: "yu-gwan-sun",
    name: "Yu Gwan-sun",
    kind: "person",
    years: "1902 – 1920",
    role: "Student organizer, March 1st Movement",
    summary:
      "A sixteen-year-old student who helped organize one of the largest independence protests outside Seoul, and died of injuries from her imprisonment before turning eighteen.",
    body: [
      "Yu Gwan-sun was a student at Ewha Haktang in Seoul when the March 1st Movement began in 1919. When Japanese colonial authorities closed schools to stop students from joining the protests, she returned to her hometown of Cheonan and helped organize a demonstration at the Aunae marketplace on April 1, 1919 — one of the largest independence rallies held outside the capital.",
      "Japanese police opened fire on the crowd, killing her parents among many others. Yu was arrested, tried, and sentenced to prison, where she continued to organize protests among fellow inmates at Seodaemun Prison. She died in custody in 1920, at seventeen, from injuries sustained under torture and mistreatment.",
      "She is remembered today as one of the most widely known symbols of the independence movement, particularly for the role young people and women played in it.",
    ],
    source: "Widely documented in Korean historical records and school curricula.",
  },
  {
    id: "sam-il-movement",
    name: "The March 1st Movement",
    kind: "event",
    years: "March 1, 1919",
    role: "Nationwide declaration of independence",
    summary:
      "A coordinated, nationwide reading of a Declaration of Independence that grew into peaceful demonstrations across the country — met with lethal force by colonial authorities.",
    body: [
      "On March 1, 1919, thirty-three Korean religious and civic leaders publicly read a Declaration of Independence at Tapgol Park in Seoul, timed to coincide with the funeral of the deposed Emperor Gojong. The declaration and the demonstrations that followed spread rapidly to towns and villages across the peninsula over the following weeks.",
      "Estimates of participation run into the hundreds of thousands, if not more, across an occupied population under close surveillance. The Japanese colonial government responded with mass arrests and lethal force; contemporary estimates of the dead range from the low thousands into the tens of thousands, with tens of thousands more arrested or imprisoned.",
      "The movement did not achieve immediate independence, but it is regarded as a foundational moment for Korean national identity and led directly to the formation of the Provisional Government of the Republic of Korea in Shanghai later that year.",
    ],
    source: "Documented across Korean and international historical sources on the colonial period.",
  },
  {
    id: "jeam-ri",
    name: "The Jeam-ri Massacre",
    kind: "event",
    years: "April 15, 1919",
    role: "Village of Jeam-ri, Hwaseong",
    summary:
      "Japanese military police locked villagers inside a church and opened fire, then burned the building — one of the most documented atrocities of the suppression that followed the March 1st Movement.",
    body: [
      "In the weeks after the March 1st Movement, Japanese military police arrived in the village of Jeam-ri, near Hwaseong, in apparent reprisal for local participation in the protests. Villagers, including church members, were ordered into the local church building.",
      "Once inside, the doors were sealed and the building was fired upon before being set alight, killing more than twenty people. The massacre was documented and publicized internationally by foreign missionaries present in Korea at the time, including accounts by Frank W. Schofield, a Canadian missionary and one of the few foreign witnesses to colonial-era violence who worked to bring it to outside attention.",
      "Jeam-ri is preserved today as a memorial site, and stands as one of the most concretely documented instances of the violence used to suppress the independence movement.",
    ],
    source: "Corroborated by contemporary foreign missionary accounts, notably Frank Schofield.",
  },
  {
    id: "an-jung-geun",
    name: "An Jung-geun",
    kind: "person",
    years: "1879 – 1910",
    role: "Independence activist",
    summary:
      "Shot and killed Itō Hirobumi, the former Resident-General of Korea, at Harbin railway station in 1909, and was executed the following year.",
    body: [
      "An Jung-geun was an independence activist who, on October 26, 1909, shot and killed Itō Hirobumi at the railway station in Harbin, Manchuria. Itō had served as Japan's Resident-General in Korea and was a chief architect of the protectorate treaties that stripped Korea of its sovereignty ahead of full annexation in 1910.",
      "An was captured immediately, tried by a Japanese court, and executed by hanging in March 1910 at Lüshun (Port Arthur) prison. While imprisoned, he wrote 'A Treatise on Peace in East Asia,' arguing for regional cooperation between Korea, China, and Japan rather than domination — left unfinished at his death.",
      "He is regarded in Korea as a patriot who resisted colonization at the cost of his life, and remains a significant, if debated, figure in the broader history of the independence movement.",
    ],
    source: "Widely documented historical event; An's writings survive in translation.",
  },
  {
    id: "yun-bong-gil",
    name: "Yun Bong-gil",
    kind: "person",
    years: "1908 – 1932",
    role: "Independence activist, Hongkou Park bombing",
    summary:
      "Carried out a bombing at a Japanese military celebration in Shanghai in 1932, striking a blow that drew international attention to the independence movement in exile.",
    body: [
      "Yun Bong-gil joined the Korean Patriotic Organization, affiliated with the Provisional Government of the Republic of Korea then based in exile in Shanghai. On April 29, 1932, during a Japanese celebration of Emperor Hirohito's birthday and a military victory in Shanghai's Hongkou (Hongkew) Park, Yun detonated a bomb at the ceremony.",
      "The attack killed and wounded several senior Japanese military and civilian officials in attendance. Yun was captured at the scene, tried, and executed by the Japanese military in December 1932, at the age of twenty-four.",
      "The action significantly raised the international profile of the Provisional Government and the broader independence cause, drawing sympathy and support from the Chinese Nationalist government among others.",
    ],
    source: "Widely documented historical event.",
  },
  {
    id: "gwangju-uprising",
    name: "The Gwangju Uprising (5·18 Gwangju Minjuhwa Undong)",
    kind: "event",
    years: "May 18 – 27, 1980",
    role: "Pro-democracy uprising, Gwangju",
    summary:
      "For ten days, the citizens of Gwangju rose up against martial law and a military crackdown — one of the defining, and most violently suppressed, moments in Korea's struggle for democracy.",
    body: [
      "On May 18, 1980, in the city of Gwangju, student protests against the expansion of martial law under General Chun Doo-hwan were met with a brutal crackdown by army paratroopers. As soldiers beat and bayoneted demonstrators and bystanders, outrage spread through the city, and thousands of ordinary citizens — students, workers, shopkeepers, taxi and bus drivers — joined the uprising, eventually driving government forces out of the city center by May 21.",
      "For several days, Gwangju governed itself: citizen committees organized food, blood donations, and order in the absence of the state. On May 27, the military retook the city by force, killing many who made a final stand at the Provincial Office. Official death tolls remain disputed; credible estimates range from the low hundreds into the thousands, with many more wounded, arrested, or forcibly disappeared.",
      "For years afterward, the uprising was censored and its participants labeled rioters by the state. It has since been recognized as a foundational moment in Korea's democratization, directly shaping the mass protests of 1987 and the country's eventual transition to civilian, democratic rule.",
    ],
    source: "Documented in Korean government truth commission findings and extensive historical and journalistic record.",
  },
  {
    id: "december-third",
    name: "The December Third Martial Law Crisis (12·3)",
    kind: "event",
    years: "December 3 – 4, 2024",
    role: "Attempted martial law, and its reversal",
    summary:
      "On the night of December 3, 2024, a sitting president declared martial law and sent troops into the National Assembly — and within hours, lawmakers and ordinary citizens forced its reversal, in one of the most direct tests of Korean democracy in a generation.",
    body: [
      "Late on the evening of December 3, 2024, President Yoon Suk-yeol declared martial law in a live television address, citing unspecified threats from 'anti-state forces' and moving to suspend political activity and press freedom. Armed soldiers and helicopters were deployed to the National Assembly building in Seoul in an apparent attempt to prevent lawmakers from convening.",
      "Despite the blockade, National Assembly members climbed fences and pushed past soldiers to reach the chamber. In the early hours of December 4, 190 lawmakers present unanimously voted to lift the martial law order — a vote the constitution required the president to honor. Outside, crowds of ordinary citizens gathered at the Assembly through the night to resist the troops, echoing the same instinct for public resistance seen in Gwangju in 1980 and in the streets in 1987.",
      "Yoon rescinded the declaration hours later. He was impeached by the National Assembly that December and removed from office by the Constitutional Court in the months that followed. The episode stands as the most recent chapter in Korea's long, ongoing relationship with the fight to keep its democracy — a reminder that the history this archive remembers is not only in the past.",
    ],
    source: "Widely reported contemporaneous news coverage and National Assembly voting records.",
  },
  {
    id: "lee-han-yeol",
    name: "Lee Han-yeol",
    kind: "person",
    years: "1966 – 1987",
    role: "Student, June Democratic Uprising",
    summary:
      "A Yonsei University student struck in the head by a tear gas canister during a 1987 protest, whose death became the spark that forced Korea's military government to accept direct presidential elections.",
    body: [
      "Lee Han-yeol was a 20-year-old economics student at Yonsei University in Seoul when, on June 9, 1987, he was struck in the back of the head by a tear gas canister fired by riot police during a demonstration against the military government of Chun Doo-hwan — the same government responsible for the Gwangju massacre seven years earlier, whose truth was still being suppressed.",
      "A photograph of Lee, bleeding and held up by a fellow student moments after being hit, spread nationwide and became one of the defining images of the movement. He remained in a coma for nearly a month before dying on July 5, 1987. His funeral in Seoul drew an estimated one million mourners.",
      "His death, during what became known as the June Democratic Uprising, was a decisive turning point: within weeks, the government issued the June 29 Declaration, agreeing to direct presidential elections and a new, more democratic constitution — reforms that still shape South Korea's political system today.",
    ],
    source: "Widely documented; his memory is preserved at the Lee Han-yeol Memorial Museum in Seoul.",
  },
  {
    id: "jindallaekkot",
    name: "Kim So-wol — \"Jindallaekkot\" (Azaleas)",
    kind: "poem",
    years: "1925",
    role: "Poem, published under Japanese colonial rule",
    summary:
      "Korea's most beloved poem, named for the jindalle — the azalea that blankets Korean mountainsides each spring — long read as a quiet elegy for a nation under occupation as much as a farewell between lovers.",
    body: [
      "Kim So-wol (김소월, 1902 – 1934) published \"진달래꽃\" (Jindallaekkot, \"Azaleas\") in 1925, during the harshest years of Japanese colonial rule, when direct political expression was heavily censored. On its surface it is a poem of parting — a speaker vowing to bear a lover's leaving without complaint. Beneath that surface, generations of Korean readers have heard something larger: a nation's grief and endurance, spoken in the only language colonial censors would allow.",
      "나 보기가 역겨워 가실 때에는 / 말없이 고이 보내 드리오리다. / 영변에 약산 진달래꽃 / 아름 따다 가실 길에 뿌리오리다.",
      "\"If you leave me, weary of my sight, I will let you go, gently, without a word. From the hills of Yaksan in Yeongbyeon, I will gather an armful of azaleas and scatter them along the path you take.\"",
      "The jindalle blooms wild and unplanted across Korea's mountains every spring — a flower that needed no one's permission to return, year after year, no matter who held the land. That endurance is why it belongs in this garden alongside the people and events remembered here: a flower that came to mean home, and the freedom to return to it.",
    ],
    source: "Kim So-wol, \"진달래꽃\" (1925), public domain. Translation adapted for this archive.",
  },
  {
    id: "jesus-christ",
    name: "Jesus Christ",
    kind: "spirit",
    years: "c. 4 BC – c. AD 30–33",
    role: "The archive's final flower — sacrifice beyond history",
    summary:
      "Placed last in the garden: blood spilled not for one nation's freedom, but, in the Christian faith, for the freedom of all — the archive's reach into the spiritual realm made explicit.",
    body: [
      "Every flower before this one marks a person or a moment — bound to a place, a date, a cause. This last one is placed apart from history, at the edge where this archive said it would also reach: the spiritual realm.",
      "In the Christian faith, Jesus Christ's death is remembered not as defeat but as the ultimate act of sacrifice — blood laid down willingly, for a freedom no army could win: freedom from sin, from death, from separation. Three days later, the resurrection turned that sacrifice into the faith's central claim to victory over death itself.",
      "He closes the garden the way the archive opens it — with the conviction that blood spilled in love is never wasted, and that red can mean mourning and celebration in the very same breath.",
    ],
    source: "Central account of the Christian New Testament.",
  },
];
