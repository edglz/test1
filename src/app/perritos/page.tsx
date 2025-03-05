'use client';
import React, { useEffect, useState } from "react";
import { getDogs, ImageDog } from "./util";
import Image from "next/image";

function Page() {
    const [perritos, setPerrito] = useState<ImageDog | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const actualizar = async () => {
        setIsLoading(true);
        const perrito = await getDogs();
        setPerrito(perrito);
        setIsLoading(false);
    }
    useEffect(() => {
        actualizar();
    }, [])
    return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full md:w-1/2 xl:w-1/3 h-1/2 p-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          perritos && (
            <Image
              src={perritos.message}
              alt="perrito"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-xl"
            />
          )
        )}
        <button disabled={isLoading} onClick={actualizar} className={`bg-blue-500 w-full mt-2 rounded-md hover:bg-blue-700 text-white font-bold py-2 px-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
            Actualizar
        </button>
      </div>
    </div>
  );
}

export default Page;
