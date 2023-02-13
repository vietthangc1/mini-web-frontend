const loadDetail = async (id) => {
try {
    let productInfo = await apiChiTiet(id)
    let html = `
    <div class="modal fade" id="modal-details" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
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
          <p>Giá: ${productInfo.price.toLocaleString()} đ</p>
          <p>Number: ${productInfo.number}</p>
          <p>Category 1: ${productInfo.cate1}</p>
          <p>Category 2: ${productInfo.cate2}</p>
          <p>Category 3: ${productInfo.cate3}</p>
          <p>Category 4: ${productInfo.cate4}</p>
          <p>Description: ${productInfo.description}</p>
          <p>Propertises: </p>
          <p> ${JSON.stringify(productInfo.propertises, undefined, 4)}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
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