document.addEventListener('DOMContentLoaded',()=>{
  const grid = document.querySelector('.grid');
  const doodler= document.createelement('div');
  let doodlerleftspace= 50 ;
  let doodlerBottomSpace = 150;
  let isGameOver = false;
  let Platformcount = 5;
 function createdoodler() {
    grid.appendchild(doodler);
    doodler.classlist.add('doodler');
    doodler.style.left= doodlerleftspace +'px';
    doodler.style.bottom = doodlerBottomSpace + 'px';
 }

 class Platform {
   constructor (newPlatformBottom) {
     This.bottom = NewPlatform;
     This.left = Math.random () * 315;
     This.Visual = document.createElement;

     const Visual = This.Visual;
     Visual.classList.add('platform');
     Visual.style.left = This.left + 'px';
     Grid.appendChild(Visual);
   }
 }

 function createPlatforms() {
   for (let i = 0; i< Platformcount; i++) {
    let PlatformGap = 600 / Platformcount;
    let newPlatformBottom = 100 + i *  platGap;
    let newPlatform = new Platform ();
   }
 }

 function start() {
      if (!isGameOver) {
            createdoodler();
            createPlatforms();
          }
        }
        //attach to button
        start()
});
