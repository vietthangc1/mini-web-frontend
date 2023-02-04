const loadModalXoaSanPham = async (id) => {
    try {
        let productInfo = await apiChiTiet(id)
        html = `
        <div class="modal fade" id="modal-delete" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
        aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Xóa Sản phẩm</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <h4> Bạn có chắc chắn xóa sản phẩm ${productInfo.name} giá ${productInfo.price.toLocaleString()} đ</h4>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-primary" onclick="XoaSanPham(${productInfo.id})">Xóa</button>
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

const XoaSanPham = async(id) => {
    try {
        let result = await apiXoaSanPham(id)
        alert(JSON.stringify(result))
        window.location.reload()
    } catch (error) {
        alert(JSON.stringify(error))
    }
}