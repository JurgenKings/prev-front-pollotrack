import React from "react"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

function NavListDrawer({ navLinks, setOpenDrawer }) {
  return (
    <nav>
      <List>
        {navLinks.map((item) => (
          <ListItem
            disablePadding
            key={item.title}
          >
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

export { NavListDrawer }