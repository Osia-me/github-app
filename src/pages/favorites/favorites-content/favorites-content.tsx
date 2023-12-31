import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import UserCard from "../../../components/user-card/user-card";

function FavoritesContent() {
  const { favourites, users } = useAppContext();
  const favoritesUsers = users?.filter((user) => favourites?.includes(user.id));

  return (
    <div className="Search-content-container">
      {favoritesUsers ? (
        <div className="Search-content-card">
          {favoritesUsers.map((user, key) => (
            <div key={`fav-${key}`}>
              <UserCard user={user} />
              <hr className={"Search-content-hr"} />
            </div>
          ))}
        </div>
      ) : (
        <div>No search results ...</div>
      )}
    </div>
  );
}

export default FavoritesContent;
