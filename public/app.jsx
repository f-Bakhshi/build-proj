var Greater = React.createClass({

    // the props get defined by "getDefaultProps" and pass in to the react
    getDefaultProps : function(){
       return{
            name: 'React',
            message : 'Default Message'
       }
    },

    // sets its name to state to props value
    getInitialState:function(){
        return{
            name : this.props.name
        }
    },

    // render funtion
    onButtonClick :function(e){

        e.preventDefault();
        // fetch the value of the input
        var nameRef = this.refs.name
        var name = nameRef.value;

        // to clear the value of input after submiting
        nameRef.value = ''

        if(typeof name === 'string' && name.length>0){
            // we call SetState method to update state and rerender the part of component on screen
            this.setState({
                name: name
            })
        }
  

    },

    // render the component
    render: function(){
        var name = this.state.name
        var message = this.props.message

        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>{message + '!!'}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        )
    }
})

var firstName= "fatemeh"

ReactDOM.render(
    <Greater name={firstName} message="Message from props"/>,
    document.getElementById('app')
)