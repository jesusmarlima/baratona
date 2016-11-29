class Bar extends React.Component{

  add_to_list(event){
    event.preventDefault()
    this.props.add_list(this.props.bar)
  }

  render(){

    let bar = this.props.bar

    return(
      <a onClick={(event) => this.add_to_list(event)} className="collection-item s12 m6 l6">
        <span className="badge"></span>{bar.name}</a>
    )
  }
}
