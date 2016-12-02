class CardEvent extends React.Component{
  render(){
    return(
        <div className="col s12 m6 l4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.event.name}</span>
            </div>
            <div className="card-action">
              <a href="#">Details</a>
            </div>
          </div>
        </div>
    )
  }
}
