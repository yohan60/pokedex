import { useEffect, useState } from "react";
import Link from "next/link";
import { IndexedPokemon } from "@/interfaces/pokemon.interface";
import { getColorFromUrl } from "@/utils/colors";

interface PokemonCardProps {
  pokemon: IndexedPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonColor, setPokemonColor] = useState<string>('white');

  const getPokemonColor = async () => {
    const color = await getColorFromUrl(pokemon.image || '');
    if (color) {
      setPokemonColor(color);
    }
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

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
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="h-56 w-full object-contain"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <h2 className="text-xl font-bold text-white capitalize">
              #{pokemon.pokedexNumber}
            </h2>
            <h2 className="text-xl font-bold text-white capitalize" style={{ textTransform: "capitalize" }}>
              {pokemon.name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;