import { useRouter } from "next/router";
import cats from "../../lib/cat_data";
import Image from "next/image";

const CatMoreDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const cat = cats.find((cat) => cat.id === id);

  return (
    <div>
      <h1>{cat.name}</h1>
      <Image src={cat.image} alt={cat.name} width={500} height={500} />
      <p>Alter: {cat.age}</p>
      <p>Geschlecht: {cat.gender}</p>
      <p>Rasse: {cat.breed}</p>
      <p>Standort: {cat.location}</p>
      <p>{cat.infoText}</p>
    </div>
  );
};

export default CatMoreDetailsPage;
