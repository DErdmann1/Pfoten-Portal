import { Image } from "react";
import { useParams } from "react-router";
import data from "../lib/data.js";
import { View, Text } from "react-native";

function DogMoreDetailsPage() {
  const { id } = useParams();

  const animal = data.find((item) => item.id === id);

  if (!animal) {
    return <Text>Tier nicht gefunden</Text>;
  }

  return (
    <View>
      <Image source={animal.image} alt={animal.breed} />
      <Text>{animal.infoText}</Text>
    </View>
  );
}

export default DogMoreDetailsPage;
