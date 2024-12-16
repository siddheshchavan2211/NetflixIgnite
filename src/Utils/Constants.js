export const Netflix_Logo =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const Video_Slider_Img =
  "https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_auto_scroll/IN-en-20241125-TRIFECTA-1bc613d1-6f02-44e9-942d-b871f9343b86_large.jpg";

export const User_Logo =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"; // Set the display name

export const TMDB_AUTHORIZATION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDBKEY,
  },
};

export const Image_Path = "https://image.tmdb.org/t/p/w500";

export const Open_AI_KEY = process.env.REACT_APP_OPENAI;

export const Hugging_Access_Token = process.env.REACT_APP_Hugging_Access_Token;
//hiding secrets key
