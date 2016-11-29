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
        return(
            <div className="container">
                <NavBar/>
                  <div className="row">
                    <Filter bars = {this.handleBarSearch.bind(this)}/>
                  </div>
                  <div className="row">
                    <BarList bars = {this.state.bars} add_list={this.handleBarIncludeSearch.bind(this)} title="Bar List"/>
                      <BarList bars = {this.state.selected_bars} title="Selected Bars"/>
                  </div>
            </div>
        )
    }
}
