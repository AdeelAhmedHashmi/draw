const canvas = document.querySelector('#myCanvas');
const menuBtn = document.querySelector('#menu-btn')
const setting = document.querySelector('.settings');
const placeholder = document.querySelector('.placeholder')
const cursor = document.querySelector('.cursor');
const color = document.querySelector('#color');
const lenght = document.querySelector('#lenght');
const apply = document.querySelector('#saveBtn');
// Tools 
const pen = document.querySelector('.pen');
const marker = document.querySelector('.marker');
const eraser = document.querySelector('.eraser');
const states = {
    show: false,
    ready: false
}
