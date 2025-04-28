import React from 'react'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Navbar from './Navbar'
import Dashboard from './pages/Dashboard'
import Dashboard_recipy_card from './cards/dashboard_recipy_card'
import Logout from './auth/Logout'
import { Link, Navigate, Route, Router, Routes } from 'react-router-dom'
import Createrecipe from './recipe/Create_recipe'
import My_recipes from './recipe/My_recipes'
import User_profile from './profile/User_profile'
import Categories from './pages/Categories'
import Discover from './pages/Discover'
import Recipe_detail from './recipe/Recipe_detail'

const App = () => {
  return (
    <div >


<Routes>
  <Route path="/" element={<Navigate to={"/register"}/>}/>
  <Route path="/register" element={<Signup/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/logout" element={<Logout/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/recipe/create" element={<Createrecipe/>}/>
  <Route path="/myrecipes" element={<My_recipes/>}/>
  <Route path="/profile" element={<User_profile/>}/>
  <Route path="/categories" element={<Categories/>}/>
  <Route path="/recipes/discover" element={<Discover/>}/>
  <Route path="/recipe/detail/:id" element={<Recipe_detail/>}/>
</Routes>
   </div>
  )
}


export default App
