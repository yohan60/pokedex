import { DetailPokemon } from "@/interfaces/pokemon.interface"

interface PokemonBasicInfoProps {
    pokemon: DetailPokemon;
}

const PokemonBasicInfo = ({ pokemon }: PokemonBasicInfoProps) => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-md p-6 w-full"
             style={{ backgroundColor: pokemon.color ?? "white"}}>
            <div className="flex justify-center gap-32 text-center capitalize">
                {/* Types */}
                <div>
                    <h3 className="text-lg text-black font-semibold">Types</h3>
                    {pokemon.types.map((type, index) => (
                        <p key={index} className="text-base text-gray-700">{type.type.name}</p>
                    ))}
                </div>

                {/* Taille */}
                <div>
                    <h3 className="text-lg text-black font-semibold">Taille</h3>
                    <p className="text-base text-gray-700">{pokemon.height}</p>
                </div>

                {/* Poids */}
                <div>
                    <h3 className="text-lg text-black font-semibold">Poids</h3>
                    <p className="text-base text-gray-700">{pokemon.weight}</p>
                </div>

                {/* Talents */}
                <div>
                    <h3 className="text-lg text-black font-semibold">Talents</h3>
                    {pokemon.abilities.map((ability, index) => (
                        <p key={index} className="text-base text-gray-700">{ability.ability.name}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PokemonBasicInfo;
