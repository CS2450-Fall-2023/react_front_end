import React, { useState } from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { service } from '../services/service';

function CustomTextField({ label, value, onChange }) {
    return (
      <TextField
        label={label}
        fullWidth
        sx={{ mb: 3 }}
        value={value}
        onChange={onChange}
      />
    );
}

const fields = [
    { label: 'First Name', stateKey: 'first_name' },
    { label: 'Last Name', stateKey: 'last_name' },
    { label: 'Cognitive Function', stateKey: 'cognitive_function' },
    { label: 'Favorite Color', stateKey: 'favorite_color' }
];

function Form() {
    const init = {
        first_name: '',
        last_name: '',
        cognitive_function: '',
        favorite_color: ''
    }
    const [state, setState] = useState(init);
    const [message, setMessage] = useState('');
    
    const handleSubmit = async() => {
        const response = await service.createForm(state);
        console.log(response);
        if(response.message){
            setMessage(response.message)
            setState(init);
        }
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ p: 3, mt: 8, textAlign: 'center', maxWidth: '400px'}}>
            <CardContent>
                {fields.map(field => (
                    <CustomTextField
                        key={field.stateKey}
                        label={field.label}
                        value={state[field.stateKey]}
                        onChange={e => setState({...state, [field.stateKey]: e.target.value})}
                    />
                ))}
                {message && <Typography variant='body1'>{message}</Typography>}
                <Button variant='contained' sx={{ textTransform: 'none' }} onClick={handleSubmit}>
                    Submit
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default Form
