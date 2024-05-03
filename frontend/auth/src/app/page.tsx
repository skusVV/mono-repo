'use client'
import { useState, useEffect } from "react";


export default function Home() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/user/1')
      .then(res => res.json())
      .then(user => setName(`${user.firstName} ${user.lastName}`));
  }, [])

  return (
    <main>
      {name}
    </main>
  );
}
