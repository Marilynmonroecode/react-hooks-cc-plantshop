import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PlantPage = () => {
  const initialPlants = [
    {
      "id": 1,
      "name": "Aloe",
      "image": "./images/aloe.jpg",
      "price": 15.99,
      "soldOut": false
    },
    {
      "id": 2,
      "name": "ZZ Plant",
      "image": "./images/zz-plant.jpg",
      "price": 25.98,
      "soldOut": false
    },
    {
      "id": 3,
      "name": "Pilea peperomioides",
      "image": "./images/pilea.jpg",
      "price": 5.99,
      "soldOut": false
    },
    {
      "id": 4,
      "name": "Pothos",
      "image": "./images/pothos.jpg",
      "price": 12.11,
      "soldOut": false
    },
    {
      "id": 5,
      "name": "Jade",
      "image": "./images/jade.jpg",
      "price": 10.37,
      "soldOut": false
    },
    {
      "id": 6,
      "name": "Monstera Deliciosa",
      "image": "./images/monstera.jpg",
      "price": 25.99,
      "soldOut": false
    },
    {
      "id": 7,
      "name": "Fiddle Leaf Fig",
      "image": "./images/fiddle-leaf-fig.jpg",
      "price": 55,
      "soldOut": false
    }
  ];

  const [plants, setPlants] = useState(initialPlants);
  const [searchTerm, setSearchTerm] = useState('');

  const addPlant = (newPlant) => {
    const plantToAdd = {
      id: plants.length + 1,
      ...newPlant,
      soldOut: false
    };
    setPlants([...plants, plantToAdd]);
  };

  const toggleSoldOut = (id) => {
    setPlants(plants.map(plant =>
      plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
    ));
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Plant Shop</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NewPlantForm onAddPlant={addPlant} />
      <PlantList plants={filteredPlants} onToggleSoldOut={toggleSoldOut} />
    </div>
  );
};

export default PlantPage;