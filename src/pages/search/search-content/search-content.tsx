import React from "react";
import { useAppContext } from "../../../hooks/use-app-context";
import "./search-content.css";
import UserCard from "../../../components/user-card/user-card";

function SearchContent() {
  const { users } = useAppContext();

  return (
    <div className="Search-content-container">
      {users ? (
        <div className="Search-content-card">
          {users.map((user, key) => (
            <React.Fragment key={`user-${key}`}>
              <UserCard key={`user-${key}`} user={user} />
              <hr className={"Search-content-hr"} />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div>No search results ...</div>
      )}
    </div>
  );
}

export default SearchContent;
