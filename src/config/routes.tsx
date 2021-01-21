import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EmailIcon from "@material-ui/icons/Email";

export const AppRoutes = [
  { to: "/", label: "Home", icon: <HomeIcon fontSize="small" /> },
  { to: "/about", label: "About", icon: <InfoIcon fontSize="small" /> },
  { to: "/blogs", label: "Blogs", icon: <AssignmentIcon fontSize="small" /> },
  { to: "/contact", label: "Contact", icon: <EmailIcon fontSize="small" /> },
];
