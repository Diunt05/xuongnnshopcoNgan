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
  
  var search_url = window.location.search;
  
  console.log(search_url);
  
  var params = new URLSearchParams(search_url);
  
  console.log(params);
  
  var index = params.get("index");
  console.log(index);
  
  var product = products[index];
  
  var title = document.getElementsByClassName("title")[0];
  
  title.innerText = product["name"];
  
  var price = document.getElementById("price");
  price.innerText = product["price"];
  
  var img = document.getElementById("img");
  
  img.setAttribute("src", product["img"]);
  
  //
  
  var minus = document.getElementsByClassName("minus")[0];
  
  var plus = document.getElementsByClassName("plus")[0];
  
  var num = document.getElementById("num");
  
  minus.onclick = function () {
    var number = num.value;
  
    if (number > 1) {
      number--;
      num.value = number;
    }
  };
  
  plus.onclick = function () {
    var number = num.value;
    number++;
    num.value = number;
  };