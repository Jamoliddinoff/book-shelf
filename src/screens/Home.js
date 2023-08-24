import React, {useCallback, useEffect, useMemo, useState} from 'react';
import BooksList from "../companents/BooksList";
import Navbar from "../companents/navbar";
import styled from "styled-components";
import {createBook, deleteBook, editStatusApi, getBooks} from "../api/entities";
import CreateModal from "../companents/create-modal";
import {useDispatch} from "react-redux";
import {setAlertAction} from "../store/alertSlice";

const Home = () => {
    const [addModal,setAddModal] = useState(false);
    const [loader,setLoader] = useState(false)
    const [bookList,setBookList] = useState([])
    const [editStatus,setEditStatus] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        getBookList();
    },[])

    const createBtn = (input) => {
        if(input?.length>0){
            setLoader(true);
            createBook({isbn:input})
                .then(res => {
                    getBookList();
                    dispatch(setAlertAction({type:'success',message:'Added successfully'}))
                    setAddModal(false);
                })
                .catch(err => console.warn(err))
                .finally(()=> setLoader(false));
        }
    }

    const getBookList = () =>{
        getBooks().then(res => {
            res.data.data && setBookList(res.data.data)
        }).catch(err => console.warn(err))
    }

    const editBookStatus = (input) => {
        setLoader(true);
        if(input && editStatus){
            editStatusApi({status:+input},editStatus?.book?.id)
                .then(res =>{
                    getBookList();
                    dispatch(setAlertAction({type:'success',message:'Updated successfully'}))

                    setEditStatus(null);
                })
                .catch(err => console.warn(err))
                .finally(()=> setLoader(false));
        }
    }

    const deleteBookHandle = useCallback((id) => {
        deleteBook(id).then(res =>{
            getBookList();
            dispatch(setAlertAction({type:'success',message:'Deleted successfully'}))
        }).catch(err => console.warn(err))
    },[])

    const list = useMemo(()=>{
        return bookList;
    },[bookList])

    const modalBtn = (input) => {
        if (editStatus!==null){
            editBookStatus(input)
        }else {
            createBtn(input);
        }
    }


    return (
        <>
            <Navbar/>
            <hr/>
            <BooksList
                deleteBookHandle = {deleteBookHandle}
                onEditBtn={(item)=>setEditStatus(item)}
                list={list}
            />
            <CreateModal
                show={addModal || editStatus}
                item={editStatus}
                loading={loader}
                handleBtn={modalBtn}
                onClose={()=>{
                    setAddModal(false);
                    setEditStatus(null)
                }}
            />
            <PlusIcon onClick={()=>setAddModal(true)}><span>+</span></PlusIcon>
        </>
    );
};

const PlusIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${prop => prop.theme.colors.main};
  position: fixed;
  bottom: 25px;
  right: 30px;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover{
    span{
      transform: rotate(90deg);
    }
    &:after{
      content: 'Create book';
      color: #fef7e0;
      font-size: 18px;
      font-weight: 660;
      margin-left: 12px;
      transition: 0.4s ease-in;
    }
    width: 170px;
    border-radius: 30px;
  }
  
  span{
    height: 40px;
    font-size: 30px;
    color: #fef7e0;
    font-weight: bold;
    transition: 0.4s ease-in;

  }
`;
export default Home;
