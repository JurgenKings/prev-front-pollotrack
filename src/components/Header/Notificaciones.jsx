import React, { useContext, useEffect, useState } from 'react'
import { IconButton, Drawer, List, ListItem, ListItemText, Typography, Box } from '@mui/material'
import { Notifications } from "@mui/icons-material"
import { PolloTrackContext } from '../../context'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(isSameOrBefore)
dayjs.extend(customParseFormat)

const Notificaciones = () => {
  const {
    stockFoods,
    getStockFoods,
    lotePollos,
    getLotePollos,
  } = useContext(PolloTrackContext)

  const [open, setOpen] = useState(false)
  const [filteredStockFood, setFilteredStockFood] = useState([])
  const [filteredLotePollos, setFilteredLotePollos] = useState([])

  useEffect(() => {
    getStockFoods()
    getLotePollos()
    filterStockFoods()
    filterLotePollos()
  }, [])

  const filterStockFoods = () => {
    const filtered = stockFoods?.filter(obj => obj.cantidad <= 5)
    setFilteredStockFood(filtered)
  }

  const filterLotePollos = () => {
    const today = dayjs()
    const filtered = lotePollos?.filter(obj => dayjs(obj.fecha_salida, 'DD-MM-YYYY').isSameOrBefore(today, 'day'))
    setFilteredLotePollos(filtered)
  }

  const toggleDrawer = (open) => {
    setOpen(open)

    if (open) {
      getStockFoods()
      getLotePollos()
      filterStockFoods()
      filterLotePollos()
    }
  }

  return (
    <>
      <IconButton color="text" onClick={() => toggleDrawer(true)}>
        <Notifications />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)} >
        <List sx={{ width: "250px" }}>
          <Typography
            variant="h2"
            component="h2"
            color="text"
            gutterBottom
            sx={{ fontWeight: 600, fontSize: '1.5rem', ml: 2, mt: 4, mb: 2 }}
          >
            Notificaciones
          </Typography>

          <Box sx={{ p: 2 }}>
            {
              (filteredStockFood?.length != 0) && (
                <>
                  <Typography
                    variant="h3"
                    component="h3"
                    color="text"
                    gutterBottom
                    sx={{ fontWeight: 400, fontSize: '1rem', ml: 2, mt: 4, mb: 2 }}
                  >
                    Bajo Stock de alimentos:
                  </Typography>
                  {filteredStockFood.map((filteredStockFood) => (
                    <ListItem key={filteredStockFood._id} sx={{ backgroundColor: "#f1eaeaea", mb: 1, borderRadius: 2 }}>
                      <ListItemText
                        primary={`Nombre: ${filteredStockFood.nombre}`}
                        secondary={`Stock: ${filteredStockFood.cantidad}kg`}
                      />
                    </ListItem>
                  ))}
                </>
              )
            }
            {
              (filteredLotePollos?.length != 0) && (
                <>
                  <Typography
                    variant="h3"
                    component="h3"
                    color="text"
                    gutterBottom
                    sx={{ fontWeight: 400, fontSize: '1rem', ml: 2, mt: 4, mb: 2 }}
                  >
                    Lotes listos para beneficio:
                  </Typography>
                  {filteredLotePollos.map((filteredLotePollo) => (
                    <ListItem key={filteredLotePollo._id} sx={{ backgroundColor: "#f1eaeaea", mb: 1, borderRadius: 2 }}>
                      <ListItemText
                        primary={`Código: ${filteredLotePollo.codigo}`}
                        secondary={`Cantidad: ${filteredLotePollo.cantidad}`}
                      />
                    </ListItem>
                  ))}
                </>
              )
            }

            {(filteredStockFood.length === 0 && filteredLotePollos.length === 0) && (
              <Typography variant="body2" align="center" color="textSecondary">
                No hay notificaciones disponibles.
              </Typography>
            )}
          </Box>
        </List>
      </Drawer>
    </>
  )
}

export default Notificaciones