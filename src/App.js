// import React, { useState, useEffect } from "react";
// import "./App.css";
// import {
//   ATL,
//   BKN,
//   BOS,
//   CHA,
//   CHI,
//   CLE,
//   DAL,
//   DEN,
//   DET,
//   GSW,
//   HOU,
//   IND,
//   LAC,
//   LAL,
//   MEM,
//   MIA,
//   MIL,
//   MIN,
//   NOP,
//   NYK,
//   OKC,
//   ORL,
//   PHI,
//   PHX,
//   POR,
//   SAC,
//   SAS,
//   TOR,
//   UTA,
//   WAS,
// } from "react-nba-logos";

// const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const JUGADORES_POR_PAGINA = 8;

// const coloresPorEquipo = {
//   ATL: "#E03A3E",
//   BKN: "#000000",
//   BOS: "#007A33",
//   CHA: "#1D1160",
//   CHI: "#CE1141",
//   CLE: "#860038",
//   DAL: "#00538C",
//   DEN: "#0E2240",
//   DET: "#C8102E",
//   GSW: "#1D428A",
//   HOU: "#CE1141",
//   IND: "#002D62",
//   LAC: "#C8102E",
//   LAL: "#552583",
//   MEM: "#5D76A9",
//   MIA: "#98002E",
//   MIL: "#00471B",
//   MIN: "#0C2340",
//   NOP: "#0C2340",
//   NYK: "#006BB6",
//   OKC: "#007AC1",
//   ORL: "#0077C0",
//   PHI: "#006BB6",
//   PHX: "#E56020",
//   POR: "#E03A3E",
//   SAC: "#5A2D81",
//   SAS: "#C4CED4",
//   TOR: "#CE1141",
//   UTA: "#00471B",
//   WAS: "#002B5C",
// };

// // Logos mapeados a componentes react-nba-logos
// const logos = {
//   ATL: <ATL width={36} />,
//   BKN: <BKN width={36} />,
//   BOS: <BOS width={36} />,
//   CHA: <CHA width={36} />,
//   CHI: <CHI width={36} />,
//   CLE: <CLE width={36} />,
//   DAL: <DAL width={36} />,
//   DEN: <DEN width={36} />,
//   DET: <DET width={36} />,
//   GSW: <GSW width={36} />,
//   HOU: <HOU width={36} />,
//   IND: <IND width={36} />,
//   LAC: <LAC width={36} />,
//   LAL: <LAL width={36} />,
//   MEM: <MEM width={36} />,
//   MIA: <MIA width={36} />,
//   MIL: <MIL width={36} />,
//   MIN: <MIN width={36} />,
//   NOP: <NOP width={36} />,
//   NYK: <NYK width={36} />,
//   OKC: <OKC width={36} />,
//   ORL: <ORL width={36} />,
//   PHI: <PHI width={36} />,
//   PHX: <PHX width={36} />,
//   POR: <POR width={36} />,
//   SAC: <SAC width={36} />,
//   SAS: <SAS width={36} />,
//   TOR: <TOR width={36} />,
//   UTA: <UTA width={36} />,
//   WAS: <WAS width={36} />,
// };

// function App() {
//   const [jugadores, setJugadores] = useState([]);
//   const [cargando, setCargando] = useState(true);
//   const [letraSeleccionada, setLetraSeleccionada] = useState("");
//   const [posicionSeleccionada, setPosicionSeleccionada] = useState("");
//   const [equipoSeleccionado, setEquipoSeleccionado] = useState("");
//   const [paisBusqueda, setPaisBusqueda] = useState("");
//   const [nombreBusqueda, setNombreBusqueda] = useState(""); // para filtro por nombre completo
//   const [paginaActual, setPaginaActual] = useState(1);
//   const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:3001/api/jugadores")
//       .then((res) => res.json())
//       .then((data) => {
//         setJugadores(data);
//         setCargando(false);
//       })
//       .catch(() => setCargando(false));
//   }, []);

//   const posicionesUnicas = Array.from(new Set(jugadores.map((j) => j.posición))).sort();
//   const equiposUnicos = Array.from(new Set(jugadores.map((j) => j.equipo))).sort();

//   const toggleLetra = (letra) => {
//     if (letraSeleccionada === letra) setLetraSeleccionada("");
//     else setLetraSeleccionada(letra);
//   };

