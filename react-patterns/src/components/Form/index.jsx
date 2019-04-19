import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props)

    }

    handleClick(evt){
        console.log('evt', evt.target)
    }

    render(){
        return <FormUx handleClick={this.handleClick} />
    }
}

const FormUx = ({ handleClick }) => (
    <form >
        <input type="text" name="nombre" placeholder='ingrese nombre'/>
        <button type='button' onClick={handleClick}>Click!</button>
    </form>
)

export default Form;