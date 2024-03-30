import { useState } from "react";

function MainArea() {
  const methods = [
    { id: 1, title: "GET", color: "text-green-500/75" },
    { id: 2, title: "POST", color: "text-yellow-100/75" },
    { id: 3, title: "PUT", color: "text-blue-500/75" },
    { id: 4, title: "DELETE", color: "text-red-500/75" },
    { id: 5, title: "PATCH", color: "text-purple-500/75" },
  ];

  const handleChange = (event) => {
    const id = Number(event.target.value);
    setSelectedMethod(id);
    const selectedMethod = methods.find((method) => method.id === id);
    setSelectedColor(selectedMethod.color);
  };

  const [selectedMethod, setSelectedMethod] = useState(1);
  const [selectedColor, setSelectedColor] = useState("text-green-500/75");
  return (
    <div className="w-11/12 bg-gray-300/50 flex flex-wrap content-start">
      <div className="w-full h-12 flex gap-4 pt-3 pl-4">
        <div>
          <label htmlFor="name" className="text-xl text-gray-600 ">
            Name
          </label>
        </div>
        <div className="w-full">
          <input
            id="name"
            type="text"
            className="w-full h-6 p-4"
            placeholder="Endpoint name"
          />
        </div>
        <div>
          <label htmlFor="method" className="text-xl text-gray-600 pt-4">
            Method
          </label>
        </div>
        <div>
          <select
            name="methods"
            id="method"
            value={selectedMethod}
            onChange={handleChange}
            className={`bg-white p-2 ${selectedColor}`}
          >
            {methods.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="self-center pr-2">
          <a className="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-md">
            Save
          </a>
        </div>
      </div>
      <div className="w-full h-12 flex gap-4 pt-3 pl-4">
        <div>
          <label htmlFor="url" className="text-xl text-gray-600 ">
            URL
          </label>
        </div>
        <div className="w-full pr-2">
          <input
            id="url"
            type="text"
            className="w-full h-6 p-4"
            placeholder="url"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default MainArea;
