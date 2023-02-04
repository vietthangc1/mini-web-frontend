const loadModalUpdate = async (id) => {
    try {
        let productInfo = await apiChiTiet(id)
        let html = `
        <div class="modal fade" id="modal-update" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${productInfo.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <form action="" onsubmit="return false">
                    <div class="mb-3 form-group">
                    <input type="text" class="form-control" id="th_update_sku" value="${productInfo.sku}" placeholder="SKU">
                    </div>
                    <div class="mb-3 form-group">
                    <input type="text" class="form-control" id="th_update_name" value="${productInfo.name}" placeholder="Name">
                    </div>
                    <div class="mb-3 form-group">
                    <input type="number" class="form-control" id="th_update_price" value="${productInfo.price}" placeholder="Price">
                    </div>
                    <div class="mb-3 form-group">
                    <input type="number" class="form-control" id="th_update_number" value="${productInfo.number}" placeholder="Number">
                    </div>
                    <div class="mb-3 form-group">
                    <textarea class="form-control" name="" id="th_update_description" cols="30" rows="5" placeholder="Description" value="${productInfo.description}"></textarea>
                    </div>
                    <div class="mb-3 form-group">
                    <input type="text" class="form-control" id="th_update_cate1" value="${productInfo.cate1}" placeholder="Category 1">
                    </div>
                    <div class="mb-3 form-group">
                    <input type="text" class="form-control" id="th_update_cate2" value="${productInfo.cate2}" placeholder="Category 2">
                    </div>
                    <div class="mb-3 form-group">
                    <input type="text" class="form-control" id="th_update_cate3" value="${productInfo.cate3}" placeholder="Category 3">
                    </div>
                    <div class="mb-3 form-group">
                    <input type="text" class="form-control" id="th_update_cate4" value="${productInfo.cate4}" placeholder="Category 4">
                    </div>
                    <div class="mb-3 form-group">
                    <textarea class="form-control" name="" id="th_update_propertises" cols="30" rows="5" placeholder="Propertises JSON" value="${JSON.stringify(productInfo.propertises)}"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" href="javascript:void(0)" onclick="UpdateSanPham(${productInfo.id})">Edit</button>
            </div>
          </div>
        </div>
        </div>
        `
        document.getElementById("modalPart").innerHTML = html
    } catch (error) {
        alert(JSON.stringify(error))
    }
}

const UpdateSanPham = async (id) => {
    let _propertises = document.getElementById("th_update_propertises").value
    try {
        _propertises = JSON.parse(_propertises)
    } catch (error) {
        _propertises = {}
    }
    let product = {
        sku: document.getElementById("th_update_sku").value,
        name: document.getElementById("th_update_name").value,
        price: Number(document.getElementById("th_update_price").value),
        number: Number(document.getElementById("th_update_number").value),
        description: document.getElementById("th_update_description").value,
        cate1: document.getElementById("th_update_cate1").value,
        cate2: document.getElementById("th_update_cate2").value,
        cate3: document.getElementById("th_update_cate3").value,
        cate4: document.getElementById("th_update_cate4").value,
        propertises: _propertises
    }
    console.log(product);
    try {
        let result = await apiUpdateSanPham(product, id)
        alert("Đã update", JSON.stringify(result.name))
        window.location.reload()
    } catch (error) {
        console.log(error);
        alert(JSON.stringify(error))
    }
}