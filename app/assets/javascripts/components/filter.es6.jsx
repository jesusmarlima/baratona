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
          <form onSubmit={(event) => this.performSearch(event)}>
            <div className="input-field col s12 m10 l10">
                <input ref="text_to_seach" id="icon_prefix" type="text" className="validate"/>
                <label htmlFor="icon_prefix">Search</label>
             </div>
            <div className="input-field col s12 m2 l2">
                <button className="btn waves-effect waves-light" type="submit">Submit
                    <i className="material-icons right">send</i>
                </button>
            </div>
          </form>
        )
    }
}
