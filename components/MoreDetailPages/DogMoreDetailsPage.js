
import { Image } from "react";
import { useParams } from "react-router";
import data from "../lib/data.js";

function DogMoreDetailsPage() {
  const { id } = useParams(); // Hier verwendest du die übergebene ID aus der URL

  // Finde das entsprechende Tier in den Daten
  const animal = data.find((item) => item.id === id);

  if (!animal) {
    return <Text>Tier nicht gefunden</Text>;
  }

  return (
    <View>
      <Image source={animal.image} alt={Bild desTieres} />
      <Text>{animal.infoText}</Text>
    </View>
  );
}

export default DogMoreDetailsPage;
