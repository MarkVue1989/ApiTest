import Sidebar from "./Sidebar";
import MainArea from "./MainArea";

function Body() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainArea />
      </div>
    </>
  );
}

export default Body;
