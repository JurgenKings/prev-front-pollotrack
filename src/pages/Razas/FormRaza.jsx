import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material"
import { ArrowBackIos } from "@mui/icons-material"

function FormRaza({ formik, detailRaza = null, update = false }) {
  const navigate = useNavigate()

  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    resetForm,
  } = formik

  return (
    <Container maxWidth="lg">
      <Paper
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{ mt: 3, minHeight: "100vh", p: 3 }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 600, fontSize: "2rem" }}
        >
          <IconButton onClick={() => navigate("/razas")}>
            <ArrowBackIos color="text" />
          </IconButton>
          {update ? `Actualizar Raza: ${detailRaza?.nombre}` : "Registrar Raza"}
        </Typography>

        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          sx={{ mt: 1 }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Nombre"
              color="text"
              variant="filled"
              name="name"
              onChange={handleChange}
              helperText={touched.name && errors.name}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Descripción"
              color="text"
              variant="filled"
              name="description"
              onChange={handleChange}
              helperText={touched.description && errors.description}
              value={values.description}
              error={touched.description && Boolean(errors.description)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Color Plumaje"
              color="text"
              variant="filled"
              name="colorFeathers"
              onChange={handleChange}
              helperText={touched.colorFeathers && errors.colorFeathers}
              value={values.colorFeathers}
              error={touched.colorFeathers && Boolean(errors.colorFeathers)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Costo por pollo individual"
              color="text"
              InputProps={{
                endAdornment: <InputAdornment position="end">$</InputAdornment>,
              }}
              variant="filled"
              name="costPerUnid"
              onChange={handleChange}
              helperText={touched.costPerUnid && errors.costPerUnid}
              value={values.costPerUnid}
              error={touched.costPerUnid && Boolean(errors.costPerUnid)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Peso Promedio a los 10 días"
              color="text"
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              variant="filled"
              name="averageWeightTenDays"
              onChange={handleChange}
              helperText={touched.averageWeightTenDays && errors.averageWeightTenDays}
              value={values.averageWeightTenDays}
              error={touched.averageWeightTenDays && Boolean(errors.averageWeightTenDays)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Peso Promedio a los 20 días"
              color="text"
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              variant="filled"
              name="averageWeightTwentyDays"
              onChange={handleChange}
              helperText={touched.averageWeightTwentyDays && errors.averageWeightTwentyDays}
              value={values.averageWeightTwentyDays}
              error={touched.averageWeightTwentyDays && Boolean(errors.averageWeightTwentyDays)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Peso Promedio a los 30 días"
              color="text"
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              variant="filled"
              name="averageWeightThirtyDays"
              onChange={handleChange}
              helperText={touched.averageWeightThirtyDays && errors.averageWeightThirtyDays}
              value={values.averageWeightThirtyDays}
              error={touched.averageWeightThirtyDays && Boolean(errors.averageWeightThirtyDays)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Peso Promedio a los 40 días"
              color="text"
              InputProps={{
                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
              }}
              variant="filled"
              name="averageWeightFortyDays"
              onChange={handleChange}
              helperText={touched.averageWeightFortyDays && errors.averageWeightFortyDays}
              value={values.averageWeightFortyDays}
              error={touched.averageWeightFortyDays && Boolean(errors.averageWeightFortyDays)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              label="Observación"
              color="text"
              variant="filled"
              name="observation"
              onChange={handleChange}
              helperText={touched.observation && errors.observation}
              value={values.observation}
              error={touched.observation && Boolean(errors.observation)}
              fullWidth
            />
          </Grid>
          <Grid item xs={8} md={3} lg={3}>
            <TextField
              label="Imagen"
              color="text"
              variant="filled"
              name="img"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2} lg={2} sx={{ mt: { xs: 0, md: 12, lg: 12 }, ml: { xs: 0, md: 7, lg: 9 }, mr: { xs: 0, md: 7, lg: 7 } }}>
            <Button variant="contained" type="reset" color="secondary" onClick={resetForm} fullWidth>
              <Typography
                variant="button"
                sx={{ fontWeight: "bold", textTransform: "none" }}
              >
                Limpiar
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} md={2} lg={2} sx={{ mt: { xs: 0, md: 12, lg: 12 } }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              <Typography
                variant="button"
                sx={{ fontWeight: "bold", textTransform: "none" }}
              >
                {update ? "Actualizar" : "Registrar"}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export { FormRaza }