//   const jugadoresFiltrados = jugadores.filter((jugador) => {
//     const cumpleLetra = letraSeleccionada === "" || jugador.nombre_completo.toUpperCase().startsWith(letraSeleccionada);
//     const cumplePosicion = posicionSeleccionada === "" || jugador.posición === posicionSeleccionada;
//     const cumpleEquipo = equipoSeleccionado === "" || jugador.equipo === equipoSeleccionado;
//     const cumplePais = jugador.pais.toLowerCase().includes(paisBusqueda.toLowerCase());
//     const cumpleNombre =
//       nombreBusqueda === "" ||
//       jugador.nombre_completo.toLowerCase().includes(nombreBusqueda.toLowerCase());
//     return cumpleLetra && cumplePosicion && cumpleEquipo && cumplePais && cumpleNombre;
//   });

//   const totalPaginas = Math.ceil(jugadoresFiltrados.length / JUGADORES_POR_PAGINA);
//   const indiceUltimo = paginaActual * JUGADORES_POR_PAGINA;
//   const indicePrimero = indiceUltimo - JUGADORES_POR_PAGINA;
//   const jugadoresPaginados = jugadoresFiltrados.slice(indicePrimero, indiceUltimo);

//   const cambiarPagina = (num) => {
//     if (num < 1 || num > totalPaginas) return;
//     setPaginaActual(num);
//   };

//   useEffect(() => {
//     setPaginaActual(1);
//     setTarjetaSeleccionada(null);
//   }, [letraSeleccionada, posicionSeleccionada, equipoSeleccionado, paisBusqueda, nombreBusqueda]);

//   if (cargando) return <div>Cargando jugadores...</div>;

//   return (
//     <div className="container">
//       <h1>Jugadores NBA</h1>

//       <div className="letras-botonera">
//         {letras.map((letra) => (
//           <button
//             key={letra}
//             onClick={() => toggleLetra(letra)}
//             className={letra === letraSeleccionada ? "active" : ""}
//           >
//             {letra}
//           </button>
//         ))}
//       </div>

//       <div style={{ marginBottom: "15px" }}>
//         <label htmlFor="filtroPosicion" style={{ marginRight: 10 }}>
//           Filtrar por posición:
//         </label>
//         <select
//           id="filtroPosicion"
//           value={posicionSeleccionada}
//           onChange={(e) => setPosicionSeleccionada(e.target.value)}
//           style={{ marginRight: 20 }}
//         >
//           <option value="">Todas</option>
//           {posicionesUnicas.map((pos) => (
//             <option key={pos} value={pos}>
//               {pos}
//             </option>
//           ))}
//         </select>

//         <label htmlFor="filtroEquipo" style={{ marginRight: 10 }}>
//           Filtrar por equipo:
//         </label>
//         <select
//           id="filtroEquipo"
//           value={equipoSeleccionado}
//           onChange={(e) => setEquipoSeleccionado(e.target.value)}
//           style={{ marginRight: 20 }}
//         >
//           <option value="">Todos</option>
//           {equiposUnicos.map((equipo) => (
//             <option key={equipo} value={equipo}>
//               {equipo}
//             </option>
//           ))}
//         </select>

//         <label htmlFor="busquedaPais" style={{ marginRight: 10 }}>
//           Buscar por país:
//         </label>
//         <input
//           id="busquedaPais"
//           type="text"
//           placeholder="Escribe un país..."
//           value={paisBusqueda}
//           onChange={(e) => setPaisBusqueda(e.target.value)}
//           style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc", marginRight: 20 }}
//         />

//         <label htmlFor="busquedaNombre" style={{ marginRight: 10 }}>
//           Buscar por nombre:
//         </label>
//         <input
//           id="busquedaNombre"
//           type="text"
//           placeholder="Escribe nombre o apellido..."
//           value={nombreBusqueda}
//           onChange={(e) => setNombreBusqueda(e.target.value)}
//           style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc" }}
//         />
//       </div>

//       {jugadoresPaginados.length === 0 ? (
//         <p>No hay jugadores con esos filtros.</p>
//       ) : (
//         <div className="grid-jugadores">
//           {jugadoresPaginados.map((jugador, index) => {
//             const colorEquipo = coloresPorEquipo[jugador.equipo] || "#ccc";
//             const estaSeleccionada = tarjetaSeleccionada === index;

