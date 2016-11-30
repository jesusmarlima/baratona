class UserInfo extends React.Component{


  render(){

    let user = this.props.user

    return(
            <div className="card z-depth-3">
                  <div className="card-image">
                    <img src="http://lorempixel.com/100/190/nature/6"/>
                    <span className="card-title">{user.username}</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                  </div>
                  <div className="card-action">
                    <a href="#">This is a link</a>
                  </div>
              </div>








    )
  }
}
