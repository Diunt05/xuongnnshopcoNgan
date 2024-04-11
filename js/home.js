function Product(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
  }
  
  var products = [
    new Product("Áo Thun", 250000, "./img/ao.jpg"),
    new Product("Quà tặng ny", 500000, "./img/qua.jpg"),
    new Product("Kẽm làm hoa", 150000, "./img/hoa.jpg"),
    new Product("Bàn làm việc", 700000, "./img/ban.jpg"),
    new Product("Sữa tắm", 159000, "./img/stam.jpg"),
    new Product("Bánh tráng", 89000, "./img/banhtrang.jpg"),
    new Product("Quần short", 709000, "./img/quan.jpg"),
    new Product("Túi sách", 138000, "./img/tui.jpg"),
    new Product("Gương", 205000, "./img/guong.jpg"),
    new Product("Sữa rửa mặt", 93000, "./img/srm.jpg"),
    new Product("Cốc sứ", 59000, "./img/coc.jpg"),
    new Product("Dây buộc tóc", 9000, "./img/dbt.jpg"),
  ];
  
  var list_product = document.getElementsByClassName("list-product")[0];
  products.forEach((element, index) => {
    var product =
      `<div class="product">
      <div class="img">
        <img
          src="` +
      element["img"] +
      `"
          alt=""
        />
      </div>
      <div class="info">
        <h3><a href="product_detail.html?index=` +
      index +
      `">` +
      element["name"] +
      `</a></h3>
        <i> ` +
      element["price"] +
      `</i>
      </div>
      <div class="xxx">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <b>Đã bán 15.6k</b>
      </div>
    </div>`;
  
    //   innerHTML, appendChild()
    list_product.innerHTML += product;
  });
  
  // xu li tim kiem
  
  var form = document.getElementById("form-search");
  
  form.onsubmit = function (e) {
    e.preventDefault();
    var search_key = form.search.value.trim();
    if (search_key) {
      var item;
      var i;
      products.forEach((element, index) => {
        if (search_key == element["name"]) {
          item = element;
          i = index;
          return;
        }
      });
  
      if (item) {
        var product =
          `<div class="product">
        <div class="img">
          <img
            src="` +
          item["img"] +
          `"
            alt=""
          />
        </div>
        <div class="info">
          <h3><a href="product_detail.html?index=` +
          i +
          `">` +
          item["name"] +
          `</a></h3>
          <i>Price: ` +
          item["price"] +
          `</i>
        </div>
        <div class="xxx">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <b>Đã bán 15.6k</b>
        </div>
      </div>`;
  
        //   innerHTML, appendChild()
        list_product.innerHTML = product;
      } else {
        alert("Không có sản phẩm nào");
      }
    }
  };