import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const clear = () => {
        
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Keepsake</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidthvalue={postData.creator}
                // spread postData, meaning in every text field and we do the same thing but only change the last property,
                // all the data will persist while only changing the specific property
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField name='title' variant='outlined' label='Title' fullWidthvalue={postData.tags} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name='message' variant='outlined' label='Message' fullWidthvalue={postData.message} onChange={(e) => setPostData({ ...postData, messsage: e.target.value })}/>
                <TextField name='tags' variant='outlined' label='Tags' fullWidthvalue={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="container" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;