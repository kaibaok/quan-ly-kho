"use client"

import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image'


export default function Home() {

  const [reusultData ,setResultData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setResultData(json);
      console.log(json);
    })
    .catch((ex) => console.log(ex));

  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {reusultData && reusultData?.message}
      </div>
    </main>
  );
}
