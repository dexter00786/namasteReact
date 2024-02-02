import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  //   useEffect(() => {
  //     // console.log("useeffect");
  //   }, []);
  //   console.log("render");
  return (
    <>
      <h1>My Profile</h1>
      <h2>name : {props.name}</h2>
      <h3>count :{count}</h3>
      <h3>count2 :{count2}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        IncreaseCount
      </button>
    </>
  );
};

export default Profile;
