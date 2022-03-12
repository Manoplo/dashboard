import styles from "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <div className="top">
        <span className="logo">ManuPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PeopleAltIcon className="icon" />
            <span>Usuarios</span>
          </li>
          <li>
            <WatchLaterIcon className="icon" />
            <span>Horarios</span>
          </li>
          <p className="title">SETTINGS</p>
          <li>
            <SettingsApplicationsOutlinedIcon className="icon" />
            <span>Opciones</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Perfil</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
        <p className="title">COLOR SCHEMA</p>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </nav>
  );
};

export default SideBar;
