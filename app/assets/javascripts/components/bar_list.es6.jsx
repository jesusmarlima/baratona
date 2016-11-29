class BarList extends React.Component{

  render(){

        let bars = this.props.bars
        debugger
        return(
            <div className="row">
              <div className="collection s12 m6 l6">
                    {
                      bars.map((bar,i)=>

                        <Bar bar={bar} key={i} add_list={this.props.add_list}/>)
                    }
              </div>
            </div>
        )
    }
}
