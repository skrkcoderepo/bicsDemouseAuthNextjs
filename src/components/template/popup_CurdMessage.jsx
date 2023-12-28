import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import userContext from '@/context/usersContext';

export default function CurdPopupTemplate(props) {
  const {curdMode} = useContext(userContext);
  let mode;
   switch(true){
    case curdMode?.c :
      mode= 'CREATE Mode';
      break;
    case curdMode?.d :
      mode= "Delete Mode";
      break;
    case curdMode?.u :
      mode= "UPDATE Mode";
      break;
    case curdMode?.r:
      mode= "READ Mode";
      break;
    default:
      mode= "CURD Operation"
   }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={<div><h4>{mode}</h4></div>}
        subheader={<span><hr /></span>}
        style={{paddingBottom:0, textAlign: 'center'}}
      />
      <CardContent style={{paddingTop: 0, textAlign: 'center'}}>
        <Typography variant="body2" color="text.secondary">
        CURD example on Sample user Data with sales
        </Typography>
      </CardContent>
    </Card>
  );
}
