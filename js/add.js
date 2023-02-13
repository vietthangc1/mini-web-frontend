const loadModalInput = () => {
    html = `
    <div class="modal fade" id="modal-input" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Thêm Sản phẩm</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" onsubmit="return false">
            <div class="mb-3 form-group">
              <input type="text" class="form-control" id="th_sku" placeholder="SKU">
            </div>
            <div class="mb-3 form-group">
              <input type="text" class="form-control" id="th_name" placeholder="Name">
            </div>
            <div class="mb-3 form-group">
              <input type="number" class="form-control" id="th_price" placeholder="Price">
            </div>
            <div class="mb-3 form-group">
              <input type="number" class="form-control" id="th_number" placeholder="Number">
            </div>
            <div class="mb-3 form-group">
              <textarea class="form-control" id="th_description" cols="30" rows="5" placeholder="Description"></textarea>
            </div>
            <div class="mb-3 form-group">
              <input type="text" class="form-control" id="th_cate1" placeholder="Category 1">
            </div>
            <div class="mb-3 form-group">
              <input type="text" class="form-control" id="th_cate2" placeholder="Category 2">
            </div>
            <div class="mb-3 form-group">
              <input type="text" class="form-control" id="th_cate3" placeholder="Category 3">
            </div>
            <div class="mb-3 form-group">
              <input type="text" class="form-control" id="th_cate4" placeholder="Category 4">
            </div>
            <div class="mb-3 form-group">
              <textarea class="form-control" id="th_propertises" cols="30" rows="5" placeholder="Propertise JSON"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="themSanPham()">Submit</button>
        </div>
      </div>
    </div>
  </div>
    `
    document.getElementById("modalPart").innerHTML = html

}

const themSanPham = async() => {
    let _propertises = document.getElementById("th_propertises").value
    try {
        _propertises = JSON.parse(_propertises)
    } catch (error) {
        _propertises = {}
    }
    let product = {
        sku: document.getElementById("th_sku").value,
        name: document.getElementById("th_name").value,
        price: Number(document.getElementById("th_price").value),
        number: Number(document.getElementById("th_number").value),
        description: document.getElementById("th_description").value,
        cate1: document.getElementById("th_cate1").value,
        cate2: document.getElementById("th_cate2").value,
        cate3: document.getElementById("th_cate3").value,
        cate4: document.getElementById("th_cate4").value,
        propertises: _propertises
    }
    console.log(product);
    try {
        let result = await apiThemSanPham(product)
        alert("Đã thêm", JSON.stringify(result.name))
        window.location.reload()
    } catch (error) {
        console.log(error);
        alert(JSON.stringify(error))
    }
}