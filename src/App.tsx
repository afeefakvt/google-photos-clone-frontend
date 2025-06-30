import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import GooglePhotosPage from "./pages/Page"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AlbumsPage from "./pages/Album"
import PhotoPreview from "./pages/PhotoPreview"
import AlbumPhotosPage from "./pages/AlbumPhotosPage"
import CreateAlbum from "./pages/CreateAlbum"
import AddToAlbumPage from "./pages/AddToAlbum"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<GooglePhotosPage/>}/>
          <Route path="/photos/:id" element={<PhotoPreview/>}/>          
          <Route path="/albums" element={<AlbumsPage/>}/>          
          <Route path="/albums/:albumId" element={<AlbumPhotosPage/>}/>          
          <Route path="/albums/create" element={<CreateAlbum/>}/>    
          <Route path="/albums/:albumId/addPhotos" element={<AddToAlbumPage />} />
      
        </Routes>
      </Router>
    </>
  )
}

export default App
