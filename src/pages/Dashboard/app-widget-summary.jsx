import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function AppWidgetSummary({ title, total, icon, color = 'primary'}) {
  return (
    <Card
      component={Stack}
      spacing={3}
      direction="row"
      sx={{
        px: 2,
        py: 2,
        borderRadius: 2,
      }}
    >
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={icon} alt="Logo" width="48px" height="48px" /> 
      </Box>

      <Stack spacing={0.5}>
        <Typography variant="h4">{(total)}</Typography>

        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>
      </Stack>
    </Card>
  )
}