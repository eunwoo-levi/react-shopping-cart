import { u as useCartContext, r as reactExports, j as jsxRuntimeExports, C as CartListContainer, A as AllSelectContainer, S as SelectInput, a as CartItemCardContainer, b as CartItemCard } from "./index-DYLUpf3y.js";
function CartList() {
  const { cartItems, selectedCartItems, addAllCartItemsInSelected } = useCartContext();
  reactExports.useEffect(() => {
    if (cartItems.length === 0)
      return;
    addAllCartItemsInSelected(cartItems);
  }, []);
  const selectedIds = new Set(selectedCartItems.map((item) => item.id));
  const isAllSelected = cartItems.length > 0 && cartItems.every((cartItem) => selectedIds.has(cartItem.id));
  const handleAllCartItemsInSelected = (e) => {
    const isChecked = e.target.checked;
    addAllCartItemsInSelected(isChecked ? cartItems : []);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(CartListContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AllSelectContainer, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectInput, { id: "select-all", type: "checkbox", onChange: handleAllCartItemsInSelected, checked: isAllSelected }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "select-all", children: "전체 선택" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemCardContainer, { children: cartItems.map((cartItem) => /* @__PURE__ */ jsxRuntimeExports.jsx(CartItemCard, { cartItem }, cartItem.id)) })
  ] });
}
export {
  CartList as default
};
