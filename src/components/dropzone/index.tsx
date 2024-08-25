import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed border-gray-400 p-6 rounded-md flex flex-col items-center justify-center",
        { "bg-gray-100": isDragActive }
      )}
    >
      <input {...getInputProps()} />
      <p className="text-gray-600">
        {isDragActive
          ? "Solte o arquivo aqui..."
          : "Arraste e solte um arquivo aqui, ou clique para selecionar um arquivo"}
      </p>
    </div>
  );
};

export default Dropzone;
