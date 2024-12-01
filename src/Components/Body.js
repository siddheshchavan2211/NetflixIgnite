import ParentComponent from "./ParentComponent";

const Body = () => {
  return (
    <div className="bg-gradient-to-r from-dark-start to-dark-end h-full bg-black">
      <div>
        <ParentComponent />
      </div>
    </div>
  );
};

export default Body;
