import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import style from '../Offer.module.scss';
import img1 from '../../../assets/offers/1.jpg';
import img2 from '../../../assets/offers/2.jpg';
import img3 from '../../../assets/offers/3.jpg';
import img4 from '../../../assets/offers/4.jpg';
import img5 from '../../../assets/offers/5.jpg';
import img6 from '../../../assets/offers/6.jpg';
import img7 from '../../../assets/offers/7.jpg';
import img8 from '../../../assets/offers/8.jpg';
import img9 from '../../../assets/offers/9.jpg';
import img10 from '../../../assets/offers/10.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
     flexWrap:'wrap',
    
    justifyContent: 'space-around',
    overflow: 'hidden',

    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    display: 'grid',
    gridAutoFlow: 'column dense',
  
  
    width: 850,
    height: 600,
  },
}));

 
  const tileData = [
    {
      img: img1,
      title: 'Image',
   author: 'author',
     cols: 1,
     rows:1,
    },
    {
        img: img2,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img3,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img4,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img5,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img6,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img7,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img8,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img9,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
      {
        img: img10,
        title: 'Image',
     author: 'author',
       cols: 1,
       rows:1,
      },
 ];
 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={250}  className={classes.gridList} rows={3} cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}