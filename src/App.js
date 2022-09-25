import ImgBlog from "./components/imgBlog";
import ImgCollection from "./components/imgCollection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={<ImgCollection/>} />
          <Route exact path='/imgBlog' element={<ImgBlog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
