import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Tech from "./components/techs/Tech";
import type { Itech } from "./type/TypeTech";

const techPromise = async(): Promise<Itech[]> =>{
  const res = await fetch("../public/data.json");
  const data = await res.json();
  return data;
}

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Suspense fallback = {<p>Loading...</p>}>
  <Tech techPromise ={techPromise()} ></Tech>
</Suspense>
  
    </>
  )
}

export default App
