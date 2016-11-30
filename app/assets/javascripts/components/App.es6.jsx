class App extends React.Component {

  constructor(){
      super()
      this.state = {
          bars:[],
          selected_bars:[]
      }
  }

  handleBarSearch(bars){
    this.setState({
      bars: bars
    })
  }

  handleBarExcludeSearch(bar){
    if (this.state.bars.find( (selected_bar)=>
      selected_bar.yelp_id == bar.yelp_id
    )){
        return
    }
    this.state.selected_bars.splice(this.state.selected_bars.indexOf(bar), 1)
    this.setState({
      bars: [bar].concat(this.state.bars),
      selected_bars: this.state.selected_bars
    })
  }

  handleBarIncludeSearch(bar){
    if (this.state.selected_bars.find( (selected_bar)=>
      selected_bar.yelp_id == bar.yelp_id
    )){
        return
    }
    this.state.bars.splice(this.state.bars.indexOf(bar), 1)
    this.setState({
      bars: this.state.bars,
      selected_bars: [bar].concat(this.state.selected_bars)
    })
  }

  new_event(){
    debugger
    $.ajax({
      url:"/events",
      method:"post",
      data: {bars:this.state.selected_bars}
    }).done((response) => {
      this.setState({
        selected_bars:[]
      })
    } )
  }

  render(){
        return(
            <div>
                  <div className="row z-depth-2">
                    <Filter bars = {this.handleBarSearch.bind(this)}/>
                  </div>
                  <div className="row z-depth-2" >
                    <BarList bars = {this.state.bars} add_list={this.handleBarIncludeSearch.bind(this)} title="Bar List"/>
                    <BarList bars = {this.state.selected_bars} add_list={this.handleBarExcludeSearch.bind(this)} title="Selected Bars"/>
                  </div>
                  <div className="row center">
                    <div className="input-field col s12 m2 l12 ">
                        <button onClick={(event) => this.new_event(event)} className="btn waves-effect waves-light" type="submit">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                  </div>
            </div>
        )
    }
}
