import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {
  const [item, setItem] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://kv-varlu.vercel.app/api/v1/category/all"
      );
      const data = res.data;
      console.log(data.categories, "12");
      setItem(data.categories);
    } catch (err) {
      console.log(err);
      console.log("Failed to Get Categories");
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
            <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
          </div>
          <p className="imgTitle">{elem.name}</p>
        </div>
      ))}

      {/* <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Batteries</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">AC Service & Repair</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Tyres & Wheel</p>
      </div>

      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Wind Shield & Lights</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Car Spa & Cleansing</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Detailing Service</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Insurance</p>
      </div>

      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Denting & Painting</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Suspension & Fitments</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Clutch & Body Parts</p>
      </div>
      <div>
        <div>
          <img src="https://i.postimg.cc/Fs8r3F3g/svgg.png" alt="car" />
        </div>
        <p className="imgTitle">Car Inspection</p>
      </div> */}
    </>
  );
};

export default Services;