//             return (
//               <div
//                 key={index}
//                 className="card-jugador"
//                 onClick={() => setTarjetaSeleccionada(index)}
//                 style={{
//                   borderTop: `6px solid ${colorEquipo}`,
//                   boxShadow: estaSeleccionada
//                     ? `0 0 15px 4px ${colorEquipo}aa`
//                     : `0 2px 8px ${colorEquipo}66`,
//                   backgroundColor: estaSeleccionada ? "#f0f8ff" : "white",
//                   cursor: "pointer",
//                   transition: "box-shadow 0.3s ease, background-color 0.3s ease",
//                   "--color-equipo": colorEquipo,
//                 }}
//               >
//                 <h3 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                   {logos[jugador.equipo] || null}
//                   {jugador.nombre_completo}
//                 </h3>

//                 <div className="info-row">
//                   <span>
//                     <strong>Equipo:</strong> {jugador.equipo}
//                   </span>
//                   <span>
//                     <strong>País:</strong> {jugador.pais}
//                   </span>
//                 </div>

//                 <div className="info-row">
//                   <span>
//                     <strong>Posición:</strong> {jugador.posición}
//                   </span>
//                   <span>
//                     <strong>Experiencia:</strong> {jugador.experiencia} años
//                   </span>
//                 </div>

//                 <div className="info-row">
//                   <span>
//                     <strong>Altura:</strong> {jugador.altura} m
//                   </span>
//                   <span>
//                     <strong>Peso:</strong> {jugador.peso}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {totalPaginas > 1 && (
//         <div style={{ marginTop: 20, textAlign: "center" }}>
//           <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
//             Anterior
//           </button>

//           {[...Array(totalPaginas)].map((_, i) => {
//             const num = i + 1;
//             return (
//               <button
//                 key={num}
//                 onClick={() => cambiarPagina(num)}
//                 style={{
//                   margin: "0 5px",
//                   fontWeight: num === paginaActual ? "bold" : "normal",
//                   backgroundColor: num === paginaActual ? "#007bff" : "#eee",
//                   color: num === paginaActual ? "white" : "black",
//                   border: "none",
//                   borderRadius: "4px",
//                   padding: "5px 10px",
//                   cursor: "pointer",
//                 }}
//               >
//                 {num}
//               </button>
//             );
//           })}

//           <button
//             onClick={() => cambiarPagina(paginaActual + 1)}
//             disabled={paginaActual === totalPaginas}
//           >
//             Siguiente
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import "./App.css";
import {
  ATL,
  BKN,
  BOS,
  CHA,
  CHI,
  CLE,
  DAL,
  DEN,
  DET,
  GSW,
  HOU,
  IND,
  LAC,
  LAL,
  MEM,
  MIA,
  MIL,
  MIN,
  NOP,
  NYK,
  OKC,
  ORL,
  PHI,
  PHX,
  POR,
  SAC,
  SAS,
  TOR,
  UTA,
  WAS,
} from "react-nba-logos";

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const JUGADORES_POR_PAGINA = 8;

const coloresPorEquipo = {
  ATL: "#E03A3E",
  BKN: "#000000",
  BOS: "#007A33",
  CHA: "#1D1160",
  CHI: "#CE1141",
  CLE: "#860038",
  DAL: "#00538C",
  DEN: "#0E2240",
  DET: "#C8102E",
  GSW: "#1D428A",
  HOU: "#CE1141",
  IND: "#002D62",
  LAC: "#C8102E",
  LAL: "#552583",
  MEM: "#5D76A9",
  MIA: "#98002E",
  MIL: "#00471B",
  MIN: "#0C2340",
  NOP: "#0C2340",
  NYK: "#006BB6",
  OKC: "#007AC1",
  ORL: "#0077C0",
  PHI: "#006BB6",
  PHX: "#E56020",
  POR: "#E03A3E",
  SAC: "#5A2D81",
  SAS: "#C4CED4",
  TOR: "#CE1141",
  UTA: "#00471B",
  WAS: "#002B5C",
};

