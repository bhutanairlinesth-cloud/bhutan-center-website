export type Attraction = {
  name: string;
  short: string;
  tag: string;
};

export type BhutanCity = {
  id: "paro" | "thimphu" | "punakha" | "gangtey";
  name: string;
  thaiName: string;
  kicker: string;
  description: string;
  altitude: string;
  stay: string;
  attractionCount: number;
  hotelCount: number;
  mapX: number;
  mapY: number;
  accent: string;
  attractions: Attraction[];
};

export const bhutanCities: BhutanCity[] = [
  {
    id: "paro",
    name: "Paro",
    thaiName: "พาโร",
    kicker: "THE GATEWAY",
    description:
      "เมืองหุบเขาที่เป็นประตูสู่ภูฏาน และเป็นที่ตั้งของสนามบินนานาชาติ ไฮไลต์สำคัญคือวัดทักซัง พาโรซอง และย่านเมืองเก่าที่เดินเที่ยวได้สบาย",
    altitude: "2,280 m",
    stay: "1–2 nights",
    attractionCount: 5,
    hotelCount: 5,
    mapX: 19.5,
    mapY: 55.2,
    accent: "#ef9a5a",
    attractions: [
      { name: "วัดทักซัง", short: "Tiger’s Nest มหาวิหารศักดิ์สิทธิ์บนหน้าผา จุดหมายสำคัญที่สุดแห่งหนึ่งของภูฏาน", tag: "ICONIC" },
      { name: "พาโรซอง", short: "ป้อมปราการริมน้ำที่โดดเด่นด้วยสถาปัตยกรรมแบบภูฏานดั้งเดิม", tag: "HERITAGE" },
      { name: "National Museum", short: "พิพิธภัณฑสถานแห่งชาติที่รวบรวมประวัติศาสตร์ ศิลปะ และวัฒนธรรมภูฏาน", tag: "CULTURE" },
      { name: "วัดคิชู ลาคัง", short: "หนึ่งในวัดเก่าแก่ที่สุดของภูฏาน เชื่อมโยงกับประวัติศาสตร์พุทธศาสนาในหิมาลัย", tag: "TEMPLE" },
      { name: "Paro Street", short: "ย่านเดินเล่น ช้อปของฝาก งานหัตถกรรม ข้าวแดง น้ำผึ้ง และผลิตภัณฑ์ท้องถิ่น", tag: "LOCAL" },
    ],
  },
  {
    id: "thimphu",
    name: "Thimphu",
    thaiName: "ทิมพู",
    kicker: "THE CAPITAL",
    description:
      "เมืองหลวงของภูฏานที่ผสมชีวิตร่วมสมัยเข้ากับวัฒนธรรมดั้งเดิม มีทั้งพระใหญ่ ป้อมตาชิโชซอง อนุสรณ์สถาน และสถานที่เรียนรู้วิถีชีวิตชาวภูฏาน",
    altitude: "2,334 m",
    stay: "1–2 nights",
    attractionCount: 5,
    hotelCount: 6,
    mapX: 26.1,
    mapY: 52.6,
    accent: "#e55f78",
    attractions: [
      { name: "Tashichho Dzong", short: "ป้อมแห่งศาสนาอันเป็นมงคล และสถานที่สำคัญของฝ่ายบริหารประเทศ", tag: "LANDMARK" },
      { name: "Buddha Dordenma", short: "พระพุทธรูปขนาดใหญ่บนเนินเหนือเมือง พร้อมวิวทิมพูแบบพาโนรามา", tag: "VIEWPOINT" },
      { name: "Memorial Chorten", short: "อนุสรณ์สถานสำคัญและศูนย์รวมศรัทธาของชาวทิมพู", tag: "SPIRITUAL" },
      { name: "Motithang Takin Preserve", short: "ชมทาคิน สัตว์ประจำชาติของภูฏานในพื้นที่อนุรักษ์", tag: "NATURE" },
      { name: "Bhutan Post Office", short: "ทำแสตมป์รูปตัวเองและชมเสน่ห์งานไปรษณีย์ที่มีเอกลักษณ์ของภูฏาน", tag: "EXPERIENCE" },
    ],
  },
  {
    id: "punakha",
    name: "Punakha",
    thaiName: "พูนาคา",
    kicker: "THE OLD CAPITAL",
    description:
      "อดีตเมืองหลวงที่มีอากาศอบอุ่นกว่าเมืองบนที่สูง โดดเด่นด้วยพูนาคาซอง จุดบรรจบของแม่น้ำสองสาย และเส้นทางธรรมชาติผ่านโดชูลาพาส",
    altitude: "1,200 m",
    stay: "1 night",
    attractionCount: 3,
    hotelCount: 4,
    mapX: 33.2,
    mapY: 45.3,
    accent: "#f0b548",
    attractions: [
      { name: "Punakha Dzong", short: "หนึ่งในป้อมปราการที่งดงามที่สุดของภูฏาน ตั้งอยู่ตรงจุดบรรจบของแม่น้ำโพและแม่น้ำโม", tag: "MUST SEE" },
      { name: "Dochula Pass", short: "จุดชมวิวที่มีสถูปแห่งชัยชนะ 108 องค์ และมองเห็นเทือกเขาหิมาลัยในวันที่อากาศเปิด", tag: "SCENIC" },
      { name: "Chimi Lhakhang", short: "วัดกลางหุบเขาที่มีเรื่องราวความศรัทธาเกี่ยวกับพรด้านครอบครัวและบุตร", tag: "TEMPLE" },
    ],
  },
  {
    id: "gangtey",
    name: "Gangtey",
    thaiName: "กังเต",
    kicker: "THE VALLEY",
    description:
      "เส้นทางธรรมชาติที่เพิ่มความลึกให้ทริปภูฏาน หุบเขาผอบจิกะมีภูมิทัศน์กว้าง โล่ง สงบ และเป็นพื้นที่สำคัญของนกกระเรียนคอดำในฤดูกาลอพยพ",
    altitude: "3,000 m",
    stay: "Day trip / 1 night",
    attractionCount: 4,
    hotelCount: 3,
    mapX: 41.8,
    mapY: 53.5,
    accent: "#6a9c78",
    attractions: [
      { name: "Gangtey Goenpa", short: "วัดสำคัญบนเนินเหนือหุบเขา จุดเริ่มต้นที่ดีสำหรับทำความรู้จักพื้นที่กังเต", tag: "MONASTERY" },
      { name: "Phobjikha Valley", short: "หุบเขาทุ่งหญ้ากว้างที่มีธรรมชาติสมบูรณ์และบรรยากาศสงบเป็นเอกลักษณ์", tag: "NATURE" },
      { name: "Gangtey Nature Trail", short: "เส้นทางเดินธรรมชาติผ่านหมู่บ้าน ป่าสน และพื้นที่เปิดของหุบเขา", tag: "WALK" },
      { name: "Black-necked Crane Centre", short: "เรียนรู้ระบบนิเวศและนกกระเรียนคอดำซึ่งอพยพมาในช่วงฤดูหนาว", tag: "WILDLIFE" },
    ],
  },
];

export function getCityByName(name: string) {
  const key = name.toLowerCase().trim();
  return bhutanCities.find(
    (city) => city.name.toLowerCase() === key || city.id === key
  );
}

export function getCitiesByNames(names: string[]) {
  return names.map(getCityByName).filter(Boolean) as BhutanCity[];
}
