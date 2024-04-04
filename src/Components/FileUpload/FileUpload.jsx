import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
    // Prepare the file for sending to the server and append it to a FormData object
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST', 
        body: formData, // Set the body to the form data containing the file
      });
      const result = await response.json();
      alert(`File uploaded successfully: ${result.filename}`);
    } catch (error) {
      alert('Error uploading file:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;
