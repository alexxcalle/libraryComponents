import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukFURX1rbgzI2xPKA5UTP8LxFy5TG06BaMA&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          REACT GRAHQL DEVELOP FOR ANY DEVELOPMENT
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Best one bars to take friends and relatives, one bars to take friends and relatives
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
