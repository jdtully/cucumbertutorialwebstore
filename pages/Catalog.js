class Catalog {
  get noResultErrorMessage() {
    return $(".alert.alert-warning");
  }
  get products() {
    return $$("search .product-list .product container .product-name");
  }
}
export default new Catalog();
