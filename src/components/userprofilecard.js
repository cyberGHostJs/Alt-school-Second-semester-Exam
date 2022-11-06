import React from "react";
import Avatar from "./Avatar";
import '../assets/styles/card.css'

function UserProfileCard() {
    return (
      <div className="card">
               <Avatar/>
        <div className="card-name">Eric Davidson</div>
        <div> Eric Davidson is an intellectual software developer</div>
      </div>
    );
  }


function NameItem() {
  const name = ["buchi", "confi", "audrey", "zaddy", "tony"];
  const NameItems = name.map((name) => {
    return <li key={name}>{name}</li>;
  });
  return <ol>{NameItems}</ol>;
}
function UserItem() {
  const user = [
    {
      name: "Eric Davidson",
      bio: "I am a web developer",
      age: "26",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Joe sunny",
      bio: "I am a designer",
      age: "23",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Confidence Daniel",
      bio: "I am a full stack Engineer",
      age: "31",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];
  const UserItems = user.map((user) => {
    return (
      <section>
        <div className="card">
          <img
            src={user.avatar}
            alt="Avatar"
            style={{ width: 100, borderRadius: 50 }}
          />
          <h3>{user.name}</h3>
          <p>{user.bio}</p>
          <p>{user.age}</p>
        </div>
      </section>
    );
  });
  return <ol>{UserItems}</ol>;
}

function App() {
  const Handleevent = (event2) => {
    console.log("you clicked the other one");
  };
  return (
    <section className="main_container">
      <div>
        <ol>
          {/* <UserProfileCard /> */}
          <UserItem />
          <div>
            <button className="Action-btn"
              onClick={(event) => {
                console.log("hello you clicked me!");
              }}
            >
              click me!
            </button>
            <button className="Action-btn"
            onClick={Handleevent}>click here!</button>
          </div>
          {/* <NameItem /> */}
          {/* <ListItem/> */}
          {/* <Userprofilecard/> */}
        </ol>
      </div>
    </section>
  );
}

export default UserProfileCard;