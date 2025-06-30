import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createAlbum } from "@/api/album";
import { uploadPhoto } from "@/api/photos"; // assumes single upload handler


export default function CreateAlbum() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate();

 

  const handleCreateAlbum = async () => {
    if (!title.trim()) return alert("Please provide title ");

    try {
       await createAlbum(title, description);
      alert("Album created successfully")
      navigate("/albums");
    } catch (err) {
      alert("Failed to create album");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 py-6 sm:px-8">
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => navigate(-1)} className="text-white">
          <ArrowLeft className="mr-1 h-5 w-5" /> Back
        </Button>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <Input
          placeholder="Add a title"
          className="text-4xl font-light bg-transparent border-b border-gray-600 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Textarea
          placeholder="Add a description (optional)"
          className="bg-[#1f1f1f] text-white border-gray-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button className="mt-6 cursor-pointer bg-[#1f1f1f] px-6 py-4 rounded-lg border border-gray-600 hover:bg-gray-800"  onClick={handleCreateAlbum}>
          Create Album
        </Button>
      </div>
    </div>
  );
}
