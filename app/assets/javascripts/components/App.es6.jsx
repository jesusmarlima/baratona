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

  render(){
        return(
            <div className="container">
                <NavBar/>
                  <div className="row">
                    <Filter bars = {this.handleBarSearch.bind(this)}/>
                  </div>
                  <div className="row">
                    <BarList bars = {this.state.bars} add_list={this.handleBarIncludeSearch.bind(this)} title="Bar List"/>
                      <BarList bars = {this.state.selected_bars} add_list={this.handleBarExcludeSearch.bind(this)} title="Selected Bars"/>
                  </div>
            </div>
        )
    }
}
