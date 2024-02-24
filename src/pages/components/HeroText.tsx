import { createEffect, createSignal } from "solid-js";
import { randomNumber } from "../functions/random_number";

const GAMES = ["Scum", "CS2", "DayZ", "Rust", "Squad", "Apex", "Fortnite"];
const [game, setGame] = createSignal(GAMES[randomNumber(GAMES.length - 1)]);

export const HeroText = () => {
  createEffect(() => {
    const interval = setInterval(() => {
      setGame(GAMES[randomNumber(GAMES.length - 1)]);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div class="mt-[12%]">
      <h1 class="text-6xl font-bold">The best cheats for</h1>
      <h1 class="bg-gradient-to-t from-[#2f1472] pb-10 to-[#6c41d4] text-transparent bg-clip-text text-7xl font-bold">
        {game()}
      </h1>
    </div>
  );
};
