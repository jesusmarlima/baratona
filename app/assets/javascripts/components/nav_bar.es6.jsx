class NavBar extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser:{}
    }
  }

  componentDidMount(){
    $.ajax({
      url:"/sessions/getuser",
      method:'get'
    }).done((response) => {
      this.setState({
          currentUser: response
        }
      )
    })
  }

  render(){
      return(
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo">Baratona</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {this.state.currentUser && <li><a href={'/users/' + this.state.currentUser.id}>Profile</a></li>}
                  {this.state.currentUser && <li><a href="/sessions/logout">logout</a></li>}
                  {!this.state.currentUser && <li><a href="/sessions/new">Login</a></li>}
                  {!this.state.currentUser && <li><a href="/users/new">Register</a></li>}
                </ul>
              </div>
            </nav>
    )
  }
}
