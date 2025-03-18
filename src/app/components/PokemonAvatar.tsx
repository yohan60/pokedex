import { useEffect, useState } from "react";
import { DetailPokemon } from "@/interfaces/pokemon.interface";
import { getColorFromUrl } from "@/utils/colors";

interface PokemonAvatarProps {
  pokemon: DetailPokemon;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  useEffect(() => {
    getPokemonColor();
  }, []);

  const getPokemonColor = async () => {
    if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
      const color = await getColorFromUrl(pokemon.sprites.other["official-artwork"].front_default);
      if (color) setPokemonColor(color);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="w-[50vw] h-[40vh] rounded-lg shadow-md p-4 flex justify-center items-center"
        style={{ backgroundColor: pokemon.color ?? "white" }}
      >
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default PokemonAvatar;