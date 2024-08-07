import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Typography} from '@mui/material';
import CardCover from '@mui/joy/CardCover';
import { AspectRatio, Avatar, Box, IconButton, Link } from '@mui/joy';
import { CreateNewFolder, Favorite, Visibility } from '@mui/icons-material';

export default function Section4() {
  return (
    <section id='style'>
            <div className='tittle'>
                <h1>Be the way you are</h1>
                <p>
                    <i class="fa-solid fa-code-commit"></i>
                    <i class="fa-solid fa-code-commit"></i>
                    <i class="fa-solid fa-code-commit"></i>
                </p> 
            </div>
                <Container>
                    <Row>
                        <Col lg="3" sm="6" xs="6" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
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
                                Dynamic
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
                        <Col lg="3" sm="6" xs="6" uk-scrollspy="cls: uk-animation-slide-top; repeat: true">
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
                                Creative
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
                        <Col lg="3" sm="6" xs="6" uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true">
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
                                Artistry
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
                        <Col lg="3" sm="6" xs="6" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
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
                                Learning
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
        </section>
  )
}
