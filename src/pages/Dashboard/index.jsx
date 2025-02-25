import React, { useContext, useEffect, useState } from "react"
import { PolloTrackContext } from "../../context"
import AppWidgetSummary from "./app-widget-summary"
import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import Lotes from "../../assets/lotes.svg"
import KgVendidos from "../../assets/chicken.svg"
import Ingresos from "../../assets/money-3.svg"
import Gastos from "../../assets/money-4.svg"
import { BarChart } from "@mui/x-charts"
import { PieChart } from "@mui/x-charts/PieChart"
import { categories } from "../../utils/categories"

function Dashboard() {
  const { ventas, gastos, lotePollos } = useContext(PolloTrackContext)
  const [gastosCategorias, setGastosCategorias] = useState({})

  const calcVentasTotales = (array, arrayGastos) => {
    let sumaTotal = 0,
      sumaTotalGastos = 0,
      kgVendidos = 0

    array.forEach((objeto) => {
      sumaTotal += objeto.total
      kgVendidos += parseInt(objeto.kgVendidos)
    })

    arrayGastos.forEach((objeto) => {
      sumaTotalGastos += parseInt(objeto.cantidad)
    })

    return {
      sumaTotal,
      kgVendidos,
      sumaTotalGastos,
    }
  }

  const { sumaTotal, kgVendidos, sumaTotalGastos } = calcVentasTotales(ventas, gastos)

  const data = [
    { id: 1, value: sumaTotal, label: 'Beneficios ($)' },
    { id: 0, value: sumaTotalGastos, label: 'Gastos ($)' },
  ]

  const calcularGastosPorCategoria = (gastos, categorias) => {
    const gastosPorCategoria = {}

    if (categorias) {
      categorias.forEach((categoria) => {
        gastosPorCategoria[categoria.nombre] = 0
      })
    }

    if (gastos) {
      gastos.forEach((gasto) => {
        const { categoria, cantidad } = gasto
        gastosPorCategoria[categoria] += parseInt(cantidad)
      })
    }

    return gastosPorCategoria
  }

  useEffect(() => {
    const gastosPorCategoria = calcularGastosPorCategoria(gastos, categories)
    setGastosCategorias(gastosPorCategoria)
  }, [])

  const xLabels = [
    'Gastos por categorías ($)',
  ]

  return (
    <Container maxWidth="lg">
      <Paper
        sx={{ mt: 3, minHeight: "100vh", p: 3 }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, fontSize: '2rem', mb: 5 }}
        >
          Resumen
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Lotes Registrados"
              total={lotePollos.length}
              color="success"
              icon={Lotes}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Ingresos ($)"
              total={sumaTotal}
              color="info"
              icon={Ingresos}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Gastos ($)"
              total={sumaTotalGastos}
              color="error"
              icon={Gastos}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Ventas totales (kg)"
              total={kgVendidos}
              color="warning"
              icon={KgVendidos}
            />
          </Grid>

        </Grid>

        <Box sx={{ mt: 9, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ width: "60%" }}>
            {
              gastosCategorias && (
                <BarChart
                  width={750}
                  height={350}
                  colors={["#ffd600", "#800020", "#ff00ff", "#2196f3", "#4caf50", "#ff5722"]}
                  series={[
                    { data: [gastosCategorias.Alimentos], label: 'Alimentos', id: 'usvId2' },
                    { data: [gastosCategorias.Medicamentos], label: 'Medicamentos', id: 'pvId1' },
                    { data: [gastosCategorias.LotesDePollos], label: 'Lotes de Pollos', id: 'uvI3dasda' },
                    { data: [gastosCategorias.Vacunas], label: 'Vacunas', id: 'uasvId4' },
                    { data: [gastosCategorias.Instalaciones], label: 'Instalaciones', id: 'u5asvId' },
                    { data: [gastosCategorias.Otros], label: 'Otros', id: 'uasv6Id' },
                  ]}
                  xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
              )
            }
          </Box>
          <Box sx={{ width: "40%" }}>
            <PieChart
              height={200}
              colors={["#ffd600", "#800020"]}
              series={[
                {
                  data,
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                },
              ]}
            />
          </Box>
        </Box>
      </Paper>
    </Container >
  )
}

export { Dashboard }