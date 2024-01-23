import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { setNavTransparent } from '@containers/App/actions';
import FillMessage from '@components/FillMessage';
import CardTravel from '@components/CardTravel';

import classes from "./style.module.scss";
import Typography from '@mui/material/Typography'




const Home = () => {
  const dispatch = useDispatch();
  const imgElement = useRef();

  const [data, setData] = useState([]);

  function scrollEvent(e) {
    const currentScroll = e.target.scrollingElement.scrollTop;
    const offsetImgElement = imgElement.current.offsetHeight;
    if (currentScroll > offsetImgElement) {
      dispatch(setNavTransparent(false));
    } else {
      dispatch(setNavTransparent(true));
    }
  }

  useEffect(() => {
    // dispatch(ping());
    dispatch(setNavTransparent(true));
  }, [dispatch]);

  useEffect(() => {
    addEventListener("scroll", scrollEvent);

    return () => removeEventListener("scroll", scrollEvent);
  }, []);

  // cleanup
  useEffect(() => {
    setData([
      {
        id: 0,
        title: "asdwasd 1",
        date: "2020-07-29",
        description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
        img: "https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8MNgdQphS6Zvxh7WFqhWgJqtNAXDeWr1qhzxTRkkcx1k0IJ7vcyWF~ZkRDfz9EjmQJOArLOm6Rno2pVcEYOg8qP1zTSZIibaCP0oU63nUjeZaDnUAmUBIBjdaVHLtZTdN2pxEVLxa-WOtUFdv4Zs85Td2XqRh3RuhZp3AoYtKB9IGdoM0GeD6sE3~12K4~Xo8iydMMIkI4cwUFkWTMldW7LpvJIccfvKS2FiXs5KbzpFL0ZPKCYmJAwPe8PjwpkDgOn4f89Mr10fhi1qyZ-FlQJKTilwxXRJvQZPhajVVaqW~T9B8V7RH-x~IJjhSMW6l70sF0Yw4mqX-7JRot81w__",
        author: "Cipto"
      },
      {
        id: 1,
        title: "asdwasd 2",
        date: "2020-07-29",
        description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
        img: "https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8MNgdQphS6Zvxh7WFqhWgJqtNAXDeWr1qhzxTRkkcx1k0IJ7vcyWF~ZkRDfz9EjmQJOArLOm6Rno2pVcEYOg8qP1zTSZIibaCP0oU63nUjeZaDnUAmUBIBjdaVHLtZTdN2pxEVLxa-WOtUFdv4Zs85Td2XqRh3RuhZp3AoYtKB9IGdoM0GeD6sE3~12K4~Xo8iydMMIkI4cwUFkWTMldW7LpvJIccfvKS2FiXs5KbzpFL0ZPKCYmJAwPe8PjwpkDgOn4f89Mr10fhi1qyZ-FlQJKTilwxXRJvQZPhajVVaqW~T9B8V7RH-x~IJjhSMW6l70sF0Yw4mqX-7JRot81w__",
        author: "Cipto"
      },
      {
        id: 2,
        title: "asdwasd 3",
        date: "2020-07-29",
        description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
        img: "https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8MNgdQphS6Zvxh7WFqhWgJqtNAXDeWr1qhzxTRkkcx1k0IJ7vcyWF~ZkRDfz9EjmQJOArLOm6Rno2pVcEYOg8qP1zTSZIibaCP0oU63nUjeZaDnUAmUBIBjdaVHLtZTdN2pxEVLxa-WOtUFdv4Zs85Td2XqRh3RuhZp3AoYtKB9IGdoM0GeD6sE3~12K4~Xo8iydMMIkI4cwUFkWTMldW7LpvJIccfvKS2FiXs5KbzpFL0ZPKCYmJAwPe8PjwpkDgOn4f89Mr10fhi1qyZ-FlQJKTilwxXRJvQZPhajVVaqW~T9B8V7RH-x~IJjhSMW6l70sF0Yw4mqX-7JRot81w__",
        author: "Cipto"
      },
      {
        id: 3,
        title: "asdwasd 4",
        date: "2020-07-29",
        description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
        img: "https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8MNgdQphS6Zvxh7WFqhWgJqtNAXDeWr1qhzxTRkkcx1k0IJ7vcyWF~ZkRDfz9EjmQJOArLOm6Rno2pVcEYOg8qP1zTSZIibaCP0oU63nUjeZaDnUAmUBIBjdaVHLtZTdN2pxEVLxa-WOtUFdv4Zs85Td2XqRh3RuhZp3AoYtKB9IGdoM0GeD6sE3~12K4~Xo8iydMMIkI4cwUFkWTMldW7LpvJIccfvKS2FiXs5KbzpFL0ZPKCYmJAwPe8PjwpkDgOn4f89Mr10fhi1qyZ-FlQJKTilwxXRJvQZPhajVVaqW~T9B8V7RH-x~IJjhSMW6l70sF0Yw4mqX-7JRot81w__",
        author: "Cipto"
      },
      {
        id: 4,
        title: "asdwasd 5",
        date: "2020-07-29",
        description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
        img: "https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8MNgdQphS6Zvxh7WFqhWgJqtNAXDeWr1qhzxTRkkcx1k0IJ7vcyWF~ZkRDfz9EjmQJOArLOm6Rno2pVcEYOg8qP1zTSZIibaCP0oU63nUjeZaDnUAmUBIBjdaVHLtZTdN2pxEVLxa-WOtUFdv4Zs85Td2XqRh3RuhZp3AoYtKB9IGdoM0GeD6sE3~12K4~Xo8iydMMIkI4cwUFkWTMldW7LpvJIccfvKS2FiXs5KbzpFL0ZPKCYmJAwPe8PjwpkDgOn4f89Mr10fhi1qyZ-FlQJKTilwxXRJvQZPhajVVaqW~T9B8V7RH-x~IJjhSMW6l70sF0Yw4mqX-7JRot81w__",
        author: "Cipto"
      },
    ]);

    return () => dispatch(setNavTransparent(false));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.headerImg} ref={imgElement}>
        <div className={classes.textContainer}>
          <h1 className={classes.textHeader1}>The Journey you ever dreamed of.</h1>
          <h3 className={classes.textHeader3}>We made a tool so you can easily keep & share your travel memories. But there is a lot more</h3>
        </div>
      </div>
      <div className={classes.content}>
        <h1 className={classes.pageTitle}>Journey</h1>
        <div className={classes.searchContainer}>
          <TextField
            id="search"
            placeholder='Find Journey'
            value={""}
            onChange={() => { }}
            variant='outlined'
            InputProps={{
              style: {
                borderRadius: "10px 0px 0px 10px",
              }
            }}
            className={classes.searchField}
          />
          <Button variant="contained" className={classes.searchBtn} sx={{ borderRadius: "0px 10px 10px 0px" }}>
            SEARCH
          </Button>
        </div>
        {data.length > 0 ? <div className={classes.cardsContainer}>
          {data?.map(e =>
            <CardTravel data={e} />
          )}
        </div> : <FillMessage message={"Kosong"}></FillMessage>}
      </div>
    </div>
  );
};

export default Home;
