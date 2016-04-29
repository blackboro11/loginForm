import React from 'react';
import {Well,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Button,
        ButtonGroup} from 'react-bootstrap'


export default  class TodoApp extends React.Component{
 constructor(props){
     super(props);
 }
 
 gotoRegister(){
     this.props.history.push("/register");
 }
 render(){
     
     const wellStyle={
         
         width:400,
         height:500,
         marginLeft:'auto',
         marginRight:'auto',
         marginTop: 50
         
     };

     return (
         <div className="container">
         <Well style={wellStyle}>
         
         
         <legend>Hello guest, Please login</legend>
         <form>
         <FormGroup>
            <ControlLabel>Enter Username</ControlLabel>
            <FormControl
                type="text"
                placeholder="Enter your username here.."
                
            />
            <FormControl.Feedback />
            <HelpBlock></HelpBlock>
         </FormGroup>
         
         <FormGroup>
            <ControlLabel>Enter Password</ControlLabel>
            <FormControl
                type="password"
                placeholder="Enter your password here.."
                
            />
            <FormControl.Feedback />
            <HelpBlock></HelpBlock>
         </FormGroup>
         <div className="button1">
         <ButtonGroup>
            <Button bsStyle="warning" type="submit">Login</Button>
            <Button bsStyle="danger" type="button"
            onClick={this.gotoRegister.bind(this)}>Register</Button>
         </ButtonGroup>
         </div>
         </form>
         
         
         </Well>
         </div>
     );
 }
 

}