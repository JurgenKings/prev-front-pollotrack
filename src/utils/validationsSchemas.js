import * as Yup from "yup"

const validationsSchemas = {
  razas: Yup.object().shape({
    name: Yup.string().required("Debes ingresar el nombre de la raza"),
    description: Yup.string().required("Debes ingresar una breve descripción"),
    colorFeathers: Yup.string().required("Debes ingresar el color de las plumas"),
    costPerUnid: Yup.number().required("Debes ingresar el costo por pollo individual"),
    averageWeightTenDays: Yup.number().required("Debes ingresar el peso promedio a los 10 días de nacido"),
    averageWeightTwentyDays: Yup.number().required("Debes ingresar el peso promedio a los 20 días de nacido"),
    averageWeightThirtyDays: Yup.number().required("Debes ingresar el peso promedio a los 30 días de nacido"),
    averageWeightFortyDays: Yup.number().required("Debes ingresar el peso promedio a los 40 días de nacido"),
  }),
}

export { validationsSchemas }