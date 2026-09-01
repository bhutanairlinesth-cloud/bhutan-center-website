"use client";

import { FormEvent, useState } from "react";

export default function BookingForm({ compact = false, defaultPackage = "" }: { compact?: boolean; defaultPackage?: string }) {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/leads", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
      if (!response.ok) throw new Error("submit failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <div className="form-success"><strong>ส่งข้อมูลเรียบร้อย</strong><p>ทีม Bhutan Center จะติดต่อกลับเพื่อช่วยวางแผนการเดินทางของคุณ</p></div>;
  }

  return (
    <form className={`booking-form ${compact ? "booking-form--compact" : ""}`} onSubmit={submit}>
      <label><span>ชื่อ–นามสกุล</span><input name="name" placeholder="ชื่อผู้ติดต่อ" required /></label>
      <label><span>วันที่อยากเดินทาง</span><input name="travel_date" type="date" /></label>
      {compact ? <label><span>จำนวนผู้เดินทาง</span><input name="pax" type="number" min="1" placeholder="เช่น 4" /></label> : <>
        <label><span>ผู้ใหญ่</span><input name="adults" type="number" min="1" defaultValue="2" /></label>
        <label><span>เด็ก</span><input name="children" type="number" min="0" defaultValue="0" /></label>
      </>}
      {!compact && <label><span>แพ็กเกจที่สนใจ</span><select name="package_slug" defaultValue={defaultPackage}><option value="">ยังไม่แน่ใจ / ให้ทีมแนะนำ</option><option value="journey-to-bhutan">Journey to Bhutan 4D3N</option><option value="wonders-of-bhutan">Wonders of Bhutan 5D4N</option><option value="the-ultimate-bhutan">The Ultimate Bhutan 6D5N</option><option value="custom">ออกแบบทริปใหม่</option></select></label>}
      {!compact && <label><span>ระดับโรงแรม</span><select name="hotel_level" defaultValue="3"><option value="3">Tourist Class / 3-star</option><option value="4">4-star</option><option value="5">5-star / Luxury</option><option value="custom">ให้ทีมแนะนำ</option></select></label>}
      {!compact && <label><span>ชั้นโดยสาร</span><select name="cabin_class" defaultValue="economy"><option value="economy">Economy Class</option><option value="business">Business Class</option></select></label>}
      <label><span>โทรศัพท์ / LINE</span><input name="contact" placeholder="เบอร์โทรหรือ LINE ID" required /></label>
      {!compact && <label className="full"><span>รายละเอียดเพิ่มเติม</span><textarea name="note" rows={4} placeholder="เช่น มีผู้สูงอายุ ต้องการโรงแรมเฉพาะ หรืออยากเพิ่มกิจกรรม" /></label>}
      <button className="button full" type="submit" disabled={status === "sending"}>{status === "sending" ? "กำลังส่ง..." : <>ให้เจ้าหน้าที่ช่วยวางแผน <span>→</span></>}</button>
      {status === "error" && <small className="form-note full">ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้งหรือติดต่อทีมงานทาง LINE</small>}
      <small className="form-note full">เมื่อเชื่อม Bhutan Pricing แล้ว แบบฟอร์มนี้จะสร้าง Lead/Customer Tracking ในหลังบ้านโดยตรง</small>
    </form>
  );
}
