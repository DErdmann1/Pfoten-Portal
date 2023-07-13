import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import cats from "../../lib/cat_data";
import dogs from "../../lib/dog_data";
import smallanimals from "../../lib/smallanimals_data";

export default function MoreDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const animal = [...cats, ...dogs, ...smallanimals].find(
    (animal) => animal.id === parseInt(id)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier können Sie die Logik zum Absenden des Kontaktformulars implementieren
    // Erfassen Sie die Formulardaten und senden Sie sie an den Besitzer

    // Formular leeren
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Bestätigungsnachricht anzeigen
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      {isSubmitted ? (
        <p>Vielen Dank für Ihre Nachricht! Wir melden uns bei Ihnen.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Betreff:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Nachricht:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <br />
          <button type="submit">Senden</button>
        </form>
      )}
    </div>
  );
}
