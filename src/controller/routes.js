import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import Register from './userRegister';
import AdditionLead from './newLead';
import LeadsBoard from './leads';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Register />} />
                <Route path = '/lead' element={<LeadsBoard />}/>
                <Route path = '/lead/addLead' element = {<AdditionLead />}/>
            </Routes>
        </BrowserRouter>
    )
};