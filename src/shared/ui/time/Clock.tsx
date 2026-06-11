import SemiCloneSVG from "../icons/SemiClone";
import Time from "./Time";

type Type = "primary" | "secondary";
interface ClockType {
  ClockType: Type;
  clockValues?: {
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
  isAdmin?: boolean;
  timerActive?: boolean;
  onStart?: () => void;
}

function Clock({ ClockType, clockValues, isAdmin, timerActive, onStart }: ClockType) {
  const values = {
    days: clockValues?.days ?? "03",
    hours: clockValues?.hours ?? "23",
    minutes: clockValues?.minutes ?? "19",
    seconds: clockValues?.seconds ?? "56",
  };

  const adminControl = isAdmin && onStart ? (
    <button
      type="button"
      onClick={onStart}
      className="rounded-full border border-black/10 bg-secondary px-4 py-2 text-xs font-semibold hover:bg-black/5"
    >
      ✏️ {timerActive ? "Running" : "Start"}
    </button>
  ) : null;

  return (
    <>
      {ClockType === "primary" ? (
        <div className="flex gap-4 items-center">
          <div className="flex gap-4">
            <Time type="primary" currentTime={values.days} timeType="Days">
              <span className="flex flex-row">
                <SemiCloneSVG className="" />
              </span>
            </Time>
            <Time type="primary" currentTime={values.hours} timeType="Hours">
              <span className="flex flex-row">
                <SemiCloneSVG className="" />
              </span>
            </Time>
            <Time type="primary" currentTime={values.minutes} timeType="Minutes">
              <span className="flex flex-row">
                <SemiCloneSVG className="" />
              </span>
            </Time>
            <Time type="primary" currentTime={values.seconds} timeType="Seconds" />
          </div>
          {adminControl}
        </div>
      ) : (
        <div className="flex gap-6 flex-row items-center">
          <div className="flex gap-6 flex-row">
            <Time
              className="text-black"
              timeType="Hours"
              currentTime={values.hours}
              type="secondary"
            />
            <Time
              className="text-black"
              timeType="Days"
              currentTime={values.days}
              type="secondary"
            />
            <Time
              className="text-black"
              timeType="Minutes"
              currentTime={values.minutes}
              type="secondary"
            />
            <Time
              className="text-black"
              timeType="Seconds"
              currentTime={values.seconds}
              type="secondary"
            />
          </div>
          {adminControl}
        </div>
      )}
    </>
  );
}

export default Clock;
