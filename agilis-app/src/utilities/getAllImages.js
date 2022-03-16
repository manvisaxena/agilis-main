
import Cookies from 'js-cookie';
import { ImageLoginUrls, ImageLogoutUrls } from '../resources/ImageUrls';

const getAllImages = () => {
  let allImages= [];
  if(Cookies.get('userName') && Cookies.get('password')){
    allImages = ImageLoginUrls;
  } else{
    allImages = ImageLogoutUrls;
  }

  return allImages;
}

export default getAllImages;