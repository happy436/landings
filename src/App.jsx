import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import OrganicFood from "./pages/organicFood/OrganicFood";
import Restaurant from "./pages/restaurant/Restaurant"


function App() {

	return (
		<Routes>
			<Route path="/" element={<Main/>}/>
            <Route path="/organicFood" element={<OrganicFood/>}/>
            <Route path="/restaurant" element={<Restaurant/>}/>
		</Routes>
	);
}

export default App;
