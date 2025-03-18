import { DetailPokemon } from "@/interfaces/pokemon.interface";

interface PokemonStatsProps {
    pokemon: DetailPokemon;
  }
  
  const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
    return (
      <div className="border border-gray-300 rounded-lg shadow-md p-6 w-full"
           style={{ backgroundColor: pokemon.color ?? "white"}}
      >
        <div className="flex justify-center">
          {pokemon ? (
            <table className="table-auto w-full text-center">
              <thead>
                <tr>
                  {pokemon.stats.map((stat, index) => (
                    <th key={index} className="capitalize px-4 py-2 text-lg font-semibold text-black">
                      {stat.stat.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {pokemon.stats.map((stat, index) => (
                    <td key={index} className="px-4 py-2 text-base text-gray-700">
                      {stat.base_stat}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    );
  };
  
  export default PokemonStats;