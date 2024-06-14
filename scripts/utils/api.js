export const BASE_URL = "../data/photographers.json";

export const getData = async () => {
  try {
    const response = await fetch(BASE_URL);
    return response.json();
  } catch (error) {
    return new Error("something went wrong.");
  }
};

export const getPhotographers = async (id) => {
  const data = await getData();
  return data.photographers;
}

export const getPhotographerById = async (id) => {
  const data = await getData();

  return data.photographers.filter(photographer => photographer.id === id)[0]; 
}

export const getPhotographerMediasById = async (id) => {

  const data = await getData();
  const medias = data.media.filter(media => media.photographerId === id);

  return medias;
}