"use client";
import { useState } from "react";
import usePokemons from "@/hooks/usePokemons";
import PokemonList from "./components/PokemonList";
import { Button, Container, Box, Stack, Menu, MenuItem } from "@mui/material";
import { IndexedType } from "@/interfaces/pokemon.interface";

const Home = () => {
  const {
    pokemons,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    setSelectedType,
    setPokemons,
  } = usePokemons();

  // Gérer l'ouverture et la fermeture du menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]); // Réinitialiser les Pokémons
      setSelectedType(null); // Réinitialiser le type sélectionné
    }
    handleClose(); // Fermer le menu après la sélection
  };

  return (
    <Container>
      <Box mt={4}>
        {/* Bouton de sélection des types */}
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            background: "white", color: "black",
            "&:hover": { background: "white", opacity: 0.8 },
          }}
        >
          Sélectionner un type
        </Button>

        {/* Menu déroulant de types */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {pokemonTypes.map((type) => (
            <MenuItem
              key={type.name}
              onClick={() => handleSelectType(type)}
              sx={{
                backgroundColor: type.color,
                "&:hover": { backgroundColor: type.color, opacity: 0.8 },
              }}
            >
              {type.name}
            </MenuItem>
          ))}
          <MenuItem
            onClick={() => handleSelectType(null)}
            sx={{
              backgroundColor: "grey",
              "&:hover": { backgroundColor: "grey", opacity: 0.8 },
            }}
          >
            ALL
          </MenuItem>
        </Menu>

        {/* Liste des Pokémon et bouton de chargement */}
        <Stack spacing={2} alignItems="center" mt={2}>
          <PokemonList pokemons={pokemons} />
          {hasMorePokemon && (
            <Button
              className="px-6 py-2 bg-black rounded-lg border border-[#ffda8a] hover:bg-opacity-90 transition-all duration-300 mb-3"
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
