import React, {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {list} from './api-message'
import '../../style/Message.css'
import defaultImg from '../images/default.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    
     
  },
  item:{
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



const List = ()=>{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [messages,setMessages]= useState([])

    const handleExpandClick = () => {
    setExpanded(!expanded);
    };

    const getExerp = (message)=>{
        if(message.lenght > 100){
          let str = message.substring(0,100) + '...'
          return str
        }
    return message
    }
    

    useEffect(()=>{
        list().then(
            data=>{
                if(data && data.error) console.log(data.error)
                setMessages(data)            
            })
    },[messages])

    return(
        <div  className ='message-list-root'>
            {
               messages? messages.map((text,index)=>{

                 const avatar = text.authorFullName ? text.authorFullName.charAt(0).toUpperCase(): 'R'
                 
               return(

                <Card className='item' key={index}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                           {avatar}
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={text.authorFullName || 'Unknown' }
                        subheader={text.created}
                    />
                    <CardMedia
                        className={classes.media}
                        image={text.image || defaultImg}
                        title="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">

                        {getExerp(text.message)}
              
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                        <ShareIcon />
                        </IconButton>

                         <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon />
                        </IconButton>
                        
                    </CardActions>

                     

                       
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        
                        <Typography paragraph>
                             {text.message}
                        </Typography>
                           
                        </CardContent>
                    </Collapse>
                </Card>)
               }) :
               <p>No message was found</p>
            }
        </div>
    )
}

export default List;