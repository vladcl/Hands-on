function Lead(props) {
    return (
        <div className = 'leadPainel'>
            <div className = 'head'>
                
                <p className = 'boardText'> Painel de Leads</p>
            </div>
            <div className = 'addButtonContainer'><button onClick = {props.handleAddLead} >Nova Lead (+)</button></div>
            <table>
                <tr class = 'first'>
                    <th>Cliente em Potencial</th>
                    <th>Reunião Agendada</th>
                    <th>Dados Confirmados</th>
                </tr>
            {props.LogicView}
            </table>
        </div>
    )
}

export default Lead