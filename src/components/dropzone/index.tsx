  import React, { useCallback,useState, useEffect } from "react";
  import { useDropzone } from "react-dropzone";
  import { cn } from "@/lib/utils";
  import Upload from "../dropfile";

  const Dropzone = () => {

    const [isDragging, setIsDragging] = useState(false);
    
  //    const onDragEnter = () => {
  //   setIsDragging(true);
  //   document.body.classList.add('dragging');
  // };
  //   const onDragLeave = () => {
  //   setIsDragging(false);
  //   document.body.classList.remove('dragging');
  // };

  //   const onDrop = useCallback((acceptedFiles) => {
  //   console.log(acceptedFiles);
  //   setIsDragging(false);
  //   document.body.classList.remove('dragging');
  // }, []);

                                                          
  // useEffect(() => {
  //   const handleDragOver = (event) => {
  //     event.preventDefault();
  //   };

  //   window.addEventListener('dragover', handleDragOver);
  //   window.addEventListener('dragenter', onDragEnter);
  //   window.addEventListener('dragleave', onDragLeave);

  //   return () => {
  //     window.removeEventListener('dragover', handleDragOver);
  //     window.removeEventListener('dragenter', onDragEnter);
  //     window.removeEventListener('dragleave', onDragLeave);
  //   };
  // }, [onDragEnter, onDragLeave]);
    
  

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ });

  

    return (
      <div
        {...getRootProps()}
        className={`border-2 border-dashed border-primary p-6 rounded-md flex flex-col items-center justify-center
        ${isDragActive || isDragAccept ? ' bg-opacity-8 bg-primary '  : ''}
        ${isDragging ? 'dropzone' : ''}

  `}

         
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Upload/>
        ) : (
          <Upload/>
        )}
        
          
        
      </div>

      
    );
  };

  export default Dropzone;
