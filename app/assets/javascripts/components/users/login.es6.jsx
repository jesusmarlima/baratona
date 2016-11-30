class Login extends React.Component{

  constructor(){
    super()
    this.state = {
      errors:[]
    }
  }

  login(event){
    event.preventDefault()
    let user = {password: this.refs.form_user.password.value,
                email:this.refs.form_user.email.value
    }
    $.ajax({
      method:'post',
      url:'/sessions',
      data:user
    }).done((response) => {
      if (response.errors){
        this.setState({
          errors:response.errors
        })
      } else {
        window.location.href = "/"
      }
    })
  }

  render(){
    return(
      <div className="row forms">
        <div>
          {this.state.errors.map((error)=> <li>{error}</li> )}
        </div>

        <form ref="form_user" onSubmit={(event) => this.login(event)}>
          <div className="row">
              <div className="input-field col s12 m12 l12">
                <input id="email" type="email" className="validate"/>
                  <label htmlFor="email">Email</label>
                </div>
          </div>
          <div className="row">
                <div className="input-field col s12 m12 l12">
                  <input id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                  </div>
          </div>
          <div className="row">
                  <div className="input-field  col s12 m12 l12 center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Login
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
          </div>
        </form>
      </div>
    )
  }
}
