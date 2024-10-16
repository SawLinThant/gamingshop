import { useContext, useState } from "react";
import ProductSidebar from "../components/ProductSidebar";
import { MdPlaylistRemove } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const CollectionPage = () => {
  const tax = 2;
  const {addToCart} = useContext(ShopContext)
  const [desktop, setDesktop] = useState();
  const [monitor, setMonitor] = useState();
  const [ram, setRam] = useState();
  const [gpu, setGpu] = useState();
  console.log(monitor)
  const totalPrice =
    (desktop?.price || 0) +
    (monitor?.price || 0) +
    (ram?.price || 0) +
    (gpu?.price || 0);
  const renderedDescription = (description) => {
    return description ? (
      description.split(",").map((item, index) => (
        <li className="bg-transparent ml-2" key={index}>
          - {item.trim()}
        </li>
      ))
    ) : (
      <li>No description available</li>
    );
  };
  const handleAddToCart = async() => {
    let itemsToAdd = [];

    if (desktop) {
        itemsToAdd.push({ itemId: desktop._id, sizes: desktop.sizes.length > 0 ? desktop.sizes[0] : ["Gray"] });
    }
    if (monitor) {
        itemsToAdd.push({ itemId: monitor._id, sizes: monitor.sizes.length > 0 ? monitor.sizes[0] : ["Gray"] });
    }
    if (ram) {
        itemsToAdd.push({ itemId: ram._id, sizes: ram.sizes.length > 0 ? ram.sizes[0] : ["Gray"] });
    }
    if (gpu) {
        itemsToAdd.push({ itemId: gpu._id, sizes: gpu.sizes.length > 0 ? gpu.sizes[0] : ["Gray"] });
    }

    if (itemsToAdd.length > 0) {
      try {
        // Use Promise.all to ensure all items are added before proceeding
        await Promise.all(
            itemsToAdd.map(async (item) => {
                await addToCart(item.itemId, item.sizes[0]);
                console.log(item)
            })
        );
        toast.success("All selected items added to cart!");
    } catch (error) {
        console.log("Error adding items to cart:", error);
        toast.error("Error adding some items to cart.");
    }
    } else {
        toast.error('No items selected to add to cart');
    }
};

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className=" grid w-full lg:grid-cols-12 md:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-4 md:col-span-4">
            <ProductSidebar
              setDesktop={setDesktop}
              setMonitor={setMonitor}
              setRam={setRam}
              setGpu={setGpu}
            />
          </div>
          <div className="lg:col-span-8 md:col-span-8 w-auto flex flex-col items-start justify-start p-4 gap-y-1">
            <div className="w-full flex md:flex-col flex-col lg:flex-row items-start gap-3">
            <div className="flex flex-col gap-y-4 md:w-full">
              <div className="w-full flex flex-row items-center justify-start">
                <div className="">
                  <div className="w-[50vw] h-[20vh] relative lg:w-[15rem] md:w-[15rem] lg:h-[15rem] md:h-[15rem] perspective-1000">
                    {monitor ? (
                      <div className="w-full h-full">
                        <div
                        onClick={() => setMonitor(null)}
                        className="absolute right-3 top-0 hover:cursor-pointer text-white z-10"><MdPlaylistRemove size={20}/></div>
                      <img
                        className="w-full h-full object-cover transform hover:cursor-pointer shadow-2xl scale-95 hover:scale-100 transition-transform duration-500"
                        src={monitor ? monitor.image : ""}
                        alt=""
                      />
                      </div>
                    ) : (
                      <div className="flex items-center w-full h-full border-dotted border justify-center text-white">
                        Select Monitor
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="lg:w-[10rem] md:w-[10rem] lg:h-[15rem] md:h-[15rem] w-full h-[20vh] relative">
                    {desktop ? (
                       <div className="w-full h-full">
                       <div
                       onClick={() => setDesktop(null)}
                       className="absolute right-3 top-0 hover:cursor-pointer text-white z-10"><MdPlaylistRemove size={20}/></div>
                     <img
                       className="w-full h-full object-cover transform hover:cursor-pointer shadow-2xl scale-95 hover:scale-100 transition-transform duration-500"
                       src={desktop ? desktop.image : ""}
                       alt=""
                     />
                     </div>
                    ) : (
                      <div className="w-full h-full flex items-center border-dotted px-3 border justify-center text-white">
                        Select Desktop
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start gap-1 h-[5rem] max-h-[5rem]">
                <div className="w-[10rem] h-[4rem]">
                  {ram ? (
                     <div className="w-full h-full relative">
                     <div
                     onClick={() => setRam(null)}
                     className="absolute right-3 top-0 hover:cursor-pointer text-white z-10"><MdPlaylistRemove size={20}/></div>
                   <img
                     className="w-full h-full object-cover transform hover:cursor-pointer shadow-2xl scale-95 hover:scale-100 transition-transform duration-500"
                     src={ram ? ram.image : ""}
                     alt=""
                   />
                   </div>
                  ) : (
                    <div className="w-full h-full flex items-center border-dotted border border-white justify-center text-white">
                      Select Ram
                    </div>
                  )}
                </div>
                <div className="w-[10rem] h-[4rem] relative">
                  {gpu ? (
                     <div className="w-full h-full">
                     <div
                     onClick={() => setGpu(null)}
                     className="absolute right-3 top-0 hover:cursor-pointer text-white z-10 bg-transparent"><MdPlaylistRemove size={20}/></div>
                   <img
                     className="w-full h-full object-cover transform hover:cursor-pointer shadow-2xl scale-95 hover:scale-100 transition-transform duration-500"
                     src={gpu ? gpu.image : ""}
                     alt=""
                   />
                   </div>
                  ) : (
                    <div className="w-full h-full flex items-center border-dotted border justify-center text-white">
                      Select GPU
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 w-full lg:w-2/4 md:w-3/4 bg-gray-transparent border rounded-md border-white text-white">
              <div className="flex flex-col bg-transparent gap-4">
                <h1 className="bg-transparent font-bold text-lg">
                  System Specification
                </h1>
                <div className="flex flex-col bg-transparent">
                  <h2 className="bg-transparent font-bold">Monitor</h2>
                  <ul className="bg-transparent">
                    {monitor ? (
                      renderedDescription(monitor.description)
                    ) : (
                      <li className="bg-transparent ml-2 text-rose-400">
                        - No Monitor Selected
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex flex-col bg-transparent">
                  <h2 className="bg-transparent font-bold">Desktop</h2>
                  <ul className="bg-transparent">
                    {desktop ? (
                      renderedDescription(desktop.description)
                    ) : (
                      <li className="bg-transparent ml-2 text-rose-400">
                        - No Desktop Selected
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex flex-col bg-transparent">
                  <h2 className="bg-transparent font-bold">Ram</h2>
                  <ul className="bg-transparent">
                    {ram ? (
                      renderedDescription(ram.description)
                    ) : (
                      <li className="bg-transparent ml-2 text-rose-400">
                        - No Ram Selected
                      </li>
                    )}
                  </ul>
                </div>
                <div className="flex flex-col bg-transparent">
                  <h2 className="bg-transparent font-bold">GPU</h2>
                  <ul className="bg-transparent">
                    {gpu ? (
                      renderedDescription(gpu.description)
                    ) : (
                      <li className="bg-transparent ml-2 text-rose-400">
                        - No GPU Selected
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            </div>
            <div className="mt-4 w-full justify-start flex flex-row items-center gap-4 text-white">
              <p className="font-bold text-lg">Subtotal:</p>
              <div className="flex flex-row items-center gap-1">
                <span>$</span>
                <div>{totalPrice}</div>
              </div>
            </div>
            <div className="pb-4 w-full justify-start flex flex-row items-center gap-4 text-white border-b border-white">
              <p className="font-bold text-lg">Tax:</p>
              <div className="flex flex-row items-center gap-1">
                <span>$</span>
                <div>{tax}</div>
              </div>
            </div>
            <div className="pb-4 w-full justify-between flex flex-row items-center gap-4 mt-4">
             <div className="flex flex-row gap-4 items-center text-green-700 font-bold text-lg">
             <p className="font-bold text-lg">Tax:</p>
              <div className="flex flex-row items-center gap-1">
                <span>$</span>
                <div>{totalPrice + tax}</div>
              </div>
             </div>
           <div onClick={handleAddToCart} className="flex flex-row items-center text-white rounded-md border-white p-4 bg-green-700 hover:cursor-pointer">Add to cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollectionPage;
