import { useEffect, useState } from "react";
import { HEADING_TEXT_STYLES, TITLE_TEXT_STYLES } from "../../shared/styles/textVariables";
import Clock from "../../shared/ui/time/Clock";
import JBLimg from "../../assets/JBL_BOOMBOX_HERO.png"
import type { HomePageProps } from "../../interfaces/domain/home";
import { JBLCardTranslation } from "../../utils/translations/homepage/JBLCard";

function JBLCard({state}:HomePageProps) {
  if (!state) return
  const t = JBLCardTranslation[state.lang as keyof typeof JBLCardTranslation];
  const isAdmin = state.user?.isAdmin;
  const [timerValues, setTimerValues] = useState({
    days: "05",
    hours: "23",
    minutes: "59",
    seconds: "35",
  });
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (!timerActive) return undefined;

    const interval = window.setInterval(() => {
      setTimerValues((prev) => {
        const totalSeconds =
          Number(prev.days) * 86400 +
          Number(prev.hours) * 3600 +
          Number(prev.minutes) * 60 +
          Number(prev.seconds);

        if (totalSeconds <= 1) {
          setTimerActive(false);
          return {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          };
        }

        const nextSeconds = totalSeconds - 1;
        return {
          days: String(Math.floor(nextSeconds / 86400)).padStart(2, "0"),
          hours: String(Math.floor((nextSeconds % 86400) / 3600)).padStart(2, "0"),
          minutes: String(Math.floor((nextSeconds % 3600) / 60)).padStart(2, "0"),
          seconds: String(nextSeconds % 60).padStart(2, "0"),
        };
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [timerActive]);

  const handleStartTimer = () => {
    setTimerValues({ days: "05", hours: "23", minutes: "59", seconds: "35" });
    setTimerActive(true);
  };
  return (
    <div className="flex flex-col bg-black w-full pl-14 gap-8 py-17.25 relative">
      <button
        className={`text-button-1 cursor-pointer font-semibold ${TITLE_TEXT_STYLES.md} w-fit`}
      >
        {t.categories}
      </button>
      <h2 className={`text-white ${HEADING_TEXT_STYLES.xl} font-semibold w-125`}>
        {t.experience}
      </h2>
      <Clock
        ClockType="secondary"
        clockValues={timerValues}
        isAdmin={isAdmin}
        timerActive={timerActive}
        onStart={handleStartTimer}
      />
      <button
        className={`text-white bg-button-1 ${TITLE_TEXT_STYLES.md} py-4 px-12 w-fit cursor-pointer mt-2`}
      >
        {t.buyNow}
      </button>
      <div className="absolute right-15 top-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-[#D9D9D9]/30 blur-3xl rounded-full scale-125" />
        <img src={JBLimg} alt="JBL Image" className="relative z-10" />
      </div>
    </div>
  );
}
export default JBLCard