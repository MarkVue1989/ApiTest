import Sidebar from "./Sidebar";
import MainArea from "./MainArea";

function Body() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <MainArea />
      </div>
    </>
  );
}

export default Body;
