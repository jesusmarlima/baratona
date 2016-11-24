class Bars extends React.Component {

    constructor(){
        super()
        this.state = {
            bars:[]
        }
    }

    componentDidMount(){
       $.ajax({
           url:'/bars',
           method:'get'
       }).done((response) => {
           this.setState({
               bars:response
           })
       })
    }


    render(){

        return(
            <div className="container">
                <h4>Park Slope Bars</h4>
                <ul className="collection">
                    {
                        this.state.bars.map((bar)=>
                            <li className="collection-item">{bar.name}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}