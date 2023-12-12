import { useState } from "react";
import axios from "axios";

export default function Form({ info, setInfo, setState }) {
  const [city, setCity] = useState("");

  const handleChange = async () => {
    const api = "b88f3b426cab2f8efa707ab24f8d653e";
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
    await axios(baseUrl).then((res) => setInfo(res.data));
    setState(true);
  };
  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="form">
          <input
            type="text"
            className="inputText"
            placeholder="Şehri Giriniz"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Verileri Getir
          </button>
        </div>
      </form>
    </div>
  );
}
