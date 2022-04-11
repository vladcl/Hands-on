function NewLeads(props){
    return(
        <>
            <div className = 'add'>
                <div className = 'head'>
                   <p className = 'boardText'> Cadastre uma Nova Lead</p>
                </div> 
                <form class = 'formLead'onSubmit={props.save}>
                    <div className = 'formAddLead'>
                        <p className = 'inputText'>Nome:</p>
                        <input onChange = {props.onChangeName}className = 'input' type = 'text' required = 'required' value={props.name}></input>
                        <p className = 'inputText'>Telefone:</p>
                        <input onChange = {props.onChangePhone} value={props.phone} className = 'input' type = 'phone' title = 'Por favor, utilize o número como o exemplo: (DDD) 9 9999-9999 (sem espaços)' pattern= "[0-9]{2}[9][0-9]{4}[0-9]{4}" required = 'required'></input>
                        <p className = 'inputText'>E-mail:</p>
                        <input onChange = {props.onChangeMail} value={props.mail} className = 'input' type = 'mail' titl = 'Por favor, utilize o e-mail como o exemplo: mail@me.com' required = 'required'></input>
                    </div>
                    <div className = 'opportunityTableContent'>
                        <div className = 'opportunityTable'>
                        <p className = 'inputText'>Oportunidades:</p>
                        <table className = 'toCheck'>
                            <tr className = 'first heightTable'>
                                <th> <input id = 'firstCheck' onChange={props.all}type = 'checkbox'></input></th>
                                <th className = 'left'>Todas as opções</th>
                            </tr>
                            <tr className = 'heightTable gray'>
                                <th><input className = 'check' onChange={props.RPA} type = 'checkbox' value = 'RPA'></input></th>
                                <th className = 'left'>RPA</th>
                            </tr>
                            <tr className = 'heightTable white'>
                                <th><input className = 'check' onChange={props.product} type = 'checkbox' value = 'Produto Digital'></input></th>
                                <th className = 'left'>Produto Digital</th>
                            </tr>
                            <tr className = 'heightTable gray'>
                                <th><input className = 'check' onChange={props.analitycs} type = 'checkbox' value = 'Analytics'></input></th>
                                <th className = 'left'>Analytics</th>
                            </tr>
                            <tr className = 'heightTable white'>
                                <th><input className = 'check' onChange={props.BPM} type = 'checkbox' value = 'BPM'></input></th>
                                <th className = 'left'>BPM</th>
                            </tr>
                        </table>
                        </div>
                    <div className = 'addLeadContainerButton'><button type = 'submit'>Salvar</button></div></div>
                </form>
            </div>
        </>
    )
}

export default NewLeads;