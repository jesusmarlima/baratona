class EventDetail extends React.Component{
  constructor(){
    super()
    this.state = {
      bars:[]
    }
  }

  componentDidMount(){
    let url = "/events/"+this.props.event.id+"/bars"
    $.ajax({
      method:"get",
      url: url
    }).done((response)=> {
      debugger
      this.setState({
        bars:response
      })
    })
  }




  render(){
    let bars = this.state.bars
    return(
      <div className="row content">
        <div className="col s12 m4 l3">
          <EventInfo event = {this.props.event}/>
        </div>
          <div className="col s12 m8 l9">
            {
              bars.map((bar,i) => <CardBar bar={bar} key={i}/>)
            }
        </div>
      </div>
    )
  }
}
