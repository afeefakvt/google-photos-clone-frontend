// components/CreateModal.tsx
"use client";

import { Dialog } from "@headlessui/react";
import { PlusCircle, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { uploadPhoto } from "@/api/photos";
import { useNavigate } from "react-router-dom";

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateModal({ isOpen, onClose }: CreateModalProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate()

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const formData = new FormData()
    formData.append("file", files[0]) // You can support multiple uploads by looping

    try {
      await uploadPhoto(formData)
      alert("Photo uploaded successfully")
      onClose()
    } catch (err) {
      console.error(err)
      alert("Upload failed")
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-[#202124] rounded-xl text-white w-full max-w-sm p-4 space-y-3 shadow-xl border border-gray-700">
          <Dialog.Title className="text-lg font-semibold">Create</Dialog.Title>

          <Button
            variant="ghost"
            className="w-full justify-start text-sm text-gray-200 hover:bg-gray-700"
            onClick={() =>{
                navigate('/albums/create')
                
            }}
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Album
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start text-sm text-gray-200 hover:bg-gray-700"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload photos
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={handleFileChange}
          />
          {/* <Button
            variant="ghost"
            className="w-full justify-start text-sm text-gray-200 hover:bg-gray-700"
            onClick={() => {
              alert("Upload video clicked")
              onClose()
            }}
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Upload videos
          </Button> */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
