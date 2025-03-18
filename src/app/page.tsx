'use client'
import usePokemons from "@/hooks/usePokemons";
import PokemonList from "./components/PokemonList";
import { Button, Container, Grid } from "@mui/material";
import { IndexedType } from "@/interfaces/pokemon.interface";
import { useState } from "react";

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
      <Grid container spacing={2} mt={1}>
        <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center"}}>
          {pokemonTypes.map((type) => (
            <Button
              variant="contained"
              sx={{
                "&.MuiButton-contained": {
                  background: type.color
                },
                m: 1,
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}</Button>
          ))}
          <Button 
            variant="contained"
            sx={{
              m: 1,
            }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid>
        <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <PokemonList pokemons={pokemons}></PokemonList>
          {hasMorePokemon ? (
            <Button className='px-6 py-2 bg-black rounded-lg border border-[#ffda8a] hover:bg-opacity-90 transition-all duration-300 mb-3' variant="contained" onClick={fetchNextPage}>
              Charger plus de Pokémons
            </Button>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home