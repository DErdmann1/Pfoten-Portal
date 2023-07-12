import { useRouter } from "next/router";
import cats from "../../lib/cat_data.js";
import dogs from "../../lib/dog_data.js";
import smallanimals from "../../lib/smallanimals_data.js";
import Image from "next/image";

export default function MoreDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const animal = [...cats, ...dogs, ...smallanimals].find(
    (animal) => animal.id === parseInt(id)
  );

  if (!animal) {
    return <p>Tier nicht gefunden.</p>;
  }

  return (
    <div>
      <h1>{animal.name}</h1>
      <Image src={animal.image} alt={animal.name} width={500} height={500} />
      <p>Alter: {animal.age}</p>
      <p>Geschlecht: {animal.gender}</p>
      <p>Rasse: {animal.breed}</p>
      <p>Ort: {animal.location}</p>
      <p>{animal.infoText}</p>
    </div>
  );
}
