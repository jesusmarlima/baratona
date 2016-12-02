class EventInfo extends React.Component{


  render(){

    let event = this.props.event

    return(
            <div className="card z-depth-3">
                  <div className="card-image">
                    <img src="http://lorempixel.com/100/190/nature/6"/>
                    <span className="card-title">{event.name}</span>
                  </div>
                  <div className="card-content">
                    <p>Date:{event.date}</p>
                  </div>
              </div>
            )
  }
}
