import { makeStyles, Box, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        '& :first-child': {
            fontSize: 66,
            color: '#FFFFFF'
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF'
        }
    }
})
const Banner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.image}>
            <Typography>BLOG</Typography>
            <Typography>Ayush Kumar</Typography>
        </Box>
    )
}
export default Banner