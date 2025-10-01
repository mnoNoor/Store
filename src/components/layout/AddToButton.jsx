import { Button } from "../ui/button";
import { useCartStore } from "@/Store/Store";
import { useState } from "react";

import AddingAlert from "../features/AddingAlert";

export default function AddButton(props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [show, setShow] = useState(false);

  const toAddAndShow = () => {
    setShow(true);
    addToCart(props.product);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div>
      <Button
        className="bg-yellow-300 hover:bg-yellow-400 hover:cursor-pointer text-black w-full sm:w-auto text-xs sm:text-sm"
        onClick={toAddAndShow}
      >
        {props.text}
      </Button>
      {show && <AddingAlert product={props.product} />}
    </div>
  );
}
