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
  
  var table = document.getElementsByTagName("table")[0];
  var i = 1;
  products.forEach((element, index) => {
    var row =
      `<tr>
      <td>` +
      i++ +
      `</td>
      <td>` +
      element["name"] +
      `</td>
      <td>` +
      element["price"] +
      `</td>
      <td><img width="50px" height="50px" src="` +
      element["img"] +
      `" /></td>
      <td><a href="#">Sửa</a></td>
      <td><a href="#">Xóa</a></td>
    </tr>`;
  
    table.innerHTML += row;
  });