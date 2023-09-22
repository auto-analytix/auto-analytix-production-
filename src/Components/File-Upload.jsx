import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // You can implement your file upload logic here.
    if (selectedFile) {
      // Example: You can send the file to a server using fetch or Axios.
      // Replace the URL and add any necessary headers or parameters.
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('YOUR_UPLOAD_API_URL', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('File uploaded successfully:', data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">File Upload</h5>
              <input
                type="file"
                className="form-control mb-3"
                onChange={handleFileChange}
              />
              <button
                className="btn btn-primary"
                onClick={handleUpload}
                disabled={!selectedFile}
              >
                Upload File
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
