"use client";

import PokemonAvatar from "@/app/components/PokemonAvatar";
import PokemonBasicInfo from "@/app/components/PokemonBasicInfo";
import PokemonStats from "@/app/components/PokemonStats";
import usePokemon from "@/hooks/usePokemon";
import Link from "next/link";
import { useParams } from "next/navigation";

const PokemonDetail = () => {
  const params = useParams();
  const name = Array.isArray(params?.pokemonName)
    ? params.pokemonName[0]
    : params?.pokemonName;

  // Au lieu de conditionner l'appel du hook, appelle-le systématiquement
  const { pokemon, isLoading } = usePokemon({ pokemonName: name });

  // Si le nom est manquant, retourner une erreur ou page 404 après l'appel du hook
  if (!name || isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center pt-5 ">
      <div className="text-white-500 text-4xl mb-7 font-black">
        {pokemon?.name}
      </div>
      {pokemon ? (
        <>
          {/* Pokemon Avatar */}
          <div className="w-full h-15 md:w-1/2 mb-5">
            <PokemonAvatar pokemon={pokemon} />
          </div>

          {/* Pokemon Basic Info */}
          <div className="w-full md:w-1/2 mb-5">
            <PokemonBasicInfo pokemon={pokemon} />
          </div>

          {/* Pokemon Stats */}
          <div className="w-full md:w-1/2 mb-5">
            <PokemonStats pokemon={pokemon} />
          </div>
        </>
      ) : (
        <div className="text-center text-lg">Pokemon non trouvé</div>
      )}

      {/* Retour à la liste des pokémons */}
      <div className="mt-5">
        <Link
          href="/"
          className="px-6 py-2 bg-black rounded-lg border border-beige hover:bg-opacity-90 transition-all duration-300"
        >
          Retour à la liste des pokémons
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetail;
