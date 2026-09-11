import { Suspense } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Tech from "./components/techs/Tech";
import type { Itech } from "./type/TypeTech";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const techPromise = async (): Promise<Itech[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) {
    throw new Error("Failed to load data.json");
  }
  const data = await res.json();
  return data;
};

function App() {
  return (
    <div className="container mx-auto md:px-8">
      <Nav />
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <Tech techPromise={techPromise()}></Tech>
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
