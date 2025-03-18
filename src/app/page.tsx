// 'use client'
// import usePokemons from "@/hooks/usePokemons";
// import PokemonList from "./components/PokemonList";
// import { Button, Container, Grid } from "@mui/material";
// import { IndexedType } from "@/interfaces/pokemon.interface";

// const Home = () => {
//   const { pokemons, hasMorePokemon, fetchNextPage, pokemonTypes, setSelectedType, selectedType, setPokemons } = usePokemons();

//   const handleSelectType = (type: IndexedType | null) => {
//     if (type) {
//       setSelectedType(type);
//     } else {
//       setPokemons([]);
//       setSelectedType(null);
//     }
//   }

//   return (
//     <Container>
//       <Grid container spacing={2} mt={1}>
//         <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center"}}>
//           {pokemonTypes.map((type) => (
//             <Button
//               variant="contained"
//               sx={{
//                 "&.MuiButton-contained": {
//                   background: type.color
//                 },
//                 m: 1,
//               }}
//               onClick={() => handleSelectType(type)}
//             >
//               {type.name}</Button>
//           ))}
//           <Button 
//             variant="contained"
//             sx={{
//               m: 1,
//             }}
//             onClick={() => handleSelectType(null)}
//           >
//             ALL
//           </Button>
//         </Grid>
//         <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
//           <PokemonList pokemons={pokemons}></PokemonList>
//           {hasMorePokemon ? (
//             <Button className='px-6 py-2 bg-black rounded-lg border border-[#ffda8a] hover:bg-opacity-90 transition-all duration-300 mb-3' variant="contained" onClick={fetchNextPage}>
//               Charger plus de Pokémons
//             </Button>
//           ) : null}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default Home

'use client'
import usePokemons from "@/hooks/usePokemons";
import PokemonList from "./components/PokemonList";
import { Button, Container, Box, Stack } from "@mui/material";
import { IndexedType } from "@/interfaces/pokemon.interface";

const Home = () => {
  const { pokemons, hasMorePokemon, fetchNextPage, pokemonTypes, setSelectedType, selectedType, setPokemons } = usePokemons();

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  }

  return (
    <Container>
      <Box mt={1}>
        {/* Boutons de sélection des types */}
        <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
          {pokemonTypes.map((type) => (
            <Button
              key={type.name}
              variant="contained"
              sx={{
                background: type.color,
                "&:hover": { background: type.color, opacity: 0.8 }
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}
            </Button>
          ))}
          <Button 
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Stack>

        {/* Liste des Pokémon et bouton de chargement */}
        <Stack spacing={2} alignItems="center" mt={2}>
          <PokemonList pokemons={pokemons} />
          {hasMorePokemon && (
            <Button 
              className='px-6 py-2 bg-black rounded-lg border border-[#ffda8a] hover:bg-opacity-90 transition-all duration-300 mb-3' 
              variant="contained" 
              onClick={fetchNextPage}
            >
              Charger plus de Pokémons
            </Button>
          )}
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
