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

  handleBarIncludeSearch(selected_bars){
    this.setState({
      selected_bars: selected_bars
    })
  }

  render(){
    debugger
        return(
            <div className="container">
                <NavBar/>
                <Filter bars = {this.handleBarSearch.bind(this)}/>
                <BarList bars = {this.state.bars} add_list={this.handleBarIncludeSearch.bind(this)}/>
                <h3>Selected Bars</h3>
                <BarList bars = {this.state.selected_bars}/>
            </div>
        )
    }
}
