import Add from "./form/add";
import Inventory from "./user/inventory";
function Dashboard() {
  return (
    <>
      <div className="container">
        <Add />
      </div>
      <div className="container" style={{ justifyContent: "start" }}>
        <Inventory />
      </div>
    </>
  );
}

export default Dashboard;
