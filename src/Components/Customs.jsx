import axios from "axios";
import React, { useEffect, useState } from "react";

const Customs = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://kv-varlu.vercel.app/api/v1/curated/all"
      );
      const data = res.data;
      console.log(data.categories);
      setItem(data.categories);
    } catch (err) {
      console.log(err);
      console.log("Failed to Get Curated");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {item?.map((elem) => (
        <div key={elem._id}>
          <div>
            <img src={elem.image} alt={elem.name} />
          </div>
          <p className="imgTitle">{elem.name}</p>
        </div>
      ))}
    </>
  );
};

export default Customs;
