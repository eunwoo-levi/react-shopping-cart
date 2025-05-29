import { j as jsxRuntimeExports, C as CartListContainer, A as AllSelectContainer, S as SelectInput, a as CartItemCardContainer, b as CartItemCard } from "./index-COByHa3Z.js";
function CartList({ cartItems, setCartItems, addAllCartItemsInSelected }) {
  const handleAllCartItemsInSelected = (e) => {
    const isChecked = e.target.checked;
    if (!isChecked) {
      addAllCartItemsInSelected([]);
      return;
    }
    addAllCartItemsInSelected(cartItems);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CartListContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AllSelectContainer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectInput, { type: "checkbox", onChange: handleAllCartItemsInSelected }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "전체 선택" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemCardContainer, { children: cartItems.map((cartItem) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemCard, { cartItem, setCartItems }, cartItem.id)) })
  ] });
}
export {
  CartList as default
};
