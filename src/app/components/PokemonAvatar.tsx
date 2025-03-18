import { useEffect, useState } from "react";
import { DetailPokemon } from "@/interfaces/pokemon.interface";
import { getColorFromUrl } from "@/utils/colors";
import Image from "next/image";

interface PokemonAvatarProps {
  pokemon: DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
  const [, setPokemonColor] = useState<string | null>(null);

  // Déplacer la fonction en dehors de useEffect
  const getPokemonColor = async () => {
    if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
      const color = await getColorFromUrl(
        pokemon.sprites.other["official-artwork"].front_default
      );
      if (color) setPokemonColor(color);
    }
  };

  useEffect(() => {
    getPokemonColor();
  }, [pokemon]); // Ajoute pokemon aux dépendances

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[50vw] h-[40vh] rounded-lg shadow-md p-4 flex justify-center items-center"
        style={{ backgroundColor: pokemon.color ?? "white" }}
      >
        <Image
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          width={500} // Set appropriate width
          height={500} // Set appropriate height
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default PokemonAvatar;
