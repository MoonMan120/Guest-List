import { useEffect, useState } from "react";

const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2507-Andre/guests";

export default function useGetHooks() {
  const [isLoading, setIsLoading] = useState(false);
  const [guests, setGuests] = useState([]);

  const getData = async () => {
    try {
      const result = await fetch(API);
      const data = await result.json();
      console.log(data.results);
      setGuests(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { isLoading, guests };
}
