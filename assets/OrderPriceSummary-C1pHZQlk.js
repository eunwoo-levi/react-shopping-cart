import { u as useSelectedCartContext, j as jsxRuntimeExports, O as OrderPriceSummaryContainer, D as DeliveryFeeLabel, c as DeliveryFeeIcon, T as TotalOrderPrice, P as PriceBox, d as DeliveryFee, e as TotalPurchasePrice } from "./index-COByHa3Z.js";
function OrderPriceSummary() {
  const { selectedCartItems } = useSelectedCartContext();
  const totalPrice = selectedCartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = totalPrice >= 1e5 ? 0 : 3e3;
  const totalPurchasePrice = totalPrice + deliveryFee;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OrderPriceSummaryContainer, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DeliveryFeeLabel, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DeliveryFeeIcon, { src: "./infoLabelIcon.svg", alt: "Delivery Fee Label Icon" }),
      "총 주문 금액이 100,000원 이상일 경우 무료 배송됩니다."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TotalOrderPrice, { children: [
      "주문 금액",
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PriceBox, { children: [
        totalPrice.toLocaleString(),
        "원"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DeliveryFee, { "data-testid": "delivery-fee", children: [
      "배송비",
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PriceBox, { children: [
        deliveryFee.toLocaleString(),
        "원"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(TotalPurchasePrice, { "data-testid": "total-purchase-price", children: [
      "총 결제 금액",
      /* @__PURE__ */ jsxRuntimeExports.jsxs(PriceBox, { children: [
        totalPurchasePrice.toLocaleString(),
        "원"
      ] })
    ] })
  ] });
}
export {
  OrderPriceSummary as default
};
