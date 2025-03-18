import { IndexedPokemon, ListPokemon } from "@/interfaces/pokemon.interface"
import PokemonCard from "@/app/components/PokemonCard";

interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {pokemons.length > 0
          ? pokemons.map((p) => {
            return <PokemonCard key={p.name} pokemon={p} />;
          })
          : <p className="text-center text-[#ffda8a]">No Pokémon found.</p>}
      </div>
    </>
  );
};


export default PokemonList