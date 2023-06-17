import React, { useEffect, useState } from "react";

const Clock = () => {
  const reloj = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [age, setAge] = useState(reloj);

  function tick() {
    setAge({
      edad: age.edad + 1,
      fecha: new Date(),
    });
  }

  useEffect(() => {
    const timerID = setInterval(()=> tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h2>Hora Actual: {reloj.fecha.toLocaleTimeString()}</h2>
      <h3>
        {reloj.nombre} {reloj.apellidos}
      </h3>
      <h1>Edad: {age.edad}</h1>
    </div>
  );
};

export default Clock;
