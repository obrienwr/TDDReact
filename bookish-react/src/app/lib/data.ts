"use server";

import {Book} from "@/app/lib/types";
import axios from "axios";

const API_URL = 'http://localhost:8080';

export async function fetchBooks(): Promise<Book[]> {
  const response = await axios.get(`${API_URL}/books`);
  return response.data
}

export async function fetchBookById(id: string): Promise<Book> {
  const response = await axios.get(`${API_URL}/books/${id}`);
  return response.data
}


