import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import AddIcon from "@material-ui/icons/Add";
import Badge from "@material-ui/core/Badge";

export default function mainListItems(props) {
  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <Badge badgeContent={15} color="primary">
            <AddIcon />
          </Badge>
        </ListItemIcon>
        <ListItemText primary="Requests" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ThumbUpIcon />
        </ListItemIcon>
        <ListItemText primary="Accepted Candidates" />
      </ListItem>
      <ListItem button onClick="">
        <ListItemIcon>
          <ThumbDownIcon />
        </ListItemIcon>
        <ListItemText primary="Rejected Candidates" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </>
  );
}
