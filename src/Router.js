/** @format */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home';
import Posts from './components/posts';
import Contact from './components/contacts';
import Header from './components/Header';
import MainLayout from './components/layout/MainLayout';

function Router() {
	return (
		<BrowserRouter>
			<Header />
			<MainLayout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/article/:id' element={<Posts />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default Router;
