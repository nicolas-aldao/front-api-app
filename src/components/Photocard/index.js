import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImgWrapper, Img, Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg";

export const Photocard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `liked-${id}`;
  const [liked,setLiked] = useLocalStorage(key, false);
  
  
  
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={()=> setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
