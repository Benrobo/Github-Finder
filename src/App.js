import React from 'react'
import { SearchCont } from "./comp/SearchCont";
import { Followers } from "./comp/Followers";
import { UserCard } from "./comp/UserCard";
import DataContextProvider from "./context/DataContext";
import "./style.css"
import { Following } from './comp/Following';
import { FloatingButton } from './comp/FloatingButton';



function App() {
  return (
    <DataContextProvider>
      <div className="section">
        <div className="search-cont">
          <SearchCont />
        </div>
        <div className="users-cont">
          <div className="user-card-cont">
            <UserCard />
          </div>
          <div className="socials-cont">
            <Followers />
            <Following />
          </div>
        </div>
        <FloatingButton />
      </div>
    </DataContextProvider>
  );
}

export default App;
