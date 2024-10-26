import React, { useState, useEffect , useContext } from "react";
import { Link } from 'react-router-dom';
import { OrderContext } from './OrderContext'; 
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, TextField, InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Rating, Box } from '@mui/material';
import { Menu as MenuIcon, NotificationsActive as NotificationsActiveIcon, Logout as LogoutIcon, HomeOutlined as HomeOutlinedIcon, AccountCircle as AccountCircleIcon, Settings as SettingsIcon, Instagram as InstagramIcon, Facebook as FacebookIcon, InfoOutlined as InfoOutlinedIcon, RoomServiceOutlined as RoomServiceOutlinedIcon, Twitter as TwitterIcon, Search as SearchIcon, ShoppingCartOutlined as ShoppingCartOutlinedIcon, ContactPageOutlined as ContactPageOutlinedIcon } from '@mui/icons-material';

import BriyaniImage from './briyani.jpeg';
import NaanImage from './naanroti.jpeg';
import rice from './rice.jpeg';
import idlidosa from './dosa.jpeg';
import burger from './burger.jpeg';
import pizza from './pizza.jpeg';
import './homepage.css';
import './loginpage.css';
import Orders from "./Orders";

function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const { addOrder } = useContext(OrderContext);  
  const [openContact, setOpenContact] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showAppBar, setShowAppBar] = useState(true);
  const [orderCount, setOrderCount] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  let lastScrollY = window.scrollY;

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const openContactDialog = () => {
    setOpenContact(true);
  };

  const closeContactDialog = () => {
    setOpenContact(false);
  };

  const toggleDrawer = (open) => (event) => {
    setOpenDrawer(open);
  };

  const handleScroll = () => {
    const appBar = document.querySelector('.appbar');
    if (window.scrollY < lastScrollY) {
      appBar.style.top = "0";
    } else {
      appBar.style.top = "-64px"; 
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOrderNow = (orderDetails) => {
    setOrderCount(orderCount + 1);
    setSelectedOrder(orderDetails);
    addOrder(orderDetails);
    setOrderDialogOpen(true);
  };

  return (
    <div>
      {showAppBar && (
        <AppBar color="transparent" className="appbar" style={{ transition: "top 0.3s ease-in-out" }}>
          <Toolbar style={{ justifyContent: "space-between" }}>
            <IconButton
              edge="start"
              aria-label="menu"
              sx={{ color: 'black' }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <TextField
              placeholder="Search..."
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: 'white', borderRadius: 1, minWidth: 400, marginLeft: '50px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="inherit" sx={{ color: 'black', backgroundColor: 'inherit', '&:hover': { backgroundColor: "yellow", color: 'black' } }}>
                <IconButton>
                  <HomeOutlinedIcon />
                </IconButton>
                <Link to="/home" style={{textDecoration:'none' , color: 'inherit'}}>
                Home</Link>
              </Button>
              <Button
                color="inherit"
                sx={{ color: 'black', backgroundColor: 'inherit', '&:hover': { backgroundColor: "yellow", color: 'black' } }}
              >
                <IconButton><ShoppingCartOutlinedIcon /></IconButton>
                <Link to="/order" style={{ textDecoration: 'none', color: 'inherit' }}>Orders ({orderCount})</Link>
              </Button>
              <Button
                color="inherit"
                sx={{ color: 'black', backgroundColor: 'inherit', '&:hover': { backgroundColor: "yellow", color: 'black' } }}
                onClick={handleClickOpen}
              >
                <IconButton>
                  <InfoOutlinedIcon />
                </IconButton>
                About
              </Button>
              <Button
                color="inherit"
                sx={{ color: 'black', backgroundColor: 'inherit', '&:hover': { backgroundColor: "yellow", color: 'black' } }}
                onClick={openContactDialog}
              >
                <IconButton>
                  <ContactPageOutlinedIcon />
                </IconButton>
                Contact
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}

      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <IconButton>
              <AccountCircleIcon />
            </IconButton><Button variant="outlined" color="black">
            My Profile</Button>
          </ListItem>
          <ListItem button>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton><Button variant="outlined" color="black">
            Notifications</Button>
          </ListItem>
          <ListItem button>
            <IconButton>
              <SettingsIcon />
            </IconButton><Button variant="outlined" color="black">
            Settings</Button>
          </ListItem>
          <ListItem button>
            <IconButton>
              <LogoutIcon />
            </IconButton>
            <Button variant="outlined" color="black">
              <Link to="/" style={{textDecoration:'none' , color:'primary'}}>
            Logout</Link> </Button>
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle style={{ fontSize: 'large' }}>About</DialogTitle>
        <DialogContent>
          <Typography>
            Shopify is one of the largest and most influential e-commerce platforms in the world.
            Search and Navigation: Advanced search algorithms and user-friendly navigation make it easy for customers to find products quickly.
            Personalized Recommendations: Uses machine learning and browsing history to recommend products tailored to individual preferences.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openContact} onClose={closeContactDialog}>
        <DialogTitle style={{ color: 'black', fontSize: 'large' }}>Contact</DialogTitle>
        <DialogContent>
          Phone number : +91-9876543210<br /><br />
          Email : <a href="mailto:foodiebee01@gmail.com" style={{ textDecoration: 'none', color: 'blue' }}>foodiebee01@gmail.com</a>
          <br /><br />
          <IconButton edge="start">
            <InstagramIcon />
          </IconButton>
          <IconButton edge="middle">
            <FacebookIcon />
          </IconButton>
          <IconButton edge="end">
            <TwitterIcon />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeContactDialog}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={orderDialogOpen} onClose={() => setOrderDialogOpen(false)}>
        {selectedOrder && (
          <>
            <DialogTitle style={{ fontSize: 'large' }}>{selectedOrder.name}</DialogTitle>
            <DialogContent>
              <img src={selectedOrder.image} alt={selectedOrder.name} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
                {selectedOrder.restaurant}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '5px' }}>
                {selectedOrder.price}
              </Typography>
              <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>
                {selectedOrder.offer}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOrderDialogOpen(false)} color="primary">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <div className="card-container">
        <Box className="biryani-card">
          <img src={BriyaniImage} alt="Biryani" />
          <Typography sx={{ fontWeight: 'bold' }}>
          Chicken Biryani</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>
          <IconButton edge="start"> 
              <RoomServiceOutlinedIcon />
            </IconButton> Ajmeer Briyani
          </Typography>
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography sx={{ marginTop: '5px' }}>₹120</Typography>
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>5% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: idlidosa,
              name: 'Masala Dosa',
              restaurant: 'South Indian Delights',
              price: '₹120',
              offer: '5% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>
        <Box className="naan-card">
          <img src={NaanImage} alt="Naan Roti" />
          
          <Typography sx={{ fontWeight: 'bold' }}> Naan Roti</Typography>
          <Typography sx={{ fontWeight: 'bold' }}><IconButton edge="start">
              <RoomServiceOutlinedIcon />
            </IconButton>Panjabi Dhaba</Typography>
            <Rating value={4.0} precision={0.5} readOnly />
          <Typography sx={{ marginTop: '5px' }}>₹70</Typography>
          
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>5% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: NaanImage,
              name: 'Naan',
              restaurant: 'Panjabi Dhaba',
              price: '₹70',
              offer: '5% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>
        {/* Add more cards similarly */}
        <Box className="dosa-card">
          <img src={idlidosa} alt="Dosa" />
          <Typography sx={{marginTop:'10px' , fontWeight:'bold'}}>Masala Dosa</Typography>
          <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            <IconButton edge="start">
              <RoomServiceOutlinedIcon />
            </IconButton>
            South Indian Delights
          </Typography>
          <Rating value={4.7} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ marginTop: '5px' }}>₹120</Typography>
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>5% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: idlidosa,
              name: 'Masala Dosa',
              restaurant: 'South Indian Delights',
              price: '₹120',
              offer: '5% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>
        <Box className="burger-card">
          <img src={burger} alt="Burger" />
          <Typography sx={{marginTop:'10px' , fontWeight:'bold'}}>Cheese Burger</Typography>
          <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            <IconButton edge="start">
              <RoomServiceOutlinedIcon />
            </IconButton>
            Burger Joint
          </Typography>
          <Rating value={4.3} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ marginTop: '5px' }}>₹200</Typography>
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>25% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: burger,
              name: 'Cheese Burger',
              restaurant: 'Burger Joint',
              price: '₹200',
              offer: '25% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>
        <Box className="pizza-card">
          <img src={pizza} alt="Pizza" />
          <Typography sx={{marginTop:'10px' , fontWeight:'bold'}}>Pepperoni Pizza</Typography>
          <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            <IconButton edge="start">
              <RoomServiceOutlinedIcon />
            </IconButton>
            Pizza Place
          </Typography>
          <Rating value={4.8} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ marginTop: '5px' }}>₹300</Typography>
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>30% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: pizza,
              name: 'Pepperoni Pizza',
              restaurant: 'Pizza Place',
              price: '₹300',
              offer: '30% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>

        <Box className="dosa-card">
          <img src={rice} alt="Dosa" />
          <Typography sx={{marginTop:'10px' , fontWeight:'bold'}}>Chicken Rice</Typography>
          <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            <IconButton edge="start">
              <RoomServiceOutlinedIcon />
            </IconButton>
            A1 Chetinad Kitchen
          </Typography>
          <Rating value={4.7} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ marginTop: '5px' }}>₹120</Typography>
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>5% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: rice,
              name: 'Chicken Rice',
              restaurant: 'A1 Chetinad Kitchen',
              price: '₹120',
              offer: '5% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>

        <Box className="dosa-card">
          <img src={idlidosa} alt="Dosa" />
          <Typography sx={{marginTop:'10px' , fontWeight:'bold'}}>Plain Dosa</Typography>
          <Typography variant="h6" sx={{ marginTop: '10px', fontWeight: 'bold' }}>
            <IconButton edge="start">
              <RoomServiceOutlinedIcon />
            </IconButton>
            Sree Annapoorna
          </Typography>
          <Rating value={4.7} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ marginTop: '5px' }}>₹90</Typography>
          <Typography variant="body2" sx={{ color: 'green', marginTop: '5px' }}>5% OFF</Typography>
          <Button 
            variant="contained" 
            color="warning" 
            onClick={() => handleOrderNow({
              image: idlidosa,
              name: 'Plain Dosa',
              restaurant: 'Sree Annapoorna',
              price: '₹90',
              offer: '5% OFF'
            })}
          >
            OrderNow
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Home;
