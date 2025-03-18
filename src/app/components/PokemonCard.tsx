import { useEffect, useState } from "react";
import Link from "next/link";
import { IndexedPokemon } from "@/interfaces/pokemon.interface";
import { getColorFromUrl } from "@/utils/colors";
import Image from "next/image";

interface PokemonCardProps {
  pokemon: IndexedPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonColor, setPokemonColor] = useState<string>("white");

  // Définir getPokemonColor en dehors de useEffect
  const getPokemonColor = async () => {
    const color = await getColorFromUrl(pokemon.image || "");
    if (color) {
      setPokemonColor(color);
    }
  };

  useEffect(() => {
    getPokemonColor();
  }, [pokemon]); // Ajoute pokemon dans les dépendances pour gérer les changements

  return (
    <div
      className="relative rounded-lg shadow-md transition-shadow duration-300 max-w-2xl mx-auto"
      style={{ backgroundColor: pokemonColor }}
    >
      <Link href={`pokemon/${pokemon.name}`} style={{ textDecoration: "none" }}>
        <div
          className="cursor-pointer p-8 transition-colors duration-300 hover:bg-opacity-90"
          style={{ backgroundColor: pokemonColor }}
        >
          <Image
            src={pokemon.image ?? "/images/default-pokemon.png"} // ✅ Image par défaut
            alt={pokemon.name}
            width={300}
            height={224}
            className="w-full object-contain"
          />

          <div className="absolute bottom-0 left-0 p-4">
            <h2 className="text-xl font-bold text-white capitalize">
              #{pokemon.pokedexNumber}
            </h2>
            <h2
              className="text-xl font-bold text-white capitalize"
              style={{ textTransform: "capitalize" }}
            >
              {pokemon.name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
