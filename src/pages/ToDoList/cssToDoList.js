import styled from 'styled-components';

export const TotalStyle = styled.div`


body {
  font-family: 'Roboto', sans-serif;
  background-color: #FEE9F0;
  font-size: 16px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  background-color: #f5f8f9;
  height: 600px;
  box-shadow: 0 0 6px grey;
  overflow: hidden;
  line-height: 2rem;
  letter-spacing: 1px;
  width: 25%;
  margin: auto;
  margin-top: 50px;
}


.card__header {
  height: 215px;
  overflow: hidden;
  position: relative;
}

.card__header img{
  width: 100%;
}

.card__header::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
 width: 100%;
 height: 100%;
  background: rgba(71, 32, 84, 0.2);
}

.card__body{
  position: relative;
}
.card__body::before{
  content: '';
  position: absolute;
  top: -35px;
  left: -50px;
  background-color: #f5f8f9;
  height: 100px;
  width: 120%;
  display: block;
  transform: rotate(10deg);
   
}

.card__content{
  position: relative;
  padding: 0 20px;
  
}

.card__title p{
  font-size: 0.8rem;
}

/* Filler Button */
.filter-btn {
  position: absolute;
  z-index: 2;
  right: 0;
  width: 40px;
  height: 40px;
  transition: all 0.4s ease-in-out 0s;
}

.filter-btn span i{
  width: 40px;
  height: 40px;
  background: #FA396B;
  display: block;
  position: absolute;
  right: 25px;
  top: -30px;
  text-align: center;
  color: #fff;
  line-height: 40px;
  border-radius: 50%;
  font-size: 1rem;
  z-index: 999;
}
span.toggle-btn:hover{
      cursor: pointer;
}
.filter-btn a {
  position: absolute;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  right: 25px;
  display: block;
  top: -30px;
  color: #fff;
  z-index: 99;
  font-size: 1.2rem;
  transition: all .4s cubic-bezier(.68, 1, .265, 1)
}

.filter-btn:after {
  height: 150px;
    width: 150px;
    content: '';
    background-color: #FA396B;
    position: absolute;
    top: -86px;
    right: -35px;
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.3s ease-in-out 0s;
}

.filter-btn.open span.toggle-btn i{
  background-color: #DE3963;
}

.filter-btn .fa-times {
  display: none;
}

.filter-btn .fa-filter {
  display: block;
}

.filter-btn.open .fa-times {
  display: block;
}

.filter-btn.open .fa-filter {
  display: none;
}

.open:after {
  transform: scale(1);
}

.filter-btn.open a:nth-child(1) {
  transform: translate(9px, -48px);
}

.filter-btn.open a:nth-child(2) {
  transform: translate(-42px, -26px);
}

.filter-btn.open a:nth-child(3) {
  transform: translate(-39px, 29px);
}

.filter-btn.open a:nth-child(4) {
  transform: translate(6px, 52px);
}

/* Add */
.card__add{

    /* background: #DE3963; */
    display: flex;
  position: relative;
  
  margin-top: 5px;
}
.card__add input {
  width: 100%;
    height: 40px;
    /* float: left; */
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-indent: 18px;
    /* padding: 0 60px 0 0; */
    background: rgba(222, 57, 99, 0.6);
    /* border-radius: 3px; */
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    border: 0px;
    box-shadow: none;
    outline: none;
 
} 

.card__add input::placeholder{
  color: #fff;
}

.card__add button{
 
  border: none;
  border-radius: 50%;
  position: absolute;
  top:0;
  right: 0;
  /* width: 40px;
  height: 40px; */
  box-shadow: 0 0 0 2px rgba(222, 57, 99);
  cursor: pointer;
  outline: none;
}
.card__add i{
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: #fff;
  line-height: 40px;
  color: #DE3963;

}

/* Todo list */
ul.todo {
  list-style: none;
  
}
ul.todo li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #444;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(44, 62, 80, 0.3);
  margin: 0 0 10px 0;
  padding: 0 10px; 
  word-break: break-word;
}

ul.todo#todo{
  padding-top: 30px;
}
ul.todo#completed {
  position: relative;
  padding: 30px 0;
}

ul.todo#completed:before {
  content: '';
  width: 150px;
  height: 1px;
  background: #d8e5e0;

  position: absolute;
  top: 14px;
  left: 50%;

  margin: 0 0 0 -75px;
}

ul.todo#todo:empty:after {
  content: 'You have nothing to-do!';
  margin: 15px 0 0 0;
}

ul.todo#completed:empty:after {
  content: 'You have yet to complete any tasks.';
}


ul.todo#todo:after,
ul.todo#completed:after {
  width: 100%;
  display: block;
  text-align: center;
  font-size: 12px;
  color: #aaa;
}

ul.todo li .buttons button {
  background: none;
  border: 0px;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 5px 0 5px 5px;
  font-size: 1rem;
}
ul.todo li .buttons .remove{
  color: #aaa;
}
ul.todo li .buttons .remove:hover{
  color: #FA396B;
}

ul.todo li .buttons .complete{
  color: #aaa;
  
}

ul.todo li .buttons .complete:hover{
  color: #25b99a;
}

ul.todo#todo li .buttons .complete .fas{
  display: none;
}

ul.todo#todo li .buttons .complete .far{
  display: block;
}

ul.todo#completed li .buttons .complete .fas{
  display: block;
  color: #25b99a;
}

ul.todo#completed li .buttons .complete .far{
  display: none;
}

ul.todo#completed span{
  color: #25b99a;
}
`;