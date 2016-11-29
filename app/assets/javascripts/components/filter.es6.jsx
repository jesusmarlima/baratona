class Filter extends React.Component{

  performSearch(event){
    let text = this.refs['text_to_seach'].value
    event.preventDefault()
    $.ajax({
      url:'/bars/search/' + text ,
      method:'get'
    }).done((response) => {
      this.props.bars(response)
    })
  }

   render(){
        return(
            <div className="row">
                <form className="col s12" onSubmit={(event) => this.performSearch(event)}>
                    <div className="row">
                        <div className="input-field col s12 m9 l9">
                            <i className="material-icons prefix">search</i>
                            <input ref="text_to_seach" id="icon_prefix" type="text" className="validate"/>
                            <label for="icon_prefix">Search</label>
                         </div>
                        <div className="input-field col s12 m9 l3">
                            <button className="btn waves-effect waves-light" type="submit">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>

                    </div>

                </form>
            </div>
        )
    }
}
