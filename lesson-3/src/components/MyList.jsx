import React from 'react'
import {List,
    ListItem,
    Avatar,
    ListItemAvatar,
    ListItemText,
    Divider,Typography, useTheme} from "@mui/material";

const MyList = () => {
  const theme = useTheme();
  
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="1 Chat-1" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
        <ListItemText style={{
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.secondary.main
        }}
            primary="Message from chat -1 "
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                user from chat-1
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="2 Chat-2" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Message from chat -2 "
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                user from chat-2
              </Typography>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="3 Chat-3" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Message from chat -3"
            secondary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                user from chat-3
              </Typography>
            }
          />
        </ListItem>
      </List>
  )
}

export default MyList