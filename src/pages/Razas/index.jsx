import React, { useContext, useEffect, useRef } from "react"
import { PolloTrackContext } from "../../context"
import { Container, Paper, Typography, Button, Box } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { Table } from "../../components/Table"
import { API_URLS } from "../../utils/apiUrl"
import { useRequest } from "../../hooks/useRequest"
import { Loading } from "../../components/Loading"
import Swal from 'sweetalert2'

function Razas() {
  const {
    razas,
    setRazas,
    getRazas,
    loading,
    setLoading,
  } = useContext(PolloTrackContext)

  const { requestDelete } = useRequest()
  const navigate = useNavigate()
  const selectedIdRaza = useRef(null)
  const selectedNameRaza = useRef(null)

  useEffect(() => {
    getRazas()
  }, [])

  const handleUpdate = (tableData) => {
    const razaId = tableData.rowData[0]
    navigate(`/razas/update/${razaId}`)
  }

  const handleDelete = (tableData) => {
    selectedIdRaza.current = tableData.rowData[0]
    selectedNameRaza.current = tableData.rowData[1]
    showDeleteConfirmation()
  }

  const handleDeleteConfirm = async (id) => {
    try {
      setLoading(true)
      await requestDelete(`${API_URLS.getRazas}/${id}`)
      setRazas(prevRazas => prevRazas.filter(raza => raza._id !== id))
      Swal.fire({
        icon: 'success',
        title: 'Raza eliminada exitosamente',
        timer: 5000
      })
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error al eliminar la raza',
        timer: 5000
      })
    } finally {
      setLoading(false)
    }
  }

  const showDeleteConfirmation = () => {
    Swal.fire({
      icon: 'warning',
      title: `¿Estás seguro de eliminar la raza: ${selectedNameRaza.current ? selectedNameRaza.current : ""}?`,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#b29500',
      cancelButtonColor: '#800020',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) handleDeleteConfirm(selectedIdRaza.current)
      else handleDeleteCancel()
    })
  }

  const handleDeleteCancel = () => {
    selectedIdRaza.current = null
    selectedNameRaza.current = null
  }

  const handleMoreInfo = (tableData) => {
    let razaId = tableData.rowData[0]
    navigate(`/razas/${razaId}`)
  }

  const columns = [
    {
      name: "_id",
      label: "_id"
    },
    {
      name: "nombre",
      label: "Nombre"
    },
    {
      name: "costoPorPollo",
      label: "Costo por pollo"
    },
    {
      name: "pesoPromedioDiezDias",
      label: "Peso a 10 días"
    },
    {
      name: "pesoPromedioTreintaDias",
      label: "Peso a 30 días"
    },
    {
      name: "pesoPromedioCuarentaDias",
      label: "Peso a 40 días"
    },
    {
      name: "accion",
      label: "Acciones"
    }
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
          sx={{ fontWeight: 600, fontSize: '2rem', mb: 2 }}
        >
          Lista de Razas
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '10px' }}>
          <Link to={"/razas/add"}>
            <Button variant="contained" color="secondary">
              <Typography
                variant="button"
                sx={{ fontWeight: "bold", textTransform: "none" }}
              >
                Registrar
              </Typography>
            </Button>
          </Link>
        </Box>

        {
          loading && <Loading />
        }

        {
          (!loading && razas) && (
            <Table
              data={razas}
              columns={columns}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              handleMoreInfo={handleMoreInfo}
            />
          )
        }
      </Paper>
    </Container>
  )
}

export { Razas }