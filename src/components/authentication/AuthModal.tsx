 "use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AuthModalInputs from "@/components/authentication/authModalInputs";
 import {useState} from "react";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function AuthModal({isSignIn}:{isSignIn: boolean})  {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const renderContent=(signInContent: string, signUpContent: string)=>{
        return isSignIn ? signInContent : signUpContent
    }
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        password: ""
    })
    return (
        <div>

            <Button onClick={handleOpen}
                className={`${renderContent("bg-blue-400 text-white","bg-gray-300 text-black")   }  border p-1 px-4 rounded mr-3`}
            >
                {renderContent("Sign in" , "Sign up" )}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <div className="p-2">
                      <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                          <p className="text-sm">
                              {renderContent("Sign In","Create Account")}
                          </p>
                      </div>
                      <div className="m-auto">
                          <h2 className="text-2xl font-light text-center">
                              {renderContent("Log Into Your Account","Create A New OpenTable Account")}
                          </h2>
                          <AuthModalInputs
                              inputs={inputs}
                              handleChangeInput={handleChangeInput}
                              isSignIn={isSignIn}
                          />
                          <button className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm disabled:bg-gray-400">
                              {renderContent("Sign In","Create Account")}
                          </button>
                      </div>
                  </div>
                </Box>
            </Modal>
        </div>
    );
}