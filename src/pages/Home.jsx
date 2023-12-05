import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { Button, Card, CardContent, TextField } from '@mui/material'
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
    { label: 'First Name', stateKey: 'firstName' },
    { label: 'Last Name', stateKey: 'lastName' },
    { label: 'Cognitive Function', stateKey: 'cognitive' },
    { label: 'Favorite Color', stateKey: 'color' }
];

function Home() {
    const init = {
        firstName: '',
        lastName: '',
        congnitive: '',
        color: ''
    }

    const [state, setState] = useState(init);
    
    const handleSubmit = async() => {
        // const response = await service.createForm(state);
        // console.log(response);
        console.log(state);
        setState(init);
    }

  return (
    <Layout>
        <Card sx={{ p: 3, mt: 8, textAlign: 'center'}}>
            <CardContent>
                {fields.map(field => (
                    <CustomTextField
                    key={field.stateKey}
                    label={field.label}
                    value={state[field.stateKey]}
                    onChange={e => setState({...state, [field.stateKey]: e.target.value})}
                    />
                ))}
                <Button variant='contained' sx={{ textTransform: 'none' }} onClick={handleSubmit}>
                    Submit
                </Button>
            </CardContent>
        </Card>
    </Layout>
  )
}

export default Home
