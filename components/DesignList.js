import React from 'react';

function DesignList({ designs, onRemove }) {
  const handleRemove = (index) => {
    // Call the onRemove function with the index of the design to remove
    onRemove(index);
  };

  return (
    <div>
      <h2>Uploaded Designs</h2>
      <ul>
        {designs.map((design, index) => (
          <li key={index}>
            <p><strong>Design {index + 1}:</strong> {design.name}</p>
            <img
              src={URL.createObjectURL(design)}
              alt={`Design ${index + 1}`}
              style={{ maxWidth: '200px' }}
            />
            <button onClick={() => handleRemove(index)}>Remove</button> {/* Add remove button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesignList;