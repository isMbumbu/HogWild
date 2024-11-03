import React, { useState } from 'react';

function NewHogForm({ addNewHog }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState("");
  const [image, setImage] = useState(null); // State for the image file

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      'highest medal achieved': highestMedal,
      image, // Include the image in the new hog object
    };
    addNewHog(newHog);
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setHighestMedal("");
    setImage(null); // Reset the image state
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Specialty"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <label>
        Greased
        <input
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </label>
      <input
        type="text"
        placeholder="Highest Medal"
        value={highestMedal}
        onChange={(e) => setHighestMedal(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*" // Accept image files only
        onChange={(e) => setImage(e.target.files[0])} // Get the first file
      />
      {image && (
        <img
          src={URL.createObjectURL(image)} // Preview the image
          alt="Hog preview"
          style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} // Style for the preview
        />
      )}
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default NewHogForm;

