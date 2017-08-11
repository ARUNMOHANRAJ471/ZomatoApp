const React = require('react');
const {browserHistory, hashHistory} = require('react-router');
import { Button, Checkbox, Form, Card } from 'semantic-ui-react';
const Login = React.createClass({
getInitialState: function()
{
 return {username:'',password:''};
},
handleUserName: function(e) {
 this.setState({username: e.target.value});
},
handlePassword: function(e)
{
 this.setState({password: e.target.value});
},
LoginUser: function()
{
 $.ajax({
   url:"http://localhost:8080/users/login",
   type: 'POST',
   datatype: 'JSON',
   data:{username :this.state.username,password:this.state.password},

   success: function(res)
   {
     console.log('res',JSON.stringify(res));
     if(res == 'success')
     alert("Login success");
     else {
       alert("Invalid username or password");
     }

   }.bind(this),
   error: function(err)
   {
     alert("Invalid username or password");

   }.bind(this)
 });
},
 render: function() {
   return(

<div>
  <h1><p className='foodietitle'>A Foodies App made by foodies for foodies</p></h1>
   <div className='formAlign'>
     <h2>Login</h2>
     <Form>
      <Form.Field>
        <label>UserName</label>
        <input className='formwidth' onChange={this.handleUserName} placeholder="Enter a User Name..." type="text"/>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input className='formwidth' onChange={this.handlePassword} placeholder="Enter a Password..." type="password" />
      </Form.Field>
    </Form><br/>
      <Button color='red' onClick={this.LoginUser} type="submit" value="Login" >Submit</Button>
    </div>
   </div>

   );
 }
});

module.exports = Login;
