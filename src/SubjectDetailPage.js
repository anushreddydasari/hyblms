import React, { useState } from 'react';

const SubjectDetailPage = ({ subject }) => {
  // Get the current date (formatted as YYYY-MM-DD)
  const currentDate = new Date().toISOString().split('T')[0];
  
  // State to store uploaded files and comment
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [comment, setComment] = useState('');

  // State to store uploaded data (image, pdf, comment) for each day
  const [uploads, setUploads] = useState([]);

  // Handle image upload
  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  // Handle PDF upload
  const handlePdfChange = (event) => {
    setPdf(URL.createObjectURL(event.target.files[0]));
  };

  // Handle comment change
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Handle form submission to save uploaded files and comment
  const handleSubmit = () => {
    const newUpload = {
      date: currentDate,
      subject,
      image,
      pdf,
      comment,
    };

    // Add the new upload to the state
    setUploads([newUpload, ...uploads]);

    // Reset form inputs
    setImage(null);
    setPdf(null);
    setComment('');
  };

  return (
    <div className="subject-detail-page">
      <h1>Subject: {subject}</h1>
      <h3>Date: {currentDate}</h3>

      {/* Upload Form */}
      <div className="upload-form">
        <label htmlFor="image-upload">Upload Image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
        {image && (
          <div>
            <h4>Uploaded Image:</h4>
            <img src={image} alt="Uploaded" style={{ width: '200px' }} />
          </div>
        )}

        <label htmlFor="pdf-upload">Upload PDF:</label>
        <input
          type="file"
          id="pdf-upload"
          accept="application/pdf"
          onChange={handlePdfChange}
        />
        {pdf && (
          <div>
            <h4>Uploaded PDF:</h4>
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
          </div>
        )}

        <label htmlFor="comment">Leave a Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Write your comment here..."
          rows="4"
          style={{ width: '100%' }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {/* Display uploaded content */}
      <div className="uploads-list">
        <h3>Uploads and Comments for {currentDate}:</h3>
        {uploads
          .filter((upload) => upload.date === currentDate && upload.subject === subject)
          .map((upload, index) => (
            <div key={index} className="upload-item">
              <div>
                {upload.image && <img src={upload.image} alt="Uploaded" style={{ width: '150px' }} />}
                {upload.pdf && <a href={upload.pdf} target="_blank" rel="noopener noreferrer">View PDF</a>}
              </div>
              <div>
                <h4>Comment:</h4>
                <p>{upload.comment}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubjectDetailPage;
