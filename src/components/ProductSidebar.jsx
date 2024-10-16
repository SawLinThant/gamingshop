import { useContext, useState } from "react";
import { SIDEBAR_MENU_LISTS } from "../lib/config";
import { FaPlusCircle } from "react-icons/fa";
import clsx from "clsx";
import { ShopContext } from "../context/ShopContext";
import { FaChevronDown } from "react-icons/fa";

const ProductSidebar = ({
    setDesktop,
    setMonitor,
    setRam,
    setGpu
}) => {
  const { products } = useContext(ShopContext);
  console.log(products)
  const handleProductClick = (product) => {
    switch (product.subCategory) {
      case "Desktop":
        setDesktop(product); 
        break;
      case "Monitor":
        setMonitor(product); 
        break;
      case "Ram":
        setRam(product); 
        break;
      case "GPU":
        setGpu(product); 
        break;
      default:
        break;
    }
  };
  return (
    <div className="lg:w-[15vw] h-full overflow-hidden p-4">
      {SIDEBAR_MENU_LISTS.map((list) => {
        const [expand, setExpand] = useState(false);
        return (
          <div
            key={list.id}
            className="w-full text-white overflow-auto flex flex-col items-center border"
          >
            <div
              onClick={() => setExpand(!expand)}
              className="w-full h-12 p-3 flex font-bold text-lg flex-row items-center backdrop-brightness-90 justify-between gap-4 cursor-pointer"
            >
              {list.name}{" "}
              <div
                className={clsx("", {
                  "rotate-[-180deg]": expand,
                  "rotate-0": !expand,
                })}
              >
                <FaChevronDown />
              </div>
            </div>
            <div
              className={clsx(
                "w-full flex flex-col text-blue-600 items-center transition-all duration-500",
                {
                  "h-0 overflow-hidden": !expand,
                  "h-auto max-h-28 overflow-y-auto": expand,
                }
              )}
            >
              {products
                .filter((product) => product.subCategory === list.name)
                .map((product) => (
                  <div className="w-full h-10 flex py-4 flex-row items-center justify-between px-3">
                    <div>{product.name} </div>{" "}
                    <div
                    onClick={() =>handleProductClick(product)}
                    className="cursor-pointer">
                      <FaPlusCircle size={15} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductSidebar;
