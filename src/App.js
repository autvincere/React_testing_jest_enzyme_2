import React from "react";
import { connect } from "react-redux";
import { agregar, eliminar } from "./reducers/finanzas";
import { fetchUsuarios } from "./reducers/usuarios";
import "./App.css";
import Titulo from "./components/Titulo";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import Finanzas from "./components/Finanzas";

const App = ({ finanzas, agregarFinanza, eliminarFinanza, fetchUsuarios }) => {
  const total = finanzas.reduce((acc, el) => acc + el.cant, 0);
  return (
    <div className="section">
      <div className="container">
        <Titulo />
        <button onClick={fetchUsuarios}>Fetch usuarios</button>
        <Form agregarFinanza={agregarFinanza} />
        <Dashboard valor={total} />
        <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  agregarFinanza: (finanza) => dispatch(agregar(finanza)),
  eliminarFinanza: (index) => dispatch(eliminar(index)),
  fetchUsuarios: () => dispatch(fetchUsuarios()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