// Logos mapeados a componentes react-nba-logos
const logos = {
  ATL: <ATL width={36} />,
  BKN: <BKN width={36} />,
  BOS: <BOS width={36} />,
  CHA: <CHA width={36} />,
  CHI: <CHI width={36} />,
  CLE: <CLE width={36} />,
  DAL: <DAL width={36} />,
  DEN: <DEN width={36} />,
  DET: <DET width={36} />,
  GSW: <GSW width={36} />,
  HOU: <HOU width={36} />,
  IND: <IND width={36} />,
  LAC: <LAC width={36} />,
  LAL: <LAL width={36} />,
  MEM: <MEM width={36} />,
  MIA: <MIA width={36} />,
  MIL: <MIL width={36} />,
  MIN: <MIN width={36} />,
  NOP: <NOP width={36} />,
  NYK: <NYK width={36} />,
  OKC: <OKC width={36} />,
  ORL: <ORL width={36} />,
  PHI: <PHI width={36} />,
  PHX: <PHX width={36} />,
  POR: <POR width={36} />,
  SAC: <SAC width={36} />,
  SAS: <SAS width={36} />,
  TOR: <TOR width={36} />,
  UTA: <UTA width={36} />,
  WAS: <WAS width={36} />,
};

function App() {
  const [jugadores, setJugadores] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [letraSeleccionada, setLetraSeleccionada] = useState("");
  const [posicionSeleccionada, setPosicionSeleccionada] = useState("");
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("");
  const [paisBusqueda, setPaisBusqueda] = useState("");
  const [nombreBusqueda, setNombreBusqueda] = useState(""); // filtro por nombre o apellido
  const [paginaActual, setPaginaActual] = useState(1);
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/jugadores")
      .then((res) => res.json())
      .then((data) => {
        setJugadores(data);
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, []);

  const posicionesUnicas = Array.from(new Set(jugadores.map((j) => j.posición))).sort();
  const equiposUnicos = Array.from(new Set(jugadores.map((j) => j.equipo))).sort();

  const toggleLetra = (letra) => {
    if (letraSeleccionada === letra) setLetraSeleccionada("");
    else setLetraSeleccionada(letra);
  };

  const jugadoresFiltrados = jugadores.filter((jugador) => {
    const cumpleLetra = letraSeleccionada === "" || jugador.nombre_completo.toUpperCase().startsWith(letraSeleccionada);
    const cumplePosicion = posicionSeleccionada === "" || jugador.posición === posicionSeleccionada;
    const cumpleEquipo = equipoSeleccionado === "" || jugador.equipo === equipoSeleccionado;
    const cumplePais = jugador.pais.toLowerCase().includes(paisBusqueda.toLowerCase());
    const cumpleNombre =
      nombreBusqueda === "" ||
      jugador.nombre_completo.toLowerCase().includes(nombreBusqueda.toLowerCase());
    return cumpleLetra && cumplePosicion && cumpleEquipo && cumplePais && cumpleNombre;
  });

  const totalPaginas = Math.ceil(jugadoresFiltrados.length / JUGADORES_POR_PAGINA);
  const indiceUltimo = paginaActual * JUGADORES_POR_PAGINA;
  const indicePrimero = indiceUltimo - JUGADORES_POR_PAGINA;
  const jugadoresPaginados = jugadoresFiltrados.slice(indicePrimero, indiceUltimo);

  const cambiarPagina = (num) => {
    if (num < 1 || num > totalPaginas) return;
    setPaginaActual(num);
  };

  useEffect(() => {
    setPaginaActual(1);
    setTarjetaSeleccionada(null);
  }, [letraSeleccionada, posicionSeleccionada, equipoSeleccionado, paisBusqueda, nombreBusqueda]);

  if (cargando) return <div>Cargando jugadores...</div>;

  // Función para renderizar los botones numéricos con elipsis
  const renderPaginacionNumeros = () => {
    const paginas = [];
    const totalMostrar = 2; // cantidad de páginas antes y después de la actual
    const primera = 1;
    const ultima = totalPaginas;

    const agregarBoton = (num) => (
      <button
        key={num}
        onClick={() => cambiarPagina(num)}
        style={{
          margin: "0 5px",
          fontWeight: num === paginaActual ? "bold" : "normal",
          backgroundColor: num === paginaActual ? "#007bff" : "#eee",
          color: num === paginaActual ? "white" : "black",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        {num}
      </button>
    );

    paginas.push(agregarBoton(primera));

    if (paginaActual - totalMostrar > primera + 1) {
      paginas.push(<span key="inicio-ellipsis">...</span>);
    }

    for (
      let i = Math.max(primera + 1, paginaActual - totalMostrar);
      i <= Math.min(ultima - 1, paginaActual + totalMostrar);
      i++
    ) {
      paginas.push(agregarBoton(i));
    }

    if (paginaActual + totalMostrar < ultima - 1) {
      paginas.push(<span key="fin-ellipsis">...</span>);
    }

    if (ultima !== primera) {
      paginas.push(agregarBoton(ultima));
    }

    return paginas;
  };

  return (
    <div className="container">
      <h1>Jugadores NBA</h1>

      <div className="letras-botonera">
        {letras.map((letra) => (
          <button
            key={letra}
            onClick={() => toggleLetra(letra)}
            className={letra === letraSeleccionada ? "active" : ""}
          >
            {letra}
          </button>
        ))}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="filtroPosicion" style={{ marginRight: 10 }}>
          Filtrar por posición:
        </label>
        <select
          id="filtroPosicion"
          value={posicionSeleccionada}
          onChange={(e) => setPosicionSeleccionada(e.target.value)}
          style={{ marginRight: 20 }}
        >
          <option value="">Todas</option>
          {posicionesUnicas.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>

        <label htmlFor="filtroEquipo" style={{ marginRight: 10 }}>
          Filtrar por equipo:
        </label>
        <select
          id="filtroEquipo"
          value={equipoSeleccionado}
          onChange={(e) => setEquipoSeleccionado(e.target.value)}
          style={{ marginRight: 20 }}
        >
          <option value="">Todos</option>
          {equiposUnicos.map((equipo) => (
            <option key={equipo} value={equipo}>
              {equipo}
            </option>
          ))}
        </select>

        <label htmlFor="busquedaPais" style={{ marginRight: 10 }}>
          Buscar por país:
        </label>
        <input
          id="busquedaPais"
          type="text"
          placeholder="Escribe un país..."
          value={paisBusqueda}
          onChange={(e) => setPaisBusqueda(e.target.value)}
          style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc", marginRight: 20 }}
        />

        <label htmlFor="busquedaNombre" style={{ marginRight: 10 }}>
          Buscar por nombre:
        </label>
        <input
          id="busquedaNombre"
          type="text"
          placeholder="Escribe nombre o apellido..."
          value={nombreBusqueda}
          onChange={(e) => setNombreBusqueda(e.target.value)}
          style={{ padding: "6px 8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>

      {jugadoresPaginados.length === 0 ? (
        <p>No hay jugadores con esos filtros.</p>
      ) : (
        <div className="grid-jugadores">
          {jugadoresPaginados.map((jugador, index) => {
            const colorEquipo = coloresPorEquipo[jugador.equipo] || "#ccc";
            const estaSeleccionada = tarjetaSeleccionada === index;

            return (
              <div
                key={index}
                className="card-jugador"
                onClick={() => setTarjetaSeleccionada(index)}
                style={{
                  borderTop: `6px solid ${colorEquipo}`,
                  boxShadow: estaSeleccionada
                    ? `0 0 15px 4px ${colorEquipo}aa`
                    : `0 2px 8px ${colorEquipo}66`,
                  backgroundColor: estaSeleccionada ? "#f0f8ff" : "white",
                  cursor: "pointer",
                  transition: "box-shadow 0.3s ease, background-color 0.3s ease",
                  "--color-equipo": colorEquipo,
                }}
              >
                <h3 style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  {logos[jugador.equipo] || null}
                  {jugador.nombre_completo}
                </h3>

                <div className="info-row">
                  <span>
                    <strong>Equipo:</strong> {jugador.equipo}
                  </span>
                  <span>
                    <strong>País:</strong> {jugador.pais}
                  </span>
                </div>

                <div className="info-row">
                  <span>
                    <strong>Posición:</strong> {jugador.posición}
                  </span>
                  <span>
                    <strong>Experiencia:</strong> {jugador.experiencia} años
                  </span>
                </div>

                <div className="info-row">
                  <span>
                    <strong>Altura:</strong> {jugador.altura} m
                  </span>
                  <span>
                    <strong>Peso:</strong> {jugador.peso}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {totalPaginas > 1 && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
            Anterior
          </button>

          {renderPaginacionNumeros()}

          <button
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
