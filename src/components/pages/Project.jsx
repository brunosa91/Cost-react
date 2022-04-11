import { useLocation } from "react-router-dom";
import Message from "../layout/Message.jsx";

function Project() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }
  return (
    <div>
      <h1>Meus projetos</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Project;
