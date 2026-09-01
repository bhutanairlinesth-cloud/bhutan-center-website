"use client";

import { useMemo, useState } from "react";
import { bhutanCities, getCitiesByNames } from "@/lib/cities";

type Props = {
  cityNames?: string[];
  compact?: boolean;
  title?: string;
};

export default function BhutanCityExplorer({
  cityNames,
  compact = false,
  title = "เลือกเมือง แล้วสำรวจว่ามีอะไรอยู่ข้างใน",
}: Props) {
  const available = useMemo(
    () => (cityNames?.length ? getCitiesByNames(cityNames) : bhutanCities),
    [cityNames]
  );
  const [activeId, setActiveId] = useState(available[0]?.id || "paro");
  const active = available.find((city) => city.id === activeId) || available[0];

  if (!active) return null;

  return (
    <div className={`city-explorer ${compact ? "city-explorer--compact" : ""}`}>
      <div className="city-explorer__head">
        <div>
          <span className="section-code">EXPLORE / BHUTAN</span>
          <h2>{title}</h2>
        </div>
        <p>
          กดจุดบนแผนที่หรือเลือกชื่อเมือง ระบบจะแสดงสถานที่เที่ยวที่อยู่ในเมืองนั้น
          {cityNames?.length ? " เฉพาะเมืองที่อยู่ในแพ็กเกจนี้" : ""}
        </p>
      </div>

      <div className="city-explorer__grid">
        <aside className="city-tabs">
          <div className="city-tabs__label">DESTINATIONS</div>
          {available.map((city, index) => (
            <button
              key={city.id}
              className={active.id === city.id ? "active" : ""}
              onClick={() => setActiveId(city.id)}
            >
              <span className="city-tab-no">0{index + 1}</span>
              <span className="city-tab-name">
                <strong>{city.thaiName}</strong>
                <small>{city.name}</small>
              </span>
              <span className="city-tab-count">{city.attractions.length}</span>
            </button>
          ))}
        </aside>

        <div className="bhutan-map-panel">
          <div className="map-meta">
            <span>BHUTAN</span>
            <span>27.5° N · 90.4° E</span>
          </div>

          <div className="bhutan-map-stage" aria-label="Interactive Bhutan destination map">
            <svg className="bhutan-silhouette" viewBox="0 0 1000 500" role="img" aria-label="Stylized map of Bhutan">
              <defs>
                <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d9eadf" />
                  <stop offset="100%" stopColor="#b9d4c2" />
                </linearGradient>
                <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#0b2d21" floodOpacity=".12"/>
                </filter>
              </defs>
              <path
                d="M73 300
                   C91 285 100 261 112 240
                   C132 205 158 184 181 155
                   C207 122 229 86 267 64
                   C307 41 351 44 389 58
                   C419 69 430 91 464 91
                   C499 91 523 78 554 89
                   C586 101 607 117 642 117
                   C675 117 699 103 730 111
                   C760 119 790 140 821 143
                   C852 147 865 139 881 158
                   C895 174 885 194 878 211
                   C871 228 878 244 897 257
                   C917 270 936 263 948 281
                   C960 300 946 317 936 332
                   C927 346 936 362 941 377
                   C946 394 935 405 916 407
                   C886 411 864 399 837 410
                   C816 419 799 436 776 425
                   C749 413 729 415 701 423
                   C675 431 650 427 621 426
                   C590 425 568 431 540 423
                   C514 416 492 403 466 405
                   C442 407 421 425 396 431
                   C366 439 335 437 305 432
                   C281 427 264 418 241 416
                   C214 413 191 417 169 404
                   C151 393 135 384 115 381
                   C95 378 84 366 86 349
                   C88 334 74 323 63 315
                   C56 310 61 305 73 300 Z"
                fill="url(#mapFill)"
                stroke="#78a98b"
                strokeWidth="2"
                filter="url(#mapShadow)"
              />
              <path d="M132 348 C245 335 347 316 448 294 C550 272 645 267 743 286 C813 299 856 319 913 347"
                    fill="none" stroke="#8cb69a" strokeWidth="1.4" strokeDasharray="6 9" opacity=".65"/>
              <path d="M188 221 C293 205 377 188 479 178 C581 169 686 173 802 203"
                    fill="none" stroke="#8cb69a" strokeWidth="1.2" strokeDasharray="5 10" opacity=".45"/>
            </svg>

            <svg className="route-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {available.length > 1 && available.map((city, index) => {
                const next = available[index + 1];
                if (!next) return null;
                return (
                  <line key={`${city.id}-${next.id}`}
                    x1={city.mapX} y1={city.mapY}
                    x2={next.mapX} y2={next.mapY}
                    stroke="#f1874f" strokeWidth=".35" strokeDasharray="1.2 1.4" />
                );
              })}
            </svg>

            {bhutanCities.map((city) => {
              const enabled = available.some((item) => item.id === city.id);
              return (
                <button
                  key={city.id}
                  className={`map-pin ${active.id === city.id ? "active" : ""} ${!enabled ? "disabled" : ""}`}
                  style={{ left: `${4 + city.mapX * 0.92}%`, top: `${10 + city.mapY * 0.78}%`, ["--city-accent" as string]: city.accent }}
                  onClick={() => enabled && setActiveId(city.id)}
                  disabled={!enabled}
                  aria-label={`Explore ${city.name}`}
                >
                  <i></i>
                  <span>{city.name}</span>
                </button>
              );
            })}

            <div className="map-compass">
              <b>N</b><span></span>
            </div>
          </div>

          <div className="map-legend">
            <span><i className="legend-dot active"></i> เมืองในเส้นทาง</span>
            {cityNames?.length ? <span><i className="legend-dot muted"></i> เมืองอื่น</span> : null}
            <span className="map-note">Interactive destination explorer</span>
          </div>
        </div>

        <section className="city-detail-panel" style={{ ["--city-accent" as string]: active.accent }}>
          <div className="city-detail-top">
            <span className="city-kicker">{active.kicker}</span>
            <span className="city-count">{String(active.attractions.length).padStart(2, "0")} PLACES</span>
          </div>

          <div className="city-title-row">
            <div>
              <h3>{active.thaiName}</h3>
              <strong>{active.name}</strong>
            </div>
            <span className="city-orbit"></span>
          </div>

          <p className="city-description">{active.description}</p>

          <div className="city-facts">
            <div><span>ALTITUDE</span><strong>{active.altitude}</strong></div>
            <div><span>SUGGESTED</span><strong>{active.stay}</strong></div>
            <div><span>HOTELS</span><strong>{active.hotelCount}+</strong></div>
          </div>

          <div className="attraction-list">
            <div className="attraction-list-head">
              <span>สถานที่ที่ควรรู้จัก</span>
              <span>{active.attractions.length} แห่ง</span>
            </div>
            {active.attractions.map((place, index) => (
              <article className="attraction-row" key={place.name}>
                <span className="attraction-no">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{place.name}</h4>
                  <p>{place.short}</p>
                  <small>{place.tag}</small>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
