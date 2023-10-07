// icons
import SignalCellular1BarIcon from "@mui/icons-material/SignalCellular1Bar";
import SignalCellular3BarIcon from "@mui/icons-material/SignalCellular3Bar";
import SignalCellular4BarIcon from "@mui/icons-material/SignalCellular4Bar";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import ErrorIcon from "@mui/icons-material/Error";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TonalityOutlinedIcon from "@mui/icons-material/TonalityOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import CancelIcon from "@mui/icons-material/Cancel";

export const priorityIcons = (priority) => {
  if (priority === 0 || priority === "No Priority") {
    return <MoreHoriz style={{ color: "#666" }} />;
  }
  if (priority === 1 || priority === "Low") {
    return <SignalCellular1BarIcon style={{ color: "#666" }} />;
  }
  if (priority === 2 || priority === "Medium") {
    return <SignalCellular3BarIcon style={{ color: "#666" }} />;
  }
  if (priority === 3 || priority === "High") {
    return <SignalCellular4BarIcon style={{ color: "#666" }} />;
  }
  return <ErrorIcon style={{ color: "orange" }} />;
};

export const progressIcons = (progress) => {
  switch (progress) {
    case "Todo":
      return <CircleOutlinedIcon style={{ color: "#ddd" }} />;
    case "In progress":
      return <TonalityOutlinedIcon style={{ color: "#EFEF00" }} />;
    case "Done":
      return <CheckCircleIcon style={{ color: "blue" }} />;
    case "Backlog":
      return <NotInterestedIcon style={{ color: "#666" }} />;
    default:
      return <CancelIcon style={{ color: "#666" }} />;
  }
};
