import { useState } from "react";

function Sidebar() {
  /* const { elements, setElements } = useState([]);
  const treeData = [
    {
      id: 1,
      name: "Node 1",
      children: [
        {
          id: 2,
          name: "Node 1.1",
          children: [
            {
              id: 3,
              name: "Node 1.1.1",
              children: [],
            },
            {
              id: 4,
              name: "Node 1.1.2",
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: "Node 1.2",
          children: [],
        },
      ],
    },
  ];
  return (
    <div className=" flex flex-column flex-start w-1/4 bg-gray-200 h-screen">
      <div className="">
        <AddButton />
        <TreeView nodes={treeData} />
      </div>
      <div className="flex flex-start">
        <FilterField />
      </div>
    </div>
  ); */
  return (
    <div className=" flex flex-column flex-start w-1/12 bg-gray-200">
      Menú lateral
    </div>
  );
}

function AddButton() {
  return (
    <div>
      <button className="border border-grey border-slate-300 rounded-full m-2 px-2 bg-slate-100">
        <span className="text-black-500">+</span>
      </button>
    </div>
  );
}

function FilterField() {
  return (
    <div>
      <input
        type="text"
        className="w-32 h-7 mt-2 border border-slate-300"
        placeholder="Filtrar"
      />
    </div>
  );
}

function TreeView({ nodes }) {
  return (
    <ul className="m-2 text-lg">
      {nodes.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </ul>
  );
}

function TreeNode({ node }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={handleToggle} className="cursor-pointer m-2">
        {node.children && node.children.length > 0 && (
          <span>{isOpen ? "v " : "> "}</span>
        )}
        {node.name}
      </div>
      {isOpen && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
