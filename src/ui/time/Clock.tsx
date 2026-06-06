import SemiCloneSVG from "../icons/SemiClone";
import Time from "./Time";

type Type = "primary" | "secondary";
interface ClockType {
  ClockType: Type;
}
function Clock({ ClockType }: ClockType) {
  return (
    <>
      {ClockType === "primary" ? (
        <div className="flex gap-4">
          <Time type="primary" currentTime="03" timeType="Days">
            <span className="flex flex-row">
              <SemiCloneSVG className="" />
            </span>
          </Time>
          <Time type="primary" currentTime="23" timeType="Hours">
            <span className="flex flex-row">
              <SemiCloneSVG className="" />
            </span>
          </Time>
          <Time type="primary" currentTime="19" timeType="Minutes">
            <span className="flex flex-row">
              <SemiCloneSVG className="" />
            </span>
          </Time>
          <Time type="primary" currentTime="56" timeType="Seconds" />
        </div>
      ) : (
        <div className="flex gap-6 flex-row">
          <Time
            className="text-black"
            timeType="Hours"
            currentTime="23"
            type="secondary"
          />
          <Time
            className="text-black"
            timeType="Days"
            currentTime="05"
            type="secondary"
          />
          <Time
            className="text-black"
            timeType="Minutes"
            currentTime="59"
            type="secondary"
          />
          <Time
            className="text-black"
            timeType="Seconds"
            currentTime="35"
            type="secondary"
          />
        </div>
      )}
    </>
  );
}

export default Clock;
