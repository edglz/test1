"use client";
import React from "react";
import { toast } from "sonner";

function Page() {
  const bases: Record<string, number> = {
    normal: 1,
    rapida: 2,
    express: 2.5,
    superexpress: 3,
  };
  const [weight, setWeight] = React.useState(0);
  const [distance, setDistance] = React.useState(0);
  const [tiempo, setTiempo] = React.useState("");
  const [result, setResult] = React.useState(0);
  const calculate = () => {
    if (tiempo === "" || weight === 0 || distance === 0) {
      return toast.error("Ingrese los valores.");
    }
    const base = bases[tiempo] ?? 1;
    const total = (distance * 0.5) * base;
    setResult(total);
  };
  return (
    <div className="justify-center items-center flex h-screen">
      <div className="border p-4 w-full m-2 md:w-1/6 h-auto rounded-md flex flex-col border-gray-300">
        <label htmlFor="">Peso</label>
        <input
          type="number"
          step={1}
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Kg"
          className="mb-2 border p-2 border-gray-200 rounded-md"
        />
        <label htmlFor="">Distancia</label>
        <input
          type="text"
          placeholder="Km"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="mb-2 border p-2 border-gray-200 rounded-md"
        />
        <input
          type="text"
          placeholder="Tipo entrega"
          value={tiempo}
          onChange={(e) => setTiempo(e.target.value)}
          className="mb-2 border p-2 border-gray-200 rounded-md"
        />
        <button
          onClick={calculate}
          className="border bg-blue-500 text-white p-2 rounded-md"
        >
          Calcular
        </button>
        <h1>$ {result.toFixed(2)}</h1>
      </div>
    </div>
  );
}

export default Page;
