class BarList extends React.Component{

  render(){

        let bars = this.props.bars
        return(
            <div className="col s12 m6 l6">
              <h4>{this.props.title}</h4>
              <div className="collection">
                    {
                      bars.map((bar,i)=>
                        <Bar bar={bar} key={i} add_list={this.props.add_list}/>)
                    }
              </div>
            </div>
        )
    }
}
