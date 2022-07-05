//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')
//MESSAGES
const messagesNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
var html = document.querySelector('html')
const colorPalette1 = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//=== === === === === === === === SIDEBAR === ===
//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}
menuItems.forEach(item => {
    item.addEventListener('click',() => {
        changeActiveItem()
        item.classList.add('active')
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none'            
        }else{
            document.querySelector('.notifications-popup').style.display = 'block'
            document.querySelector('#notifications .notifications-count').style.display = 'none'
        }
    })
    
})
//=== === === === === === === === MESSAGES === ===
// search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    //validamos si existe el mensaje
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if( name.indexOf(val) != -1 ){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none'
        }
    })
}
messageSearch.addEventListener('keyup', searchMessage)
//hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',() => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messagesNotification.querySelector('.notifications-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    },2000)

})
//=== === === THEME
// OPEN MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}
//closes modal
themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click', openThemeModal)
//=============FONTS==============================================
//remove active class from spans or font size selection
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    }) 
}
fontSizes.forEach(size =>{
      size.addEventListener('click',()=>{
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active')
  
        if(size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('----stycky-to-left','5.4rem')
            root.style.setProperty('----stycky-to-right','5.4rem')
    
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('----stycky-to-left','5.4rem')
            root.style.setProperty('----stycky-to-right','-7rem')
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('----stycky-to-left','-2rem')
            root.style.setProperty('----stycky-to-right','-17rem')
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('----stycky-to-left','-5rem')
            root.style.setProperty('----stycky-to-right','-25rem')
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('----stycky-to-left','-10rem')
            root.style.setProperty('----stycky-to-right','-33rem')
        }
            //change font size of the root htm element
    document.querySelector('html').style.fontSize = fontSize

    })
})
//sent the color primary
function ones(){
    document.querySelector(':root').style.setProperty('--str','240')
}
//sent the color theme primary
function sendTheme(){
    document.querySelector(':root').style.setProperty('--white-color-lightnes','100%')
    document.querySelector(':root').style.setProperty('--dark-color-lightnes','17%')
    document.querySelector(':root').style.setProperty('--light-color-lightnes','95%')


}
//remove active class from colors
const changeActiveColorClass = () => {
    colorPalette1.forEach(colorPicker =>{
        colorPicker.classList.remove('active')
    })
}
//change primary colors
colorPalette1.forEach((color)=>{
    color.addEventListener('click',()=>{

        let cog
        changeActiveColorClass()
        if(color.classList.contains('color-1')){
            cog = 252
        }else if(color.classList.contains('color-2')){
            cog = 52
        }else if(color.classList.contains('color-3')){
            cog = 352
        }else if(color.classList.contains('color-4')){
            cog = 152
        }else if(color.classList.contains('color-5')){
            cog = 202
        }
        console.log(cog)
        color.classList.add('active')
        root.style.setProperty('--str',cog)
      //  document.querySelector(':root').style.setProperty('--str',cog)
    })})
    //theme BACKGROUND values
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    //changes background color
    const changeBG = () => {
        root.style.setProperty('--light-color-lightnes',lightColorLightness)
        root.style.setProperty('--white-color-lightnes',whiteColorLightness)
        root.style.setProperty('--dark-color-lightnes',darkColorLightness)

    }
    Bg1.addEventListener('click',()=>{

        //add active class
        Bg1.classList.add('active')
        //remove active class from the others)
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        window.location.reload()
    })
    Bg2.addEventListener('click',()=>{
        darkColorLightness = '95%';
        whiteColorLightness ='20%';
        lightColorLightness ='15%';
        //add active class
        Bg2.classList.add('active')
        //remove active class from the others)
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
    })
    Bg3.addEventListener('click',()=>{
        darkColorLightness = '95%';
        whiteColorLightness ='10%';
        lightColorLightness ='0%';
        //add active class
        Bg3.classList.add('active')
        //remove active class from the others)
        Bg1.classList.remove('active');
        Bg2.classList.remove('active');
        changeBG();
    })
    ones()
    sendTheme()