// import { useState } from 'react'

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import './App.css'
// import BookList from './components/organisms/BookList'
// import UserList from './components/organisms/UserList'
// import Admin from "./pages/admin";
// import User from "./pages/user";
// import Backpack from "./pages/backpack";

// function App() {

//   return (
//     <Router>
//       <div>
//       <h1>Welcome to My U Library</h1>
//       <h2>Please select the tool to use</h2>
//       <div>
//         <Link to="/books">
//           <button>Books</button>
//         </Link>
//         <Link to="/users">
//           <button>Users</button>
//         </Link>
//         <Link to="/backpack">
//           <button>Backpack</button>
//         </Link>
//       </div>

//         <Routes>
//           <Route path="books" element={<Admin/>}/>
//           <Route path="users" element={<User/>}/>
//           <Route path="backpack" element={<Backpack/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );


// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/organisms/NavigationBar'; // Update the path
import BookList from './components/organisms/BookList';
import UserList from './components/organisms/UserList';
import Admin from "./pages/admin";
import User from "./pages/user";
import Backpack from "./pages/backpack";

function App() {
  return (
    <Router>
              <NavigationBar />

      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/books" element={<Admin />} />
            <Route path="/users" element={<User/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
            <Route path="/backpack" element={<Backpack />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
