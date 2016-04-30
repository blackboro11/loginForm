import React from 'react';
import {Well,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Checkbox,
        Radio,
        Button} from 'react-bootstrap'
export default class Register extends React.Component{
    
    render(){
        
        const wellStyle={
         
         width:400,
         height:650,
         marginLeft:'auto',
         marginRight:'auto',
         marginTop: 50
        };
        
        return(
            <div className="container">
            <Well style={wellStyle}>
            <legend>Please Register</legend>
           
            
                <form>
                    <FormGroup>
                        <ControlLabel>First Name:</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter your first name here.."
                            
                        />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                   
                        <FormGroup>
                            <ControlLabel>Last Name:</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter your last name here.."
                                
                            />
                            <FormControl.Feedback />
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                                    <Radio checked readOnly>Male</Radio>
                                    <Radio  readOnly>Female</Radio>
                                    <Checkbox checked readOnly>Single</Checkbox>
                                    <Checkbox  readOnly>Married</Checkbox>
                                    <Checkbox  readOnly>Widowed</Checkbox>
                                    
                            
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Location in Bohol</ControlLabel>
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="select">Tagbilaran City</option>
                                    <option value="other">Baclayon</option>
                                    <option value="other">Albur</option>
                                    <option value="other">Loay</option>
                                    <option value="other">Lila</option>
                                    <option value="other">Dimiao</option>
                                    <option value="other">Valencia</option>
                                    <option value="other">Garcia Hernandez</option>
                                    <option value="other">Duero</option>
                                    <option value="other">Jagna</option>
                                    <option value="other">Candijay</option>
                                    <option value="other">Anda</option>
                                    <option value="other">Mabini</option>
                                    <option value="other">Loboc</option>
                                    <option value="other">Bilar</option>
                                    <option value="other">Carmen</option>
                                    <option value="other">Sagbayan</option>
                                    <option value="other">Pilar</option>
                                    <option value="other">Manga</option>
                                    <option value="other">Maribojoc</option>
                                    <option value="other">Cortes</option>
                                    <option value="other">Balilihan</option>
                                    <option value="other">Catigbian</option>
                                    <option value="other">Loon</option>
                                    <option value="other">Jetafe</option>
                                    <option value="other">Clarin</option>
                                    <option value="other">San Miguel</option>
                                    <option value="other">San Isidro</option>
                                    <option value="other">Alicia</option>
                                    <option value="other">Batuan</option>
                                    <option value="other">Antequera</option>
                                    <option value="other">Bien Unido</option>
                                    <option value="other">Buenavista</option>
                                    <option value="other">Carmen</option>
                                    <option value="other">Corella</option>
                                    <option value="other">Dagohoy</option>
                                    <option value="other">Danao</option>
                                    <option value="other">Dauis</option>
                                    <option value="other">Panglao</option>
                                    <option value="other">Inabanga</option>
                                    <option value="other">Sierra Bullones</option>
                                    <option value="other">Guindulman</option>
                                    
                                    
                                    
                                </FormControl>
                        </FormGroup>
                        
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Comment</ControlLabel>
                                    <FormControl componentClass="textarea" placeholder="textarea" />
                                </FormGroup>
                                
                              <Button bsStyle="primary" type="submit">Submit</Button>
                              <Button bsStyle="warning" type="reset">Reset</Button>
                </form>
             </Well>
            </div>
        );
    }
}