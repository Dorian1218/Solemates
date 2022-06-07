import React, { useState } from "react";
import Card from "../components/Card/Card";
import { UserAuth } from "/src/AuthContext";
import { Button, Alert } from "react-bootstrap";
import { db } from "../firebase";
import { collection, addDoc, getDoc } from "@firebase/firestore";

function Home() {
  const { user } = UserAuth();

  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");

  const tweetCollectionRef = collection(db, "tweet");

  const handlePost = async (e) => {
    e.preventDefault();
    setError("");
    if (user === null) {
      return setError("You need to be logged in to access his feature");
    } else {
      await addDoc(tweetCollectionRef, { newTweet: tweet });
      setError("");
    }
  };
  return (
    <div className="card-div">
      <form>
        <h1>Post</h1>
        <input
          placeholder="tweet"
          type="text"
          onChange={(e) => setTweet(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* <Card
        shoeName="Jordan 1"
        img="https://cdn.flightclub.com/TEMPLATE/802799/1.jpg"
        price="1307"
      />
      <Card
        img="https://images.stockx.com/images/Air-Jordan-11-Retro-Concord-2018-1.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1606320605"
        shoeName="Jordan 11"
        price="450"
      />
      <Card
        img="https://images.stockx.com/images/Air-Jordan-3-Retro-A-Ma-Maniere-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1619806955"
        shoeName="Jordan 3"
        price="600"
      /> */}
    </div>
  );
}

export default Home;
