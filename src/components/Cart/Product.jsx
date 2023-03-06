import { TrashIcon } from "./TrashIcon";
import { removeProduct } from "../../store/cartStore";

export const Product = ({ product }) => {
  const { title, quantity, id } = product;

  const removeProductHandler = (id) => {
    removeProduct(id);
  };

  return (
    <div className="flex items-center justify-between py-1">
      <h4 className="text-lg">
        {title} {quantity && `(${quantity})`}
      </h4>
      <div className="flex gap-3">
        <h4 className="text-lg">$ {product.price * quantity}</h4>
        <span className="text-gray-300">|</span>
        <TrashIcon onClick={() => removeProductHandler(id)} />
      </div>
    </div>
  );
};
