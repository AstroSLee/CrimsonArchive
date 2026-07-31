/*
  The Crimson Archive — story data
  ---------------------------------
  Each entry becomes one flower in the garden. To add a new story,
  copy an object below, fill in your own fields, and add it to the
  STORIES array. No build step needed — just save and refresh.

  Fields:
    id        short unique slug, used internally
    name      person's name, or the name of the event
    kind      "person" or "event"
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
];
