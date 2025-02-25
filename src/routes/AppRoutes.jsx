import { useContext } from "react"
import { Navigate, useRoutes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { LotePollos } from "../pages/LotePollos"
import { Lote } from "../pages/LotePollos/[id]"
import { RegisterLote } from "../pages/LotePollos/RegisterLote"
import { UpdateLote } from "../pages/LotePollos/UpdateLote"
import { Razas } from "../pages/Razas"
import { Raza } from "../pages/Razas/[id]"
import { RegisterRace } from "../pages/Razas/RegisterRace"
import { UpdateRaza } from "../pages/Razas/UpdateRaza"
import { StockFoods } from "../pages/Stock/StockFoods"
import { Clients } from "../pages/Clients"
import { Client } from "../pages/Clients/[id]"
import { RegisterClient } from "../pages/Clients/RegisterClient"
import { Reports } from "../pages/Reports"
import { Alimentacion } from "../pages/Alimentacion"
import { Health } from "../pages/Health"
import { Vacunas } from "../pages/Health/Vacunas"
import { RegisterVacuna } from "../pages/Health/RegisterVacuna"
import { UpdateVacunacion } from "../pages/Health/UpdateVacunacion"
import { Finances } from "../pages/Finances"
import { NotFound } from "../components/NotFound"
import { RegisterAliment } from "../pages/Alimentacion/RegisterAliment"
import { UpdateAlimentacion } from "../pages/Alimentacion/UpdateAlimentacion"
import { UpdateClient } from "../pages/Clients/UpdateClient"
import { RegisterEnfermedad } from "../pages/Health/RegisterEnfermedad"
import { Enfermedades } from "../pages/Health/Enfermedades"
import { UpdateEnfermedad } from "../pages/Health/UpdateEnfermedad"
import { Enfermedad } from "../pages/Health/Enfermedad"
import { LotesEnfermos } from "../pages/Health/LotesEnfermos"
import { RegisterLoteEnfermo } from "../pages/Health/RegisterLoteEnfermo"
import { UpdateLoteEnfermo } from "../pages/Health/UpdateLoteEnfermo"
import { RegisterStockFood } from "../pages/Stock/RegisterStockFood"
import { UpdateStockFood } from "../pages/Stock/UpdateStockFood"
import { StockFood } from "../pages/Stock/StockFood"
import { StockMedicines } from "../pages/Stock/StockMedicines"
import { RegisterStockMedicine } from "../pages/Stock/RegisterStockMedicine"
import { UpdateStockMedicine } from "../pages/Stock/UpdateStockMedicine"
import { StockMedicine } from "../pages/Stock/StockMedicine"
import { Login } from "../pages/Login"
import { PolloTrackContext } from "../context"
import { RegisterVenta } from "../pages/Finances/RegisterVenta"
import { Ventas } from "../pages/Finances/Ventas"
import { RegisterGasto } from "../pages/Finances/RegisterGasto"
import { Gastos } from "../pages/Finances/Gastos"

function AppRoutes() {
  const { token } = useContext(PolloTrackContext)

  let routes = useRoutes([
    { path: "/", element: <Login /> },

    { path: "/dashboard", element: token ? <Dashboard /> : <Navigate replace to="/" /> },

    { path: "/lote-pollos", element: <LotePollos /> },
    { path: "/lote-pollos/add", element: <RegisterLote /> },
    { path: "/lote-pollos/:loteId", element: <Lote /> },
    { path: "/lote-pollos/update/:loteId", element: <UpdateLote /> },

    { path: "/razas", element: <Razas /> },
    { path: "/razas/add", element: <RegisterRace /> },
    { path: "/razas/:razaId", element: <Raza /> },
    { path: "/razas/update/:razaId", element: <UpdateRaza /> },

    { path: "/alimentacion", element: <Alimentacion /> },
    { path: "/alimentacion/add", element: <RegisterAliment /> },
    { path: "/alimentacion/update/:alimentacionId", element: <UpdateAlimentacion /> },

    { path: "/vacunas", element: <Vacunas /> },
    { path: "/vacunas/add", element: <RegisterVacuna /> },
    { path: "/vacunas/update/:vacunacionId", element: <UpdateVacunacion /> },

    { path: "/enfermedades", element: <Enfermedades /> },
    { path: "/enfermedades/add", element: <RegisterEnfermedad /> },
    { path: "/enfermedades/update/:enfermedadId", element: <UpdateEnfermedad /> },
    { path: "/enfermedades/:enfermedadId", element: <Enfermedad /> },

    { path: "/lotes-enfermos", element: <LotesEnfermos /> },
    { path: "/lotes-enfermos/add", element: <RegisterLoteEnfermo /> },
    { path: "/lotes-enfermos/update/:loteEnfermoId", element: <UpdateLoteEnfermo /> },

    { path: "/salud", element: <Health /> },

    { path: "/inventario/alimentos", element: <StockFoods /> },
    { path: "/inventario/alimentos/add", element: <RegisterStockFood /> },
    { path: "/inventario/alimentos/update/:invAlimentoId", element: <UpdateStockFood /> },
    { path: "/inventario/alimentos/:invAlimentoId", element: <StockFood /> },

    { path: "/inventario/medicamentos", element: token ? <StockMedicines /> : <Navigate replace to="/" /> },
    { path: "/inventario/medicamentos/add", element: <RegisterStockMedicine /> },
    { path: "/inventario/medicamentos/update/:invMedicamentoId", element: <UpdateStockMedicine /> },
    { path: "/inventario/medicamentos/:invMedicamentoId", element: <StockMedicine /> },

    { path: "/finanzas", element: <Finances /> },
    { path: "/finanzas/ventas", element: <Ventas /> },
    { path: "/finanzas/ventas/add", element: <RegisterVenta /> },

    { path: "/finanzas/gastos", element: <Gastos /> },
    { path: "/finanzas/gastos/add", element: <RegisterGasto /> },

    { path: "/clientes", element: <Clients /> },
    { path: "/clientes/add", element: <RegisterClient /> },
    { path: "/clientes/update/:clienteId", element: <UpdateClient /> },
    { path: "/clientes/:clienteId", element: <Client /> },

    { path: "/reportes", element: <Reports /> },
    { path: "/*", element: <NotFound /> }
  ])

  return routes
}

export { AppRoutes }