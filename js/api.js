const Dia_chi_Dich_vu='http://127.0.0.1:8080';

const apiChiTiet=(ma_so)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            let status = Xu_ly_HTTP.status
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            if (status >= 400) {
                Loi(Du_lieu)
            } else {
                Ket_qua(Du_lieu)
            }
        }
        let Ma_so = ma_so
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/product/${Ma_so}`
        Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send()
    })
}

const apiDanhSach=(params)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            let status = Xu_ly_HTTP.status
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            if (status >= 400) {
                Loi(Du_lieu)
            } else {
                Ket_qua(Du_lieu)
            }
        }
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/products?${params}`
        Xu_ly_HTTP.open("GET", Dia_chi_Xu_ly)
        Xu_ly_HTTP.send()
    })
}

const apiThemSanPham=(body)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            let status = Xu_ly_HTTP.status
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            if (status >= 400) {
                Loi(Du_lieu)
            } else {
                Ket_qua(Du_lieu)
            }
        }
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/product`
        Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, async = true)
        Xu_ly_HTTP.setRequestHeader("Content-Type", "application/json");
        Xu_ly_HTTP.send(JSON.stringify(body))
    })
}

const apiUpdateSanPham=(body, id)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            let status = Xu_ly_HTTP.status
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            if (status >= 400) {
                Loi(Du_lieu)
            } else {
                Ket_qua(Du_lieu)
            }
        }
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/product/${id}`
        Xu_ly_HTTP.open("PUT", Dia_chi_Xu_ly, async = true)
        Xu_ly_HTTP.setRequestHeader("Content-Type", "application/json");
        Xu_ly_HTTP.send(JSON.stringify(body))
    })
}

const apiXoaSanPham=(id)=>{
    return new Promise((Ket_qua, Loi) => {
        let Du_lieu = {}
        let Xu_ly_HTTP = new XMLHttpRequest()
        Xu_ly_HTTP.onload = () => {
            let status = Xu_ly_HTTP.status
            var Chuoi_JSON = Xu_ly_HTTP.responseText
            Du_lieu = JSON.parse(Chuoi_JSON)
            if (status >= 400) {
                Loi(Du_lieu)
            } else {
                Ket_qua(Du_lieu)
            }
        }
        let Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}/product/${id}`
        Xu_ly_HTTP.open("DELETE", Dia_chi_Xu_ly, async = true)
        Xu_ly_HTTP.setRequestHeader("Content-Type", "application/json");
        Xu_ly_HTTP.send()
    })
}