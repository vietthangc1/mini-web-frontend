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

    XuatDistinctVaDropdownValues("cate1", lst_product)
    XuatDistinctVaDropdownValues("cate2", lst_product)
    XuatDistinctVaDropdownValues("cate3", lst_product)
    XuatDistinctVaDropdownValues("cate4", lst_product)

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
      <div class="card-utilities">
        <button class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#modal-details" onclick="loadDetail(${element.id})">Chi tiết</button>
        <button class="btn btn-sm btn-outline-danger" onclick="loadModalXoaSanPham(${element.id})" data-toggle="modal" data-target="#modal-delete">
          <i class="fa fa-trash" aria-hidden="true"></i> Xóa
        </button>
        <button class="btn btn-sm btn-outline-warning" data-toggle="modal" data-target="#modal-update" onclick="loadModalUpdate(${element.id})">
          <i class="fa fa-edit" aria-hidden="true"></i> Chỉnh sửa
        </button>
      </div>
    </div>
      `
  })
  return html
}

const XuatDistinctVaDropdownValues = (key, data) => {
  array = Array.from(new Set(data.map((item) => item[key])))

  let html = ``
  array.forEach(e => {
    html += `<p class="dropdown-item" onclick="UpdateParams('${key}', '${e}')">${e}</p>`
  })
  document.getElementById("list_" + key).innerHTML = html

  title = "Chọn " + key

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