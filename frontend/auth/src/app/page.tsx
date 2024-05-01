'use client'
import { useState, useEffect } from "react";


export default function Home() {
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/v1/user')
    .then(res => res.json())
    .then(res => setName(res.user));
  }, [])

  return (
    <main>
    {name}
    </main>
  );
}
