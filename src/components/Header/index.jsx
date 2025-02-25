import React, { useContext, useState } from "react"
import { AppBar, Box, Button, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { Dashboard, DarkMode, Logout, Menu, Notifications, Inventory, MonetizationOn } from "@mui/icons-material"
import { Lote, Raza, Alimentos, Salud, Cliente, Reporte, Vaccine, ChickenSick, Beneficios, Gastos, Medicamentos } from "../CustomIcons"
import { NavListDrawer } from "./NavListDrawer"
import Logo from "../../assets/Logo3.png"
import User from "../../assets/avatar-male.png"
import { PolloTrackContext } from "../../context"
import Swal from "sweetalert2"
import Notificaciones from "./Notificaciones"

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openSaludMenu, setOpenSaludMenu] = useState(false)
  const [openStockMenu, setOpenStockMenu] = useState(false)
  const [openFinanceMenu, setOpenFinanceMenu] = useState(false)
  const { logOut } = useContext(PolloTrackContext)

  const showDeleteConfirmation = () => {
    Swal.fire({
      icon: 'warning',
      title: `¿Estás seguro de cerrar sesión?`,
      showCancelButton: true,
      confirmButtonText: 'Si, Cerrar Sesión',
      cancelButtonText: 'No, Cancelar',
      confirmButtonColor: '#b29500',
      cancelButtonColor: '#800020',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) logOut()
    })
  }

  const navLinks = [
    {
      title: "Lotes",
      path: "/lote-pollos",
      icon: <Lote />,
    },
    {
      title: "Salud",
      path: "/salud",
      icon: <Salud />,
      sublinks: [
        {
          title: "Vacunas",
          path: "/vacunas",
          icon: <Vaccine />,
        },
        {
          title: "Enfermedad",
          path: "/enfermedades",
          icon: <ChickenSick />,
        },
      ],
    },
    {
      title: "Razas",
      path: "/razas",
      icon: <Raza />,
    },
    {
      title: "Alimentación",
      path: "/alimentacion",
      icon: <Alimentos />,
    },
    {
      title: "Finanzas",
      path: "/finanzas",
      icon: <MonetizationOn />,
      sublinks: [
        {
          title: "Ventas",
          path: "/finanzas/ventas",
          icon: <Beneficios />,
        },
        {
          title: "Gastos",
          path: "/finanzas/gastos",
          icon: <Gastos />,
        },
      ],
    },
    {
      title: "Clientes",
      path: "/clientes",
      icon: <Cliente />,
    },
    {
      title: "Inventario",
      path: "/inventario",
      icon: <Inventory />,
      sublinks: [
        {
          title: "Alimentos",
          path: "/inventario/alimentos",
          icon: <Alimentos />,
        },
        {
          title: "Medicamentos",
          path: "/inventario/medicamentos",
          icon: <Medicamentos />,
        },
        {
          title: "Vacunas",
          path: "/inventario/vacunas",
          icon: <Vaccine />,
        },
      ],
    },
    {
      title: "Reportes",
      path: "/reportes",
      icon: <Reporte />,
    },
  ]

  const handleSaludMenuClick = () => {
    setOpenSaludMenu(!openSaludMenu)
    setOpenStockMenu(false)
    setOpenFinanceMenu(false)
  }

  const handleStockMenuClick = () => {
    setOpenStockMenu(!openStockMenu)
    setOpenSaludMenu(false)
    setOpenFinanceMenu(false)
  }

  const handleFinanceMenuClick = () => {
    setOpenFinanceMenu(!openFinanceMenu)
    setOpenStockMenu(false)
    setOpenSaludMenu(false)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-around", py: 0 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => setOpenDrawer(true)}
              color="text"
              size="large"
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <Menu fontSize="large" />
            </IconButton>
            <Link to={"/dashboard"}>
              <img src={Logo} alt="Logo" width="68px" height="50px" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component={(item.title === "Salud" || item.title === "Inventario" || item.title === "Finanzas" || item.title === "Reportes") ? Button : NavLink}
                to={(item.title === "Salud" || item.title === "Inventario" || item.title === "Finanzas" || item.title === "Reportes") ? null : item.path}
                color="text"
                startIcon={item.icon}
                onClick={
                  item.title === "Salud"
                    ? handleSaludMenuClick
                    : item.title === "Inventario"
                      ? handleStockMenuClick
                      : item.title === "Finanzas"
                        ? handleFinanceMenuClick
                        : item.title === "Reportes"
                          ? handleReportClick
                          : () => {
                            setOpenSaludMenu(false)
                            setOpenStockMenu(false)
                            setOpenFinanceMenu(false)
                          }
                }
                sx={{
                  "&:hover": {
                    backgroundColor: "primary.light",
                  }
                }}
              >
                <Typography
                  variant="button"
                  sx={{ textTransform: "none" }}
                >
                  {item.title}
                </Typography>
              </Button>
            ))}
          </Box>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ display: { xs: "none", lg: "flex" } }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Notificaciones />
            <IconButton onClick={() => { showDeleteConfirmation() }}>
              <Logout color="text" />
            </IconButton>
            <img src={User} alt="Logo" width="40px" height="40px" />
          </Box>

          {
            openSaludMenu && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "18%",
                  backgroundColor: "primary.main",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              >
                {navLinks
                  .find((link) => link.title === "Salud")
                  ?.sublinks.map((sublink) => (
                    <Button
                      key={sublink.title}
                      component={NavLink}
                      to={sublink.path}
                      color="text"
                      startIcon={sublink.icon}
                      onClick={() => setOpenSaludMenu(false)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "primary.light",
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{ textTransform: "none" }}
                      >
                        {sublink.title}
                      </Typography>
                    </Button>
                  ))}
              </Box>
            )
          }

          {
            openFinanceMenu && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "41%",
                  backgroundColor: "primary.main",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              >
                {navLinks
                  .find((link) => link.title === "Finanzas")
                  ?.sublinks.map((sublink) => (
                    <Button
                      key={sublink.title}
                      component={NavLink}
                      to={sublink.path}
                      color="text"
                      startIcon={sublink.icon}
                      onClick={() => setOpenFinanceMenu(false)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "primary.light",
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{ textTransform: "none" }}
                      >
                        {sublink.title}
                      </Typography>
                    </Button>
                  ))}
              </Box>
            )
          }

          {
            openStockMenu && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: "52%",
                  backgroundColor: "primary.main",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              >
                {navLinks
                  .find((link) => link.title === "Inventario")
                  ?.sublinks.map((sublink) => (
                    <Button
                      key={sublink.title}
                      component={NavLink}
                      to={sublink.path}
                      color="text"
                      startIcon={sublink.icon}
                      onClick={() => setOpenStockMenu(false)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "primary.light",
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{ textTransform: "none" }}
                      >
                        {sublink.title}
                      </Typography>
                    </Button>
                  ))}
              </Box>
            )
          }
        </Toolbar>
      </AppBar>

      <Drawer
        open={openDrawer}
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        sx={{ display: { xs: "flex", lg: "none" } }}
      >
        <NavListDrawer
          navLinks={navLinks}
          setOpenDrawer={setOpenDrawer}
        />
      </Drawer>
    </>
  )
}

export { Header }