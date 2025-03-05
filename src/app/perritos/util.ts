"use server";
export type ImageDog = {
    message: string;
    status: string;
}

export const getDogs = async (): Promise<ImageDog> => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    method: 'GET'
  });
  return res.json();
};
