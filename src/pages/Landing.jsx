import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Fuse from 'fuse.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const Landing = () => {
  const[query, setQuery] = useState('');
  const[search, setSearch] = useState([]);
  const[results, setResults] = useState([]);

  useEffect(() => {
    fetch('/search.json')
    .then((res) => res.json())
    .then((data) => {setSearch(data); /* console.log(data) */});

    firebase.firestore()
    .collection("users")
    .get()
    .then((querySnapshot) => {
      console.log('Query Snapshot: ', querySnapshot);
      const users = [];
      querySnapshot.forEach((doc) => {
        console.log('Each user Data: ', doc.data());
        users.push(doc.data());
      });
      console.log("Users: ", users);
    })
    .catch((error) => {
      console.error("Error fetching users: ", error);
    });
  }, []);

  useEffect(() => {
    if(!query) {
      setResults([]);
      return;
    }

    const results = new Fuse(search, {
      keys:["content", "title"],
      threshold: 0.5
    });

    let result = results.search(query).map((r) => r.item);
    console.log("Results: ", result);
    setResults(result);

  }, [query, search]);

  const submitData = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;

    firebase.firestore()
    .collection("users")
    .add({
      name,
      email
    }).then(() => {
      alert("Data submitted successfully!");
    }).catch((error) => {
      console.error("Error submitting data: ", error);
    });
  }

  return (
    <div>
      <input type="text" placeholder="Enter search..." value={query} onChange={(e) => setQuery(e.target.value)} />
      {results.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <a href={result.url}>{result.title}</a>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={submitData}>
        <input type="text" placeholder="Enter your name..." />
        <input type="email" placeholder="Enter your email..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Landing