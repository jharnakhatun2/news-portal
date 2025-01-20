import React from "react"
import SecNav from "../SecondLayout/SecNav";
import GameNav from "./GameNav";
import GamePost from "./GamePost";

const Game = () => {
  return (
    <div>
      <GameNav/>
      <div className="md:flex justify-between gap-5 md:py-5">
        <GamePost />
        <div className="md:max-w-md xl:max-w-xl">
          <img src="player.webp" alt="secondLayout" className="md:max-w-md xl:max-w-xl" />
          <small className="flex justify-end uppercase text-[10px] text-gray-600 pt-1">Nic Antaya/Getty Images</small>
        </div>
      </div>
    </div>
  )
};

export default Game;
