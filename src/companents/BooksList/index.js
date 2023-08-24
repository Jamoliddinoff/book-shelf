import React from 'react';
import Container from "../Container";
import Text from "../Text";
import Button from "../Button";
import {BtnWrapper, CardItem, CardsWrapper, DescriptionItem, ImageWrapper, CardImage, PlaceholderText} from "./style";
import BookShelf from '../../assets/icons/book.png'

const BooksList = ({list,deleteBookHandle,onEditBtn}) => {
    return (
        <Container>
            {list?.length > 0 ? <PlaceholderText>
                <Text size={32} color={'#000'} weight={'600'}>
                    --- Books ---
                </Text>
            </PlaceholderText> :null}
            <CardsWrapper>
                {(list||[]).map(item=>(
                    <CardItem key={item.book.id}>
                        <span style={{background:item.status === 0 ? "green" : item.status ===1 || item.status === 2 ? "blue" : "red"}}>
                            {item.status === 0 ? "New" : item.status === 1 ? "Started" : item.status === 2 ? 'In progress' : 'Finished'}
                        </span>
                        <ImageWrapper>
                            <CardImage
                                fit={item?.book?.cover ? '1': '0'}
                                alt={item.capital||'image'} src={item?.book?.cover || BookShelf}
                                title={item.book.author||'image'}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src='../../assets/icons/book.png';
                                }}
                            />
                        </ImageWrapper>
                        <DescriptionItem>
                            <Text>Title:</Text>
                            <Text size={16} color={'#000'} weight={'600'}>
                                {item?.book?.title||'n/a'}
                            </Text>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Text>Author:</Text>
                            <Text size={16} color={'#000'} weight={'600'}>
                                {item?.book?.author ||'n/a'}
                            </Text>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Text>Published:</Text>
                            <Text size={16} color={'#000'} weight={'600'}>
                                {item?.book?.published ||'n/a'}
                            </Text>
                        </DescriptionItem>
                        <DescriptionItem>
                            <Text>Pages:</Text>
                            <Text size={16} color={'#000'} weight={'600'}>
                                {item?.book?.pages ||'n/a'}
                            </Text>
                        </DescriptionItem>
                        <BtnWrapper>
                            <Button style={{padding:'8px 16px'}} onClick={()=>onEditBtn(item)}>Edit status</Button>
                            <Button style={{padding:'8px 16px',background:'red'}} onClick={()=>deleteBookHandle(item?.book?.id)}>Delete book</Button>
                        </BtnWrapper>
                    </CardItem>
                ))}
                {list?.length === 0 ? <PlaceholderText>
                    <Text size={32} color={'#383838'} weight={'600'}>Books not available yet.🤷‍<br/> Add a new book 📓</Text>
                </PlaceholderText>:null}
            </CardsWrapper>

        </Container>
    );
};

export default BooksList;
