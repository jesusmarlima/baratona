class Bar extends React.Component{

  add_to_list(event){
    debugger
    let object = this.props.bar
    event.preventDefault()
    $.ajax({
      url:'/bars/add' ,
      method:'post',
      data: object
    }).done((response) => {
      this.props.add_list(response)
    })
  }

  render(){

    let bar = this.props.bar

    return(
      <a onClick={(event) => this.add_to_list(event)} className="collection-item s12 m6 l6">
        <span class="badge"></span>{bar.name}</a>
    )
  }
}
