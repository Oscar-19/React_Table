import ResizableTable from "./ResizableTable";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hola Tablas</h1>
      <h2>Tabla redimensionable !</h2>
      <ResizableTable resizable={true} resizeOptions={{}}>
        <tbody>
          <tr>
            <th>Cabecera 1</th>
            <th>Cabecera 2</th>
            <th>Cabecera 3</th>
            <th>Cabecera 4</th>
          </tr>
          <tr>
            <td>prueba una dos palabras</td>
            <td>hola esto son palabras de prueba</td>
            <td>hola esto son palabras de prueba</td>
            <td>hola esto son palabras de prueba</td>
          </tr>
          <tr>
            <td>1</td>
            <td>22</td>
            <td>333</td>
            <td>hola esto son palabras de prueba fase 3</td>
          </tr>
        </tbody>
      </ResizableTable>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
