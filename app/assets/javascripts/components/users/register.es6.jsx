class Register extends React.Component{

  constructor(){
    super()
    this.state = {
      errors:[]
    }
  }

  new_user(event){
    event.preventDefault()
    let user = {username: this.refs.form_user.username.value,
                password: this.refs.form_user.password.value,
                email:this.refs.form_user.email.value
    }
    $.ajax({
      method:'post',
      url:'/users',
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
      <div className="row col s12 l6 forms">
        <div>
          {this.state.errors.map((error)=> <li>{error}</li> )}
        </div>

        <form ref="form_user" onSubmit={(event) => this.new_user(event)} className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="username" type="text" className="validate"/>
                <label htmlFor="first_name">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 center">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
    )
  }
}
