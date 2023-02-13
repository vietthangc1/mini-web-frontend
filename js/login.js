const loadModalLogin = () => {
    html = `
    <div class="modal fade" id="modal-login" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form action="" onsubmit="return false">
            <div class="mb-3 form-group">
              <input type="email" class="form-control" id="th_email" placeholder="Email">
            </div>
            <div class="mb-3 form-group">
            <input type="password" class="form-control" id="th_password" placeholder="Password">
          </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="Login()">Login</button>
        </div>
      </div>
    </div>
  </div>
    `
    document.getElementById("modalPart").innerHTML = html
}

const Login = async () => {
    try {
        let body = {
            email: document.getElementById("th_email").value,
            password: document.getElementById("th_password").value
        }
        let result = await apiLogin(body)
        sessionStorage.setItem("USER", JSON.stringify({
            Email: body.email,
            Token: result.token
        }))
        window.location.reload()
    } catch (error) {
        alert(JSON.stringify(error))
    }
}