import Leads from '../views/leadsPage';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
let contador = 0;

function LeadsBoard(){
    const navigate = useNavigate()

    

    const [list,setList] = useState([['Org. Internacional'],['Ind.Farm LTDA'],['Musc. Sound Live Cmp']])
    localStorage.setItem('lead', JSON.stringify(list))
    useEffect(() =>{
        let data = localStorage.getItem('leadCopyment');
        data = JSON.parse(data);
        if(data!=null)
            setList(data)
    },[])
    
    const [terra,setTerra] = useState('')
    function True(element){
        if(element){
            return true
        }else{
            return false
        }
    }

    function allowDrop(ev) {
        ev.preventDefault();
      }
      
      function drag(ev) {
        let value = ev.target.innerText
        setTerra(value)
      }
      
      function drop(ev) {
        ev.preventDefault()
        let earth = terra
        let data = localStorage.getItem('lead');
        data = JSON.parse(data);
        let dades = data
        function findArray(array){
            let boolList = array.map(list => list.includes(earth))
            return boolList.findIndex(True)
            }

        function findElement(element,list){
            let contador = 0
            for(let i = 0; i < list.length; i++){
                contador++
                if(element === list[i])
                    return contador - 1
            }
        }
        let listChanged = list[findArray(dades)]
        let indexElementChange = findElement(earth,listChanged)
        let aux = listChanged[indexElementChange+1]
        
        if(indexElementChange !== 2){
            
            listChanged[indexElementChange + 1] = listChanged[indexElementChange]
            listChanged[indexElementChange] = aux

            let index = findArray(dades)
            if(index > -1){
                dades.splice(index,1)
            }
            let finalList = [listChanged].concat(dades)
            localStorage.setItem('leadCopyment', JSON.stringify(finalList));
            setList(finalList)
            
        }   
        else{
                alert('Você não pode realizar esta ação.')
        }      
    }

    function handleAddLead(){
        navigate('/lead/addLead')
    }
    return(
        <Leads
            LogicView = {list.map(element =>{
                        contador++
                        return(
                            <tr className= {contador%2 ? 'white' : 'gray'}>
                                <th className = 'repeat' onDragStart = {drag} draggable = 'true'>{element[0]}</th>
                                <th className = 'repeat' onDragStart = {drag} onDrop = {drop} onDragOver = {allowDrop} draggable = 'true'>{element[1]}</th>
                                <th className = 'repeat' onDrop = {drop} onDragOver = {allowDrop} draggable = "true">{element[2]}</th>
                            </tr>
                            )      
                        }
                    )}

            handleAddLead = {handleAddLead}
        />
    )
}

export default LeadsBoard;