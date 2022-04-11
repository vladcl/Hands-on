import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationPage from '../views/registerPage';


function Register() {
    
    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const [nick,setNick] = useState([])
    
    useEffect(() =>{
        let nick = localStorage.getItem('nick');
        nick = JSON.parse(nick);
        if(nick!=null)
            setNick(nick)
    },[])

    useEffect(() =>{
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        if(user!=null)
            setUser(user)
    },[])

    

    function handleRegister(event){
        event.preventDefault();
        if(!nick.includes(username)){
            localStorage.setItem('nick',JSON.stringify(nick))
            localStorage.setItem('user',JSON.stringify(user))
            user.push([username,password])
            nick.push(username)
            localStorage.setItem('nick',JSON.stringify(nick))
            localStorage.setItem('user',JSON.stringify(user))
            navigate('/lead')
        } else
            navigate('/lead')      
         
        
        
    }


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    let passwordConfirmation = document.getElementById('password confirmation');
    function validatePassword(){
        if(password !== confirmPassword) {
            passwordConfirmation.setCustomValidity('As senhas não são iguais.');
        } else {
            passwordConfirmation.setCustomValidity('');
        }
    }
  return (
    <RegistrationPage
       handleRegister={handleRegister}
       username = {username}
       setUsername = {event => {setUsername(event.target.value)}} 
       validatePassword = {validatePassword}
       password = {password}
       setPassword = {event => {setPassword(event.target.value)}}
       confirmPassword = {confirmPassword}
       setConfirmPassword = {event => {setConfirmPassword(event.target.value)}}
    />
  );
}

export default Register;