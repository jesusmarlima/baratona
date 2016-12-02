class UserBaratonsList extends React.Component{
  constructor(){
    super()
    this.state = {
      events:[]
    }
  }

  componentDidMount(){
    $.ajax({
      url:"/events/user_events",
      method:'get'
    }).done((response) => {
      this.setState({
          events: response
        }
      )
    })
  }


  render(){
    let events = this.state.events
    return(
      <div>
          {
            events.map((event,i) => <CardEvent event={event} key={i} />)
          }
      </div>
      )
  }
}
