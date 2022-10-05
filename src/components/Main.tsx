import React from "react";
import { Card } from "./Card";


export const Main: React.FC<{}> = () => {

  return (
    <main>
      
      <Card name="Balbasaur" hp={20} mana={15} group={"Leaf"} skills={[{ name: "Razor Leaf", damage: 5, }, { name: "Vine Whip", damage: 10 }]} description = "Bulbasaur are small, squat amphibian and plant Pokémon that move on all four legs, and have blue-green bodies with darker blue-green spots. As a Bulbasaur undergoes evolution into Ivysaur and then later into Venusaur, the bulb on its back blossoms into a large flower."/>

    </main>
  );
};


