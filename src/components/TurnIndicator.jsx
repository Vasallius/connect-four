/* eslint-disable react/prop-types */
export function TurnIndicator({ TurnBackgroundRed }) {
  return (
    <div className="z-50 flex flex-col items-center justify-center relative  -top-[16px]">
      <div className="z-50 text-white font-spacegrotesk text-xs font-bold">
        PLAYER 1&apos;S TURN
      </div>
      <div className="z-50 text-white font-spacegrotesk text-lg font-bold">
        30s
      </div>
      <img
        className="w-[191px] h-[150px] absolute -top-[37px]"
        src={TurnBackgroundRed}
        alt=""
      />
    </div>
  );
}
