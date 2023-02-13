const loadLogin = () => {
  html = ``
  if (sessionStorage.USER == null) {
    html += `<button class="btn btn-success" onclick="loadModalLogin()" data-toggle="modal"
    data-target="#modal-login">Login</button>
    <button class="btn btn-outline-success" onclick="loadModalSignup()" data-toggle="modal"
    data-target="#modal-signup">Sign Up</button>
    `
  } else {
    html += `Chào ${JSON.parse(sessionStorage.USER).Email}
    <button class="btn btn-success" onclick="Logout()">Log out</button>
    `
  }
  document.getElementById('login-zone').innerHTML = html
}

const Logout = () => {
  sessionStorage.removeItem('USER')
  window.location.reload()
}

const loadDS = async (params) => {
  try {
    lst_product = await apiDanhSach(params)
    console.log(lst_product);
    $("#listing-pagination").pagination({
      dataSource: lst_product,
      pageSize: 8,
      callback: function (data, pagination) {
          // template method of yourself
          var html = XuatDataTungProduct(data);
          $("#product-listing").html(html);
      }
    })

    XuatDistinctVaDropdownValues("cate1", false, lst_product)
    XuatDistinctVaDropdownValues("cate2", false, lst_product)
    XuatDistinctVaDropdownValues("cate3", false, lst_product)
    XuatDistinctVaDropdownValues("cate4", false, lst_product)

    XuatDistinctVaDropdownValues("color", true, lst_product)
    XuatDistinctVaDropdownValues("brand", true, lst_product)
    XuatDistinctVaDropdownValues("size", true, lst_product)

  } catch (error) {
    alert(error)
  }
}

const XuatDataTungProduct = (data) => {
  let html = ``
  data.forEach((element) => {
    html += `
    <div class="col-6 mt-2 pr-2">
      <h4>${element.name}</h4>
      <h5>${element.price.toLocaleString()} đ</h5>
      <p style="color:${element.propertises.color}">Color: ${element.propertises.color}</p>
      <p>Brand: ${element.propertises.brand}</p>
      <div class="card-utilities">
        <button class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modal-details" onclick="loadDetail(${element.ID})">Chi tiết</button>
        <button class="btn btn-sm btn-outline-danger" onclick="loadModalXoaSanPham(${element.ID})" data-toggle="modal" data-target="#modal-delete">
          <i class="fa fa-trash" aria-hidden="true"></i> Xóa
        </button>
        <button class="btn btn-sm btn-outline-warning" data-toggle="modal" data-target="#modal-update" onclick="loadModalUpdate(${element.ID})">
          <i class="fa fa-edit" aria-hidden="true"></i> Chỉnh sửa
        </button>
      </div>
    </div>
      `
  })
  return html
}

const XuatDistinctVaDropdownValues = (key, isProp = false, data) => {
  if (isProp) {
    array = Array.from(new Set(data.map((item) => item['propertises'][key])))
  } else {
    array = Array.from(new Set(data.map((item) => item[key])))
  }

  let html = ``
  array.forEach(e => {
    html += `<p class="dropdown-item" onclick="UpdateParams('${key}', '${e}')">${e}</p>`
  })
  document.getElementById("list_" + key).innerHTML = html

  title = "Select " + key

  if (array.length == 1 & array[0] != "") {
    title = array[0]
  }
  document.getElementById("title_" + key).innerHTML = title
}

const UpdateParams = (key, value, clear = false) => {
  if (clear) {
    sessionStorage.setItem("filter_params", "{}")
  } else {
    let current_params = getCurrentParams()

    if (current_params == null) {
      current_params = {}
    }

    current_params[key] = value
    sessionStorage.setItem("filter_params", JSON.stringify(current_params))
  }

  RefreshParams()
}

const RefreshParams = () => {
  let current_params = getCurrentParams()
  let paramsString = new URLSearchParams(current_params).toString()
  loadDS(paramsString)
}