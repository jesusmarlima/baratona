class CardBar extends React.Component{

  render(){
    return(
              <div className="col s12 m6 l4">
      <div className="card small">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.bar.image_url}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.bar.name}<i className="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.bar.name}<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
    )
  }
}
