import './MainPage.css'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Typography} from '@mui/material';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import { useNavigate } from 'react-router-dom';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BiotechIcon from '@mui/icons-material/Biotech';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import colabor1 from '../../img/colabor1.jpg';
import colabor2 from '../../img/colabor2.jpg';
import { AspectRatio, Avatar, Box, IconButton, Link } from '@mui/joy';
import { CreateNewFolder, Favorite, Visibility } from '@mui/icons-material';



export default function MainPage() {
    const navigate = useNavigate()
    const handleLaunchCLick=()=>{
        navigate("/")
    }
    return (       
       <> 
       <section id='banner'>
            <Container
                style={{
                    padding: 0, // Loại bỏ padding của Container để không ảnh hưởng đến kích thước video
                    maxWidth: '100%', // Đảm bảo Container không vượt quá chiều rộng của viewport
                    overflowX: 'hidden' // Đảm bảo không có thanh cuộn ngang
                }}
              >                
                    <Card component="li" sx={{ position: 'relative', width: '100vw', height: '100vh' }}>
                        <CardCover>
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                poster="https://assets.codepen.io/6093409/river.jpg"
                                style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} // Đảm bảo video chiếm toàn bộ không gian viewport
                            >
                                <source 
                                    src="https://firebasestorage.googleapis.com/v0/b/video-5ab9d.appspot.com/o/video%2FvideoBanner%20(online-video-cutter.com).mp4?alt=media&token=913bffce-f6b5-4e1b-a1a0-a0cab9070cba"
                                    type="video/mp4"
                                />
                            </video>
                        </CardCover>
                        <CardContent
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 1,
                                background: 'rgba(0, 0, 0, 0.3)', // Background overlay để giúp chữ dễ đọc hơn
                            }}
                        >
                            <h1>Social media</h1>
                            <Button onClick={handleLaunchCLick} sx={{background: "rgb(105, 251, 132)"}}>Launch</Button>
                        </CardContent>
                    </Card>
            </Container>
        </section>
        <section id='category'>
                <div className='tittle'>
                    <h1>Our target</h1>    
                </div>
                <Container>
                    <Row>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                <CardContent>
                                    <SportsBasketballIcon></SportsBasketballIcon>
                                </CardContent>
                                <CardContent>
                                <Typography level="title-md">Sport</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                <CardContent>
                                    <SportsEsportsIcon></SportsEsportsIcon>
                                </CardContent>
                                <CardContent>
                                <Typography level="title-md">Game</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                <CardContent>
                                    <CardContent>
                                        <LiveTvIcon></LiveTvIcon>
                                    </CardContent>
                                <Typography level="title-md">Movie</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                    <CardContent>
                                        <BiotechIcon></BiotechIcon>
                                    </CardContent>
                                <CardContent>
                                <Typography level="title-md">Documentary</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                    <CardContent>
                                        <NewspaperIcon></NewspaperIcon>
                                    </CardContent>
                                <CardContent>
                                <Typography level="title-md">News</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                    <CardContent>
                                        <AutoAwesomeIcon></AutoAwesomeIcon>
                                    </CardContent>
                                <CardContent>
                                <Typography level="title-md">Entertainment</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                    <CardContent>
                                        <AudiotrackIcon></AudiotrackIcon>
                                    </CardContent>
                                <CardContent>
                                <Typography level="title-md">Music</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                        <Col lg="3" md="4" xs="6" sm="6">
                            <Card variant="plain">
                                    <CardContent>
                                        <AutoStoriesIcon></AutoStoriesIcon>
                                    </CardContent>
                                <CardContent>
                                <Typography level="title-md">Education</Typography>
                                <Typography>Description of the card.</Typography>
                                </CardContent> 
                            </Card>
                        </Col>
                    </Row>
                </Container>
                

        </section>
        <section id='colabor'>
                <div className='tittle'>
                    <h1>Colaborator</h1>
                </div>
                <Container>
                    <Row>
                        <Col lg="6" xs="12">
                            <img src={colabor1} alt="colabor1" style={{ width: '100%', height: '80%' }}/>
                        </Col>
                        <Col lg="6" xs="12">
                            <div>
                                <h1>sdfgkj</h1>
                                <p>skdjfgsdjfmsofmsifshdfsdf
                                    sdfhkjsdfsdfjksdlfhsjdfhdjsklf
                                    sdfjhskfshfhsjkfhjsdkf
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" xs="12">
                            <div>
                                <h1>sdfgkj</h1>
                                <p>skdjfgsdjfmsofmsifshdfsdf
                                    sdfhkjsdfsdfjksdlfhsjdfhdjsklf
                                    sdfjhskfshfhsjkfhjsdkf
                                </p>
                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <img src={colabor2} alt="colabor2" style={{ width: '100%', height: '80%' }}/>
                        </Col>                       
                    </Row>
                </Container>
        </section>
        <section id='style'>
            <div className='tittle'>
                <h1>Be the way you are</h1>
                <Container>
                    <Row>
                        <Col lg="3" sm="6" xs="6">
                        <Card
                            variant="plain"
                            sx={{
                                width: '100%',
                                bgcolor: 'initial',
                                p: 0,
                            }}
                            >
                            <Box sx={{ position: 'relative' }}>
                                <AspectRatio ratio="4/3">
                                <figure>
                                    <video
                                    autoPlay
                                    loop
                                    muted
                                    poster="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                                    style={{ width: '100%', height: '100%' }} // Ensure video fills the container
                                    >
                                    <source
                                        src="https://firebasestorage.googleapis.com/v0/b/video-5ab9d.appspot.com/o/video%2FvideoBanner%20(online-video-cutter.com).mp4?alt=media&token=913bffce-f6b5-4e1b-a1a0-a0cab9070cba"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                    </video>
                                </figure>
                                </AspectRatio>
                                <CardCover
                                className="gradient-cover"
                                sx={{
                                    '&:hover, &:focus-within': {
                                    opacity: 1,
                                    },
                                    opacity: 0,
                                    transition: '0.1s ease-in',
                                    background:
                                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                                }}
                                >                               
                                <div>
                                    <Box
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        flexGrow: 1,
                                        alignSelf: 'flex-end',
                                    }}
                                    >
                                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                        <Link
                                        href="#dribbble-shot"
                                        overlay
                                        underline="none"
                                        sx={{
                                            color: '#fff',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            display: 'block',
                                        }}
                                        >
                                        Yosemite
                                        </Link>
                                    </Typography>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <CreateNewFolder />
                                    </IconButton>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <Favorite />
                                    </IconButton>
                                    </Box>
                                </div>
                                </CardCover>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Avatar
                                src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                                size="sm"
                                sx={{ '--Avatar-size': '1.5rem' }}
                                />
                                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                                National Park
                                </Typography>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Favorite />}
                                sx={{
                                    fontWeight: 'md',
                                    ml: 'auto',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'danger.plainColor' },
                                }}
                                >
                                117
                                </Link>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Visibility />}
                                sx={{
                                    fontWeight: 'md',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'primary.plainColor' },
                                }}
                                >
                                10.4k
                                </Link>
                            </Box>
                            </Card>
                        </Col>
                        <Col lg="3" sm="6" xs="6">
                        <Card
                            variant="plain"
                            sx={{
                                width: '100%',
                                bgcolor: 'initial',
                                p: 0,
                            }}
                            >
                            <Box sx={{ position: 'relative' }}>
                                <AspectRatio ratio="4/3">
                                <figure>
                                    <video
                                    autoPlay
                                    loop
                                    muted
                                    poster="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                                    style={{ width: '100%', height: '100%' }} // Ensure video fills the container
                                    >
                                    <source
                                        src="https://firebasestorage.googleapis.com/v0/b/video-5ab9d.appspot.com/o/video%2FvideoBanner%20(online-video-cutter.com).mp4?alt=media&token=913bffce-f6b5-4e1b-a1a0-a0cab9070cba"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                    </video>
                                </figure>
                                </AspectRatio>
                                <CardCover
                                className="gradient-cover"
                                sx={{
                                    '&:hover, &:focus-within': {
                                    opacity: 1,
                                    },
                                    opacity: 0,
                                    transition: '0.1s ease-in',
                                    background:
                                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                                }}
                                >                               
                                <div>
                                    <Box
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        flexGrow: 1,
                                        alignSelf: 'flex-end',
                                    }}
                                    >
                                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                        <Link
                                        href="#dribbble-shot"
                                        overlay
                                        underline="none"
                                        sx={{
                                            color: '#fff',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            display: 'block',
                                        }}
                                        >
                                        Yosemite
                                        </Link>
                                    </Typography>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <CreateNewFolder />
                                    </IconButton>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <Favorite />
                                    </IconButton>
                                    </Box>
                                </div>
                                </CardCover>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Avatar
                                src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                                size="sm"
                                sx={{ '--Avatar-size': '1.5rem' }}
                                />
                                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                                National Park
                                </Typography>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Favorite />}
                                sx={{
                                    fontWeight: 'md',
                                    ml: 'auto',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'danger.plainColor' },
                                }}
                                >
                                117
                                </Link>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Visibility />}
                                sx={{
                                    fontWeight: 'md',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'primary.plainColor' },
                                }}
                                >
                                10.4k
                                </Link>
                            </Box>
                            </Card>
                        </Col>
                        <Col lg="3" sm="6" xs="6">
                        <Card
                            variant="plain"
                            sx={{
                                width: '100%',
                                bgcolor: 'initial',
                                p: 0,
                            }}
                            >
                            <Box sx={{ position: 'relative' }}>
                                <AspectRatio ratio="4/3">
                                <figure>
                                    <video
                                    autoPlay
                                    loop
                                    muted
                                    poster="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                                    style={{ width: '100%', height: '100%' }} // Ensure video fills the container
                                    >
                                    <source
                                        src="https://firebasestorage.googleapis.com/v0/b/video-5ab9d.appspot.com/o/video%2FvideoBanner%20(online-video-cutter.com).mp4?alt=media&token=913bffce-f6b5-4e1b-a1a0-a0cab9070cba"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                    </video>
                                </figure>
                                </AspectRatio>
                                <CardCover
                                className="gradient-cover"
                                sx={{
                                    '&:hover, &:focus-within': {
                                    opacity: 1,
                                    },
                                    opacity: 0,
                                    transition: '0.1s ease-in',
                                    background:
                                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                                }}
                                >                               
                                <div>
                                    <Box
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        flexGrow: 1,
                                        alignSelf: 'flex-end',
                                    }}
                                    >
                                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                        <Link
                                        href="#dribbble-shot"
                                        overlay
                                        underline="none"
                                        sx={{
                                            color: '#fff',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            display: 'block',
                                        }}
                                        >
                                        Yosemite
                                        </Link>
                                    </Typography>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <CreateNewFolder />
                                    </IconButton>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <Favorite />
                                    </IconButton>
                                    </Box>
                                </div>
                                </CardCover>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Avatar
                                src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                                size="sm"
                                sx={{ '--Avatar-size': '1.5rem' }}
                                />
                                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                                National Park
                                </Typography>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Favorite />}
                                sx={{
                                    fontWeight: 'md',
                                    ml: 'auto',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'danger.plainColor' },
                                }}
                                >
                                117
                                </Link>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Visibility />}
                                sx={{
                                    fontWeight: 'md',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'primary.plainColor' },
                                }}
                                >
                                10.4k
                                </Link>
                            </Box>
                            </Card>
                        </Col>
                        <Col lg="3" sm="6" xs="6">
                        <Card
                            variant="plain"
                            sx={{
                                width: '100%',
                                bgcolor: 'initial',
                                p: 0,
                            }}
                            >
                            <Box sx={{ position: 'relative' }}>
                                <AspectRatio ratio="4/3">
                                <figure>
                                    <video
                                    autoPlay
                                    loop
                                    muted
                                    poster="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                                    style={{ width: '100%', height: '100%' }} // Ensure video fills the container
                                    >
                                    <source
                                        src="https://firebasestorage.googleapis.com/v0/b/video-5ab9d.appspot.com/o/video%2FvideoBanner%20(online-video-cutter.com).mp4?alt=media&token=913bffce-f6b5-4e1b-a1a0-a0cab9070cba"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                    </video>
                                </figure>
                                </AspectRatio>
                                <CardCover
                                className="gradient-cover"
                                sx={{
                                    '&:hover, &:focus-within': {
                                    opacity: 1,
                                    },
                                    opacity: 0,
                                    transition: '0.1s ease-in',
                                    background:
                                    'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                                }}
                                >                               
                                <div>
                                    <Box
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        flexGrow: 1,
                                        alignSelf: 'flex-end',
                                    }}
                                    >
                                    <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
                                        <Link
                                        href="#dribbble-shot"
                                        overlay
                                        underline="none"
                                        sx={{
                                            color: '#fff',
                                            textOverflow: 'ellipsis',
                                            overflow: 'hidden',
                                            display: 'block',
                                        }}
                                        >
                                        Yosemite
                                        </Link>
                                    </Typography>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ ml: 'auto', bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <CreateNewFolder />
                                    </IconButton>
                                    <IconButton
                                        size="sm"
                                        variant="solid"
                                        color="neutral"
                                        sx={{ bgcolor: 'rgba(0 0 0 / 0.2)' }}
                                    >
                                        <Favorite />
                                    </IconButton>
                                    </Box>
                                </div>
                                </CardCover>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Avatar
                                src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                                size="sm"
                                sx={{ '--Avatar-size': '1.5rem' }}
                                />
                                <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
                                National Park
                                </Typography>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Favorite />}
                                sx={{
                                    fontWeight: 'md',
                                    ml: 'auto',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'danger.plainColor' },
                                }}
                                >
                                117
                                </Link>
                                <Link
                                href="#dribbble-shot"
                                level="body-xs"
                                underline="none"
                                startDecorator={<Visibility />}
                                sx={{
                                    fontWeight: 'md',
                                    color: 'text.secondary',
                                    '&:hover': { color: 'primary.plainColor' },
                                }}
                                >
                                10.4k
                                </Link>
                            </Box>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
        </>
    );
}
