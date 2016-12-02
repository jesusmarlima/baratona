class Profile extends React.Component{

  constructor(){
    super()
    this.state = {
      user:{}
    }
  }

  componentDidMount(){
      $.ajax({
        url:"/sessions/getuser",
        method:'get'
      }).done((response) => {
        this.setState({
            user: response
          }
        )
      })
  }

  render(){
    return(
        <div className="row content">
          <div className="col s12 m4 l3">
            <UserInfo user = {this.state.user}/>
          </div>          <div className="col s12 m8 l9">
            <UserBaratonsList />
          </div>
        </div>
    )
  }
}
