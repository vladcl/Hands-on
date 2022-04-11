function RegistrationPage(props){
    
    return (
    
    <form className = 'forms' onSubmit = {props.handleRegister}>
        <p className = 'Title'> Olá, bem vindo a nossa aplicação!</p>
        <p className = 'centerText inputText'>Login:</p>
        <input className = 'center input' type = 'text' required = 'required' value = {props.username} onChange = {props.setUsername}></input>
        <p className = 'centerText inputText'>Senha:</p>
        <input className= 'center input' onKeyUp = {props.validatePassword} type = 'password' pattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@+#$])[a-zA-Z0-9@+#$]{8,50}$" title= 'A senha deve possuir no mínimo 8 carecteres, uma letra maíuscula, um número e um caracter especial.' required = 'required' minlength = '8' placeholder = '********' value = {props.password} onChange = {props.setPassword}></input>
        <p className = 'centerText inputText'>Confirme sua senha:</p>
        <input className = 'center input' onKeyUp = {props.validatePassword} id = 'passwordConfirmation' type = 'password' required = 'required' minlength = '8' placeholder = '********' value = {props.confirmPassword} onChange = {props.setConfirmPassword}></input>
        <br/>
        <button className = 'button' type = 'submit' mouse>Confirmar</button>
    </form>
    )
}

export default RegistrationPage;