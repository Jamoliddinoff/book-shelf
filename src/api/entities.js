import {httpDelete, httpGet, httpPatch, httpPost} from "./index";

const REGISTER_API = '/signup';
const CREATE_BOOK_API = '/books';

export const userRegister = (data) => httpPost(REGISTER_API,{data})

export const createBook = (data) => httpPost(CREATE_BOOK_API,{data})

export const getBooks = () => httpGet(CREATE_BOOK_API)

export const deleteBook = (id) => httpDelete(CREATE_BOOK_API+"/"+id)

export const editStatusApi = (data,id) => httpPatch(CREATE_BOOK_API+"/"+id,{data})
