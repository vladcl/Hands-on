import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import NewLead from '../views/newLead';

function AdditionLead() {
    const navigate = useNavigate()
    
    const [name,setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [date] = useState([])
    const [nameDate, setNameDate] = useState([])
    const [listLead, setListLead] = useState([])
    let [opportunity] = useState(new Set())

    useEffect(() =>{
        let data = localStorage.getItem('noRepeat');
        data = JSON.parse(data);
        if(data !=null)
            setNameDate(data)
    },[])

    useEffect(()=>{
        let data = localStorage.getItem('newLead');
        data = JSON.parse(data);
        if(data != null){
            setListLead(data)
        }
    },[])

  

    
    function allOrClear(){
        let checkbox = document.getElementsByClassName('check')
        let firstCheckbox = document.getElementById('firstCheck')
        if(!firstCheckbox.checked){
            for(let i = 0; i < checkbox.length; i++){
                checkbox[i].checked = false
                opportunity = new Set()
            }
        }
        else{
            for(let i = 0; i < checkbox.length; i++){
                    checkbox[i].checked = true
                    opportunity.add(checkbox[i].value)
            }    
        }
        console.log(opportunity)
    }

    function saveDate(ev){
        ev.preventDefault()
        date.push(name)
        date.push(phone)
        date.push(mail)
        let list = []
        opportunity.forEach(v => list.push(v))
        date.push(list)
        let lead = localStorage.getItem('leadCopyment')
        let leadCopyment = localStorage.getItem('lead')
        lead = JSON.parse(lead)
        leadCopyment = JSON.parse(leadCopyment)
        lead = leadCopyment
        if(!nameDate.includes(name)){
            nameDate.push(name)
            localStorage.setItem('newLead',JSON.stringify(date));
            localStorage.setItem('noRepeat', JSON.stringify(nameDate))
            lead.push([name])
            localStorage.setItem('leadCopyment',JSON.stringify(lead));
            listLead.push(date)
            localStorage.setItem('newLead',JSON.stringify(listLead));
            navigate('/lead')
        }
        else{       
            alert('Esta lead já está cadastrada.')
        }
    }


    return(
        <>
        <NewLead 
            onChangeMail= {event => {setMail(event.target.value)}} 
            onChangePhone= {event => {setPhone(event.target.value)}} 
            onChangeName= {event => {setName(event.target.value)}} name={name} phone ={phone} mail={mail}
            RPA = {event => {opportunity.add(event.target.value)}}
            product = {event => {opportunity.add(event.target.value)}}
            analitycs = {event => {opportunity.add(event.target.value)}}
            BPM = {event => {opportunity.add(event.target.value)}}
            all = {allOrClear}
            save = {saveDate}
        />
        </>
    )
}

export default AdditionLead;