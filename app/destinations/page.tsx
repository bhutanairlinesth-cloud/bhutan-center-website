import Link from "next/link";
import SectionIntro from "@/components/SectionIntro";
import { metadataForPath } from "@/lib/seo-config";
import { loadSeoState } from "@/lib/seo-store";

export async function generateMetadata() {
  const seo = await loadSeoState();
  return metadataForPath("/destinations", seo.pages);
}

const groups = [
  {
    city: "Paro",
    thai: "เมืองพาโร",
    intro: "ประตูสู่ภูฏานและหุบเขาที่เต็มไปด้วยวัด ป้อม และสถาปัตยกรรมดั้งเดิม",
    places: [
      ["วัดทักซัง", "มหาวิหารศักดิ์สิทธิ์บนหน้าผา หนึ่งในสถานที่แสวงบุญสำคัญและภาพจำที่โด่งดังที่สุดของภูฏาน"],
      ["พาโรซอง", "ป้อมปราการประจำเมืองพาโรที่โดดเด่นด้วยสถาปัตยกรรมแบบซองและภูมิทัศน์รอบหุบเขา"],
      ["วัดคิชู", "หนึ่งในวัดเก่าแก่ของภูฏานที่มีประวัติยาวนานกว่าพันปี และยังคงได้รับการดูแลอย่างต่อเนื่อง"],
      ["พิพิธภัณฑ์แห่งชาติ", "ตั้งอยู่เหนือพาโรซองภายในอาคารตาซองเดิม จัดแสดงเรื่องราว ศิลปะ และวัฒนธรรมของภูฏาน"],
      ["พาโรสตรีท", "ย่านเดินเล่นและเลือกซื้อของฝาก งานฝีมือ ผลิตภัณฑ์ท้องถิ่น และของที่ระลึกก่อนเดินทางกลับ"],
    ],
  },
  {
    city: "Thimphu",
    thai: "เมืองทิมพู",
    intro: "เมืองหลวงที่รวมการบริหาร ศาสนา วิถีชีวิต และความร่วมสมัยของภูฏานไว้ด้วยกัน",
    places: [
      ["ทิมพูซอง (Tashichho Dzong)", "ป้อมแห่งศาสนาและศูนย์กลางการบริหารที่สำคัญของประเทศ รวมถึงสถานที่ทำงานของหน่วยงานรัฐบาล"],
      ["Memorial Chorten", "อนุสรณ์สถานสำคัญในเมืองทิมพู สร้างขึ้นเพื่อระลึกถึงพระมหากษัตริย์องค์ที่ 3 และเป็นพื้นที่ศรัทธาของคนท้องถิ่น"],
      ["Buddha Dordenma", "พระพุทธรูปขนาดใหญ่บนเนินเขาเหนือเมืองทิมพู จุดชมวิวที่มองเห็นหุบเขาเมืองหลวงได้กว้างไกล"],
      ["Takin Preserve", "พื้นที่อนุรักษ์ทาคิน สัตว์ประจำชาติของภูฏาน และจุดเรียนรู้ธรรมชาติใกล้เมือง"],
      ["ที่ทำการไปรษณีย์", "แหล่งจัดแสดงแสตมป์ภูฏานและหนึ่งในประสบการณ์สนุก ๆ สำหรับผู้ที่อยากทำแสตมป์เป็นรูปตัวเอง"],
    ],
  },
  {
    city: "Punakha",
    thai: "เมืองพูนาคา",
    intro: "อดีตเมืองหลวงที่อบอุ่นกว่าเมืองบนพื้นที่สูง และมีซองที่งดงามที่สุดแห่งหนึ่งของประเทศ",
    places: [
      ["พูนาคาซอง", "ป้อมปราการริมจุดบรรจบของแม่น้ำ Pho Chhu และ Mo Chhu โดดเด่นด้วยขนาดและองค์ประกอบทางสถาปัตยกรรม"],
      ["Dochula Pass", "จุดชมวิวบนเส้นทางทิมพู–พูนาคา มีสถูป 108 องค์ และในวันที่อากาศเปิดสามารถเห็นแนวเทือกเขาหิมาลัย"],
      ["Simtokha Dzong", "ซองเก่าแก่ที่มีความสำคัญทางยุทธศาสตร์และประวัติศาสตร์ ตั้งอยู่ไม่ไกลจากเส้นทางระหว่างเมืองสำคัญ"],
    ],
  },
];

export default function DestinationsPage() {
  return <>
    <section className="page-hero destinations-hero"><div className="container"><span className="breadcrumbs">Discover / Places</span><h1>Bhutan,<br/>place by place.</h1><p>รวมสถานที่สำคัญจากเว็บ Bhutan Center เดิม จัดใหม่ให้อ่านง่ายและเชื่อมต่อกับแพ็กเกจที่พาไปแต่ละเมือง</p></div></section>
    {groups.map((group, index) => <section className={`section ${index % 2 ? "section--white" : ""}`} key={group.city}>
      <div className="container destination-section">
        <div className="destination-city-heading"><span className="eyebrow">{group.city}</span><h2>{group.thai}</h2><p>{group.intro}</p></div>
        <div className="places-grid">{group.places.map(([title, body], i) => <article className="place-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>)}
    <section className="section"><div className="container callout"><div><h2>อยากรวมสถานที่เหล่านี้ไว้ในทริป?</h2><p>เลือกแพ็กเกจพื้นฐานแล้วให้ทีมงานช่วยปรับเส้นทางตามจำนวนวันและจังหวะการเดินทางของคุณได้</p></div><Link href="/packagetour-bhutan-new" className="button button--gold">ดูแพ็กเกจ <span>→</span></Link></div></section>
  </>;
}
