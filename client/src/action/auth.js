import * as api from '../api/index';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, navigate) => async (dispatch) => {
    try {   
        const resp = await fetch("http://localhost:5000/user/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
        })
        const respInJSON = await resp.json();
        console.log(respInJSON)

        if(resp.status==200){
            navigate("/")
        }else{
            alert("incorrect data")
        }
        // navigate('/');

    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async(dispatch) => {
    try {
        // sign up the user..
        const { data } = await api.signup(formData);

        dispatch({ type: AUTH, data });

        navigate('/');
    } catch (error) {
        console.log(error);
    }
}