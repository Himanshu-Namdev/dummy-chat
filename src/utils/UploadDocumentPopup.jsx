import React, { useEffect, useRef, useState } from 'react';

const UploadDocumentPopup = ({ isUploadModalOpen, closeUploadModal }) => {
  const modalRef = useRef();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeUploadModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeUploadModal]);

  const handleFileChange = (event) => {
    setSelectedFiles([]); // Clear the list of selected files
    setSelectedFiles(Array.from(event.target.files));
    setUploadProgress(0); // Reset upload progress
    setUploadComplete(false); // Reset uploadComplete state
    setShowAlert(false); // Reset showAlert state

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setShowAlert(true);
        setUploadComplete(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    }, 500);
  };

  return (
    isUploadModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 rounded-lg">
        <div ref={modalRef} className="modal-content bg-[#3B4144] rounded shadow-lg w-[700px] h-[480px] p-5 flex flex-col">
          <h2 className="text-4xl text-white mb-4">Upload Document</h2>
          <input type="file" multiple id="file-upload" className="hidden" onChange={handleFileChange} />
          <label htmlFor="file-upload" className="cursor-pointer bg-[#6200EE] text-white px-4 py-2 rounded w-[200px] text-center">
            Choose Files
          </label>
          <ul className="mt-4 text-white flex-grow">
            {selectedFiles.map((file, index) => (
              <li key={index} className="mx-3">{file.name} {uploadComplete && <span className="text-green-500 text-xl">✓</span>}</li>
            ))}
          </ul>
          {showAlert && <div className="alert alert-success mt-4">All files have been successfully uploaded!</div>}
          {selectedFiles.length > 0 && (
            <div className="h-2 w-full bg-gray-300 mt-4 rounded">
              <div className="h-full bg-[#985EFF] text-xs leading-none py-1 text-center text-white rounded" style={{width: `${uploadProgress}%`}}></div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default UploadDocumentPopup;
